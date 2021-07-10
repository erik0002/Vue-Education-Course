const App = {
    data() {
        return {
            myPlaceholder: "Введите название заметки",
            title: 'Список заметок',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2', 'Заметка 3', 'Заметка 4', 'Зам']
        }
    },
    methods: {
        addNewNote(){
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item){
            return item.toUpperCase()
        },
        deleteNote(idx){
            this.notes.splice(idx, 1)
        }
    },
    computed: {
        doubleCountComputed(){
            return this.notes.length * 2
        },
    },
    watch: {
        inputValue(value){
            if(value.length > 20){
                this.inputValue = ''
            }
        }
    }
}

Vue.createApp(App).mount('#app')
