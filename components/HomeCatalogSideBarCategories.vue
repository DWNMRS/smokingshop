<template>
  <div class="categories">
    <span class="categories__title">Категории</span>
    <ul class="categories-list">
      <li v-for="(category, index) in categories" :key="index"
        :class="['category', { 'category--opened': isOpened[index] }]" @click="toggleOpen(index)">
        <div class="category__btn-wrapper">
          <button type="button" class="category__btn">
            {{ category.name }}
          </button>
          <span class="category__quantity">({{ category.items.length }})</span>
        </div>

        <ul :class="['category__list', { 'category__list--opened': isOpened[index] }]">
          <li v-for="(item, itemIndex) in category.items" :key="itemIndex" class="category__list-item">{{ item }}</li>
        </ul>
      </li>
    </ul>
    <div class="categories-price">
      <span class="categories__title">Цена</span>
      <div class="categories-price__slider">
        <Slider :min="minValue" :max="maxValue" v-model="value" range />
        <span class="categories-price__slider-info">{{ value[0] }}
          <IconRub /> - {{ value[1] }}
          <IconRub />
        </span>
      </div>
      <div class="categories-price__buttons">
        <AppButton type="button" class="btn btn-primary text-white rounded">Применить</AppButton>
        <AppButton type="button" secondary class="btn btn-black text-white rounded ">Сброс</AppButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const categories = ref([
  {
    name: 'Любой магазин',
    items: ['item1', 'item2', 'item3'],
  },
  {
    name: 'IQOS',
    items: ['item1', 'item2', 'item3'],
  },
  {
    name: 'Аксессуары',
    items: ['item1', 'item2', 'item3'],
  },
  {
    name: 'Кальяные смеси',
    items: ['item1', 'item2', 'item3'],
  },
  {
    name: 'Кальяны',
    items: ['item1', 'item2', 'item3'],
  },
  {
    name: 'Комплектующие',
    items: ['item1', 'item2', 'item3'],
  },
  {
    name: 'Мерч',
    items: ['item1', 'item2', 'item3'],
  },
  {
    name: 'Уголь',
    items: ['item1', 'item2', 'item3'],
  },
  {
    name: 'Электронные сигареты',
    items: ['item1', 'item2', 'item3'],
  },
])
const isOpened = ref(categories.value.map(() => false));
const value = ref<number[]>([100, 15000]);
const minValue = ref<number>(100);
const maxValue = ref<number>(15000);

const toggleOpen = (index: number) => {
  isOpened.value[index] = !isOpened.value[index];
};

</script>

<style lang="scss">
.categories {
  padding: 9px 24px 28px 18px;
  width: 100%;
  background: $light;

  &__title {
    font-size: 18px;
    line-height: 16px;
    font-weight: 500;
  }

  &-list {
    margin-top: 14px;
    margin-left: 16px;
    margin-bottom: 44px;
    display: flex;
    flex-direction: column;
    gap: 19px;
  }

  &-price {
    &__slider {
      margin-top: 24px;
      padding-left: 12px;
      padding-right: 44px;

      .p-slider .p-slider-range {
        background: $primary;
        color: $primary;
      }

      .p-slider.p-slider-horizontal {
        margin-bottom: 21px;
        margin-left: 8px;
      }

      .p-slider.p-slider-horizontal .p-slider-handle {
        background: $light;

        &:focus-visible {
          box-shadow: none;
        }

        &::before {
          width: 15px;
          height: 15px;
          background: $primary;
        }
      }

      &-info {
        display: flex;
        align-items: center;
        color: $primary;
      }
    }

    &__buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 47px;

      .btn {
        padding: 7px 26px;
        font-size: 16px;
        font-weight: 400;
        line-height: 18.5px;
      }
    }
  }
}

.category {
  position: relative;
  cursor: pointer;

  &::after {
    position: absolute;
    content: " ";
    background: $text;
    left: -14.5px;
    top: 11px;
    width: 8px;
    height: 2px;
    transition: all 0.2s ease 0s;
    transform: rotate(45deg);
  }

  &:before {
    position: absolute;
    content: " ";
    background: $text;
    left: -10px;
    top: 11px;
    width: 8px;
    height: 2px;
    transition: all 0.2s ease 0s;
    transform: rotate(-45deg);
  }

  &__btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__btn,
  &__quantity {
    transition: all 0.2s ease 0s;
  }

  &__list {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease;
    margin-left: 16px;

    &-item {
      cursor: pointer;

      &:hover {
        color: $primary;
      }
    }

    &--opened {
      max-height: 200px;
    }
  }

  &:hover {

    .category__btn,
    .category__quantity {
      color: $primary;
    }

    &::after,
    &::before {
      background: $primary;
    }
  }

  &--opened {

    .category__btn,
    .category__quantity {
      color: $primary;
    }

    &::after,
    &::before {
      background: $primary;
    }

    &::after {
      rotate: -90deg;
    }

    &::before {
      rotate: 90deg;
    }
  }
}
</style>