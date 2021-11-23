<template>
  <div>
    <h1>Main Form {{ index }}</h1>
    <div>
      <bain-tone v-if="index == 0" v-on:change-tone="onChangeTone" />
      <bain-color v-if="index == 1" v-on:change-color="onChangeColor" />
      <bain-style v-if="index == 2" v-on:change-style="onChangeStyle" />
    </div>
    <button type="button" v-on:click="nextIndex">Next</button>
  </div>
</template>
<script>
// 지역 컴포넌트 등록
import BainColor from "./sub/BainColor.vue";
import BainStyle from "./sub/BainStyle.vue";
import BainTone from "./sub/BainTone.vue";

export default {
  data() {
    return {
      index: 0,
      bain_value: {
        tone : 0,
        color : 0,
        style : 0
      },
    };
  },
  methods: {
    nextIndex() {
      if (this.index + 1 < 3) {
        this.index++;
      } else {
        this.$router.push({
          name: "ResultForm",
          params: {
            bain_tone : this.bain_value.tone,
            bain_color : this.bain_value.color,
            bain_style : this.bain_value.style
          },
        });
      }
    },
    onChangeTone(e){
      this.bain_value.tone = e.id
    },
    onChangeColor(e){
      this.bain_value.color = e.id
    },
    onChangeStyle(e){
      this.bain_value.style = e.id
    }
  },
  components: {
    BainTone,
    BainColor,
    BainStyle,
  },
};
</script>
<style>
</style>
