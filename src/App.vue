<template>
  <div id="app">
    <header><h1>Sailboat assignments for 7/19/2018</h1></header>
    <SailorList/>
    <BoatList/>
  </div>
</template>

<script>
import BoatList from './components/BoatList.vue'
import SailorList from './components/SailorList.vue'

export default {
  name: 'app',
  components: {
    BoatList,
    SailorList
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-rows: 80px auto;
  border: 1px solid gray;
  height: 100vh;
}

header {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 1;
  border-bottom: 1px solid #444;
}

h1 {
  size: 15pt;
}

ul.items {
  margin: 0;
  padding: 0;
}
.items > li {
  border-bottom: 1px solid #444;
  padding: 10px;
  text-align: left;
  list-style: none;
  background-color: lightgray;
}

</style>
