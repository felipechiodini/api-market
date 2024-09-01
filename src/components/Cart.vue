<template>
  <div class="sidebar" :class="{ 'sidebar--open': $sidebar.opened.value }">
    <h1>Carrinho</h1>
    <div>
      items
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

.sidebar {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  padding: 10px;
  box-shadow:  0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #e8e8e8;
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

</style>