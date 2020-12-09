<template>
	<div class="ThemeSection">
		<div class="row">
				<div class="col-xl-4 col-md-6" 
					v-for="(item, index) in  items"  
					v-bind:key="index"
				>
					<div class="ThemeSection-item" :style="item.style"
					
						>
						<div class="ThemeSection-item__head row">
							<div class="col ThemeSection-item__title">{{item.title}}</div>
							<div class="ThemeSection-item__count-wrap col-auto text-center">
								<div class="ThemeSection-item__title-sm"> Локации </div>
								<div class="ThemeSection-item__counter">
									<span class="text-primary">{{item.counterLocalStep}}</span>
									/
									{{item.counterLocalTotal}}
								</div> 
							</div>
							<div class="ThemeSection-item__count-wrap col-auto text-center">
								<div class="ThemeSection-item__title-sm"> Вопросы </div>
								<div class="ThemeSection-item__counter">
									<span class="text-primary">{{item.counterQStep}}</span>
									/
									{{item.counterQTotal}}
								</div> 
							</div>
						</div>
						<div class="ThemeSection-item__img-wrap">
							<img :src='require("../assets/img/" + item.src)' alt="" class="ThemeSection-item__img">
						</div>
						<div class="TheCharts">
							<div class="TheCharts-item"  > 
								<vue-circle
									:progress= "item.perc1"
									:size="85"
									:reverse="false"
									line-cap="square"
									:fill="fill"
									empty-fill="#fff"
									:animation-start-value="0.0"
									:start-angle="30"
									insert-mode="append"
									:thickness="8"
									:show-percent="false" >
									<p>
										<strong>3</strong>
									 	из 5
									</p>
								</vue-circle>  
								<div class="TheCharts-item__caption">Локации</div>
							</div>
							
							<div class="TheCharts-item"  > 
								<vue-circle
									:progress= "item.perc2"
									:size="85"
									:reverse="false"
									line-cap="square"
									:fill="fill"
									empty-fill="#fff"
									:animation-start-value="0.0"
									:start-angle="30"
									insert-mode="append"
									:thickness="8"
									:show-percent="false" >
									<p>
										<strong>3</strong>
									 	из 5
									</p>
								</vue-circle>  
								<div class="TheCharts-item__caption">Локации</div>
							</div>

						</div>
					</div>
					 
				</div>
		</div>
	</div>	
</template>

<script> 
	import VueCircle from 'vue2-circle-progress'
export default {
	name: 'TheThemeSection',
	components: {
      VueCircle
		},
  data() {
    return {
				fill : { gradient: [["#F7A600", .01], ["#D14D18 ", 1]], gradientAngle: 180  },
				items: [
					{
						src:'cultur.jpg',
						title:'КУЛЬТУРА',
						counterLocalStep: 3,
						counterLocalTotal: 5,
						counterQStep: 3,
						counterQTotal: 15,
						perc1: '30',
						perc2: '40',
						style: 'background: linear-gradient(136.41deg, #899CB4 3.04%, #1E4062 97.38%);'
					},
					
					{
						src:'footbal.jpg',
						title:'Футбол',
						counterLocalStep: 3,
						counterLocalTotal: 5,
						counterQStep: 3,
						counterQTotal: 15,
						perc1: '30',
						perc2: '40',
						style: 'background: linear-gradient(133.28deg, #AD6740 1.5%, #344462 101.64%);'
					},
					{
						src:'uefa.jpg',
						title:'ЕВРО',
						counterLocalStep: 3,
						counterLocalTotal: 5,
						counterQStep: 3,
						counterQTotal: 15,
						perc1: '30',
						perc2: '40',
						style: 'background: linear-gradient(135.93deg, #1D1D1D 1.2%, #2A3E0E 97.9%);'
					},

				] 
		}
	}
}
</script>
