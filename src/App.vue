<template>
  <div id="app">
    <ProjectsComponent />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    ProjectsComponent 
  },
  data() {
    return {
      projects: [] 
    };
  },
  created() {
    axios.get('http://127.0.0.1:8001/api/projects')
      .then(response => {
        this.projects = response.data;
      })
      .catch(error => {
        console.error('Errore nel recuperare i progetti:', error);
      });
  }
};
</script>

<style>
</style>