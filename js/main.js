const { createApp } = Vue

createApp({
    data() {
        return {
            comments: [],
            newComment: {
                name: '',
                message: ''
            }
        }
    },
    methods: {
        addComment() {
            if (this.newComment.name && this.newComment.message) {
                this.comments.push({
                    id: Date.now(),
                    name: this.newComment.name,
                    message: this.newComment.message,
                    date: new Date().toLocaleDateString()
                });
                this.newComment.name = '';
                this.newComment.message = '';
            }
        }
    }
}).mount('#app')