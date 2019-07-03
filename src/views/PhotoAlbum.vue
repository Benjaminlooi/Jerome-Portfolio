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
        >Upload</button>
        <p v-if="isLoading" class="loading-text m-auto">Loading</p>
      </div>
    </div>
    <div class="images-container mx-5">
      <div class="isRayImage w-full mb-5" v-for="(image, index) in imagesUrl" :key="index">
        <img :src="image.downloadURL" alt />
      </div>
    </div>
  </div>
</template>

<script>
import MenuIcon from "@/components/MenuIcon";
import { db, storage } from "@/plugins/firebase";

export default {
  components: {
    MenuIcon
  },
  data: () => ({
    isLoading: true,
    imageName: "",
    imageURL: "",
    imageFiles: "",
    imagesUrl: []
  }),
  created() {
    this.getImages();
  },
  methods: {
    pickImage() {
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

          this.uploadImage();
        });
      } else {
        this.resetImageInputs();
        this.isLoading = false;
      }
    },
    uploadImage() {
      console.log("Running uploadImage");
      const storageRef = storage.ref();
      const imageRef = storageRef.child(`image/${this.imageName}`);
      imageRef.put(this.imageFile).then(snapshot => {
        console.log("image uploaded");
        snapshot.ref.getDownloadURL().then(downloadURL => {
          db.collection("images")
            .add({
              downloadURL,
              timestamp: Date.now()
            })
            .then(() => {
              this.resetImageInputs();
              this.getImages();
            });
        });
      });
    },
    getImages() {
      this.isLoading = true;
      let imagesArr = [];
      db.collection("images")
        .get()
        .then(snap => {
          snap.forEach(doc => {
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
    }
  }
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
</style>
