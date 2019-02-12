<template>
  <div id="app">
    <project :projects="projects" @add-project="addNewProject"></project>
    <hr>
  </div>
</template>

<script>
import Project from "@/components/Project";
export default {
  name: "app",
  data() {
    return {
      projects: []
    };
  },
  methods: {
    addNewProject(new_project) {
      return this.projects.push(new_project);
    },
    removeProject(project) {
      return this.projects.splice(this.projects.indexOf(project), 1);
    }
  },
  components: {
    Project
  }
};
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
