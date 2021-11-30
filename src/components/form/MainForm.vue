<template>
  <div class="form-container">
    <h1 class="form-index">{{ index + 1 }}</h1>
    <div>
      <bain-tone v-if="index == 0" v-on:change-tone="onChangeTone" />
      <bain-color v-if="index == 1" v-on:change-color="onChangeColor" />
      <bain-style v-if="index == 2" v-on:change-style="onChangeStyle" />
    </div>
    <button class="form-next-btn" type="button" v-on:click="nextIndex">
      Next
    </button>
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
        tone: 0,
        color: 0,
        style: 0,
      },
    };
  },
  methods: {
    nextIndex() {
      if (this.index + 1 < 3) {
        this.index++;
        this.scrollBehavior();
      } else {
        this.$router.push({
          name: "ResultForm",
          params: {
            bain_tone: this.bain_value.tone,
            bain_color: this.bain_value.color,
            bain_style: this.bain_value.style,
          },
        });
      }
    },
    onChangeTone(e) {
      this.bain_value.tone = e.id;
    },
    onChangeColor(e) {
      this.bain_value.color = e.id;
    },
    onChangeStyle(e) {
      this.bain_value.style = e.id;
    },
    scrollBehavior() {
      console.log('gotoTop')
      window.scrollTo(0,0);
    },
  },
  components: {
    BainTone,
    BainColor,
    BainStyle,
  },
};
</script>
<style>
.form-container {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-container .form-index {
  width: 2em;
  height: 2em;
  background-color: black;
  color: white;
  border-radius: 2em;
  line-height: 2em;
}

.form-container .form-title {
  margin: 0;
  font-size: 3em;
}

.form-container .form-explain {
  font-size: 0.8em;
}

.form-box-container {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}

.form-box-container li {
  width: 23%;
  margin: 1%;
  height: 25%;
  list-style: none;
}

.form-box-container li input {
  display: none;
}
.form-box-container li label {
  position: relative;
}
.form-box-container li label > div {
  width: 100%;
}

.box-explain > div {
  border: 2px solid black;
}
.form-box-container li .box-explain {
  display: none;
}
.form-box-container li.active .box-img {
  display: none;
}
.form-box-container li.active .box-explain {
  display: block;
}
.box-explain > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-next-btn {
  background: none;
  border: 1px solid black;
  border-radius: 24px;
  font-size: 24px;
  padding: 8px 24px;
  margin-bottom: 1em;
  margin-top: 2em;
  font-weight: bold;
}
</style>
