<template>
  <div class="top-bar">
    <div class="container">
      <AppButton unstyled class="top-bar__button" type="button">
        г. Москва
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
    </div>
  </div>
</template>

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
  }

  &__button {
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.5px;
    color: $light;
    text-decoration: underline;
    position: relative;
    line-height: 24px;

    &:after {
      position: absolute;
      content: " ";
      background: $light;
      right: -25.5px;
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
      right: -29px;
      top: 9px;
      width: 8px;
      height: 2px;
      transition: all 0.3s ease 0s;
      transform: rotate(-45deg);
    }
  }

  &__social {
    display: flex;
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