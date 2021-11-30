<template>
  <div>
    <h1 class="form-title">Style</h1>
    <p class="form-explain">
      <b>집의 스타일을 하나 골라주세요.</b><br />
      Pick a Style of your House
    </p>
    <ul class="form-box-container">
      <li
        v-for="style in StyleItems"
        :key="style.index"
        :class="{ active: style.id == selectedStyle.id }"
      >
        <input
          type="radio"
          :id="'style-' + style.id"
          name="styleSelect"
          v-bind:value="{ id: style.id, name: style.Title }"
          v-model="selectedStyle"
          v-on:change="onChangeStyle"
        />
        <label
          :for="'style-' + style.id"
          :class="'label-style-' + style.id"
          v-on:click="onClickLabel(style.id)"
        >
          <div class="box-img" :class="'style-img-' + style.id" ref="formLabel">
            <img :src="style.Img" style="width: 100%" />
          </div>
          <div class="box-explain" :class="'style-explain-' + style.id">
            <div :class="'style-explain-box-' + style.id">
              <b style="font-size: 0.8em">{{ style.Title }}</b>
              <img :src="style.Icon" style="width: 50%" />
            </div>
          </div>
        </label>
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
    onClickLabel(id) {
      var box = this.$el.querySelector(".style-explain-box-" + id);
      box.style.height = this.$refs.formLabel[id - 1].clientHeight - 8 + "px";
    },
  },
};
</script>
<style>
</style>
