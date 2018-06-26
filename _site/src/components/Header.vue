<template>
  <nav class="navbar-expand-lg navbar navbar-light bg-light fixed-top">
    <div class="container-fluid">

      <b-nav-toggle target="navcollapse"></b-nav-toggle>
      <b-navbar-brand to="/"><img src="../assets/navLogo.png" class="d-inline-block align-top" style="height:41px; padding:0;" /></b-navbar-brand>

      <b-collapse is-nav id="navcollapse">
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item v-for="(route, key) in routes" :class="route.class" :to="route.to" :key="key">{{route.name}}</b-nav-item>
          <router-link tag="button" to="/build" class="link-desktop btn btn-primary my-2 my-lg-0 ml-0">Build My Knife</router-link>
          <button v-b-modal.myModal class="link-desktop btn btn-warning my-2 my-lg-0 ml-0 ml-lg-2" role="button">Contact</button>
          <router-link tag="button" to="/build" class="link-mobile btn btn-primary my-2 my-lg-0 ml-0" v-b-toggle.navcollapse>Build My Knife</router-link>
          <button v-b-modal.myModal class="link-mobile btn btn-warning my-2 my-lg-0 ml-0 ml-lg-2" role="button" v-b-toggle.navcollapse>Contact</button>
        </b-nav>
      </b-collapse>

      <b-modal hide-footer ref="myModalRef" title="Copy Address or Email Directly" id="myModal" class='bg-light' header-bg-variant="dark" header-text-variant="light" body-bg-variant="dark" body-text-variant="light">
        <div>
          <input type="text" class="form-control rounded-0 rounded-left" placeholder="carterknifeco@gmail.com" value="carterknifeco@gmail.com" ref="contactInput" />
          <button id="contactButton" class="btn btn-warning rounded-0 rounded-right" @click="selectAndCopy" v-b-popover="'Copied!'">
            <i class="fa fa-clipboard mr-2" aria-hidden="true"></i>Copy</button>
        </div>
        <div style="padding-top:15px">
          <a id="emailButton" class="btn btn-primary" href="mailto:carterknifeco@gmail.com?subject=Contact message from carterknifeco.com" target="_blank">
            <i class="fa fa-envelope mr-2" aria-hidden="true"></i>Email
          </a>
        </div>
      </b-modal>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
      copyData: "",
      routes: [
        {
          to: "/knives",
          name: "knives"
        },
        {
          to: "/about",
          name: "about"
        },
        {
          to: "/process",
          name: "process"
        },
        // {
        //   to: "/life",
        //   name: "life"
        // },
        {
          to: "/local",
          name: "local sellers"
        }
        // {
        //   to: "/build",
        //   name: "build my knife"
        // }
      ]
    };
  },
  methods: {
    toggleNav() {
      this.toggle = false;
    },
    selectAndCopy() {
      this.$refs.contactInput.select();
      document.execCommand("copy");
    }
  },
  created() {
    this.copyData = "carterknifeco@gmail.com";
  }
};
</script>

<style lang="scss">
.popover-body {
  color: inherit;
  font-weight: 500;
  padding: 8px 14px;
  margin-bottom: 0;
  font-size: 1rem;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}

.navbar {
  // box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  //font-weight: bold;
  text-transform: capitalize;
  .btn {
    cursor: pointer;
    //font-weight: bold;
    @media (min-width: 992px) {
      align-self: center;
    }
  }
  .nav-link {
    font-weight: bold;
  }
}

.navbar-brand {
  padding: 0;
  margin-left: auto;
}

.modal-body {
  display: flex;
  flex-flow: column;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  > div {
    display: flex;
    flex: 2;
    input {
      width: auto;
      flex: 3;
      border: none;
    }
    .btn {
      flex: 1;
    }
  }
}

#myModal {
  @media (max-width: 375px) {
    .btn {
      font-size: 0.85rem;
    }
    .modal-title {
      font-size: 1rem;
    }
    .form-control {
      font-size: 0.9rem;
    }
  }
}

button.close {
  overflow: visible;
}
.link-mobile {
  @media (min-width: 992px) {
    display: none;
  }
}
.link-desktop {
  @media (max-width: 991px) {
    display: none;
  }
}
</style>