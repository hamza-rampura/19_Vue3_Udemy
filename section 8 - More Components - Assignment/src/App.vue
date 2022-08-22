<template>
    <div class="flexBox">
        <active-user 
            :username="user.name"
            :userage="user.age"
        ></active-user>
        <user-data
            @submit-user="submittedUser"
        ></user-data>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: "Hamza Rampurawala",
                age: 0
            }
        }
    },
    methods: {
        submittedUser(userName,age) {
            console.log(userName, age)
            this.user.name = userName;
            this.user.age = +age
        }
    }
}
</script>
<style>
</style>
