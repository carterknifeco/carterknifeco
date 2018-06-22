<template>
  <footer class="bg-dark text-white">
    <div class="container-fluid">
      <hr>
      <div class="flex-space-between">
        <p>© CARTER KNIFE CO. {{year}}</p>
        <ul class="social-links">
          <!-- <router-link tag="li" to="/privacy" class='text-muted mr-2'>Privacy Policy</router-link> -->
          <li class="mr-2">
            <a href="http://instagram.com/carterknifeco" target="_blank">
              <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li v-b-modal.myModal>
            <i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
}
</script>
<style lang="scss" scoped>
footer {
  margin-top: auto;
  hr {
    background: white;
  }
  ul {
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    li {
      cursor: pointer;
    }
  }
  a {
    color: white;
  }
}
</style>
