<template>
    <div class="project-card">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        project: Object
    }
}
</script>

<style></style>
