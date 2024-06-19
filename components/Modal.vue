<template>
  <Transition name="fade">
    <div v-if="showModal" class="modal-city">
      <div class="modal-city__body">
        <span class="modal-city__request">Укажите ваш город</span>
        <div class="modal-city__buttons">
          <AppButton v-for="(city, index) in cities" :key="index" unstyled class="modal-city__button"
            @click="selectCity(index)">
            {{ city.name }}
          </AppButton>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>

const emit = defineEmits(['selectCity'])
defineProps({
  cities: {
    type: Object,
    required: true,
  },
  showModal: {
    type: Boolean,
    required: true,
  },
})
const selectCity = (i: string) => {
  emit('selectCity', i)
}


</script>

<style lang="scss" scoped>
.modal-city {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.576);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  animation: slideIn 0.5s;

  &__body {
    background-color: $white;
    padding: 40px 56px 60px;
    border-radius: 5px;
  }

  &__request {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;

  }

  &__buttons {
    margin-top: 46px;
  }

  &__button {
    color: $text;

    &:hover {
      color: $primary;
    }
  }


  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

}
</style>