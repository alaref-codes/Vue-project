<template>
    <div class="blog" >
        <h1>{{name}}</h1>
        <p>{{description}} </p>
        <blog-post />
    </div>
</template>


<script>

import BlogPost from "@/components/Blog/BlogPost.vue";

export default {
  data() {
    return {
      name: "Blog",
      description: "This is Blog page",
    }
  },
  name: "Blog",
  components: {
    BlogPost
  }
};
</script>