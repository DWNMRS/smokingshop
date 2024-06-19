<template>
  <Transition name="fade">
    <div v-if="showPopup" class="popup">
      <span>Ваш город {{ citySelected }} верно?</span>
      <div class="popup__buttons">
        <AppButton secondary class="popup__button" @click="confirm">Дa
        </AppButton>
        <AppButton primary class="popup__button" @click="decline">Нет
        </AppButton>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>

defineProps({
  citySelected: {
    type: String,
    required: false
  }
})

const showPopup = ref<boolean>(false)
const emit = defineEmits(['changeCity'])
const confirm = () => {
  showPopup.value = false
}

const decline = () => {
  showPopup.value = false
  emit('changeCity')
}

onMounted(() => {
  setTimeout(() => {
    showPopup.value = true
  }, 1000)
})
</script>

<style lang="scss" scoped>
.popup {
  position: absolute;
  background-color: $primary;
  z-index: 4;
  top: 11px;
  left: 0;
  width: 259px;
  height: 109px;
  border-radius: 6px;
  font-size: 16px;
  color: $white;
  padding: 24px 17px 16px;
  animation: slideIn 0.5s;

  &__buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
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
</style>