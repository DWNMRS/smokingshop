<template>
  <NuxtLink :to="blog.path" class="blog-card">
    <div class="blog-card__img"></div>
    <div class="blog-card__body">
      <p class="blog-card__date">{{ blog.date }}</p>
      <h5 class="blog-card__title">{{ blog.title }}</h5>
      <p class="blog-card__text">{{ blog.description }}</p>
      <span  class="blog-card__link">Читать <IconRight class="blog-card__link-icon"/></span>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  blog: {
    type: Object,
    required: true
  }
}
)
</script>

<style lang="scss" scoped>
.blog-card {
  width: 25%;
  overflow: hidden;
  display: inline-block;
  vertical-align: top;

  &__img {
    height: 195px;
    background-color: #000;
  }

  &__body {
    padding: 8px 14px 10px;
    background-color: $light;
  }

  &__date {
    color: $primary;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  &__title {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 10px;
    line-height: 18px;
  }

  &__text {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 4px;
  }

  &__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    transition: 0.2s;

    &-icon {
      margin-left: 5px;
      margin-top: 2px;
    }
  }

  &:hover {
    .blog-card__link {
      color: $primary;
    }
  }
}
</style>