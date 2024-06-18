<template>
  <button :class="buttonClasses">
    <slot />
  </button>
</template>

<script lang='ts' setup>
const props = defineProps({
  secondary: {
    required: false,
    type: Boolean
  },
  unstyled: {
    required: false,
    type: Boolean
  },
  className: {
    required: false,
    type: String,
    default: ''
  },
})
const buttonClasses = computed(() => {
  return {
    'button': true,
    'button--secondary': props.secondary,
    'button--unstyled': props.unstyled,
    [props.className]: true,
  }
})

</script>

<style lang='scss'>
.button {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  background-color: $primary;
  color: $white;
  padding: 7px 26px;
  transition: 0.2s;
  border-radius: 6px;
  width: fit-content;

  &:hover {
    background-color: $primary-light;
    cursor: pointer;
  }

  &--secondary {
    background-color: $black;
    color: $white;

    &:hover {
      background-color: $dark;
      cursor: pointer;
    }
  }

  &--unstyled {
    background-color: transparent;
    border: none;
    max-width: none;
    max-height: none;
    min-width: 0;
    min-height: 0;
    padding: 0;
    margin: 0;

    &:hover {
      cursor: pointer;
      background-color: transparent;
    }
  }
}
</style>