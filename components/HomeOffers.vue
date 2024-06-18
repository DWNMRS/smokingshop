<template>
  <div class="offers">
    <div v-for="offer, index of offers" :key="index" class="offer">
      <img class="offer__image" :src="offer.image" alt="offer image">
      <div class="offer__text">
        <span class="offer__title">{{ offer.title }}</span>
        <p class="offer__description">{{ offer.description }}</p>
        <NuxtLink class="button" :to="offer.link">Перейти
          <IconRight />
        </NuxtLink>
      </div>


    </div>
  </div>
</template>

<script lang="ts" setup>


const offers = [
  {
    image: '../images/offer1.png',
    title: 'Наш мерч',
    description: `We are an online plant shop offering a
    wide range of cheap and trendy plants`,
    link: '/'
  },

  {
    image: '../images/offer2.png',
    title: 'Кальянные смеси &Кальяны',
    description: 'We are an online plant shop offering a\nwide range of cheap and trendy plants',
    link: '/'
  },
]

</script>

<style lang="scss" scoped>
.offers {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 245px;
}

.offer {
  width: calc((100%/2) - 14px);
  display: flex;
  justify-content: flex-end;
  position: relative;
  height: 250px;
  background-color: $light;

  &__image {
    position: absolute;
    left: 5px;
    bottom: 0;
  }

  &__text {
    max-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    text-align: end;
    padding: 38px 30px 48px 0;

  }

  &__title {
    font-weight: 500;
    font-size: 18px;
    line-height: 16px;
  }

  &__description {
    font-size: 14px;
    line-height: 24px;
  }
}
</style>