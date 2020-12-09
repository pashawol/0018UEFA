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
		</div>
	</div>	
</template>

<script> 
export default {
  name: 'TheTheLoacations',
  data() {
    return {
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
