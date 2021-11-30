<template>
  <div>
    <div class="landing-header">
      <h1 id="landingH1">
        Name<br />
        Your<br />
        House<br />
      </h1>
      <div class="landing-header-img">
        <img id="landingLogo" src="../assets/landing-logo.png" />
      </div>
    </div>
    <div class="bain-navbar" v-if="!isShowNav">
      <img src="../assets/landing-logo.png" />
      <span>bain</span>
    </div>
    <div class="landing-contents">
      <p>
        bain은 각자의 개성이 담긴<br />
        집에 이름을 지어주는 서비스 입니다.<br />
        더 이상 '누구의 집', '누구네'가 아닌<br />
        하나의 브랜드로서 불릴 수 있도록,
      </p>
      <h3>지금, 당신의 집에<br />이름을 지어보세요</h3>
      <router-link to="/bain"><span>START</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowNav: true,
      isScrollCount: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleLandingScroll);
    window.addEventListener("wheel", this.handelLandingWheel);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleLandingScroll);
    window.removeEventListener("wheel", this.handelLandingWheel);
  },
  methods: {
    handleLandingScroll(e) {
      var contents = this.$el.querySelector(".landing-contents");
      var landingH1 = this.$el.querySelector("#landingH1");
      var landingLogo = this.$el.querySelector("#landingLogo");
      landingH1.style.opacity = 1 - window.scrollY / contents.scrollHeight * 2;
      landingLogo.style.width = 15 - window.scrollY / contents.scrollHeight * 15  + "em";
      landingLogo.style.marginLeft = window.scrollY / contents.scrollHeight * 7  + "em";
      if (contents.scrollHeight <= window.scrollY + 100) {
        landingLogo.style.dispaly="none"
        this.isShowNav = false;
      }else{
        this.isShowNav = true;
      }
    },
    handelLandingWheel(e) {

    },
  },
};
</script>
<style>
/* .landing-header */
.landing-header {
  width: 70%;
  height: 100vh;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.landing-header h1 {
  font-size: 4em;
  line-height: 1.2em;
  margin: 5vh 0;
  /* height: 50vh; */
}

.landing-header-img img {
  width: 15em;
  height: 100%;
}

/* .landing-contents */
.landing-contents {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80vh;
}

.landing-contents p {
  font-size: 1em;
  line-height: 1.5em;
  margin-top: 5em;
}

.landing-contents h3{
  margin : 2em 0
}

.landing-contents a{
  width: 5em;
  height: 2em;
  text-decoration: none;
  font-size: 2.5em;
  line-height: 2em;
  font-weight: bolder;
  border: 1px solid black;
  border-radius: 5em;
  color: black;
}

/* .bain-navbar  */
.bain-navbar {
  position: fixed;
  top: 25px;
  width: 100%;
  max-width: 768px;
  text-align: center;
}

.bain-navbar img {
  width: 2em;
  height: 2em;
}

.bain-navbar span{
  font-size: 2.5em;
}
</style>
