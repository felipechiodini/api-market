<template>
  <div>
    <div class="dioawjfowafwa">
      <h2>Olá, Felipe</h2>
      <button class="btn-cart" @click="$sidebar.show()">
        <i class="pi pi-shopping-cart"></i>
      </button>
    </div>
    <hr>
    <h2>Produtos</h2>
    <div class="dawiojdwia" v-for="(product, key) in home.products" :key="key">
      <img :src="product.image">
      <div class="dioawjiaw">
        <h2>{{ product.name }}</h2>
        <span>{{ product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</span>
      </div>
      <button class="dawopjfwiofjoawd" @click="addCart()">
        Adicionar ao Carrinho
      </button>
    </div>
  </div>
  <Cart />
</template>

<script>
import Cart from '../components/Cart.vue'

export default {
  components: {
    Cart
  },
  data() {
    return {
      home: {
        products: [
          { name: 'Coffee', price: 100, price_from: 10, image: '' },
          { name: 'Coffee', price: 100, price_from: 10, image: '' },
          { name: 'Coffee', price: 100, price_from: 10, image: '' },
        ]
      }
    }
  },
  methods: {
    addCart() {
      
    }
  }
}

</script>

<style scoped>

.dawiojdwia img {
  width: 100%;

}

.dawiojdwia {
  display: block;
  background-color: #d7d7d7;
  border: none;
  margin: 10px;
  overflow: hidden;
  border-radius: 10px;
}

.dawiojdwia .dioawjiaw {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.dawopjfwiofjoawd {
  width: 100%;
  height: 100%;
  background-color: rgb(193, 57, 57);
  border: none;
  color: white;
  padding: 10px;
}

.btn-cart {
  background-color: #d00000;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 10px;
}

.dioawjfowafwa {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

</style>