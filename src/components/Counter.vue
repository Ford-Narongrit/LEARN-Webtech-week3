<template>
  <div class="mb-20">
    Counter: {{ number }}
    <div>
      <label for="counter">Counter: </label>
      <input type="text" v-model="number" />
      <button v-on:click="increase">plus 1</button>
      <button v-on:click="decrease">miuns 1</button>
      <button v-on:click="increaseTen">plus 10</button>
      <button v-on:click="timeTwo">X2</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 10,
    };
  },
  methods: {
    increase() {
      this.number++;
    },
    decrease() {
      this.number--;
    },
    increaseTen() {
        this.number+=10;
    },
    timeTwo() {
        this.number*=2;
    }
  },
};
</script>

<style scoped lang="scss">
.mb-20 {
  margin-bottom: 20px;
}
</style>
