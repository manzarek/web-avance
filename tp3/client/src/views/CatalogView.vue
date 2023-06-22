<template>
          <!-- Section-->
          <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row mb-5">
                  <div class="d-flex justify-content-center">
                    <RouterLink class="btn btn-outline-success" :to="{name: 'add-product'}">Ajouter un produit</RouterLink>
                  </div>
                </div>
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div v-for="(product, i) in inventory" :key="i" class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" :src="require(`@/assets/img/450/${product.photo}`)" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">{{ product.name }}</h5>
                                    <!-- Product price-->
                                    ${{ product.price.toFixed(2) }}
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center">
                                    <p>{{ product.description }} </p>
                                    <p>{{ product.type }} </p>
                                    <div class="btn-group-custom">
                                      <RouterLink :to="{name: 'product', params: {id: product.name}}">Voir détails</RouterLink>
                                      <br>
                                      <br>
                                      <RouterLink :to="{name: 'edit-product', params: {id: product.id}}" class="btn btn-outline-success mt-10">Modifier</RouterLink>
                                      <button class="btn btn-danger btn-lg mt-3" type="button" @click="deleteProduct(product.id)">Supprimer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'

export default {
  props: ['inventory', 'add', 'removeInv', 'remove'],
  data () {
    return {
      product: {},
      id: null
    }
  },
  methods: {
    deleteProduct (id) {
      console.log(id)
      ProductDataService.delete(id)
        .then(response => {
          // this.message = response.data.message
          this.id = id
          this.removeInv(this.productIndex)
          this.remove(this.product.name)
          this.$router.push({ name: 'catalog' })
        })
    }
  },
  computed: {
    productIndex () {
      const index = this.inventory.findIndex((p) => {
        return p.id === this.id
      })
      return index
    }
  }
}
</script>
