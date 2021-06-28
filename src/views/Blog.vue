<template>
  <div class="blog">
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
    <div class="container">
      <div class="post">
        <BlogPost 
          v-for="post in posts" 
          :key="post.id" 
          :title="post.title" 
          :content="post.content" 
          :author="post.author"
          :date="post.date"
          />
      </div>
      <div class="side">
        <BlogSidebar />
      </div>
    </div>
  </div>
</template>


<script>
import BlogPost from "@/components/Blog/BlogPost.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
import JsonPosts from "../json/posts.json";

export default {
  data() {
    return {
      name: "Alaref Blog",
      description: "This is Alaref Blog page",
      posts: JsonPosts,
    };
  },
  name: "Blog",
  components: {
    BlogPost,
    BlogSidebar,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
.post {
  flex: 4;
}
.side {
  flex: 1;
}
</style>