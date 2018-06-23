<template>
  <div id="appBody">
    <app-header></app-header>
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      transitionName: null
    };
  },
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  watch: {
    $route(to, from) {
      if (to.path === "/" || from.path === "/") {
        this.transitionName = "fade";
      } else {
        this.transitionName = "fade-fast";
      }
    }
  },
  mounted() {
    for (let knife of this.$root.$data.knives) {
      var pre_cached_image = new Image();
      pre_cached_image.src = knife.image_path;
    }
  }
};
</script>

<style lang="scss">
.jumbotron {
  margin-bottom: 0;
}

.jumbotron ~ .container,
.jumbotron ~ .container-fluid:not(#knife) {
  padding-top: 4.5rem;
}

.btn,
button {
  cursor: pointer;
}

.fade {
  .modal-content {
    background-color: transparent;
    cursor: initial;
    button.close {
      cursor: pointer;
    }
  }
}

body,
html {
  height: 100%;
}

body {
  background: #f8f9fa url("./assets/logoBlack.png") no-repeat center center;
  background-attachment: fixed;
  background-size: 66vmin;
  @media (orientation: portrait) {
    background-size: 320px;
  }
  line-height: 1.6;
  font-family: "Work Sans", sans-serif;
  > div > div {
    background: #f8f9fa;
  }
  #appBody {
    background: transparent;
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
  }
  p {
    font-family: "Open Sans", sans-serif;
    font-size: 1.2rem;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  }
  .pisspoorformatcss {
    color: white;
    text-transform: capitalize;
  }
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
}

.container-fluid {
  max-width: 1424px;
}

.flex-space-between {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.35s;
}

.fade-leave-active {
  transition: all 0.75s;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

.fade-fast-enter-active,
.fade-fast-leave-active {
  transition: all 0.35s;
}

.fade-fast-leave-active {
  transition: all 0.7s;
}

.fade-fast-enter {
  opacity: 0;
}

.fade-fast-leave-to {
  opacity: 0;
}

.card {
  transition: all 0.3s cubic-bezier(0.68, -0.1, 0.265, 1.55);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05),
    0 3px 7px -2px rgba(0, 0, 0, 0.08), 0 1px 12px 0 rgba(0, 0, 0, 0.09);
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    display: block;
  }
  a {
    color: black;
    text-decoration: none;
  }
  cursor: pointer;
  .card-title-strip {
    text-transform: capitalize;
    padding: 0.35rem 1.25rem;
    background-color: #007bff;
    &.warning {
      background-color: #ffc107;
      color: black;
    }
    color: white;
    transition: all 0.3s cubic-bezier(0.68, -0.1, 0.265, 1.55);
    font-size: 1.2rem;
    margin-top: -1px; //font-weight: bold;
  }
  .card-body {
    padding-top: 0;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 200px;
    p {
      margin: auto 0 2rem;
      width: 100%;
    }
    .btn:not(.card-btn) {
      margin-top: auto;
      text-transform: capitalize;
      transition: all 0.3s cubic-bezier(0.68, -0.1, 0.265, 1.55);
      //font-weight: bold;
      @media (min-width: 768px) {
        color: #007bff;
        background-color: #fff;
        border-color: #007bff;
        &.btn-warning {
          color: black;
          border-color: #ffc107;
        }
      }
    }
  }
  &:hover {
    @media (min-width: 768px) {
      transform: translateY(-0.5rem);
      box-shadow: 1px 8px 8px 0 rgba(0, 0, 0, 0.09),
        0 9px 7px -4px rgba(0, 0, 0, 0.12), 1px 7px 11px 0 rgba(0, 0, 0, 0.06);
    }
    .btn.btn-primary:not(.card-btn) {
      background-color: #0069d9;
      color: white;
      background-image: none;
      border-color: #0062cc;
    }
    .btn.btn-warning:not(.card-btn) {
      color: black;
      background-color: #e0a800;
      border-color: #d39e00;
    }
    .card-title-strip {
      background-color: #0069d9;
      &.warning {
        color: black;
        background-color: #e0a800;
        border-color: #d39e00;
      }
    }
  }
}
</style>
