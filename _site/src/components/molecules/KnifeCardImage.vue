<template>
    <div class="card" :class="{ 'bg-dark': card.for_sale,  'text-white': card.for_sale}">
        <div class="card-header" v-if="card.for_sale">
            <h3 class="text-warning">For Sale
                <span v-if="card.price">:</span>
            </h3>
            <h3 class="text-warning">
                <span v-if="card.price">$</span>{{card.price}}</h3>
        </div>
        <app-knife-image :image="card.images[0].image"></app-knife-image>
        <div class="card-body">
            <blockquote>
                <p class="card-text">{{card.content}}</p>
                <a v-if="card.for_sale" :href="mailToBody" target="_blank" class="btn btn-warning card-btn mt-3 mb-1">
                    <i class="fa fa-envelope mr-2" aria-hidden="true"></i>Order My Knife</a>
            </blockquote>
        </div>
    </div>
</template>
<script>
import knifeImage from "./KnifeImage.vue";
export default {
  props: ["card", "cardBody", "mailToBody"],
  components: { appKnifeImage: knifeImage }
};
</script>