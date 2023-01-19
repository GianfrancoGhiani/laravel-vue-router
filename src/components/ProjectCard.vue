<template>
    <div class="card">
        <div class="card-header">
            <h5>{{ truncateTitle }}</h5>
        </div>

        <div class="card-body">
            <img v-if="img_path" :src="`${store.imgBasePath}${img_path}`" class="w-100 mb-3">
            <p :class="{ 'notImg': !(img_path) }"> {{ truncateContent }}</p>
        </div>

    </div>
</template>
        
<script>
import { store } from '../store';
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
            maxLen: 100,
            contentCard: this.content,
            headerCard: this.title
        }
    },
    computed: {
        truncateContent() {
            if (this.contentCard.length > this.maxLen) {
                return this.contentCard.substring(0, this.maxLen) + '...';
            }
            return this.contentCard;
        },
        truncateTitle() {
            if (this.headerCard.length > this.maxLen / 5) {
                return this.headerCard.substring(0, this.maxLen / 5) + '...';
            }
            return this.headerCard;
        },
    },
    created() {
        // console.log(this.img_path)
    },
}
</script>
        
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.card {

    &,
    .card-header {
        border-color: $my-primary;
        transition: box-shadow ease-in-out 250ms;

        &:hover {
            -webkit-box-shadow: 0px 0px 7px 3px $my-primary;
            box-shadow: 0px 0px 7px 3px $my-primary;
        }
    }

    .notImg {
        padding-top: 170px;
        height: 266px;
    }

    img {
        max-height: 154px;
    }
}
</style>