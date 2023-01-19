<template>
  <header>
    <HeaderComponent></HeaderComponent>
  </header>
  <main class="container-md">
    <router-view></router-view>
  </main>

</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: { HeaderComponent }
}
</script>

<style lang="scss" scoped>

</style>