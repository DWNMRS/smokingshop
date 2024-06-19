<template>
  <div class="top-bar">
    <div class="container">
      <AppButton unstyled class="top-bar__button" type="button" @click="openModal">
        г. {{ citySelected }}
      </AppButton>
      <div class="top-bar__social">
        <a href="#">
          <IconVk />
        </a>
        <a href="#">
          <IconYouTube />
        </a>
        <a href="#">
          <IconTelegram />
        </a>
      </div>

      <AppButton unstyled type="button" class="top-bar__menu">
        <span>Меню</span>
        <IconBurger class="top-bar__menu-icon" />
      </AppButton>
      <Popup :citySelected="citySelected" @changeCity="openModal" />
      <Teleport to="body">
        <Modal :cities="cities" :showModal @selectCity="closeModal" />
      </Teleport>

    </div>
  </div>
</template>

<script lang="ts" setup>
const showModal = ref(false)
const citySelected = ref('Москва')
const cities = ref([
  {
    name: 'Москва',
    selected: true,
  },
  {
    name: 'Киров',
    selected: false,
  },
  {
    name: 'Пермь',
    selected: false,
  },
  {
    name: 'Казань',
    selected: false,
  },
  {
    name: 'Сыктывкар',
    selected: false,
  },
  {
    name: 'Нижний Новгород',
    selected: false,
  },
  {
    name: 'Кострома',
    selected: false,
  },

])

const closeModal = (index: string) => {
  let i = Number(index)
  cities.value.forEach(city => {
    city.selected = false
  })
  let currentCity = cities.value[i]
  cities.value[i].selected = true
  citySelected.value = currentCity.name
  showModal.value = false
}

const openModal = () => {
  showModal.value = true
}
</script>

<style lang="scss" scoped>
.top-bar {
  width: 100%;
  background-color: $black;
  padding: 0 22px;
  height: 50px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  &__button {
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.5px;
    color: $light;
    text-decoration: underline;
    position: relative;
    line-height: 24px;
    width: fit-content;
    padding-right: 30px;

    &:hover {

      &::before,
      &::after {
        top: 12px;
      }
    }

    &:after {
      position: absolute;
      content: " ";
      background: $light;
      right: 5.5px;
      top: 9px;
      width: 8px;
      height: 2px;
      transition: all 0.3s ease 0s;
      transform: rotate(45deg);
    }

    &:before {
      position: absolute;
      content: " ";
      background: $light;
      right: 0px;
      top: 9px;
      width: 8px;
      height: 2px;
      transition: all 0.3s ease 0s;
      transform: rotate(-45deg);
    }
  }

  &__social {
    display: flex;
    color: $white;
    gap: 6px;
  }

  &__menu {
    display: none;
    color: $white;

    @media (max-width: 1024px) {
      display: block;
    }

    &-icon {
      margin-left: 5px;
    }
  }
}
</style>