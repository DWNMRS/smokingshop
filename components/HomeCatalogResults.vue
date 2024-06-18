<template>
  <div class="results">
    <div class="results-filter">
      <div class="results-filter__buttons d-flex">
        <button type="button" @click="filterProducts('all')">Все товары</button>
        <button type="button" @click="filterProducts('own')">Наши товары</button>
        <button type="button" @click="filterProducts('new')">Новинки</button>
        <button type="button" @click="filterProducts('discount')">Скидки</button>
      </div>
    </div>
    <div class="results-goods">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const products = ref([
  {
    id: 1,
    own: true,
    new: false,
    name: 'Alpha Hookah Beat Splash Doc (Колба Clear)',
    price: 1190,
    image: '../images/product.png'
  },
  {
    id: 2,
    own: false,
    new: true,
    name: 'Alpha Hookah Beat Splash Doc (Колба Gray)',
    price: 1690,
    image: '../images/product.png'
  },
  {
    id: 3,
    own: false,
    new: false,
    name: 'Alpha Hookah Beat Splash Dopey (Колба Clear)',
    price: 1990,
    oldPrice: 2290,
    image: '../images/product.png'
  },
  {
    id: 4,
    own: true,
    new: false,
    name: 'Alpha Hookah Beat Splash Doc (Колба Clear)',
    price: 1190,
    image: '../images/product.png'
  },
  {
    id: 5,
    own: false,
    new: true,
    name: 'Alpha Hookah Beat Splash Doc (Колба Gray)',
    price: 1690,
    image: '../images/product.png'
  },
  {
    id: 6,
    own: false,
    new: false,
    name: 'Alpha Hookah Beat Splash Dopey (Колба Clear)',
    price: 1990,
    oldPrice: 2290,
    image: '../images/product.png'
  },
  {
    id: 7,
    own: true,
    new: false,
    name: 'Alpha Hookah Beat Splash Doc (Колба Clear)',
    price: 1190,
    image: '../images/product.png'
  },
  {
    id: 8,
    own: false,
    new: true,
    name: 'Alpha Hookah Beat Splash Doc (Колба Gray)',
    price: 1690,
    image: '../images/product.png'
  },
  {
    id: 9,
    own: false,
    new: false,
    name: 'Alpha Hookah Beat Splash Dopey (Колба Clear)',
    price: 1990,
    oldPrice: 2290,
    image: '../images/product.png'
  },
]);

const currentFilter = ref('all');

const filteredProducts = computed(() => {
  switch (currentFilter.value) {
    case 'own':
      return products.value.filter(product => product.own);
    case 'new':
      return products.value.filter(product => product.new);
    case 'discount':
      return products.value.filter(product => product.oldPrice);
    default:
      return products.value;
  }
});

function filterProducts(filter: string) {
  currentFilter.value = filter;
}
</script>

<style lang="scss" scoped>
.results {
  height: 100%;

  &-filter {
    margin-bottom: 31px;
    gap: 25px;
  }

  &-goods {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 33px;
  }
}
</style>