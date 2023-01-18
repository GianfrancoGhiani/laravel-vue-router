<template>
    <div id="home">
        <JumboComponent></JumboComponent>

    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import JumboComponent from '../components/JumboComponent.vue';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'HomePage',
    components: { HeaderComponent, JumboComponent, ProjectCard }
}
</script>

<style lang="scss" scoped>
#home {
    max-height: calc(100vh - 3.5rem);
    overflow-y: auto;
}
</style>