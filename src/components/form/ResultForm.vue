<template>
  <div>
    <h1>{{houseName}}</h1>
    <div>
      Tone : {{bain_tone}}<br/>
      Color : {{bain_color}}<br/>
      Style : {{bain_style}}<br/>
    </div>
  </div>
</template>
<script>
import { bain_tone, bain_color, bain_style } from "../../utils/bainData";
export default {
  name : 'ResultForm',
  props : {
    bain_tone : {
      type : Number,
      default : 0
    },
    bain_color : {
      type : Number,
      default : 0
    },
    bain_style : {
      type : Number,
      default : 0
    },
  },
  data(){
    return{
      houseName : ''
    }
  },
  created() {
    const b_tone = bain_tone.find(tone => tone.id == this.bain_tone)
    const b_color = bain_color.find(tone => tone.id == this.bain_color)
    const b_style = bain_style.find(tone => tone.id == this.bain_style)
    this.houseName = b_tone.Title + " " + b_color.Title + " " + b_style.Title
  },
};
</script>
<style>
</style>
