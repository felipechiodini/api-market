<template>
  <div class="sidebar" :class="{ 'sidebar--open': $sidebar.opened.value }">
    <div class="d-flex justify-content-between align-items-center">
      <button class="close" @click="$sidebar.hide()">
        X
      </button>
      <h5 class="m-0">Carrinho</h5>
      <span></span>
    </div>
    <h6>Itens do Carrinho</h6>
    <div class="d-flex flex-column gap-3 my-3">
      <div class="d-flex" v-for="(product, key) in products" :key="key">
        <img src="https://picsum.photos/200" alt="" style="width: 70px; height: 70px; object-fit: cover; border-radius: 5px; margin-right: 10px">
        <div>
          <span>{{ product.name }}</span>
          <p>{{ currency(product.price) }}</p>
        </div>
        <div class="dwioajdioawjiffwhdfwh">
          <span @click="decrement(product)">-</span>
          <span class="fawhjhwd">
            {{ product.quantity }}
          </span>
          <span @click="increase(product)">+</span>
        </div>
      </div>
    </div>
    <button class="btn btn-primary w-100" @click="$router.push({name: 'checkout'})">
      Continuar
    </button>
  </div>
</template>

<script>
import Api from '@/js/Api';
import { useCartStore } from '@/stores/cart'
import { mapActions, mapState } from 'pinia'

export default {
  computed: {
    ...mapState(useCartStore, ['products']),
  },
  methods: {
    ...mapActions(useCartStore, ['setCart']),
    decrement(product) {
      Api.post('cart/decrease-item', { product_id: product.id })
        .then(({ data }) => {
          console.log(data)
        })
    },
    increase(product) {
      Api.post('cart/increase-item', { product_id: product.id })
        .then(({ data }) => {
          console.log(data)
        })
    }
  }
}
</script>

<style scoped>

.sidebar {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  padding: 10px;
  box-shadow:  0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
  height: 100%;
  overflow: auto;
  text-overflow: ellipsis;
  z-index: 1;
}

.sidebar.sidebar--open {
  display: block;
}

.sidebar::-webkit-scrollbar {
  display: none;
}

.close {
  border: none;
  background-color: transparent;
  font-size: 15px;
  padding: 5px;
}

.dwioajdioawjiffwhdfwh {
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-left: auto;
}

.dwioajdioawjiffwhdfwh span {
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
}
</style>