<template>
  <div id="app">
    <div id="view-contianer">
      <img src="./assets/logo.png">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  #app{
    background-color: #d9feff;
  }
  #view-contianer{
    background-color: #ffffff;
    max-width: 768px;
    margin: 0 auto;
    text-align: center;
  }
</style>
