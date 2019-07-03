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
      }
      //
    },
    uploadImage() {
      console.log("Running uploadImage");
      const storageRef = storage.ref();
      const imageRef = storageRef.child(`image/${this.imageName}`);
      imageRef.put(this.imageFile).then(snapshot => {
        console.log("image uploaded");
        snapshot.ref.getDownloadURL().then(downloadURL => {
          const bucketName = "r-jerome.appspot.com";
          const filePath = this.imageName;
          db.collection("images")
            .add({
              downloadURL,
              // downloadUrl:
              // `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/images` +
              // "%2F" +
              // `${encodeURIComponent(filePath)}?alt=media`,
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
      let imagesArr = [];
      db.collection("images")
        .get()
        .then(snap => {
          snap.forEach(doc => {
            imagesArr.push(doc.data());
          });
          this.imagesUrl = imagesArr;
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
@media only screen and (max-width: 600px){
  .images-container {
    column-count: 1;
  }
}
</style>
