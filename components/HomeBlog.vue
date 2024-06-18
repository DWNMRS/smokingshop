<template>
  <div class="blog">
    <h2 class="blog__title">Наш блог</h2>
    <p class="blog__description">Мы являемся интернет-магазином кальянов, предлагающим широкий ассортимент современных и
      по доступной цене
      кальянов и их комплектующих.</p>
    <div class="blog__wrapper">
      <BlogCard v-for="blog of blogs" :key="blog.id" :blog="blog" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const blogs = [
  {
    id: 1,
    date: '12 марта',
    title: 'Кальянные комплектующие',
    description: 'Cacti are succulents are easy care plants for any home',
    path: '/'
  },
  {
    id: 2,
    date: '12 марта',
    title: 'Кальянные комплектующие',
    description: 'Cacti are succulents are easy care plants for any home',
    path: '/'
  },
  {
    id: 3,
    date: '12 марта',
    title: 'Кальянные комплектующие',
    description: 'Cacti are succulents are easy care plants for any home',
    path: '/'
  },
  {
    id: 4,
    date: '12 марта',
    title: 'Кальянные комплектующие',
    description: 'Cacti are succulents are easy care plants for any home',
    path: '/'
  }
]
</script>


<style lang="scss" scoped>
.blog {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;

  &__title {
    line-height: 37px;
    font-weight: 500;
    font-size: 30px;
  }

  &__description {
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    margin-top: 6px;
  }

  &__wrapper {
    display: flex;
    margin-top: 28px;
    gap: 44px;
  }
}
</style>