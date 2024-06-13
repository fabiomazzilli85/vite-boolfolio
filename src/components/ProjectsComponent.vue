<template>
    <div>
        <h1>Projects</h1>

        <ul>
            <li v-for="project in projects" :key="project.id">
                <ProjectCard :project="project" />
            </li>
        </ul>

    </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';


export default {
    components: {
        ProjectsComponent
    },
    data() {
        return {
            projects: []
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
                console.log(this.projects); // Stampa i risultati in console per verifica
            } catch (error) {
                console.error('Errore nel recuperare i progetti:', error);
            }
        }
    }
};
</script>

<style></style>