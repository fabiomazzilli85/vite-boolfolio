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
import axios from axios;

export default {
    data() {
        return {
            projects [],
        };
    },
    created() {
        this.fetchProjects();
    },
}
</script>

<style></style>