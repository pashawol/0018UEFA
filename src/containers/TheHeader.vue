<template>
  <div>
  <CHeader class="top-nav"   :fixed="false" >
    <CContainer>
      <CRow align-vertical="center">
        <CCol class="col-auto d-lg-none" >
          <div 
          class="c-header-nav-link--with-icon toggle-menu-mobile toggle-menu-mobile--js "
          :class="{on: isShowMenu}"
          @click="showMenu"
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
              <div 
                  class="c-header-nav-link c-header-nav-link--with-icon toggle-menu-mobile  " 
                  @click="showReg"
                  >
                  <CIcon name="off"/>
                </div>
            </CHeaderNavItem>
            <CHeaderNavItem class=" ml-4">
            
               <div 
                  class="c-header-nav-link c-header-nav-link--with-icon toggle-menu-mobile  " 
                  @click="showCabinet"
                  >
                  <CIcon name="user"/>
                </div>
            </CHeaderNavItem>
          </CHeaderNav>
        </CCol>
      </CRow>
    </CContainer>  
  </CHeader>
    <div class="body-before" 
    @click="hideModal" ></div>
    <div class="menu-mobile menu-mobile--js d-lg-none " 
      :class="{active: isShowMenu}">

				 <div class="c-header-nav-link--with-icon toggle-menu-mobile"
         @click="showMenu"
         :class="{on: isShowMenu}"
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
                    <div class="c-header-nav-link--with-icon toggle-menu-mobile"
                      @click="showReg"
                      :class="{on: isShowReg}"
                      >
                        <span></span>
                    </div>
                    Регистрация
                  </div>
                  <p>Прежде чем пройти квест вам необходимо войти или зарегистрироваться на сайте</p>
                  <p><span>Уже регистрировались?</span><a href="#" class="text-primary"  @click="showLogin">Войти</a></p>
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
      :class="{active: isShowLogin}">
				
					<div class="form-block__inner">
              <div class="form-wrap"> 
                <CForm>
                  <div class="form-block__title">
                    <div class="c-header-nav-link--with-icon toggle-menu-mobile toggle-menu-mobile--js "
                      :class="{on: isShowLogin}"
                      @click="showLogin"
                      >
                        <span></span>
                    </div>
                    Войти на сайт
                  </div>
                  <p>Прежде чем пройти квест вам необходимо войти или зарегистрироваться на сайте</p>
                  <p><span>Впервый раз на сайте?</span>
                    <a href="#" 
                    @click="showReg"
                    class="text-primary">Зарегистрироваться</a>
                  </p> 
                  <CInput   placeholder="E-mail"  />
                  <CInput   placeholder="Пароль"  /> 
                  <CRow align-vertical="center" class="pb-5">
                    <div class="col-auto">
                      <CButton color="primary" class="ttu mono"  ><span></span>Войти</CButton>
                    </div>
                    <div class="col-auto">
                      <a href="#" @click="showRestorePassword" class="text-primary">Забыли пароль?</a>
                    </div> 
                  </CRow>

                  <CRow align-vertical="center">
                    <p class="col-auto">
                      <span>Войти с помощью</span>
                    </p>
                    <div class="col-auto mb-2">
                      <button class="btn btn-vk btn-soc-reg">
                        <CIcon name="vk" class="c-icon-custom-size"/>
                      </button>
                      <button class="btn btn-facebook btn-soc-reg ml-3">
                        <CIcon name="facebook" class="c-icon-custom-size "/>
                      </button>
                    </div>

                  </CRow>
                </CForm>
              </div>
					</div>
		</div>
    <div class="form-block " 
      :class="{active: isShowCabinet}">
				
					<div class="form-block__inner">
              <div class="form-wrap">  
                  <div class="form-block__title">
                    <div class="c-header-nav-link--with-icon toggle-menu-mobile toggle-menu-mobile--js "
                      :class="{on: isShowCabinet}"
                      @click="hideModal"
                      >
                        <span></span>
                    </div>
                    Личный кабинет
                  </div>
                  <div class="form-block__group mb-3">
                    <div class="form-block__group-title mono">Игорь Валентинов</div>
                    <p><span>Razoblachitel</span></p>
                    <a href="mailto:sample@sample.com" class="text-primary">sample@sample.com</a>
                  </div>

                  <div class="form-block__group">
                    <p class="mb-0"><span>Времени затрачено на квест</span></p>
                    <div class="form-block__group-title mono">1 ч 20 мин</div>
                  </div>
                  
                  <div class="form-block__group">
                    <p class="mb-0"><span>Место в рейтинге</span></p>
                    <div class="form-block__group-title mono">12</div>
                  </div>
                  <div class="form-block__group">
                    <p class="mb-0"><span>Локаций открыто</span></p>
                    <div class="form-block__group-title mono">3 / 5</div>
                  </div>
                  <div class="form-block__group">
                    <p class="mb-0"><span>Ответов на вопросы</span></p>
                    <div class="form-block__group-title mono">4 / 25</div>
                  </div>
                  <div class="form-block__group">
                    <p class="mb-0"><span>Общее количество баллов</span></p>
                    <div class="form-block__group-title mono">4 / 25</div>
                  </div>
              </div>
              <div class="form-block__footer">
                <p><a href="#"class="text-primary">Редактировать профиль</a></p>
                <p><a href="#"class="text-primary">Сменить пароль</a></p>
                <p><a href="#"class="text-primary">Выйти</a></p>
              </div>
					</div>
		</div>
    
    <div class="form-block " 
      :class="{active: isShowRestorePassword}">
				
					<div class="form-block__inner">
              <div class="form-wrap">  
                <CForm> 
                  
                  <div class="form-block__title">
                    <div class="c-header-nav-link--with-icon toggle-menu-mobile toggle-menu-mobile--js "
                      :class="{on: isShowRestorePassword}"
                      @click="hideModal"
                      >
                        <CIcon  
                          name="arrowLeft"  
                        />
                    </div>
                    Востановление пароля
                  </div>
                  <p>Введите ваш e-mail, который вы&nbsp;указывали при регистрации и&nbsp;мы&nbsp;вышлем на&nbsp;него  инструкцию по&nbsp;востановлению пароля</p>
                  <CInput   placeholder="E-mail"  /> 
                  <CButton color="primary" class="ttu mono" ><span></span>Востановить</CButton>
 
                </CForm>
              </div>
               
					</div>
		</div>

    <div class="form-block " 
      :class="{active: isShowThank}">
				
					<div class="form-block__inner">
              <div class="form-wrap d-block">  
                  <div class="form-block__title">
                    <!-- <div class="c-header-nav-link--with-icon toggle-menu-mobile toggle-menu-mobile--js "
                      :class="{on: isShowThank}"
                      @click="hideModal"
                      >
                        <span></span>
                    </div> -->
                    Спасибо за регистрацию
                  </div>
                   <p>Давно выяснено, что при оценке дизайна и&nbsp;композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона</p>
                  <label class="custom-input d-block mb-3 small">
                    <input type="checkbox" class="custom-input__input" v-model="isChecked">
                    <span class="custom-input__lab"></span>
                    <span class="custom-input__text">Я согласен с условиями проведения конкурса</span>
                  </label>
                  <CButton :disabled="!isChecked" color="primary" class="ttu mono" ><span></span>Старт</CButton>
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
      isShowLogin: false,
      isShowCabinet: false,
      isShowRestorePassword: false, 
      isShowThank: false, 
      isChecked: false, 
    }
  },
  methods: {
      showMenu(event) {
        // event.preventDefault();
        this.isShowReg = false; 
        this.isShowLogin = false; 
        this.isShowCabinet = false; 
        this.isShowRestorePassword = false; 
        this.isShowMenu = !this.isShowMenu;  
        document.body.classList.toggle('fixed');
      },
      
      showReg(event) { 
        // event.preventDefault();
        this.isShowLogin == false ?   document.body.classList.toggle('fixed') : '';
        this.isShowMenu = false; 
        this.isShowLogin = false; 
        this.isShowCabinet = false; 
        this.isShowRestorePassword = false; 
        this.isShowReg = !this.isShowReg;
      },
      showLogin(event) {
        // event.preventDefault();  
        this.isShowReg == false ?   document.body.classList.toggle('fixed') : '';
        this.isShowMenu = false; 
        this.isShowReg = false; 
        this.isShowCabinet = false; 
        this.isShowRestorePassword = false; 
        this.isShowLogin = !this.isShowLogin;
      },
      showCabinet(event) {
        // event.preventDefault();  
        this.isShowReg = false ;
        this.isShowMenu = false; 
        this.isShowReg = false; 
        this.isShowRestorePassword = false; 
        this.isShowCabinet = !this.isShowCabinet;
        document.body.classList.toggle('fixed');
      },
      showRestorePassword(event) {
        event.preventDefault();  
        this.isShowLogin == false ?   document.body.classList.toggle('fixed') : '';
        this.isShowReg = false ;
        this.isShowMenu = false; 
        this.isShowReg = false;  
        this.isShowCabinet = false;
        this.isShowLogin = false; 
        this.isShowRestorePassword = !this.isShowRestorePassword;
        // document.body.classList.toggle('fixed');
      },
      hideModal() {
        this.isShowMenu = false; 
        this.isShowReg = false; 
         this.isShowLogin = false; 
         this.isShowCabinet = false; 
         this.isShowRestorePassword = false; 
         document.body.classList.remove('fixed')
      }

    }
}
</script>
