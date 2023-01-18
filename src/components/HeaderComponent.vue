<template>

    <nav class="navbar navbar-expand-md navbar-dark my-navbar shadow-sm">
        <div class="container">
            <div class="d-flex w-100 align-items-baseline justify-content-between" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <div class="me-auto">
                    <img src="../assets/img/logo.png" alt="logo" id="logo">
                </div>
                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    <li class="nav-item" v-for="link in navbarLinks">
                        <router-link class="nav-link navbar-element" :to="{ name: link.route }">
                            {{ link.label }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            navbarLinks: [
                {
                    label: 'Home',
                    route: 'home'
                },
                {
                    label: 'Projects',
                    route: 'projects'
                },
                {
                    label: 'Contact',
                    route: 'contact'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

</style>