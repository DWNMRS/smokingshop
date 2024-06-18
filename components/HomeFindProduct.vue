<template>
  <div class="find-product">
    <h3 class="find-product__title">Не нашли нужный товар?</h3>
    <div class="find-product__form">
      <input class="find-product__input" type="email" placeholder="впишите ваш email ..." />
      <AppButton class="find-product__button" type="submit"  unstyled>Ок</AppButton>
    </div>
    <p class="find-product__description">Мы сможем подобрать нужный вам товар, а так же помочь со всеми вопросами, просто заполните ваш емайл и мы вам
      ответим</p>
      <IconFind class="find-product__icon"/>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.find-product {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
  background-color: $light;
  margin-top: 101px;
  padding: 52px 22px;

  &__title {
    font-size: 18px;
    font-weight: 500;
  }

  &__form {
    display: flex;
    height: 40px;
    margin-top: 13px;
  }

  &__input {
    width: 100%;
    max-width: 582px;
    height: 100%;
    padding-left: 12px;
    font-size: 14px;
  }

  &__description {
    font-size: 13px;
    line-height: 16px;
    margin-top: 28px;
    max-width: 685px;
  }

  &__button {
    border-radius: 0 6px 6px 0;
    background-color: $secondary;
    padding: 12px 35px 12px 26px;
  }

  &__icon{
    position: absolute;
    right: -34px;
    bottom: -43px;
  }
}
</style>