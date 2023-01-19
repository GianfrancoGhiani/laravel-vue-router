<template>
    <section class="container my-3">
        <div class="row">
            <div class="col-12">
                <div class="card p-5">
                    <div class="card-header">
                        <h1 class="text-uppercase">Contact Me</h1>
                    </div>
                    <div class="card-body">
                        <ContactComponent></ContactComponent>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ContactComponent from '../components/ContactComponent.vue';

export default {
    name: "ContactPage",
    components: { ContactComponent }
}
</script>

<style lang="scss" scoped>

</style>