<template>
  <div id="app">
    <input type="text" v-model="input.company_id"> <br>{{input.company_id}} <br>
    <input type="text" v-model="input.company_name"> <br>{{input.company_name}} <br>
    <input type="text" v-model="input.company_email"> <br>{{input.company_email}} <br>
    <input type="text" v-model="input.company_phone"> <br>{{input.company_phone}} <br>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      input: {
        company_id: "",
        company_name: "",
        company_email: "",
        company_phone: ""
      }
    };
  },
  components: {}
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
