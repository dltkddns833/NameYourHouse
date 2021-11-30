<template>
  <div id="app">
    <div id="view-contianer">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
:root {
  font-size: 1em;
}
@media (min-width: 425px){
  :root{
    font-size: 1.5em;
  }
}
#app {
  background-color: #d9feff;
}
#view-contianer {
  background-color: #ffffff;
  max-width: 768px;
  margin: 0 auto;
}
</style>
