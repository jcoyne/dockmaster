<template>
  <div id="app">
    <header>
      <h1>Sailboat assignments for 7/19/2018
      <button v-on:click="openModal">Add sailor</button>
      </h1>
    </header>
    <SailorList/>
    <BoatList/>

    <!-- The Modal -->
    <div id="myModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" v-on:click="closeModal">&times;</span>

        <label for="name">Name</label><input name="name">
        <label for="role">Role</label><select name="role"><option>Crew</option><option>Skipper</option></select>
        <label for="preference">Boat preference</label><select name="preference"><option>Daysailer</option><option>MC</option><option>Vic18</option><option>Any</option></select>
      </div>

    </div>
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
  },
  methods: {
    openModal: function (event) {
      // Get the modal
      var modal = document.getElementById('myModal');
      modal.style.display = "block";
    },
    closeModal: function (event) {
      // Get the modal
      var modal = document.getElementById('myModal');
      modal.style.display = "none";
    }
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

/* The Modal (background) */
.modal {
   display: none; /* Hidden by default */
   position: fixed; /* Stay in place */
   z-index: 1; /* Sit on top */
   left: 0;
   top: 0;
   width: 100%; /* Full width */
   height: 100%; /* Full height */
   overflow: auto; /* Enable scroll if needed */
   background-color: rgb(0,0,0); /* Fallback color */
   background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
   background-color: #fefefe;
   margin: 15% auto; /* 15% from the top and centered */
   padding: 20px;
   border: 1px solid #888;
   width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
   color: #aaa;
   float: right;
   font-size: 28px;
   font-weight: bold;
}

.close:hover,
.close:focus {
   color: black;
   text-decoration: none;
   cursor: pointer;
}

</style>
