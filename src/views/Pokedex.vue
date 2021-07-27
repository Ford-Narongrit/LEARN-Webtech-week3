<template>
  <div>
    Pokemon List
    <pokedex-create-from></pokedex-create-from>
    <pokedex-table></pokedex-table>
  </div>
</template>

<script>
import PokedexCreateFrom from '../components/PokedexCreateFrom.vue';
import PokedexTable from '../components/PokedexTable.vue'
export default {
  components: {
    PokedexTable,
    PokedexCreateFrom,
  },
};
</script>

<style></style>
