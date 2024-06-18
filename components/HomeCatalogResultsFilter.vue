<template>
  <div class="results-filter">

    <div class="results-filter__buttons">
      <button v-for="filter of props.filters" type="button"
        :class="['results-filter__button', { 'results-filter__button--active': props.currentFilter === filter.value }]"
        @click="filterProducts(filter.value)">{{ filter.title
        }}</button>
    </div>

    <div class="toggler">
      <div class=" toggler__wrapper">
        <label class="toggler__label">
          <input class="toggler__input" v-model="isChecked" type="checkbox" @click="toggleMode" />
          <div class="toggler__slider">
            <IconTile :class="['toggler__slider-icon', { 'toggler__slider-icon--active': isSimple === false }]" />
            <IconSimple :class="['toggler__slider-icon', { 'toggler__slider-icon--active': isSimple === true }]" />
          </div>
        </label>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  filters: {
    required: true,
    type: Object,
  },
  currentFilter: {
    required: true,
    type: String,
  },
  isSimple: {
    required: true,
    type: Boolean,
  }
})

const isChecked = ref<boolean>(props.isSimple)
const emit = defineEmits(['getFilter', 'getModeValue'])

function filterProducts(filter: string) {
  emit('getFilter', filter)
}

function toggleMode() {
  emit('getModeValue', isChecked.value)
}

</script>

<style lang="scss" scoped>
.results-filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 19px;
  gap: 25px;

  &__buttons {
    display: flex;
    gap: 26px;
  }

  &__button {
    padding: 0;
    transition: 0.2s;

    &--active {
      color: $primary;
    }
  }
}

.toggler {
  display: flex;
  align-items: center;
  justify-content: center;

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__input {
    display: none;
  }

  &__slider {
    position: relative;
    width: 64px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-icon {
      position: relative;
      width: 32px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $shadow;
      z-index: 50;
      transition: 0.2s;

      &--active {
        color: $primary;
      }
    }
  }
}
</style>