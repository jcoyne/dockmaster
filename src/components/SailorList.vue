<template>
  <div class="sailors">
    <ul class="items">
      <li>
        Justin Coyne (Skipper) (MC)
      </li>
      <li>
        Bob Dole (Crew) (Either)
      </li>
      <li>
        Big Bird (Skipper) (DS)
      </li>
      <li>
        Charlie Rose (Crew)
      </li>
      <li>
        Christoper Kimbal (Crew)
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SailorList',
  props: {
    msg: String
  }
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
