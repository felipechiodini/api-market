<template>
  <div class="container">
    <div class="d-flex flex-column">
      <h5>Minha Conta</h5>
      <span>{{ user.name }}</span>
      <span>{{ user.email }}</span>
      <span>{{ user.cellphone }}</span>
      <button class="btn btn-primary w-100 mt-3" @click="$router.push({name: 'orders'})">
        Meus Pedidos
      </button>
      <button class="btn btn-danger w-100 mt-3" @click="onLogout()"> 
        Sair
      </button>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user';
import { mapState } from 'pinia';

export default {
  computed: {
    ...mapState(useUserStore, ['user']),
  },
  methods: {
    onLogout() {
      localStorage.clear()
      this.$router.push({ name: 'sing-in' })
    },
  }
}
</script>
