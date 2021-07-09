const App = {
    data() {
        return {
            myPlaceholder: "Введите название заметки",
            title: 'Список заметок',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2', 'Заметка 3', 'Заметка 4']
        }
    },
    methods: {
        inputChangeHandler(event){
            this.inputValue = event.target.value;
        },
        addNewNote(){
            this.notes.push(this.inputValue)
            this.inputValue = ' '
        }
    }
}

Vue.createApp(App).mount('#app')
