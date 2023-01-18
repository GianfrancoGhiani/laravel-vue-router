<template>
    <div class="card">
        <div class="card-header">
            {{ title }}
        </div>

        <div class="card-body" v-if="img_path">
            <img :src="`${store.imgBasePath}${img_path}`" class="w-100">
            <p>{{ content }}</p>
        </div>

    </div>
</template>

<script>
import { store } from '../store'
export default {
    name: 'ProjectCard',
    props: {
        title: String,
        content: String,
        img_path: String
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<style lang="scss" scoped>

</style>