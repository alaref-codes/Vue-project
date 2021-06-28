<template>
    <div class="help-me" >
        <h1>{{name | upper }}</h1>
        <p>{{description | revers }} </p>
    </div>
</template>


<script>
export default {
  data() {
    return {
      name: "Help",
      description: "This is Help page",
    }
  },
  name: "help-me"
};
</script>