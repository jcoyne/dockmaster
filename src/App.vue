<template>
  <div id="app">
    <header>
      <h1>Sailboat assignments for 7/19/2018
      <el-button type="primary" @click="dialogVisible = true">Add sailor</el-button>
      </h1>
    </header>
    <SailorList/>
    <BoatList/>

    <!-- The Modal -->
    <el-dialog
      :visible.sync="dialogVisible">
      <el-form ref="form" label-width="120px">
        <el-form-item label="Sailor name">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="Role">
          <el-select v-model="role" placeholder="please select your role">
            <el-option label="Crew" value="Crew"></el-option>
            <el-option label="Skipper" value="Skipper"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Boat preference">
          <el-select v-model="preference" placeholder="please select your boat preference">
            <el-option label="Daysailer" value="Daysailer"></el-option>
            <el-option label="MC" value="MC"></el-option>
            <el-option label="Vic18" value="Vic18"></el-option>
            <el-option label="No preference" value="Any"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Add</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import BoatList from './components/BoatList.vue'
import SailorList from './components/SailorList.vue'
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'app',
  components: {
    BoatList,
    SailorList
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    onSubmit: function (event) {
      this.$store.dispatch('addSailor')
      this.dialogVisible = false
    }
  },
  computed: {
    activeSailor() {
      return this.$store.state.activeSailor
    },
    ...mapFields([
      'activeSailor.name',
      'activeSailor.role',
      'activeSailor.preference',
    ])
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
