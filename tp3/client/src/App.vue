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
        <!-- Footer-->
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Distribution Maisonneuve 2023</p></div>
        </footer>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  data () {
    return {
      inventory: [],
      cart: {}
    }
  },
  methods: {
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
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
      })
  }
}
</script>
