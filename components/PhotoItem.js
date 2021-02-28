app.component('photo-item', {
    props: {'filter-photos':Array},
    template:
        /*html*/
        `
      <div class="m-5">
        <ul class="grid grid-cols-2 gap-y-10 ml-10 lg:grid-cols-5">

          <li v-for="(photo, index) in filterPhotos" :key="photo.id">
            <p class="text-lg font-semibold"> {{ photo.title }} </p>

            <img :src="photo.src" class="h-48 w-32" :alt="gallery" @click="displayPhoto(photo.id)">

            <div class="flex flex-row justify-start space-x-1">

              <button v-on:click="favor(index)" class=" focus:outline-none ">
                <i v-if="photo.like < 1" class="material-icons stroke-current text-black">favorite_border</i>
                <i v-if="photo.like > 0" class="material-icons fill-current text-red-500">favorite </i>
                <i v-if="photo.like > 0"> {{photo.like}}
                  <span>like</span>
                </i>
              </button>
            </div>
          </li>
        </ul>

      </div>
    `,
    methods: {
        favor(index) {
            this.$emit('favor',index)
        },
        displayPhoto(id) {
            this.$emit('dis-play-photo',id)
        }
    }
})