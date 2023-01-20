<template>
    <section class="my-3">
        <div class="card p-5">
            <div class="card-header">
                <h1 class="text-uppercase">page not found</h1>
            </div>
            <div class="card-body">
                <div id="animation container">
                    <Vue3Lottie :animationData="notFound" :height="400" :width="400"></Vue3Lottie>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import notFound from '../notfound.json';

export default {
    name: 'NotFound',
    components: {
        Vue3Lottie,
    },
    data() {
        return {
            notFound,
        }
    },

}
</script>

<style lang="scss" scoped>

</style>