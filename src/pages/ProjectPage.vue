<template>
    <section class="container my-3">
        <div class="card p-5">
            <div class="card-header d-flex align-items-baseline justify-content-between">
                <h1>{{ project.title }}</h1>
                <div class="info d-flex align-items-baseline">
                    <div class="sub tag" title="Tag" v-if="project.tag_id">{{ project.tag.name }}</div>
                    <ul class="text-capitalize d-flex" title="Technologies" v-if="project.technologies">
                        <li class="sub mx-2" v-for="(technology, index) in project.technologies" :key="index">{{
                            technology.name
                        }}</li>
                    </ul>
                </div>

            </div>
            <div class="card-body">
                <div class="post-body row">
                    <div class="body-text"
                        :class="{ 'col-4': project.overview_image, 'col-12': !(project.overview_image) }">{{
                            project.content
                        }}
                    </div>
                    <div v-if="project.overview_image" class="body-image col-6 offset-2">
                        <img :src="`${store.imgBasePath}${project.overview_image}`">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'ProjectPage',
    data() {
        return {
            store,
            project: {}
        }
    },
    methods: {
        getProject() {
            axios.get(`${store.apiBaseUrl}/projects/${this.$route.params.slug}`).then((response) => {
                // console.log(response)
                if (response.data.success) {
                    this.project = { ...response.data.results };
                } else {
                    this.$router.push({ name: 'not-found' });
                }
                // console.log(this.project)
            })
        }
    },
    mounted() {
        // console.log(this.$route)
        this.getProject()
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as*;

.card {

    &,
    .card-header {
        border-color: $my-primary;
    }

    .post-body {
        display: flex;

        .body-image {
            img {
                max-width: 100%;
            }
        }
    }

    .sub {
        cursor: context-menu;
        font-size: 80%;
        padding: .5em;
        border-radius: .4em;
        width: fit-content;
        color: $black-txt;
        font-weight: 700;
        background-color: $my-primary;
        margin-bottom: 1rem;
        color: $black-txt;

    }
}
</style>