<template>
  <div class="boats">
    <ul class="items">
      <li>
        76. Safina (Daysailer)
      </li>
      <li>
        77. Naked Ankles (Daysailer)
      </li>
      <li>
        79. Short Pants (Daysailer)
      </li>
      <li>
        112. TBD (Daysailer)
      </li>
      <li>
        114. Clamdigger (Daysailer)
      </li>
      <li>
        53. Priority (MC)
      </li>
      <li>
        53. Trouble (MC)
      </li>
      <li>
        53. Chill (MC)
      </li>
      <li>
        53. Priority (MC)
      </li>
      <li>
        53. Trouble (MC)
      </li>
      <li>
        53. Chill (MC)
      </li>
      <li>
        53. Priority (MC)
      </li>
      <li>
        53. Trouble (MC)
      </li>
      <li>
        53. Chill (MC)
      </li>
      <li>
        53. Priority (MC)
      </li>
      <li>
        53. Trouble (MC)
      </li>
      <li>
        53. Fortuna (Vic 18)
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BoatList',
  props: {
    msg: String
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
