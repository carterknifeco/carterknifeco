<template>
  <div class="container-fluid">
    <div class="form-holder">
      <b-row>
        <div class="col-md-6 col-lg-8 row top-spacing">
          <b-col v-for="(step, index) in buildSteps" :key="index" class="col-12 col-md-12 col-lg-6 margin-top">
            <div class="card" @click="openSelection">
              <h4 class="card-title-strip mb-0">{{step.title}}</h4>
              <app-build-image :step="step"></app-build-image>
              <div class="card-footer">
                <b-form-select v-model="step.selected" :options="step.options"></b-form-select>
              </div>
            </div>
          </b-col>
          <div class="col-12 col-md-12 col-lg-6 margin-top half half-to-full">
            <label>Name:</label>
            <b-form-input v-model="user.name" type="text" placeholder="Enter name"></b-form-input>
          </div>
          <div class="col-12 col-md-12 col-lg-6 margin-top half half-to-full">
            <label>Phone Number:</label>
            <b-form-input v-model="user.number" type="tel" placeholder="Enter telephone number"></b-form-input>
          </div>
          <div class="col-12 col-md-12 col-lg-6 margin-top half">
            <label>Address:</label>
            <b-form-input v-model="user.address" type="text" placeholder="Street address"></b-form-input>
          </div>
          <div class="col-12 col-md-12 col-lg-6 margin-top half">
            <label>City:</label>
            <b-form-input v-model="user.city" type="text" placeholder="City"></b-form-input>
          </div>
          <div class="col-12 col-md-12 col-lg-6 margin-top half">
            <label>State:</label>
            <b-form-input v-model="user.state" type="text" placeholder="State"></b-form-input>
          </div>
          <div class="col-12 col-md-12 col-lg-6 margin-top half">
            <label>Zip:</label>
            <b-form-input v-model="user.zip" type="number" placeholder="Zip or postal code"></b-form-input>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 row" style="margin:0; display:block;">
          <div class="order-form col-md-12 sticky">
            <div>
              <label class="my-order" for="receipt">
                <span>My Order:</span>
              </label>
              <div class="input-group">
                <textarea
                  :rows="textareaRows"
                  id="receipt"
                  type="text"
                  class="form-control"
                  ref="orderInput"
                  v-model="totalOrder"
                ></textarea>
              </div>
              <button
                class="btn btn-warning mt-3"
                ref="popover"
                @click="selectAndCopy"
                v-b-popover="'Copied!'"
                v-on-clickaway="closePopOver"
              >
                <i class="fa fa-clipboard mr-2" aria-hidden="true"></i>Copy My Order
              </button>
              <a id="mailOrder" class="btn btn-primary mt-3" :href="mailToBody" target="_blank">
                <i class="fa fa-envelope mr-2" aria-hidden="true"></i>Email My Order
              </a>
              <label
                class="mt-3 mb-0"
              >Each blade is hand shaped and beveled, and given a unique piece of wood for the handle.</label>
            </div>
          </div>
        </div>
      </b-row>
    </div>
  </div>
</template>
<script>
let buildOptions = window.custom.build_options.map(category => {
  category.selected = category.options[0].title;
  category.options.map(option => {
    option.value = option.title;
    option.text = option.title;
    return option;
  });
  category.grow = false;
  return category;
});
buildOptions = JSON.parse(JSON.stringify(buildOptions));

import { mixin as clickaway } from "vue-clickaway";
import BuildImage from "../molecules/BuildImage.vue";
export default {
  components: {
    appBuildImage: BuildImage
  },
  data() {
    return {
      user: {
        name: "",
        number: "",
        state: "",
        city: "",
        address: "",
        zip: ""
      },
      buildSteps: buildOptions
    };
  },
  mixins: [clickaway],
  methods: {
    closePopOver() {
      this.$root.$emit("bv::hide::popover");
    },
    openSelection(e) {
      let el = e.currentTarget;
      let selection = el.querySelector(".custom-select");
      selection.click();
    },
    getImageSrc(image) {
      return `/dist/${image}.jpg`;
    },
    selectAndCopy() {
      this.$refs.orderInput.select();
      document.execCommand("copy");
    }
  },
  computed: {
    textareaRows() {
      let rows = 22;
      if (this.user.number.length > 0) {
        rows += 2;
      } else {
        rows += 0;
      }
      if (
        this.user.address.length > 0 &&
        this.user.city.length > 0 &&
        this.user.state.length > 0 &&
        this.user.zip.length > 0
      ) {
        rows += 5;
      } else {
        rows += 0;
      }
      return rows;
    },
    totalOrder() {
      let options = this.buildSteps;
      let allOrderItems = `carterknifeco@gmail.co`;
      if (this.user.name.length > 0) {
        allOrderItems += `\n \nHello, Matthew, my name is ${this.user.name}!`;
      } else {
        allOrderItems += `\n \nHello Matthew!`;
      }
      if (this.user.number.length > 0) {
        allOrderItems += `\n \nMy phone number is ${this.user.number}.`;
      }
      allOrderItems += `\n \nPlease prepare the following order:`;
      for (let i = 0; i < options.length; i++) {
        let currentOrder = {};
        allOrderItems +=
          "\n" + "\n" + options[i].title + ": " + options[i].selected;
      }
      if (
        this.user.address.length > 0 &&
        this.user.city.length > 0 &&
        this.user.state.length > 0 &&
        this.user.zip.length > 0
      ) {
        allOrderItems += `\n \nTo be shipped to:\n${this.user.address}\n${
          this.user.city
        }, ${this.user.state}\n${this.user.zip}`;
      }
      return allOrderItems;
    },
    totalOrderMailTo() {
      let options = this.buildSteps;
      let allOrderItems = "";
      if (this.user.name.length > 0) {
        allOrderItems += `Hello Matthew, my name is ${this.user.name}!`;
      } else {
        allOrderItems += `Hello Matthew!`;
      }
      if (this.user.number.length > 0) {
        allOrderItems += `%0D%0A %0D%0AMy phone number is ${this.user.number}.`;
      }
      allOrderItems += `%0D%0A %0D%0APlease prepare the following order:`;
      for (let i = 0; i < options.length; i++) {
        let currentOrder = {};
        allOrderItems +=
          "%0D%0A" + "%0D%0A" + options[i].title + ": " + options[i].selected;
      }
      if (
        this.user.address.length > 0 &&
        this.user.city.length > 0 &&
        this.user.state.length > 0 &&
        this.user.zip.length > 0
      ) {
        allOrderItems += `%0D%0A %0D%0ATo be shipped to:%0D%0A${
          this.user.address
        }%0D%0A${this.user.city}, ${this.user.state}%0D%0A${this.user.zip}`;
      }
      allOrderItems += "%0D%0A" + "%0D%0A";
      return allOrderItems;
    },
    mailToBody() {
      let mailToHref = `mailto:carterknifeco@gmail.com?subject=Custom knife order from carterknifeco.com&body=${
        this.totalOrderMailTo
      }`;
      return mailToHref;
    }
  }
};
</script>
<style lang="scss" scoped>
.form-holder {
  label {
    //font-weight: bold;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .form-text {
    margin: 0;
  }
  textarea,
  input,
  select {
    padding-top: 1rem;
    //font-weight: bold;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05),
      0 3px 7px -2px rgba(0, 0, 0, 0.08), 0 1px 12px 0 rgba(0, 0, 0, 0.09);
    max-height: calc(100vh - 230px);
    transition: all 0.3s cubic-bezier(0.68, -0.1, 0.265, 1.55);
    &:focus {
      @media (min-width: 768px) {
        //transform: translateY(-0.25rem);
        //box-shadow: 1px 8px 8px 0 rgba(0, 0, 0, 0.09),
        //  0 9px 7px -4px rgba(0, 0, 0, 0.12), 1px 7px 11px 0 rgba(0, 0, 0, 0.06);
        border-color: #80bdff;
      }
    }
  }
  input,
  select {
    font-weight: normal;
    padding-top: 0.5rem;
  }
  select {
    &:focus {
      @media (min-width: 768px) {
        transform: none;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05),
          0 3px 7px -2px rgba(0, 0, 0, 0.08), 0 1px 12px 0 rgba(0, 0, 0, 0.09);
      }
    }
  }
  .btn {
    width: 100%;
  }
  .form-control {
    border: 1px solid transparent;
  }
}
.container-fluid {
  display: flex;
  flex-flow: column wrap;
  padding-bottom: 4.5rem;
}
.row {
  align-items: stretch;
  padding: 0;
  .card {
    height: 100%;
  }
}
.card {
  cursor: initial;
  box-shadow: none;
  &:hover {
    transform: none;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05),
      0 3px 7px -2px rgba(0, 0, 0, 0.08), 0 1px 12px 0 rgba(0, 0, 0, 0.09);
    box-shadow: none;
    .card-title-strip {
      background-color: #007bff;
    }
  }
  select {
    width: 100%;
    cursor: pointer;
  }
  .card-body {
    min-height: 0;
    padding-bottom: 0;
  }
  .card-title-strip {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
  }
  .card-img {
    border-radius: 0;
  }
}
.sidebar {
  width: 100%;
}
.col-form-label > span {
  //font-weight: bold;
}
h4 {
  //font-weight: bold;
}
.sticky {
  @media screen and (min-width: 768px) {
    position: -webkit-sticky; // required for Safari
    position: sticky;
    top: 0; // required as well.
    padding-top: 70px;
    margin-top: -70px;
  }
}
.overlay {
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  h4 {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    color: white;
    width: 100%;
    text-align: center;
  }
}
.margin-top {
  margin-top: 1.5rem;
  &:first-of-type {
    margin-top: 0;
    @media screen and (min-width: 768px) {
      margin-top: 1.5rem;
    }
  }
  &.half {
    margin-top: 0.75rem;
    &.half-to-full {
      @media screen and (min-width: 992px) {
        margin-top: 1.5rem;
      }
    }
  }
  &:last-of-type {
    margin-bottom: 1.5rem;
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }
  &:nth-of-type(1),
  &:nth-of-type(2) {
    @media screen and (min-width: 992px) {
      margin-top: 35px;
    }
  }
}

.top-spacing {
  margin: 0;
}
.price {
  letter-spacing: -1px;
  @media (min-width: 769px) {
    margin-bottom: 0;
    transform: translateY(-25%);
  }
}
small {
  vertical-align: top;
  margin-left: -0.6rem;
}
</style>