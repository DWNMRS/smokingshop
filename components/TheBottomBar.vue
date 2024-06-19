<template>
  <div class="bottom-bar">
    <div class="container">
      <NuxtLink to="/">
        <img src="/assets/images/logo.png">
      </NuxtLink>
      <a class="bottom-bar__link" href="tel:+7-900-000-99-99">
        <IconPhone class="bottom-bar__link-icon" />+7 900 000 99 99
      </a>
      <a class="bottom-bar__link" href="mailto:contact@greenshop.com">
        <IconMail class="bottom-bar__link-icon" />contact@greenshop.com
      </a>
      <a class="bottom-bar__link" href="#">
        <IconMark class="bottom-bar__link-icon" />610001, Кировская обл, г Киров, Комсомольская ул, д. 46/6, оф. 401
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.bottom-bar {
  position: relative;
  z-index: 3;
  width: 100%;
  background-color: $black;
  padding: 20px 22px;
  height: 88px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $white;
  }

  &__link {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 24px;
    transition: 0.2s;

    &:hover {
      color: $primary;
    }

    &-icon {
      margin-right: 10px;
    }
  }
}
</style>