<template>
  <div>
    Add Pokemon
    <div>
      <div>
        <label for="name">Name (En)</label>
        <input type="text" v-model="form.name.english" />
      </div>
      <div>
        <label for="name_jp">Name (Jp)</label>
        <input type="text" v-model="form.name.japanese" />
      </div>
      <div>
        <label for="type">type</label>
        <input type="text" v-model="form.type" />
      </div>
      <div>
        <button @click="addPokemon">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonStore from "../store/Pokemon";

export default {
  data() {
    return {
      form: {
        name: {
          english: "",
          japanese: "",
        },
        type: "",
      },
    };
  },
  methods: {
    clearFrom() {
      this.from = {
        name: {
          english: "",
          japanese: "",
        },
        type: "",
      };
    },
    addPokemon() {
      let payload = {
        name: this.form.name,
        type: this.form.type.split(",").map((item) => item.trim()),
      };
      console.log(payload);
      PokemonStore.dispatch("addPokemon", payload);
      this.clearFrom();
    },
  },
};
</script>

<style></style>
