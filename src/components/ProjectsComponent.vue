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
        ProjectCard
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
                this.projects = response.data.data;
                console.log(this.projects); // Stampa i risultati in console per verifica
            } catch (error) {
                console.error('Errore nel recuperare i progetti:', error);
            }
        }
    }
};
</script>

<style>
ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 80px;
}

h1 {
    color: #1679ab;
    text-shadow: 3px 3px 5px #000000;
    padding: 15px;
    border-radius: 4px;
}
</style>