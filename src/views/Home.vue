<template>
  <div>
    <div class="d-flex justify-content-between align-items-center p-3" style="background-color: black; border-radius: 0 0 10px 10px;">
      <h6 class="text-white m-0">{{ home.name }}</h6>
      <img src="https://picsum.photos/200" alt="" @click="$router.push({ name: 'profile' })" style="border-radius: 50%; height: 50px; width: 50px; object-fit: cover">
    </div>
    <div class="p-3">
      <div class="dopawjkdopawjdiow" style="background-color: #fff;" v-for="(product, key) in home.products.concat(home.products)" :key="key">
        <img src="https://picsum.photos/200" style="width: 120px; object-fit: cover;">
        <div class="d-flex flex-column justify-content-between p-2 w-100">
          <h5 class="m-0">{{ product.name }}</h5>
          <h3 class="m-0">{{ product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</h3>
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
    ...mapState(useUserStore, ['firstName']),
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
  width: 100%;
  margin-top: 10px;
  overflow: auto;
  border-radius: 10px;
  background-color: #fff;
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