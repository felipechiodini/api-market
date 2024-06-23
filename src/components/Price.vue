<template>
  <div class="d-flex">
    <h5 class="me-2">
      {{ currency(price) }}
    </h5>
    <h5 class="price-from" v-if="priceFrom">
      {{ currency(priceFrom) }}
    </h5>
  </div>
</template>

<script>

export default {
  props: {
    priceFrom: {

    },
    price: {

    }
  }
}
</script>

<style scoped>
  .price-from {
    font-size: 13px;
    text-decoration: line-through;
    margin-left: 10px;
  }
</style>