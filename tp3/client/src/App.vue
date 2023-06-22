<template>
        <!-- Navigation-->
        <nav>
          <div class='container'>
              <div class='header-container'>
                  <h1>Distribution Maisonneuve</h1>
                  <RouterLink class="link" aria-current="page" to="/">Accueil</RouterLink>
                  <RouterLink class="link" to="/catalog">Produits</RouterLink>
                  <RouterLink class="link" to="/about">A propos</RouterLink>
              </div>
          </div>
        </nav>
        <!-- Header-->
        <RouterView
        :inventory="inventory"
        :add="addToCart"
        :addInv="addInventory"
        :updateInv="updateInventory"
        :removeInv = "removeInventory"
        :remove = "removeItem"
        />
        <Sidebar
        v-if="showSideBar"
        :toggle="toggleSideBar"
        :cart="cart"
        :inventory="inventory"
        :remove="removeItem"
        />
        <!-- Footer-->
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Distribution Maisonneuve 2023</p></div>
        </footer>
</template>

<script>
import Sidebar from '@/components/SideBar.vue'
import ProductDataService from '@/services/ProductDataService'
export default {
  components: {
    Sidebar
  },
  data () {
    return {
      showSideBar: false,
      inventory: [],
      cart: {}
    }
  },
  methods: {
    toggleSideBar () {
      this.showSideBar = !this.showSideBar
    },
    addToCart (product, index) {
      if (!this.cart[product]) this.cart[product] = 0
      this.cart[product] += this.inventory[index].quantity
      console.log(this.cart[product])
    },
    removeItem (name) {
      delete this.cart[name]
    },
    addInventory (data) {
      this.inventory.push(data)
    },
    updateInventory (index, data) {
      this.inventory[index].name = data.name
      this.inventory[index].photo = data.photo
      this.inventory[index].price = data.price
      this.inventory[index].description = data.description
      this.inventory[index].type = data.type
    },
    removeInventory (index) {
      this.inventory.splice(index, 1)
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
      })
  }
}
</script>
