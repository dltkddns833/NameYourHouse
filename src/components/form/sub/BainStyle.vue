<template>
  <div>
    <h1>Style</h1>
    <ul>
      <li v-for="style in StyleItems" :key="style.index">
        <input
          type="radio"
          :id="'style-' + style.id"
          name="styleSelect"
          v-bind:value="{ id: style.id, name: style.Title }"
          v-model="selectedStyle"
          v-on:change="onChangeStyle"
        />
        <label :for="'style-' + style.id">{{ style.Title }}</label>
      </li>
    </ul>
  </div>
</template>
<script>
import { bain_style } from "../../../utils/bainData";
export default {
  data() {
    return {
      selectedStyle: "0",
      StyleItems: bain_style,
    };
  },
  methods: {
    onChangeStyle(e) {
      if (e.target.checked) {
        this.$emit("change-style", this.selectedStyle);
      }
    },
  },
};
</script>
<style>
</style>
