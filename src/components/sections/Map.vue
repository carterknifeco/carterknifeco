<template>
  <b-container fluid>
    <b-row>
      <b-col class="col-12 col-md-8 col-lg-9">
        <span id="map" ref="mapContainer"></span>
        <gmap-map ref="map" :center="center " :options="{styles: styles}" :zoom="15">
          <gmap-info-window :options="infoOptions " :position="infoWindowPos " :opened="infoWinOpen" @closeclick="infoWinOpen=false">
            <div class="infoWindow">
              <div>
                <img class="carterknifecoLogo" :src="infoWindowLogo">
              </div>
              <div>
                <p>
                  <a :href="webLink " target="_blank ">{{business}}
                    <i v-if="webLink" class="fa fa-external-link ml-2 " aria-hidden="true "></i>
                  </a>
                </p>
                <p>
                  <a :href="mapLink " target="_blank ">{{infoContent}}<br>{{infoSubContent}}
                    <i class="fa fa-map-marker ml-2 " aria-hidden="true "></i>
                  </a>
                </p>
              </div>
            </div>
          </gmap-info-window>
          <gmap-marker :key="i " v-for="(m, i) in markers " :position="m.position " :clickable="true " :draggable="false" :icon="icon" @click="toggleInfoWindow(m,i) "></gmap-marker>
        </gmap-map>
      </b-col>
      <b-col class="col-12 col-md-4 col-lg-3">
        <div class="location-boxes">
          <div :key="i" v-for="(m, i) in markers ">
            <div class="card mb-3" @click="toggleInfoWindow(m,i)">
              <div class="card-header">
                <i class="text-danger fa fa-map-marker mr-3 " aria-hidden="true "></i>
                <b>{{m.business}}</b>
              </div>
              <ul class="list-group list-group-flush ">
                <li class="list-group-item ">
                  <a :href="m.mapLink " target="_blank ">
                    <i class="fa fa-car mr-3 " aria-hidden="true "></i>{{m.infoText}}<br>{{m.infoSubText}}
                  </a>
                </li>
                <li v-if="m.webLink " class="list-group-item ">
                  <a :href="m.webLink " target="_blank ">
                    <i class="fa fa-external-link mr-3 " aria-hidden="true "></i>
                    Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import * as VueGoogleMaps from "vue2-google-maps";
import Vue from "vue";
import mapStyles from "../../mapStyles";
import mapMarkers from "../../mapMarkers";
var infoWindowIcon = require("../../assets/logoBlackFullSmall.png");
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB-hzCedQopupNEWRNzGCPufWStmEgH0Yo",
    v: "OPTIONAL VERSION NUMBER"
  }
});
export default {
  data() {
    return {
      icon: "//maps.google.com/mapfiles/ms/icons/red.png",
      infoWindowLogo: infoWindowIcon,
      infoContent: "",
      infoSubContent: "",
      business: "",
      mapLink: "",
      webLink: "",
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      center: {
        lat: 44.0508424,
        lng: -121.3125494
      },
      markers: mapMarkers,
      styles: mapStyles
    };
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.$refs.map.panTo(marker.position);
      this.$refs.mapContainer.scrollIntoView();
      this.infoContent = marker.infoText;
      this.infoSubContent = marker.infoSubText;
      this.mapLink = marker.mapLink;
      this.webLink = marker.webLink;
      this.business = marker.business;
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  a,
  .card-header {
    display: flex;
    align-items: center;
    &:hover {
      b {
        text-decoration: underline;
      }
    }
  }
  a {
    color: #007bff;
    &:hover {
      color: darken(#007bff, 15%);
      text-decoration: underline;
    }
  }
  &:hover {
    transform: none;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05),
      0 3px 7px -2px rgba(0, 0, 0, 0.08), 0 1px 12px 0 rgba(0, 0, 0, 0.09);
  }
}
.infoWindow {
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.carterknifecoLogo {
  width: 50px;
  margin: 1rem;
  margin-left: 0.33rem;
  @media (max-width: 769px) {
    display: none;
  }
}
#map {
  position: absolute;
  top: -62px;
}

.vue-map-container {
  //width: 100%;
  height: 100vh;
  height: calc(101vh - 50px);
  height: calc(100vh - 85px);
  margin: 0 0 57px;
  @media (max-width: 769px) {
    margin: 0 0 2rem;
  }
  padding: 0;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05),
    0 3px 7px -2px rgba(0, 0, 0, 0.08), 0 1px 12px 0 rgba(0, 0, 0, 0.09);
}

.vue-map {
  p {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
}
.location-boxes {
  line-height: 1.35;
  @media screen and (min-width: 768px) {
    position: -webkit-sticky; // required for Safari
    position: sticky;
    top: 0; // required as well.
    padding-top: 60px;
    margin-top: -60px;
  }
}
</style>