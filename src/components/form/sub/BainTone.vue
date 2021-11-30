<template>
  <div>
    <h1 class="form-title">Tone</h1>
    <p class="form-explain">
      <b>집의 전체적인 톤을 하나 골라주세요.</b
      ><br />
      Pick a tone of your House
    </p>
    <ul class="form-box-container">
      <li
        v-for="tone in ToneItems"
        :key="tone.index"
        :class="{ active: tone.id == selectedTone.id }"
      >
        <input
          type="radio"
          :id="'tone-' + tone.id"
          name="toneSelect"
          v-bind:value="{ id: tone.id, name: tone.Title }"
          v-model="selectedTone"
          v-on:change="onChangeTone"
        />
        <label
          :for="'tone-' + tone.id"
          :class="'label-tone-' + tone.id"
          v-on:click="onClickLabel(tone.id)"
        >
          <div class="box-img" :class="'tone-img-' + tone.id" ref="formLabel">
            <img :src="tone.Img" style="width: 100%" />
          </div>
          <div
            class="box-explain"
            :class="'tone-explain-' + tone.id"
          >
            <div :class="'tone-explain-box-' + tone.id">
              <b style="font-size: 0.8em">{{ tone.Title }}</b>
              <img :src="tone.Icon" style="width: 50%" />
            </div>
          </div>
        </label>
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
      BoxHeight: 0,
    };
  },
  methods: {
    onChangeTone(e) {
      if (e.target.checked) {
        this.$emit("change-tone", this.selectedTone);
      }
    },
    onClickLabel(id) {
      console.log(id)
      var box = this.$el.querySelector(".tone-explain-box-"+id)
      box.style.height = this.$refs.formLabel[id-1].clientHeight - 8 + "px";
    },
  },
};
</script>
<style>
</style>
