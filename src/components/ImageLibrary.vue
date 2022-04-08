<script setup>
import { ref, onMounted } from "vue";
import { Dropzone } from "dropzone";

const dropRef = ref(null);

const customDropzone = `
        <div class="dz-preview dz-processing dz-error dz-complete dz-image-preview">
            <div class="dz-image">
                <img data-dz-thumbnail />
            </div>
            <div class="dz-details">
                <div class="dz-size">
                    <span data-dz-size></span>
                </div>
                <div class="dz-filename">
                    <span data-dz-name></span>
                </div> 
            </div>
            <div class="dz-progress">
                <span class="dz-upload" data-dz-uploadprogress></span>
            </div>
            <!--
            <div class="dz-error-message">
                <span data-dz-errormessage></span>
            </div>
            <div class="dz-success-mark">
                <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2071 29.7929L14.2929 25.7071C14.6834 25.3166 15.3166 25.3166 15.7071 25.7071L21.2929 31.2929C21.6834 31.6834 22.3166 31.6834 22.7071 31.2929L38.2929 15.7071C38.6834 15.3166 39.3166 15.3166 39.7071 15.7071L43.7929 19.7929C44.1834 20.1834 44.1834 20.8166 43.7929 21.2071L22.7071 42.2929C22.3166 42.6834 21.6834 42.6834 21.2929 42.2929L10.2071 31.2071C9.81658 30.8166 9.81658 30.1834 10.2071 29.7929Z"></path>
                </svg>
            </div>
            <div class="dz-error-mark">
                <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.2929 20.2929L19.2071 13.2071C18.8166 12.8166 18.1834 12.8166 17.7929 13.2071L13.2071 17.7929C12.8166 18.1834 12.8166 18.8166 13.2071 19.2071L20.2929 26.2929C20.6834 26.6834 20.6834 27.3166 20.2929 27.7071L13.2071 34.7929C12.8166 35.1834 12.8166 35.8166 13.2071 36.2071L17.7929 40.7929C18.1834 41.1834 18.8166 41.1834 19.2071 40.7929L26.2929 33.7071C26.6834 33.3166 27.3166 33.3166 27.7071 33.7071L34.7929 40.7929C35.1834 41.1834 35.8166 41.1834 36.2071 40.7929L40.7929 36.2071C41.1834 35.8166 41.1834 35.1834 40.7929 34.7929L33.7071 27.7071C33.3166 27.3166 33.3166 26.6834 33.7071 26.2929L40.7929 19.2071C41.1834 18.8166 41.1834 18.1834 40.7929 17.7929L36.2071 13.2071C35.8166 12.8166 35.1834 12.8166 34.7929 13.2071L27.7071 20.2929C27.3166 20.6834 26.6834 20.6834 26.2929 20.2929Z"></path>
                </svg>  
            </div>
            -->
            <a class="dz-remove" href="javascript:undefined;" data-dz-remove>Remove</a>
        </div>
    `;

onMounted(() => {
  if (dropRef.value !== null) {
    new Dropzone(dropRef.value, {
      url: "http://localhost:3000/image-library",
      previewTemplate: customDropzone,
    });

    if (dropRef.value.querySelector(".dz-default")) {
      dropRef.value.querySelector(".dz-default").innerHTML = `
        <div class="placeholder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="upload-icon">
                <path
                    d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM223 263C213.7 272.4 213.7 287.6 223 296.1C232.4 306.3 247.6 306.3 256.1 296.1L296 257.9V392C296 405.3 306.7 416 320 416C333.3 416 344 405.3 344 392V257.9L383 296.1C392.4 306.3 407.6 306.3 416.1 296.1C426.3 287.6 426.3 272.4 416.1 263L336.1 183C327.6 173.7 312.4 173.7 303 183L223 263z"
                />
            </svg>
            <h3>Drop files here to upload</h3>
        </div>
    `;
    }
  }
});
</script>

<template>
  <div class="right-panel">
    <div ref="dropRef" class="dropzone"></div>
  </div>
</template>

<style>
.dropzone {
  padding: 0 !important;
  /* pointer-events: none; */
  border: 0;
}
.dropzone .dz-message {
  margin: 0 !important;
}
.dz-main {
  width: 100%;
  height: 100%;
  border: 2px dashed blue;
}
.dropzone .dz-default .placeholder {
  width: 100%;
  height: 200px;
  border: 1px dashed #dadfe4;
  border-radius: 5px;
  padding: 10px;
  display: grid;
  place-items: center;
  text-align: center;
}
.dropzone .dz-default .placeholder h3 {
  font-size: 18px;
  color: #818ea3;
  margin-bottom: 0;
  font-weight: 500;
}
.dz-default {
  /* pointer-events: auto; */
  cursor: pointer;
}
.dz-custom-files {
  /* pointer-events: auto; */
  cursor: pointer;
}
.upload-icon {
  width: 100%;
  height: 120px;
  fill: #818ea3;
}
</style>
