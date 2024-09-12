<template>
  <div class="p-3">
    <h1>Pedidos</h1>
    <div class="d-flex flex-column">
      <div class="border rounded p-3" v-for="(order, key) in orders" :key="key">
        <span>#{{ order.id }}</span>
        <span>{{ order.status }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        orders: []
      }
    },
    mounted() {
      api.get('order')
        .then(({ data }) => {
          this.orders = data.orders
        })
        .catch(() => {
          // this.$router.push({ name: 'home' })
        })
        .finally(() => {
          this.loading = false  
        })
    }
  }
</script>