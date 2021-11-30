<template>
  <div>
    <h1 class="form-title">Color</h1>
    <p class="form-explain">
      <b>집의 포인트 컬러를 하나 골라주세요.</b><br />
      Pick a Point Color of your House
    </p>
    <ul class="form-box-container">
      <li
        v-for="color in ColorItems"
        :key="color.index"
        :class="{ active: color.id == selectedColor.id }"
      >
        <input
          type="radio"
          :id="'color-' + color.id"
          name="colorSelect"
          v-bind:value="{ id: color.id, name: color.Title }"
          v-model="selectedColor"
          v-on:change="onChangeColor"
        />
        <label
          :for="'color-' + color.id"
          :class="'label-color-' + color.id"
          v-on:click="onClickLabel(color.id)"
        >
          <div class="box-img" :class="'color-img-' + color.id" ref="formLabel">
            <img :src="color.Img" style="width: 100%" />
          </div>
          <div class="box-explain" :class="'color-explain-' + color.id">
            <div :class="'color-explain-box-' + color.id">
              <b style="font-size: 0.8em">{{ color.Title }}</b>
            </div>
          </div>
        </label>
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
    onClickLabel(id) {
      var box = this.$el.querySelector(".color-explain-box-" + id);
      box.style.height = this.$refs.formLabel[id - 1].clientHeight - 8 + "px";
    },
  },
};
</script>
<style>
</style>
