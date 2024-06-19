<template>
  <header class="header">
    <NuxtLink  to="/">
      <img src="/images/logo.png">
    </NuxtLink>
    <div class="header__nav">
      <NuxtLink v-for="(page, index) in pages" :key="index"
        :class="['header__nav-item', { 'header__nav-item--active': page.selected === true }]" :to="page.path"
        @click="selectPage(index)">
        {{ page.name }}</NuxtLink>
    </div>
    <div class="header__menu">
      <AppButton unstyled>
        <IconSearch />
      </AppButton>
      <a href="#">
        <IconBasket />
      </a>
      <AppButton class="header__button-login">
        <IconLogin class="header__button-icon" />
        <span>Войти</span>
      </AppButton>
    </div>
  </header>
</template>

<script lang="ts" setup>

function selectPage(index: number) {
  pages.value.forEach((page, i) => {
    if (i === index) {
      page.selected = true;
    } else {
      page.selected = false;
    }
  });
}

const pages = ref([
  {
    path: '/',
    name: 'Главная',
    selected: true,
  },
  {
    path: '/catalog',
    name: 'Каталог',
    selected: false,
  },
  {
    path: '/blog',
    name: 'Блог',
    selected: false,
  },
  {
    path: '/about',
    name: 'О нас',
    selected: false,
  },
])
</script>

<style lang="scss" scoped>
.header {
  height: 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $tertiary;



  &__nav {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    gap: 59px;

    @media (max-width: 1024px) {
      display: none;
    }

    &-item {
      display: flex;
      align-items: center;
      height: 100%;
      transition: 0.2s;
      border-bottom: 2px solid transparent;
      color: $dark;

      &--active {
        font-weight: 500;
        border-bottom: 2px solid $primary;
      }

      &:hover {
        color: $black;
      }
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  &__button {
    &-login {
      padding: 7px 9px 8px 12px;
    }

    &-icon {
      margin-right: 9px;
    }
  }


}
</style>