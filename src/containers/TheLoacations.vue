<template>
	<div class="TheLoacations">
		<div class="row">
				<div 
					v-for="(item, index) in  items"  
					v-bind:key="index"
					:class='{ 
						"col-12": item.audio,
						"col-md-6": !item.audio,
						}' 
				>
					<div class="TheLoacations-item bg-wrap" 
						:class='{
							"TheLoacations-item--disabled": item.disabled,
						 	"TheLoacations-item--audio": item.audio
							}'
							@click="qModal = true"  
					>
						<img :src='require("../assets/img/" + item.src)' alt="" class="img-bg">
						<div class="TheLoacations-item__row row">

							<div class="col-lg TheLoacations-item__main-col">
								<div class="TheLoacations-item__head" v-if="!item.disabled">

									<div class="progressBlock progressBlock--sm " >
										<div class="progressBlock__bar"> 
											<div class="progressBlock__item bg-primary"></div>
											<div class="progressBlock__item bg-primary"></div>
											<div class="progressBlock__item bg-primary"></div>
											<div class="progressBlock__item"></div>
											<div class="progressBlock__item"></div>
										</div>
									</div>
								</div>
								<div class="TheLoacations-item__foot row">
									<div class="TheLoacations-item__title col">{{item.title}}</div>
									<div class="TheLoacations-item__count col-auto" v-if="!item.disabled">{{item.count}}</div>
								</div>
									<div class="d-md-none" v-if="item.audio">
								<p>{{item.p}}</p>
							</div>
								<CButton color="primary" variant='outline'  v-if="item.disabled" class="TheLoacations-item__btn"><span></span>Разблокировать локацию</CButton> 
							</div>
							<div class="col-lg-auto col align-self-center d-none d-md-block" v-if="item.audio">
								<p>{{item.p}}</p>
							</div>
							<div class="col-atuo align-self-center" v-if="item.audio">
								<div class="TheLoacations-item__label ctooltip-wrap">
										<div class="ctooltip ctooltip--up">Это аудиовопрос</div>
										<img :src='require("../assets/img/headphones.svg" )' alt="">
								</div>
							</div>
						</div>
					</div>
				</div>
					<!-- title="Modal title"
					color="warning" -->
				<div class="modalQ"> 
					<CModal
						size="xl"
						:show.sync="qModal"
						closeOnBackdrop= "false" 
					>
					 <div class="row g-0">
						 <div class="col-lg-8">
							 <div class="modal-block modal-block--left">
								 <div class="h40 mono mb-3">Вопрос по локации</div>
								 <p class="h20 mb-4">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона</p>
									<div class="modal-block__img-wrap">
										<img :src='require("../assets/img/modalImg.jpg")' alt="" class="res-i">
									</div>
								</div>
							</div>
							<div class="col-lg">
								<form class="modal-block modal-block--right">
									<div class="h30 mono mb-3 d-none d-lg-block">Введите ваш ответ</div>
									<div class="d-none" >
											<!-- label="Year" -->
										<CSelect
											placeholder="Введите ваш ответ"
											:options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]"
											class="mb-4"
										/>
										<CButton color="primary"  class="w-100 h30 mono mb-3" ><span></span>Отправить</CButton>
									</div>
									<div  class="d-none">
											<!-- label="Year" -->
										<CInput 
												placeholder="Enter your name"
												value="Ваш ответ"
												wasValidated="true"
												isValid="true"
											/>
										<CInput 
												placeholder="Enter your name"
												value="Ваш ответ"
												wasValidated="true"
												isValid="false"
											/>
										<CButton color="primary"  class="w-100 h30 mono mb-3" ><span></span>Перейти в локацию</CButton>
									</div>
									<div>
										<label  class="btn-radio"><input type="radio" name="var" class="btn-radio__input"><span class="btn-radio__text">Вариант 1</span></label>
										<label  class="btn-radio"><input type="radio" name="var" class="btn-radio__input"><span class="btn-radio__text">Вариант 2</span></label>
										<label  class="btn-radio"><input type="radio" name="var" class="btn-radio__input"><span class="btn-radio__text">Вариант 3</span></label>
										<label  class="btn-radio"><input type="radio" name="var" class="btn-radio__input"><span class="btn-radio__text">Вариант 4</span></label>
										<label  class="btn-radio"><input type="radio" name="var" class="btn-radio__input"><span class="btn-radio__text">Вариант 5</span></label>
									</div>
									<CButton color="primary"  class="w-100 h30 mono mt-auto" ><span></span>Отправить</CButton>
								</form>
							</div>
					 </div>
					</CModal>
				</div>
		</div>
	</div>	
</template>

<script> 
export default {
  name: 'TheTheLoacations',
  data() {
    return {
				qModal: false,
				headphones: "headphones",
				items: [
					{
						src:'cultur.jpg',
						title:'Название объекта', 
						disabled: false,
						count: '3 из 5',
					},
					
					{
						src:'footbal.jpg',
							title:'Название объекта', 
						disabled: true,
					},
					{
						src:'uefa.jpg', 
						title:'Название объекта', 
						disabled: true,
					},
					
					{
						src:'uefa.jpg', 
						title:'Название объекта', 
						disabled: true,
					},

					{
						audio: true,
						src:'uefa.jpg', 
						title:'Название объекта', 
						disabled: true,
						p: 'Чтобы разблокировать эту локацию вы должны отправиться на ул. Симанова и найти qr код на стене такой то'
					},

				] 
		}
	}
}
</script>
