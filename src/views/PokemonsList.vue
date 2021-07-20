<template>
  <div>
    Pokemon List
    <pokemon-create-from></pokemon-create-from>
    <PokemonTable></PokemonTable>
  </div>
</template>

<script>
import PokemonCreateFrom from '../components/PokemonCreateFrom.vue';
import PokemonTable from '../components/PokemonTable.vue'
export default {
  components: {
    PokemonTable,
    PokemonCreateFrom,
  },
};
</script>

<style></style>
