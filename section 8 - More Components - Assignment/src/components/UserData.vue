<template>
    <section class="user-data">
        <form @submit.prevent="submitUser">
            <input type="text" placeholder="Name" v-model="userName"/>
            <input type="text" placeholder="Age" v-model="userAge"/>
            <button type="submit">Submit</button>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            userName: "",
            userAge: ""
        }
    },
    methods: {
        submitUser() {
            this.$emit("submit-user",this.userName,this.userAge);
        }
    }
}
</script>