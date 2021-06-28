<template>
  <div class="about">
    <h1> {{name}} </h1>
    <p> {{ description }} </p>
  </div>
</template>


<script>

export default {
  data() {
    return {
      name: "About",
      description: "This is about page",
    }
  },
  name: "About"
};
</script>
