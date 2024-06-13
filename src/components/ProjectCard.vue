<template>
    <div class="project-card">
        <h2><strong>Nome</strong>: {{ project.name }}</h2>
        <p><strong>Descrizione</strong>: {{ project.description }}</p>
        <p><strong>Web Site</strong>: {{ project.web_site }}</p>
        <p><strong>Slug</strong>: {{ project.slug }}</p>
    </div>
</template>

<script>
export default {
    props: {
        project: Object
    }
}
</script>

<style>
.project-card {
background-color: #1679AB;
padding: 30px;
border-radius: 4px;
}
</style>
