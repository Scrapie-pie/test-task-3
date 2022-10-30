<template>
  <footer class="footer">
    <BaseContainer>
      <div class="footer-nav">
        <BaseIcon icon="logo" class="footer-logo"/>
        <div class="footer-nav-item">
          <h4>Услуги</h4>
          <div class="footer-links">
            <BaseLink class="footer-links-item">Support and development</BaseLink>
            <BaseLink class="footer-links-item">UI/UX and product design</BaseLink>
            <BaseLink class="footer-links-item">Progressive Web Applications (PWA)</BaseLink>
          </div>
        </div>
        <div class="footer-nav-item">
          <h4>Компания</h4>
          <div class="footer-links">
            <BaseLink class="footer-links-item">О компании</BaseLink>
            <BaseLink class="footer-links-item">Проекты</BaseLink>
            <BaseLink class="footer-links-item">Контакты</BaseLink>
          </div>
        </div>
        <div class="footer-nav-item">
          <h4>Контакты</h4>
          <div class="footer-contacts">
            <div class="footer-links">
              <div class="footer-links-item">
                <BaseLink href="./index.html" icon="file" download>
                  Скачать презентацию
                </BaseLink>
              </div>
              <div class="footer-links-item">
                <BaseContact type="tel" value="+7 (499) 999-99-99" mod="lg"/>
              </div>
              <div class="footer-links-item">
                <BaseContact type="mail" value="info@site.com"/>
              </div>
            </div>
            <div class="footer-socials">
              <BaseLink icon="telegram" />
              <BaseLink icon="whatsup" />
            </div>
          </div>

        </div>
      </div>

      <div class="footer-rights">
        <span>© Company 2022. All rights reserved.</span>
        <BaseLink>Политика конфиденциальности</BaseLink>
      </div>

    </BaseContainer>
  </footer>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import BaseLink from './BaseLink.vue';
import BaseContact from './BaseContact.vue';
import BaseContainer from './BaseContainer.vue';

export default {
  name: 'TheFooter',
  components: {
    BaseIcon,
    BaseLink,
    BaseContact,
    BaseContainer
  }
}
</script>

<style lang="scss">
.footer {
  .link, .contact {
    color: #FFF;
  }

  &-logo {
    --fill-2: #FFF;
    @include to-responsive(font-size, 84px, 112px);
  }
  //margin-top: 160px;
  padding-top: 50px;
  padding-bottom: 20px;

  @include to-responsive((
    margin-top: (100px, 160px),
  ));

  background: linear-gradient(93.29deg, #388AF3 21.04%, #A483E2 88.77%);
  color: #FFF;

  &-nav {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;

    &-item {
      @include flex-it(column, 15px);
      h4 {
        @include flex-it(row, 10px);
        align-items: center;
        color: #FFF;
        &::after {
          content: '';
          @include create-figure(9px, currentColor, 50%);
        }
      }
    }
  }

  &-links {

    width: 100%;
    max-width: 190px;
    @include flex-it(column, 20px);
    &-item {
      font-weight: 600;
      font-size: 14px;
    }

  }

  &-contacts {
    @include flex-it(row, 10px);
    justify-content: space-between;
    align-items: center;
  }

  &-socials {
    @include flex-it(column, 22px);
  }

  &-rights {
    @include flex-it(row, 10px);
    justify-content: space-between;
    font-weight: 600;
    font-size: 14px;
    padding-top: 50px;
  }


  @media (max-width: 930px) {
    &-nav {
      grid-template-columns: repeat(3, 1fr);
    }
    &-logo {
      grid-column: 1/-1;
    }
  }

  @include media($max: md) {
    &-nav {
      grid-template-columns: 1fr;
      &-item {
        gap: 5px;
        max-width: 270px;
      }
    }
    &-links {
      gap: 15px;
    }
  }

  @include media($max: sm) {
    &-rights {
      flex-direction: column;
    }
  }
}
</style>
