<template>
  <div class="slider">
    <Swiper :modules="[SwiperPagination, SwiperAutoplay]" :loop="true" :pagination="{ enabled: true, clickable: true }">
      <SwiperSlide v-for="slide of slides" class="slide">
        <div class="slide__text">
          <span class="slide__subtitle">{{ slide.subtitle }}</span>
          <h2 class="slide__title">{{ slide.title }}</h2>
          <p class="slide__description">{{ slide.description }}</p>
        </div>
        <NuxtLink to="/catalog" class="button slide__button ">
          Начать покупки
        </NuxtLink>
        <img class="slide__img" :src="slide.path" :alt="slide.alt">
        <IconSlider class="slide__icon" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
const slides = [
  {
    subtitle: 'ИНТЕРНЕТ-МАГАЗИН КАЛЬЯНОВ И АКСЕССУАРОВ',
    title: 'SMOKING SHOP',
    description: 'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!',
    path: "images/slide.png",
    alt: "slide1"
  },
  {
    subtitle: 'ИНТЕРНЕТ-МАГАЗИН КАЛЬЯНОВ И АКСЕССУАРОВ',
    title: 'SMOKING SHOP',
    description: 'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!',
    path: "images/slide.png",
    alt: "slide2"
  },
  {
    subtitle: 'ИНТЕРНЕТ-МАГАЗИН КАЛЬЯНОВ И АКСЕССУАРОВ',
    title: 'SMOKING SHOP',
    description: 'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!',
    path: "images/slide.png",
    alt: "slide2"
  }
]
</script>

<style lang="scss">
.slider {
  margin-top: 12px;
  height: 450px;
  background: $light;

  .swiper {
    &-pagination-bullet {
      background: #96C361;
      opacity: 0.5;

      &-active {
        opacity: 1;
      }
    }
  }
}

.slide {
  position: relative;
  padding: 70px 0 89px 43px;

  &__text {
    max-width: 577px;
  }

  &__subtitle {
    font-size: 14px;
  }

  &__title {
    font-size: 70px;
    font-weight: 700;
    line-height: 71px;
    margin-left: -3px;
    margin-bottom: 5px;
    max-width: 342px;
  }

  &__description {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0;
    color: $dark;
  }

  &__img {
    position: absolute;
    top: 35px;
    right: 0px;
    height: 100%;
    transform: scale(1.31);
    z-index: 1;
  }

  &__icon {
    position: absolute;
    z-index: 0;
    top: 2px;
    right: 2px;
  }

  &__button {
    padding: 9px 26px;
    margin-left: -2px;
    margin-top: 42px;
    line-height: 18.5px;
  }
}
</style>