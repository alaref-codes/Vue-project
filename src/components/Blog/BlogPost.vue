<template>
    <div class="blog-post">
        <h2 class="post-title">{{title}}</h2>
        <span class="date">{{date}}</span>
        <p class="content">{{content}}</p>
        <span class="author">{{author}}</span>
    </div>
</template>

<script>
export default {
    props: ['content' , 'author' , 'date' , 'title'],
    name: 'Blog',
}
</script>

<style scoped>
    .blog-post {
        background-color: grey;
        color: white;
        position: relative;
        text-align: left;
    }
    .post-views {
        background-color: #f00;
        color: white;
        position: absolute;
        top: 5px;
        right: 5px;
        border-radius: 4px;
        padding: 5px;
    }
</style>