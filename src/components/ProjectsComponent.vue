<template>
    <div>
        <h1>Projects</h1>

        <ul>
            <li v-for="project in projects" :key="project.id">
                {{ project.name }} - {{ project.description }}
            </li>
        </ul>

    </div>
</template>

<script>
import axios from 'axios';
import ProjectsComponent from './ProjectsComponent.vue';

export default {
    components: {
        ProjectsComponent
    },
    data() {
        return {
            projects: [] // Inizializza i dati dei progetti
        };
    },
    created() {
        this.fetchProjects();
    },
    methods: {
        async fetchProjects() {
            try {
                const response = await axios.get('http://127.0.0.1:8001/api/projects');
                this.projects = response.data;
            } catch (error) {
                console.error('Errore nel recuperare i progetti:', error);
                // Tra l'altro non compare il messaggio in Console Log.
            }
        }
    }
};
</script>

<style>
</style>