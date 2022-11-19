const app = Vue.createApp({
    data(){
        return {
            friends: [
                {
                    id: 'Manuel',
                    name: 'Manuel Lorenz',
                    phone: '123453456',
                    email: 'manuel@gmail.com',
                },
                {
                    id: 'julie',
                    name: 'julie Jones',
                    phone: '456235286464',
                    email: 'julie@gmail.com',
                },
            ],
        };
    },
});

app.component('friend-contact', {
    template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">
          {{ detailsAreVisible ? 'Hide' : 'Show'}} Details
          </button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend. phone }}</li>
            <li><strong>Email:</strong> {{ friend. email }}</li>
          </ul>
        </li>
    `,

    data(){
        return {
            detailsAreVisible: false,
            friend: {
                    id: 'Manuel',
                    name: 'Manuel Lorenz',
                    phone: '123453456',
                    email: 'manuel@gmail.com',
                },
        };
    },

    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount("#app");