<template>
  <div class="results">
    <HomeCatalogResultsFilter :filters="filters" :isSimple="simpleMode" :currentFilter="currentFilter" @getModeValue="setMode"
      @getFilter="setFilter" />
    <div :class="['results-goods', { 'results-goods--simple': simpleMode == true }]">
      <ProductCard v-for="product in filteredProducts" :isSimple="simpleMode" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const filters = ref([
  {
    value: 'own',
    title: 'Наши товары',
    selected: true
  },
  {
    value: 'all',
    title: 'Все товары',
    selected: false
  },
  {
    value: 'new',
    title: 'Новинки',
    selected: false
  },
  {
    value: 'discount',
    title: 'Скидки',
    selected: false
  },
])

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
const simpleMode = ref<boolean>(false)

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
function setFilter(filter: string) {
  currentFilter.value = filter;
}

function setMode(value: boolean): void {
  simpleMode.value = value
}
</script>

<style lang="scss" scoped>
.results {
  height: 100%;
  width: 100%;

  &-goods {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 33px;

    &--simple {
      flex-direction: column;
      gap: 13px;
    }
  }
}
</style>