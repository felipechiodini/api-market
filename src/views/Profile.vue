<template>
  <div>
    <div class="d-flex flex-column justify-content-center align-items-center bg-dark p-4">
      <img src="https://picsum.photos/200" alt="" style="height: 70px; width: 70px; object-fit: cover; border-radius: 50%;">
      <h5 class="text-white mt-3">{{ user.name }}</h5>
      <span class="text-white">{{ user.email }}</span>
    </div>
    <div class="d-flex flex-column p-4" style="gap: 10px; border-bottom: 1px solid #ccc">
      <div>
        <i class="fas fa-user me-2"></i>
        <span>Dados Pessoais</span>
      </div>
      <div>
        <i class="fas fa-map me-2"></i>
        <span>Endereços</span>
      </div>
      <div>
        <i class="fas fa-sign-out-alt me-2"></i>
        <span>Sair</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user';
import { mapState } from 'pinia';

export default {
  computed: {
    ...mapState(useUserStore, ['firstName', 'user']),
  },
  methods: {
    onLogout() {
      localStorage.clear()
      this.$router.push({ name: 'sing-in' })
    },
  }
}
</script>
