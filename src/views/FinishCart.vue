<template>
  <div class="p-3">

    <div v-if="step === 1">
      <div class="p-3">
        <h6>Horários de Entrega</h6>
      </div>
      <div class="my-3">
        <h6>Endereço</h6>
        <div>
          <span>Rua Hilda Brach Bauer, 421</span>
          <small>Centro Norte - Geminado 1</small>
        </div>
      </div>
      <h6>Opções de entrega</h6>
      <div class="d-flex flex-column gap-3">
        <div class="d-flex border rounded p-3" v-for="(option, key) in 4" :key="key">
          <div class="d-flex flex-column">
            <span>Amanhã, 15:00 - 17:00</span>
            <small>Agendado</small>
          </div>
          <div class="ms-auto">
            <input type="radio">
          </div>
        </div>
      </div>
      <button class="btn btn-primary w-100 mt-3" @click="step = 2">
        ir para pagamento
      </button>
    </div>

    <div v-if="step === 2">

      <h6>Pagamento</h6>
      <span>Resumo</span>
      <table class="w-100">
        <tr>
          <td>Subtotal</td>
          <td>{{ currency(200) }}</td>
        </tr>
        <tr>
          <td>Entrega</td>
          <td>{{ currency(20) }}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{{ currency(220) }}</td>
        </tr>
      </table>

      <button class="btn btn-primary w-100 mt-3" @click="onsubmit()">
        Realizar Pedido
      </button>
    </div>

  </div>
</template>

<script>
import api from '@/js/Api'

export default {
  data: () => {
    return {
      step: 1
    }
  },
  methods: {
    onsubmit() {
      api.post('cart/finish', {
        address_id: 1
      })
        .then(({ data }) => {
          this.setCart(data.cart)
        })
    }
  }
}

</script>
