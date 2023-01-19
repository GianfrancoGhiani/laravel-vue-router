<template>
    <div id="home" class="py-3">
        <JumboComponent></JumboComponent>
        <div class="card container p-5 my-3">
            <div class="card-header">
                <h3>Portfolio Preview</h3>
            </div>
            <div class="card-body">
                <PreviewComponent></PreviewComponent>
            </div>
        </div>
    </div>

</template>

<script>
import JumboComponent from '../components/JumboComponent.vue';
import PreviewComponent from '../components/PreviewComponent.vue';

export default {
    name: 'HomePage',
    components: { JumboComponent, PreviewComponent }
}
</script>

<style lang="scss" scoped>
#home {
    max-height: calc(100vh - 3.5rem);
    overflow-y: auto;
}
</style>