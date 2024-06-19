<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__links">
        <h3 class="footer__links-title">Мой аккаунт</h3>
        <a class="footer__links-item" href="#">Мой аккаунт</a>
        <a class="footer__links-item" href="#">История заказов</a>
        <a class="footer__links-item" href="#">Наши контакты</a>
        <a class="footer__links-item" href="#">Политика</a>
        <a class="footer__links-item" href="#">Блог</a>
      </div>
      <div class="footer__links">
        <h3 class="footer__links-title">Помощь</h3>
        <a class="footer__links-item" href="#">Поддержка</a>
        <a class="footer__links-item" href="#">Как купить</a>
        <a class="footer__links-item" href="#">Оплата и доставка</a>
        <a class="footer__links-item" href="#">Как вернуть</a>
        <a class="footer__links-item" href="#">Контакты</a>
      </div>
      <div class="footer__links">
        <h3 class="footer__links-title">Категории</h3>
        <a class="footer__links-item" href="#">IQOS</a>
        <a class="footer__links-item" href="#">Аксессуары</a>
        <a class="footer__links-item" href="#">Кальяные смеси</a>
        <a class="footer__links-item" href="#">Кальяны</a>
        <a class="footer__links-item" href="#">Комплектующие</a>
        <a class="footer__links-item" href="#">Мерч</a>
        <a class="footer__links-item" href="#">Уголь</a>
        <a class="footer__links-item" href="#">Электронные сигареты</a>
      </div>
      <div class="footer__links">
        <h3 class="footer__links-title">Соц сети</h3>
        <div class="footer__social">
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
        <a class="footer__info" href="#">© 2023 Smoking Shop.Все права защищены.</a>
        <a class="footer__inn" href="#">ИНН 4345427922 КПП 434501001 ОГРН
          1154350010473</a>
        <IconRestriction  class="footer__restriction" />
      </div>
    </div>

    <div class="footer__bottom">
      <span class="footer__bottom-warning">МИНЗДРАВ ПРЕДУПРЕЖДАЕТ: КУРЕНИЕ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ!</span>
      <p class="footer__bottom-info">Мы не рекламируем табак и курение. Вся информация на сайте носит информационный характер. Дистанционная продажа табачных изделий не ведется.</p>
    </div>

    <a href="#" class="footer__dev">
      Разработка сайта
      <IconDev class="footer__dev-icon"/>
    </a>

  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &__top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 33px;
    padding-bottom: 45px;
  }

  &__links {
    display: flex;
    flex-direction: column;
    position: relative;
    font-size: 13px;
    line-height: 16px;

    &-title {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 11px;
    }

    &-item {
      transition: 0.2s;

      &:hover {
        color: $primary;
      }
    }
  }

  &__social {
    margin-left: -7px;
    margin-top: 6px;
    margin-bottom: 29px;
    display: flex;
    gap: 6px;
  }

  &__info {
    margin-top: 4px;
    font-size: 14px;
    line-height: 24px;
    color: $primary;
    margin-bottom: 4px;
  }

  &__restriction {
    width: 72px;
    height: 72px;
    position: absolute;
    top: 0px;
    right: 0;
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-top: 1px solid $shadow;
    padding-top: 66px;

    &-warning {
      color: $secondary;
    }

    &-info {
      margin-top: 55px;
      max-width: 768px;
      color: $gray;
    }
  }

  &__dev {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    margin-top: 57px;

    &-icon {
      margin-left: 20px;
    }
  }
}
</style>