app.component('photo-view',{
    props:{
    },
    template: 
    /*html*/
    `
    <div @click="hidePhoto" class="flex justify-end pt-5 pr-5 ">
    <button>
      <span class="material-icons">
        cancel
      </span></button>
  </div>

  <div class="flex justify-center items-center p-10 ">
    <img :src="currentPhoto.src" :alt="currentPhoto.title"
      class="w-60 h-80 object-cover rounded-lg ring ring-offset-white ring-offset-4">
  </div>

    `
})
