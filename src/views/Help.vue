<template>
    <div class="help-me" >
        <h1>{{name}}</h1>
        <p>{{description}} </p>
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