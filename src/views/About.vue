<template>
  <div class="about">
    <input type="text" v-model="size">
    <p>{{size}}</p>
    <h1>{{name}}</h1>
    <p v-bold="size" > {{ description }} </p>
  </div>
</template>


<script>

export default {
  data() {
    return {
      name: "About",
      description: "This is about page",
      size: 0,
    }
  },
  name: "About"
};
</script>
