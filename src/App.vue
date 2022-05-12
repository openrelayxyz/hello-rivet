<template>
  <HelloRivet />
</template>

<script>
import HelloRivet from "./components/hellorivet.vue";

export default {
  name: "App",
  components: {
    HelloRivet,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
