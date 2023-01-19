<template>
    <form @submit.prevent="sendFormData()">
        <div v-if="success" class="text-primary">
            Message sent properly
        </div>
        <div class="d-flex flex-column mt-4">
            <label for="name">
                <h5>Name</h5>
            </label>
            <input type="text" name="name" id="name" placeholder="Insert name here..." v-model="name"
                :class="{ 'is-invalid': errors.name }" required class="w-25">

            <div class="text-secondary" v-for="(error, index) in errors.name" :key="index">{{ error }}</div>
        </div>
        <div class="d-flex flex-column mt-4">
            <label for="email">
                <h5>Email</h5>
            </label>
            <input type="email" name="email" id="email" placeholder="Insert email here..." v-model="email"
                :class="{ 'is-invalid': errors.email }" required class="w-25">
            <div class="text-secondary" v-for="(error, index) in errors.email" :key="index">{{ error }}</div>
        </div>
        <div class="d-flex flex-column mt-4">
            <label for="message">
                <h5>Message</h5>
            </label>
            <textarea name="message" id="message" cols="30" rows="4" placeholder="Insert message here..."
                v-model="message" :class="{ 'is-invalid': errors.message }" required></textarea>
            <div class="text-secondary" v-for="(error, index) in errors.message" :key="index">{{ error }}</div>
        </div>
        <button type="submit" class="btn btn-primary mt-4" :disabled="loading">{{
            loading? 'Sending...': 'Send'
        }}</button>
    </form>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'ContactComponent',
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            success: false,
            errors: {},
            loading: false
        }
    },
    methods: {
        sendFormData() {
            this.loading = true;
            const data = {
                name: this.name,
                email: this.email,
                message: this.message,
            }
            axios.post(`${store.apiBaseUrl}/contacts`, data).then((response) => {
                console.log(response.data);
                this.success = response.data.success;
                if (this.success) {
                    this.resetForm();
                } else {
                    this.errors = response.data.errors;
                    console.log(this.errors);
                }
                this.loading = false;
            })
        },
        resetForm() {
            this.name = '';
            this.email = '';
            this.message = '';
        }
    },
}
</script>

<style lang="scss" scoped>

</style>