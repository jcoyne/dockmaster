<template>
  <div class="boats">
    <ul class="items">
      <li v-for="boat in boats">
        <span class="buoy">{{boat.buoy}}.</span>&nbsp;
        <span class="name">{{boat.name}}</span>&nbsp;
        <span class="type">({{boat.type}})</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BoatList',
  data () {
    return {
      json: null
    }
  },
  computed: {
    boats: function() {
      if (this.json == null)
        return []
      return this.json["boats"]
    }
  },
  created: function () {
    // `this` points to the vm instance
    fetch('/boats.json')
      .then(function (response) {
        return response.json()
      })
      .then((myJson) => {
        this.json = myJson
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .boats {
    grid-column: 2;
    grid-row-start: 2;
    grid-row-end: 2;
    overflow: auto;
  }
  .items > li {
    height: 100px;
  }
</style>
