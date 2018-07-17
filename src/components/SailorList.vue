<template>
  <div class="sailors">
    <ul class="items">
      <li v-for="sailor in sailors">
        <span class="name">{{sailor.name}}</span>&nbsp;
        <span class="role">({{sailor.role}})</span>&nbsp;
        <span class="role">({{sailor.preference}})</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SailorList',
  // data() {
  //   return {
  //     sailors: [
  //       {
  //         name: "Justin Coyne",
  //         role: "Skipper",
  //         preference: "Daysailer"
  //       },
  //       {
  //         name: "Bob Dole",
  //         role: "Crew",
  //         preference: "Either"
  //       },
  //     ]
  //   }
  // },
  computed: {
    sailors() {
      return this.$store.state.sailors
    }
  }
  // vuex: {
  //   getters: {
  //     sailors: state => state.sailors
  //   },
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sailors {
    grid-column: 1;
    grid-row-start: 2;
    grid-row-end: 2;
    overflow: auto;
    border-right: 1px solid #444;
  }
  .items > li {
    height: 25px;
  }
</style>
