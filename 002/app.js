Vue.createApp({
    data: () => ({
        myHtml: '<h1>Vue 3 App</h1>',
        title: 'Я есть Грут)',
        person: {
            firstName: 'Vasya',
            secondName: 'Pupkin',
            age: '24'
        },
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }),
    methods: {
        stopPropagation(event) {
            event.stopPropagation()
        },
        addItem(event){
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
            console.log(event.key)
        },
        remove(i){
            this.items.splice(i, 1)
        },
        log(item){
            console.log('log item ' + item)
        }
    },
    computed: {
        evenItems(){
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app')