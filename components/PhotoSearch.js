app.component('photo-search', {
    
    template:
        /*html*/
        `
        <div v-if="isSearch">
    <input ref="search"
      class="ml-2 p-1 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black rounded-sm"
      type="text" v-model="searchText" placeholder="Please enter text for searching photos">
    <button @click="cancelSearch" class="ml-2 p-1 rounded-sm focus:outline-none bg-blue-500">Cancel</button>
    </div>
    `,
    data() {
        return {
            search: '',
            searchText: '',
            isSearch: false,

        }
    },
    methods: {
        showSearch() {
            this.isSearch = true
            this.$refs.search.focus()
        },
        cancelSearch() {
            this.isSearch = false
            this.searchText = ''
        }

    }
})