<template>
  <div>
    <h1>Tone</h1>
    <ul>
      <li v-for="tone in ToneItems" :key="tone.index">
        <input
          type="radio"
          :id="'tone-' + tone.id"
          name="toneSelect"
          v-bind:value="{ id: tone.id, name: tone.Title }"
          v-model="selectedTone"
          v-on:change="onChangeTone"
        />
        <label :for="'tone-' + tone.id">{{ tone.Title }}</label>
      </li>
    </ul>
  </div>
</template>
<script>
import { bain_tone } from "../../../utils/bainData";
export default {
  data() {
    return {
      selectedTone: "0",
      ToneItems: bain_tone,
    };
  },
  methods: {
    onChangeTone(e) {
      if (e.target.checked) {
        this.$emit("change-tone", this.selectedTone);
      }
    },
  },
};
</script>
<style>
</style>
