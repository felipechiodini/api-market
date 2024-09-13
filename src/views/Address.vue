<template>
  <div>

    <div class="d-flex flex-column justify-content-center align-items-center bg-dark p-4">
      <img src="https://picsum.photos/200" alt="" style="height: 70px; width: 70px; object-fit: cover; border-radius: 50%;">
      <h5 class="text-white mt-3">{{ user.name }}</h5>
      <span class="text-white">{{ user.email }}</span>
    </div>

    <button class="btn btn-primary" @click="$router.push({ name: 'add-address' })">
      <i class="fas fa-plus"></i>
    </button>
    <div class="d-flex flex-column p-4">

      <div class="border rounded p-3" v-for="(address, key) in addresses" :key="key">
        <span>{{ address.street }}, {{ address.number }}</span>
      </div>

    </div>
  </div>
</template>


<script>
import { useUserStore } from '@/stores/user';
import { mapState } from 'pinia';

export default {

  data: () => ({
    addresses: [
      {
        id: 1,
        street: 'Rua das Bananeiras',
        number: '123',
        complement: 'Casa',
        neighborhood: 'Centro',
      }
    ]
  }),
  computed: {
    ...mapState(useUserStore, ['firstName', 'user']),
  },
}

</script>