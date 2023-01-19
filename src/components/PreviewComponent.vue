<template>
    <section>
        <div class="row row-cols-4">
            <div class="col" v-for="(project, index) in projects" :key="index">
                <router-link class="project-card" :to="{ name: 'project', params: { slug: project.slug } }">
                    <ProjectCard :title="project.title" :content="project.content" :img_path="project.overview_image">
                    </ProjectCard>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'PreviewComponent',
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: [],
            store,
            // loaded: false
        }
    },
    methods: {
        getPreview() {
            axios.get(`${store.apiBaseUrl}/projects`).then((response) => {

                // console.log(response.data.results);
                for (let i = 0; i < 4; i++) {
                    this.projects.push(response.data.results.data[i]);
                }
                this.projects.forEach(project => {
                    // console.log(project);
                });
                // this.loaded = true;
                console.log(this.projects);
            })
        }
    },
    created() {
        this.getPreview()
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
</style>