<template>
    <div class="product-add">
      <!-- Section-->
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div
            class="
              row
              gx-4 gx-lg-5
              row-cols-2 row-cols-md-3 row-cols-xl-2
              justify-content-center
            "
          >
            <div class="col-sm-12">
              <h4 class="mb-3">Ajouter un produit</h4>
              <div v-show="message" class="alert alert-danger">{{ message }}</div>
              <div class="needs-validation" novalidate>
                <div class="row g-2">
                  <div v-if="!submitted">
                  <div class="col-12">
                    <label for="productName" class="form-label"
                      >Nom du produit</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="productName"
                      v-model="product.name"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Un nom valide est requis.</div>
                  </div>
                  <div class="col-12">
                    <label for="productPhoto" class="form-label"
                      >Photo</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="productPhoto"
                      placeholder=""
                      v-model="product.photo"
                      required
                    />
                    <div class="invalid-feedback">
                      Une photo valide est requise.
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="productPrice" class="form-label">Prix (CAD)</label>
                    <div class="input-group has-validation">
                      <input
                        type="text"
                        class="form-control"
                        id="productPrice"
                        v-model.number="product.price"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">Un prix est requis.</div>
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="productDescription" class="form-label"
                      >Description</label
                    >
                    <textarea
                      class="form-control"
                      id="productDescription"
                      placeholder=""
                      v-model="product.description"
                    ></textarea>
                    <div class="invalid-feedback">Description valide requise.</div>
                  </div>
                  <div class="col-12">
                    <label for="productType" class="form-label"
                      >Catégorie</label
                    >
                    <select
                      class="form-control"
                      id="productType"
                      placeholder=""
                      v-model="product.type"
                      required
                    >
                      <option value="">Selectionner</option>
                      <option value="Electronique">Électronique</option>
                      <option value="Gadget">Gadget</option>
                      <option value="Electromenager">Électroménager</option>
                      <option value="Cuisine">Cuisine</option>
                    </select>
                    <div class="invalid-feedback">
                      Une catégorie valide est requise.
                    </div>
                  </div>
                  <button class="w-100 btn btn-secondary btn-lg mt-3" type="button" @click="saveProduct">Sauvegarder</button>
                  </div>
                  <div v-else>
                    <div  class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong> Vous avez soumis avec succès!</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <button class="w-100 btn btn-success btn-lg mt-3" type="button" @click="newProduct">Nouveau produit</button>
                  </div>
                  <hr class="my-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'

export default {
  props: ['addInv'],
  data () {
    return {
      submitted: false,
      message: null,
      product: {
        name: null,
        photo: null,
        price: null,
        description: null,
        type: null
      }
    }
  },
  methods: {
    saveProduct () {
      ProductDataService.create(this.product)
        .then(response => {
          this.product.id = response.data.id
          this.addInv(this.product)
          this.submitted = true
          this.message = null
        })
        .catch(error => {
          this.message = error.response.data.message
        })
    },
    newProduct () {
      this.product = {}
      this.submitted = false
    }
  }
}
</script>
