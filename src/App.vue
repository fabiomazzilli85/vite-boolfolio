<template>
  <div id="app">
    <ProjectsComponent />
  </div>

  <router-view></router-view>
</template>

<script>
import ProjectsComponent from './components/ProjectsComponent.vue';

export default {
  name: 'App',
  components: {
    ProjectsComponent
  }
};
</script>

<style></style>