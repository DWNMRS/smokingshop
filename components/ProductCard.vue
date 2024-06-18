<template>
  <div :class="['card', { 'card--simple': isSimple == true }]">
    <div v-if="!isSimple" class="card__wrapper">
      <div class="card__body">
        <div v-if="product.oldPrice" class="card__badge">{{ Math.round(((product.oldPrice - product.price) /
          ((product.oldPrice +
            product.price) / 2)) * 100) }} % SALE</div>
        <div class="card__like">
          <IconLike class="card__like-icon" />
        </div>
        <img class="card__img" :src="product.image" alt="Product Image">
        <div class="card__buttons">
          <AppButton class="card__button">В корзину</AppButton>
          <div class="card__counter">
            <button @click="decrement" class="card__counter-button">-</button>
            <input v-model.number="count" type="number" class="card__counter-input" />
            <button @click="increment" class="card__counter-button">+</button>
          </div>
        </div>
      </div>
      <div class="card__product">
        <span class="card__product-name">{{ product.name }}</span>
        <div class="card__product-price">
          <span>{{ product.price }}₽</span>
          <span v-if="product.oldPrice" class="card__product-price-old">
            {{ product.oldPrice }}₽
          </span>
        </div>
      </div>
    </div>

    <div v-if="isSimple" class="card__body">
      <img class="card__img" :src="product.image" alt="Product Image">
      <div class="card__product">
        <div v-if="product.oldPrice" class="card__badge">{{ Math.round(((product.oldPrice - product.price) /
          ((product.oldPrice +
            product.price) / 2)) * 100) }} % SALE</div>
        <div class="card__like">
          <IconLike class="card__like-icon" />
        </div>
        <span class="card__product-name">{{ product.name }}</span>
        <div class="card__bottom">
          <div class="card__product-price">
            <span>{{ product.price }}₽</span>
            <span v-if="product.oldPrice" class="card__product-price-old">
              {{ product.oldPrice }}₽
            </span>
          </div>
          <div class="card__buttons">
            <AppButton class="card__button">В корзину</AppButton>
            <div class="card__counter">
              <button @click="decrement" class="card__counter-button">-</button>
              <input v-model.number="count" type="number" class="card__counter-input" />
              <button @click="increment" class="card__counter-button">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
defineProps({
  product: {
    productType: String,
    type: Object,
    required: true,
  },
  isSimple: {
    required: false,
    type: Boolean,
    default: false,
  }
})


const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  if (count.value != 0) {
    count.value--;
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: calc((100%/3) - 22px);
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 14px;

  &__badge {
    position: absolute;
    z-index: 2;
    top: 11px;
    left: 0;
    width: fit-content;
    background: $primary;
    color: $white;
    padding: 7px 5px 3px 9px;
  }

  &__like {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 14px;
    right: 10px;
    color: $light;
    cursor: pointer;

    &-icon {
      width: 100%;
      height: 100%;
    }

    &:hover {
      .card__like-icon {
        color: $secondary;
      }

    }
  }

  &__body {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-top: 1px solid transparent;
    background: $light;
    position: relative;
    transition: 0.2s;
    height: 300px;
    margin-bottom: 10px;
  }

  &__img {
    scale: 1;
    transition: 0.2s;
  }

  &__buttons {
    display: none;
    opacity: 1;
    position: absolute;
    bottom: 10px;
    left: 15px;
  }

  &__button {
    margin-right: 10px;
  }

  &__counter {
    display: flex;
    align-items: center;
    justify-content: center;

    &-button {
      width: 22px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      cursor: pointer;
      border: none;
      background-color: $gray;
      color: $white;
      border-radius: 31px;
      transition: 0.2s;

      &:hover {
        background-color: $dark;
      }
    }

    &-input {
      width: 37px;
      text-align: center;
      font-size: 18px;
    }
  }

  &__product {
    &-price {
      display: flex;
      align-items: center;
      font-family: 'Inter var', sans-serif;
      line-height: 16px;
      font-size: 18px;
      color: $primary;
      margin-top: 4px;

      &-old {
        text-decoration: line-through;
        color: $gray;
        margin-left: 22px;
      }
    }
  }

  &:hover {
    .card__body {
      background: $white;
      border-top: 1px solid $primary ;
      box-shadow: 0px 0px 29px 0px #6A6A6A30;
    }

    .card__buttons {
      display: flex;
      opacity: 1;
    }

    .card__img {
      scale: 1.1;
    }

    .card__like {
      display: block;
    }
  }



  &--simple {
    flex-direction: row;
    width: 100%;
    height: 144px;
    transition: 0.2s;
    border-top: 1px solid transparent;
    background: $light;
    margin-bottom: 0;

    .card__body {
      width: 100%;
      height: 100%;
      justify-content: flex-start;
    }

    .card__img {
      height: 100%;
      scale: 0.8;
    }

    .card__product {
      position: relative;
      width: 100%;
      height: 100%;
      padding-top: 46px;
      padding-right: 43px;
      padding-bottom: 35px;
      margin-left: 65px;

      &-name {
        font-size: 20px;
      }

      &-price {
        font-size: 24px;
      }
    }

    .card__badge {
      top: 0;
      left: 0;
    }

    .card__bottom {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card__buttons {
      position: static;
    }

  }
}
</style>