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

export default {
    data() {
        return {
            projects: [],
        };
    },
    created() {
        this.fetchProjects();
    },
    methods: {
        async fetchProjects() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/projects');
                this.projects = response.data;
            } catch (error) {
                console.error('Errore nel recuperare i progetti:', error);
            }
        }
    }
};
</script>

<style>
</style>