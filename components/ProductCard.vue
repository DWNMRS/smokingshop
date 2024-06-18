<template>
  <div class="card">
    <div class="card__body">
      <div v-if="product.oldPrice" class="card__badge">{{ Math.round(((product.oldPrice - product.price) /
        ((product.oldPrice +
          product.price) / 2)) * 100) }} % SALE</div>
      <img class="card__img" :src="product.image" alt="Product Image">
    </div>
    <span class="card-text">{{ product.name }}</span>
    <div class="d-flex justify-content-between align-items-center">
      <span :class="{ 'text-muted': product.oldPrice, 'text-success': !product.oldPrice }">{{ product.price
        }}₽</span>
      <button class="btn btn-success">В корзину</button>
    </div>
    <div v-if="product.oldPrice" class="text-muted">
      <s>{{ product.oldPrice }}₽</s>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  product: {
    productType: String,
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.card {
  width: calc((100%/3) - 22px);



  &__body {
    border-top: 1px solid transparent;
    background: $light;
    position: relative;
    transition: 0.2s;
  }

  &__img {
    scale: 1;
    transition: 0.2s;
  }

  &__badge {
    position: absolute;
    z-index: 2;
    top: 14px;
    left: 0;
    width: fit-content;
    background: $primary;
    color: $white;
    padding: 7px 8px 3px 9px;
  }

  &:hover {
    .card__body {
      background: $white;
      border-top: 1px solid $primary ;
    }

    .card__img {
      scale: 1.1;
    }
  }
}
</style>