<template>
    <div>
        <h1>Http</h1>
        <hr />
        <label>Username</label>
        <input type="text" v-model="user.username" />
        <hr />
        <label>Email</label>
        <input type="text" v-model="user.email" />
        <hr />
        <button @click="submit()">Submit</button>
        <hr />
        <button @click="fetchData">Get Data</button>
        <ul>
            <li v-for="u in users" :key="u">
                {{ u.username }} - {{ u.email }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: "",
                email: "",
            },
            users: [],
        };
    },
    methods: {
        submit() {
            this.$http.post("", this.user).then(
                (response) => {
                    console.log(response);
                },
                (error) => {
                    console.log(error);
                }
            );
        },
        fetchData() {
            this.$http
                .get("")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    const resultArray = [];
                    console.log(data);
                    for (let key in data) {
                        resultArray.push(data[key]);
                    }

                    this.users = resultArray;
                });
        },
    },
};
</script>

<style></style>
