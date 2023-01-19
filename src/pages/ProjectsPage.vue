<template>
    <section class="container">
        <div class="card p-5">
            <div class="card-header">
                <h1>Project's list:</h1>
            </div>
            <div class="card-body">
                <div class="row my-2">
                    <div class="col-3" v-for="(project, index) in projects" :key="project.id">
                        <router-link class="project-card" :to="{ name: 'project', params: { slug: project.slug } }">
                            <ProjectCard :title="project.title" :content="project.content"
                                :img_path="project.overview_image">
                            </ProjectCard>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                    <button class="page-link" :disabled="currentPage === 1"
                        @click="getProjects(currentPage - 1)">Previous
                    </button>
                </li>
                <li class="page-item" v-for="n in lastPage">
                    <button class="page-link" :class="{ 'my-active': currentPage === n }" @click="getProjects(n)">{{
                        n
                    }}</button>
                </li>
                <li class="page-item" :class="{ 'disabled': currentPage === lastPage }">
                    <button class="page-link" :disabled="currentPage === lastPage"
                        @click="getProjects(currentPage + 1)">Next
                    </button>
                </li>
            </ul>
        </nav>
    </section>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store';
import axios from 'axios';
export default {
    name: "ProjectsPage",
    data() {
        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: null,
            total: 0
        };
    },
    methods: {
        getProjects(pgnum) {
            axios.get(`${this.store.apiBaseUrl}/projects`, {
                params: {
                    page: pgnum
                }
            }).then((response) => {
                console.log(response.data.results.data);
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
                this.total = response.data.results.total;

            });
        },
    },
    mounted() {
        this.getProjects(1);
    },
    components: { ProjectCard }
}
</script>

<style lang="scss" scoped>
section {
    padding: 1rem 0;
    height: calc(100vh - 3.5rem);
    overflow-y: auto;
    position: relative;

    .pagination {
        position: absolute;
        right: 0;
        bottom: 1rem;
    }
}
</style>