<template>
  <div>
  <CHeader class="top-nav"   :fixed="false" >
    <CContainer>
      <CRow align-vertical="center">
        <CCol class="col-auto d-lg-none" >
          <div 
          class="c-header-nav-link--with-icon toggle-menu-mobile toggle-menu-mobile--js "
          :class="{on: isShowMenu}"
          @click="show"
          >
           <span></span>
          </div>
        </CCol>
        <CCol class="col-lg-auto" >
          <div to="/index" class="d-inline-block">
             <CIcon 
              class="c-sidebar-brand-minimized" 
              name="logo" 
              size="custom-size" 
              :width="138" 
              :height="72"
              viewBox="0 0 138 72"
            />
          </div>
        </CCol>
        <div class="col d-md-down-none">
            <Nav/>
        </div>
        <CCol class="col-auto" >
          <CHeaderNav class="nav-btns ">
            <CHeaderNavItem >
              <CHeaderNavLink class="c-header-nav-link--with-icon">
                <CIcon name="off"/>
              </CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem class=" ml-4">
              <CHeaderNavLink class="c-header-nav-link--with-icon"
                @click="showReg"
              >
                <CIcon name="user"/>
              </CHeaderNavLink>
            </CHeaderNavItem>
          </CHeaderNav>
        </CCol>
      </CRow>
    </CContainer>  
  </CHeader>
    <div class="body-before" :class="{active: isShowMenu}" @click="show"></div>
    <div class="menu-mobile menu-mobile--js d-lg-none " 
      :class="{active: isShowMenu}">
				 <div class="c-header-nav-link--with-icon toggle-menu-mobile toggle-menu-mobile--js "
         :class="{on: isShowMenu}"
         @click="show"
         >
           <span></span>
          </div>
					<div class="menu-mobile__inner">
						 <CIcon 
              class="c-sidebar-brand-minimized" 
              name="logo" 
              size="custom-size" 
              :width="138" 
              :height="72"
              viewBox="0 0 138 72"
            />
            <div class="text-center my-2">
              <img class="res-i" src="../assets/img/mobile-menu-logo.png" alt="">
            </div>
            <Nav/>
					</div>
				</div>
        
    <div class="form-block " 
      :class="{active: isShowReg}">
				
					<div class="form-block__inner">
              <div class="form-wrap"> 
                <CForm>
                  <div class="form-block__title">
                    <div class="c-header-nav-link--with-icon toggle-menu-mobile toggle-menu-mobile--js "
                      :class="{on: isShowReg}"
                      @click="showReg"
                      >
                        <span></span>
                    </div>
                    Регистрация
                  </div>
                  <p>Прежде чем пройти квест вам необходимо войти или зарегистрироваться на сайте</p>
                  <p><span>Уже регистрировались?</span><a href="#" class="text-primary">Войти</a></p>
                  <CInput   placeholder="Фамилия"  />
                  <CInput   placeholder="Имя"  />
                  <CInput   placeholder="Никнейм (для топа)"  />
                  <CInput   placeholder="E-mail"  />
                  <CInput   placeholder="Пароль"  />
                  <CInput   placeholder="Повторите пароль"  />
                  <label class="custom-input custom-input--lg d-block">
                    <input type="checkbox" class="custom-input__input">
                    <span class="custom-input__lab"></span>
                    <span class="custom-input__text">Заполняя данную форму вы соглашаетесь с <a href="#">политикой конфиденциальности</a></span>
                  </label>
                  <label class="custom-input custom-input--lg d-block">
                    <input type="checkbox" class="custom-input__input">
                    <span class="custom-input__lab"></span>
                    <span class="custom-input__text">Я согласен с <a href="#">правилами конкурса</a></span>
                  </label>
                  <CButton color="primary" class="ttu mono" ><span></span>Зарегистрироваться</CButton>
                </CForm>
              </div>
					</div>
		</div>
    
    <div class="form-block " 
      :class="{active: isShowCabinet}">
				
					<div class="form-block__inner">
              <div class="form-wrap"> 
                <CForm>
                  <div class="form-block__title">
                    <div class="c-header-nav-link--with-icon toggle-menu-mobile toggle-menu-mobile--js "
                      :class="{on: isShowCabinet}"
                      @click="showCabinet"
                      >
                        <span></span>
                    </div>
                    Войти на сайт
                  </div>
                  <p>Прежде чем пройти квест вам необходимо войти или зарегистрироваться на сайте</p>
                  <p><span>Впервый раз на сайте?</span><a href="#" class="text-primary">Зарегистрироваться</a></p> 
                  <CInput   placeholder="E-mail"  />
                  <CInput   placeholder="Пароль"  /> 
                  <CRow align-vertical="center">
                    <div class="col-auto">
                      <CButton color="primary" class="ttu mono" ><span></span>Войти</CButton>
                    </div>
                    <div class="col-auto">
                      <a href="#" class="text-primary">Забыли пароль?</a>
                    </div>

                  </CRow>
                </CForm>
              </div>
					</div>
		</div>

  </div>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'  
import Nav from './Nav'  
export default {
  name: 'TheHeader', 
  components: {
    TheHeaderDropdownAccnt,
    Nav
  },
  data() {
    return {
      isShowMenu: false,
      isShowReg: false,
    }
  },
  methods: {
      show() {
        this.isShowMenu = !this.isShowMenu;
        document.body.classList.toggle('fixed');
      },
      
      showReg(e) {
        event.preventDefault();
        this.isShowReg = !this.isShowReg;
        document.body.classList.toggle('fixed');
      },

    }
}
</script>
