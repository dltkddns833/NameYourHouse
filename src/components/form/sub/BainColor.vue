<template>
  <div>
    <h1>Color</h1>
    <ul>
      <li v-for="color in ColorItems" :key="color.index">
        <input
          type="radio"
          :id="'color-' + color.id"
          name="colorSelect"
          v-bind:value="{ id: color.id, name: color.Title }"
          v-model="selectedColor"
          v-on:change="onChangeColor"
        />
        <label :for="'color-' + color.id">{{ color.Title }}</label>
      </li>
    </ul>
  </div>
</template>
<script>
import { bain_color } from "../../../utils/bainData";
export default {
  data() {
    return {
      selectedColor: "0",
      ColorItems: bain_color,
    };
  },
  methods: {
    onChangeColor(e) {
      if (e.target.checked) {
        this.$emit("change-color", this.selectedColor);
      }
    },
  },
};
</script>
<style>
</style>
