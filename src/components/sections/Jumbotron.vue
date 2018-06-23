<template>
  <b-jumbotron :fluid="true" text-variant="white" :class="hero.class" :style="backgroundImage">
    <div v-if="hero.cornerLogo" class="corner-logo" v-scroll-to="hero.scrollTo"></div>
    <div v-if="hero.cornerLogo" class="corner-content" v-scroll-to="hero.scrollTo">
      <h4>{{hero.cornerLogo.text}}</h4>
      <h3>{{hero.cornerLogo.price}}</h3>
    </div>
    <div class="floater-anchor" :id="hero.id"></div>
    <div class="logo" v-if="hero.logo" data-tilt ref="tiltMe" v-scroll-to="hero.scrollTo">
      <img :src="hero.logo.head" />
      <img class="logo-mountains-rear" :src="hero.logo.mountains.rear" />
      <img class="logo-mountains-front" :src="hero.logo.mountains.front" />
      <img class="logo-text" :src="hero.logo.text" />
    </div>
    <div class="small-logo" v-if="hero.smallLogo" data-tilt ref="tiltMe" v-scroll-to="hero.scrollTo">
      <img class="logo small-logo-background" :src="hero.smallLogo.background" />
      <img class="logo small-logo-ring" :src="hero.smallLogo.ring" />
      <img class="logo small-logo-text" :src="hero.smallLogo.text.whole" />
      <!-- <img class="logo small-logo-text-outer" :src="hero.smallLogo.text.outer" />
                                <img class="logo small-logo-text-inner" :src="hero.smallLogo.text.inner" /> -->
    </div>
    <img v-if="hero.logo" v-scroll-to="hero.scrollTo" class="logo-mobile" :src="hero.logo.flat" />
    <img class="bg desktop" v-parallax="0.2" :src="hero.desktop" />
    <img class="bg mobile" :src="hero.mobile" />
    <h1 class="display-3" v-scroll-to="hero.scrollTo">{{hero.title}}</h1>
    <h1 v-if="hero.subtitle" :class="hero.subtitleClass" v-scroll-to="hero.scrollTo">{{hero.subtitle}}</h1>
    <i class="fa fa-4x" :class="hero.flipCursor == true ? 'fa-angle-up' : 'fa-angle-down'" aria-hidden="true" v-scroll-to="hero.scrollTo"></i>
  </b-jumbotron>
</template>
<script>
import VanillaTilt from "vanilla-tilt";
export default {
  props: ["hero"],
  data() {
    return {
      backgroundImage: {
        backgroundImage: `url(${this.hero.desktop})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }
    };
  },
  created() {
    setTimeout(() => {
      let logo = this.$refs.tiltMe;
      VanillaTilt.init(logo, {
        reverse: true,
        max: 20,
        perspective: 1000,
        scale: 1,
        speed: 500,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)"
      });
    }, 1);
  }
};
</script>
<style lang="scss" scoped>
.build {
  .container {
    max-width: 100%;
  }
}
.no-fa {
  .fa {
    display: none;
  }
}

.floater-anchor {
  height: 0;
  width: 0;
  position: absolute;
  top: -57px;
}

i {
  cursor: pointer;
  height: 50px;
  width: 50px;
}

.jumbotron {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 100vh;
  width: 100vw;
  .fa-angle-down,
  .fa-angle-up {
    z-index: 2;
    position: absolute;
    bottom: 3vh;
    left: 50%;
    margin: auto;
    transform: translateX(-50%);
    &::after {
      position: absolute;
      width: 20px;
      height: 20px;
      top: 0;
      left: 0;
      transform: translate(50%, 50%);
      background: rgba(0, 0, 0, 0.25);
    }
  }
  @media (min-width: 769px) {
    width: 90vw;
    width: calc(100% - 62px);
    height: calc(100vh - 85px);
    margin: 57px auto;
    padding: 0;
    //max-width: 1394px;
    &.home {
      height: 100vh;
      width: 100%;
      max-width: 100%;
      margin: 0;
    }
  }
  h1.display-3 {
    text-transform: capitalize;
    text-align: center;
    z-index: 1;
    transform: translateY(-25px);
    margin: 0;
    cursor: pointer;
    font-family: "Dancing Script", cursive;
    font-size: 5.5rem;
    text-shadow: rgba(255, 255, 255, 1) 0 0 0.1px;
    @media screen and (min-width: 767px) {
      font-size: 13rem;
    }
  }
  h4,
  h3,
  h2,
  h1 {
    //text-transform: capitalize;
    font-size: 3.5rem;
    text-align: center;
    z-index: 1;
    transform: translateY(-15px);
    margin: 0;
    font-family: "Dancing Script", cursive;
    &.bend {
      font-family: "Open Sans";
      letter-spacing: -2px;
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }
  }
  &.text-small {
    height: calc(100vh - 57px);
    @media (min-width: 769px) {
      width: 90vw;
      width: calc(100% - 62px);
      height: calc(100vh - 85px);
    }
    h1.display-3 {
      background: rgba(0, 0, 0, 0.25);
      padding: 2rem;
      min-width: 66%;
      margin: 0 auto;
      border: 5px solid white;
      font-size: 2.5rem;
      @media screen and (min-width: 767px) {
        font-size: 3.5rem;
      }
      transform: none;
      @media (orientation: portrait) {
        transform: none;
      }
    }
  }
  &:before {
    position: absolute;
    content: "";
    z-index: 2;
    height: 15px;
    bottom: -15px;
    left: 0;
    width: 100%;
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.035),
      0 3px 7px -2px rgba(0, 0, 0, 0.068), 0 1px 12px 0 rgba(0, 0, 0, 0.07);
  }
  &.overlay {
    &::after {
      content: "";
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
  &.contained {
    height: 0;
    padding-bottom: 56.25%;
  }
  > div {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .small-logo {
    transform-style: preserve-3d;
    z-index: 1;
    position: absolute;
    margin: auto;
    top: 10%;
    left: 20%;
    width: 170px;
    height: 170px;
    width: 20vmin;
    height: 20vmin;
    cursor: pointer;
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      transform: none !important;
    }
    @media screen and (max-width: 769px) {
      transform: none;
      width: 100px;
      height: 100px;
      left: 5%;
      top: 10%;
      top: calc(57px + 5%);
    }
    img {
      width: 100%;
      position: absolute;
      &.small-logo-text {
        transform: translateZ(35px);
      }
      &.small-logo-text-inner {
        transform: translateZ(35px);
      }
      &.small-logo-text-outer {
        transform: translateZ(25px);
      }
      &.small-logo-ring {
        transform: translateZ(15px);
      }
    }
  }
  &.home {
    .logo-mobile {
      z-index: 1;
      width: 66vmin;
      min-width: 320px;
      display: none;
      margin-bottom: 40%;
      @media screen and (max-width: 769px) {
        display: block;
      }
    }
    .logo {
      @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        transform: none !important;
      }
      @media screen and (max-width: 769px) {
        display: none;
      }
      .logo-mountains-rear {
        transform: translateZ(20px);
      }
      .logo-mountains-front {
        transform: translateZ(30px);
      }
      .logo-text {
        transform: translateZ(40px);
      }
      cursor: pointer;
      z-index: 10;
      height: 200vh;
      width: 200vw;
      min-height: 200vh;
      min-width: 200vw;
      margin: 0;
      transform-style: preserve-3d;
      margin-bottom: 40%;
      @media (orientation: landscape) {
        margin-bottom: 0;
      }
      img:not(.bg) {
        transition: all 0.3s cubic-bezier(0.03, 0.98, 0.52, 0.99);
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 66vmin;
        -webkit-filter: drop-shadow(5px 5px 5px #222);
        filter: drop-shadow(5px 5px 5px #222);
        box-sizing: content-box;
      }
    }
  }
  _:-ms-lang(x),
  img.bg,
  img.bg.desktop,
  img.bg.mobile {
    display: none !important;
  }
  img.bg {
    position: absolute;
    height: 102%;
    width: 100%;
    object-fit: cover;
    object-position: 0 33%;
    left: 0;
    top: 0;
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      display: none;
    }
    &.desktop {
      @media (orientation: portrait) {
        display: none;
      }
    }
    &.mobile {
      display: none;
      object-position: left bottom;
      @media (orientation: portrait) {
        display: block;
      }
    }
  }
  &.knives {
    img.bg {
      object-position: 50% 50%;
      &.mobile {
        display: none;
        object-position: center top;
        @media (orientation: portrait) {
          display: block;
          object-position: center bottom;
        }
      }
    }
  }
  &.process {
    img.bg {
      object-position: 50% 50%;
      &.mobile {
        display: none;
        object-position: center top;
        @media (orientation: portrait) {
          display: block;
          object-position: center bottom;
        }
      }
    }
  }
  &.bus {
    img.bg {
      object-position: right center;
      &.mobile {
        object-position: right center;
      }
    }
  }
  &.align-middle {
    img.bg {
      object-position: 50% 50%;
    }
  }
  &.align-bottom {
    img.bg {
      object-position: center bottom;
    }
  }
  &.align-80 {
    img.bg {
      object-position: 50% 80%;
    }
  }
  &.align-right {
    img.bg {
      object-position: 100% 70%;
    }
  }
  &.m0 {
    margin: 0;
  }
}
.corner-logo {
  cursor: pointer;
  z-index: 1;
  transform: rotate(-45deg) translate(50%, 50%);
  transform-origin: -29% 29%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 30rem;
  width: 30rem;
  @media (min-width: 769px) {
    height: 37rem;
    width: 37rem;
  }
  background: #dc3545;
}
.corner-content {
  cursor: pointer;
  z-index: 1;
  position: Absolute;
  top: 5.5rem;
  right: 0.75rem;
  @media (min-width: 769px) {
    top: 3.15rem;
    right: 1.5rem;
  }
  h3,
  h4 {
    font-family: "Open Sans";
    text-transform: capitalize;
    font-size: 0.85rem;
    //font-weight: bold;
    transform: none;
    text-align: right;
    @media (min-width: 769px) {
      font-size: 1.5rem;
    }
  }
  h3 {
    font-size: 1.75rem;
    @media (min-width: 769px) {
      font-size: 2.75rem;
    }
  }
}
</style>
