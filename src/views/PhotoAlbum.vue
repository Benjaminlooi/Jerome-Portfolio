<template>
  <div>
    <MenuIcon />
    <div class="flex h-32">
      <div class="m-auto">
        <input
          type="file"
          style="display: none"
          ref="imageInput"
          accept="image/*"
          @change="onFilePicked"
        />
        <button
          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          @click="pickImage"
        >
          Upload
        </button>
        <p v-if="isLoading" class="loading-text m-auto">Loading</p>
      </div>
    </div>
    <div class="images-container mx-5">
      <div
        class="isRayImage w-full mb-5"
        v-for="(image, index) in imagesUrl"
        :key="index"
      >
        <img :src="image.link" alt />
      </div>
    </div>
    <div
      class="modal-bg flex items-center justify-center w-screen h-screen inset-0 fixed"
      v-if="uploadModal"
    >
      <div
        class="flex flex-col w-full max-w-sm max-h-screen bg-white rounded shadow-lg overflow-y-scroll"
        style="overflow-wrap: break-word"
      >
        <img :src="this.imageURL" />
        <div class="px-6 pt-4 pb-8">
          <div class="font-bold text-xl mb-2">{{ this.imageName }}</div>
          <button
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-3"
            @click="uploadImage"
          >
            {{ this.uploadingText }}
          </button>
          <button
            class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
            @click="closeModal"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuIcon from "@/components/TheMenuIcon";
import { firestore } from "@/plugins/firebase";
const axios = require("axios");

export default {
  components: {
    MenuIcon,
  },
  data: () => ({
    isLoading: true,
    uploadModal: false,
    uploadingText: "Upload",
    imageName: "",
    imageURL: "",
    imagesUrl: [],
  }),
  created() {
    this.getImages();
  },
  methods: {
    closeModal() {
      this.resetImageInputs();
      this.isLoading = false;
      this.uploadModal = false;
    },
    pickImage() {
      this.resetImageInputs();
      this.$refs.imageInput.click();
    },
    onFilePicked(e) {
      const files = e.target.files;
      let file = files[0];
      this.isLoading = true;
      if (file !== undefined) {
        this.imageName = file.name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.addEventListener("load", () => {
          this.imageURL = fr.result;
          this.imageFile = file;
          // console.log(this.imageName);
          // console.log(this.imageURL);
          // console.log(this.imageFile);

          this.$refs.imageInput.value = null;
          this.uploadModal = true;
        });
      } else {
        this.resetImageInputs();
        this.isLoading = false;
      }
    },
    uploadImage() {
      this.uploadingText = "Uploading...";
      console.log("Running uploadImage");
      const imgurUploadApiUrl = "https://api.imgur.com/3/image";
      const clientID = "04a91bbb323978c";
      var fd = new FormData();
      fd.append("image", this.imageFile);
      fd.append("name", this.imageName);
      // fd.append("type", "URL");
      axios
        .post(imgurUploadApiUrl, fd, {
          headers: {
            Authorization: "Client-ID " + clientID,
          },
        })
        .then((res) => {
          // console.log(res.data.data)
          const r = res.data.data;
          firestore
            .collection("images_imgur")
            .doc(r.id)
            .set({
              name: r.name,
              type: r.type,
              width: r.width,
              height: r.height,
              id: r.id,
              size: r.size,
              deletehash: r.deletehash,
              link: r.link,
              timestamp: Date.now(),
            })
            .then(() => {
              this.uploadModal = false;

              this.resetImageInputs();
              this.getImages();
            });
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    },
    getImages() {
      this.imagesUrl = [];
      this.isLoading = true;
      let imagesArr = [];
      firestore
        .collection("images_imgur")
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            imagesArr.push(doc.data());
          });
          this.imagesUrl = imagesArr;
          this.isLoading = false;
        });
    },
    resetImageInputs() {
      this.imageName = "";
      this.imageURL = "";
      this.imageFile = "";
      this.uploadingText = "Upload";
    },
  },
};
</script>

<style lang="scss" scoped>
.images-container {
  column-count: 3;
  column-gap: 1.25rem;

  .isRayImage {
    transition: transform 0.3s ease-out;

    &:hover {
      transform: rotate(3deg) scale(1.05);
      z-index: 10;
    }
  }
}
.imagesLoading {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
}
p.loading-text {
  font-size: 1em;
  text-align: center;
}
.loading-text:after {
  content: " .";
  animation: dots 1s steps(5, end) infinite;
}

@keyframes dots {
  0%,
  20% {
    color: rgba(0, 0, 0, 0);
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  40% {
    color: black;
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  60% {
    text-shadow: 0.25em 0 0 black, 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  80%,
  100% {
    text-shadow: 0.25em 0 0 black, 0.5em 0 0 black;
  }
}
@media only screen and (max-width: 600px) {
  .images-container {
    column-count: 1;
  }
}
.modal-bg {
  background-color: rgba(200, 222, 255, 0.67);
}
</style>
