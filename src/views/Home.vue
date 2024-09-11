<template>
  <div class="p-3">

    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5>Olá, {{ user.name }}</h5>
      <button class="btn btn-primary" @click="$router.push({ name: 'profile' })">
        Meu Perfil
      </button>
    </div>

    <div class="dioawjfowafwa">
      <img class="opawjfowiadjw" src="https://picsum.photos/200" alt="">
      <span class="dioawjdiowa">
        {{ home.name }}
      </span>
    </div>
    <div class="dopawjkdopawjdiow">
      <div class="dawiojdwia" v-for="(product, key) in home.products" :key="key">
        <img src="https://picsum.photos/200" alt="">
        <div class="dioawjiaw">
          <span class="dfopjawodwajodwjai">{{ product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</span>
          <span class="doaiwjdiowa">{{ product.name }}</span>
          <button class="btn btn-primary" @click="addCart(product)">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="dopjkawodpwajdkop">
    <div class="doipawjfoiawhfjwia">
      <span>Total sem entrega</span>
      <span>{{ cartTotal?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</span>
    </div>
    <button @click="$sidebar.show()">
      Ver Carrinho
    </button>
  </div>
  <Cart />
</template>

<script>
import Cart from '../components/Cart.vue'
import api from '../js/Api'
import { mapActions, mapState } from 'pinia'
import { useCartStore } from '../stores/cart'
import { useUserStore } from '@/stores/user';

export default {
  components: {
    Cart
  },
  data() {
    return {
      home: {
        products: [
        ]
      }
    }
  },
  computed: {
    ...mapState(useUserStore, ['user']),
    ...mapState(useCartStore, ['cartTotal']),
  },
  mounted() {
    api.get('/home').then(({ data }) => {
      this.home = data.home
    })
  },
  methods: {
    ...mapActions(useCartStore, ['setCart']),
    addCart(product) {
      api.post('cart/add', {
        product_id: product.id,
        quantity: 1
      })
      .then(({ data }) => {
        this.setCart(data.cart)
      })
    }
  }
}

</script>

<style scoped>

.dawiojdwia img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.dawiojdwia {
  cursor: pointer;
  display: block;
  background-color: #d7d7d7;
  border: none;
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
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
}

.dioawjdiowa {
  font-weight: 500;
}

.dioawjdiowaj {
  border: none;
  border-radius: 5px;
  padding: 10px;
  background-color: #e7e7e7;
  width: 100%;
}

.dopawjkdopawjdiow {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin-top: 10px;
  overflow: auto;
}

.dopawjkdopawjdiow::-webkit-scrollbar {
  display: none;
}

.dfopjawodwajodwjai {
  font-weight: 500;
  font-size: 14px;
}

.doaiwjdiowa {
  font-size: 12px;
}

.dopjkawodpwajdkop {
  box-shadow: 0 0 10px #ccc;
  padding: 10px;
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  border: none;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  background-color: #fff;
}

.dopjkawodpwajdkop .doipawjfoiawhfjwia {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 500;
}

.dopjkawodpwajdkop button {
  background-color: #d00000;
  border: none;
  color: white;
  font-size: 13px;
  border-radius: 5px;
  padding: 10px;
  width: 50%;
}

.opawjfowiadjw {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

</style>