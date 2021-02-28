    const app = {
        data() {
            return {
                photos: [{
                    id: 1,
                        src: 'images/1.jpg',
                        title: 'Autumn',
                        favor: false,
                        like: 0
                    },
                    {id: 2,
                        src: 'images/2.jpg',
                        title: 'Hug & Love',
                        favor: false,
                        like: 0
                    },
                    {id: 3,
                        src: 'images/3.jpg',
                        title: 'Good Night',
                        favor: false,
                        like: 0
                    },
                    {id: 4,
                        src: 'images/4.jpg',
                        title: 'Architecture',
                        favor: false,
                        like: 0

                    },
                    {id: 5,
                        src: 'images/5.jpg',
                        title: 'HarryPotter',
                        favor: false,
                        like: 0
                    },
                    {id: 6,
                        src: 'images/6.jpg',
                        title: 'Building',
                        favor: false,
                        like: 0
                    },
                    {id: 7,
                        src: 'images/7.jpg',
                        title: 'Mountain',
                        favor: false,
                        like: 0
                    },
                    {id: 8,
                        src: 'images/8.jpg',
                        title: 'Oxygen',
                        favor: false,
                        like: 0
                    },
                    {id: 9,
                        src: 'images/9.jpg',
                        title: 'Road',
                        favor: false,
                        like: 0
                    },
                    {id: 10,
                        src: 'images/10.jpg',
                        title: 'Light',
                        favor: false,
                        like: 0
                    }
                ],
                search: '',
                searchText: '',
                isSearch: false,
                isPhoto: false,
                currentPhoto: ''

            }
        },
        methods: {
            favor(index) {
                this.photos[index].favor = !this.photos[index].favor;
                this.photos[index].like++;
            },
            
            displayPhoto(id) {
                this.isSearch = false
                this.isPhoto = true
                this.currentPhoto = this.photos.filter(p => p.id == id)[0]
            },
            hidePhoto() {
                this.isPhoto = false
                if (this.searchText) {
                    this.isSearch = true
                }
            },
            showSearch() {
                this.isSearch = true
                this.$refs.search.focus()
            },
            cancelSearch() {
                this.isSearch = false
                this.searchText = ''
            }

        },
        computed: {
            countPhotos() {
                return this.photos.length;
            },
            filterPhotos() {
                if (this.searchText) {
                    return this.photos.filter(p => p.title.toLowerCase().includes(this.searchText.toLowerCase()))
                }
                return this.photos
            }
        }
    }
    