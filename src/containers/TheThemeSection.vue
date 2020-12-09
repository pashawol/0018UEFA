<template>
	<div class="ThemeSection">
		<div class="row">
				<div class="col-xl-4 col-md-6" 
					v-for="(item, index) in  items"  
					v-bind:key="index"
				>
					<div class="ThemeSection-item" :style="item.style">
						<div class="ThemeSection-item__head row">
							<div class="col ThemeSection-item__title">{{item.title}}</div>
							<div class="col-auto text-center">
								<div class="ThemeSection-item__title-sm"> Локации </div>
								<div class="ThemeSection-item__counter">
									<span class="text-primary">{{item.counterLocalStep}}</span>
									/
									{{item.counterLocalTotal}}
								</div> 
							</div>
							<div class="col-auto text-center">
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
					</div>
				</div>
		</div>
	</div>	
</template>

<script> 
export default {
  name: 'TheThemeSection',
  data() {
    return {
				items: [
					{
						src:'cultur.jpg',
						title:'КУЛЬТУРА',
						counterLocalStep: 3,
						counterLocalTotal: 5,
						counterQStep: 3,
						counterQTotal: 15,
						style: 'background: linear-gradient(136.41deg, #899CB4 3.04%, #1E4062 97.38%);'
					},
					
					{
						src:'footbal.jpg',
						title:'Футбол',
						counterLocalStep: 3,
						counterLocalTotal: 5,
						counterQStep: 3,
						counterQTotal: 15,
						style: 'background: linear-gradient(133.28deg, #AD6740 1.5%, #344462 101.64%);'
					},
					{
						src:'uefa.jpg',
						title:'ЕВРО',
						counterLocalStep: 3,
						counterLocalTotal: 5,
						counterQStep: 3,
						counterQTotal: 15,
						style: 'background: linear-gradient(135.93deg, #1D1D1D 1.2%, #2A3E0E 97.9%);'
					},

				] 
		}
	}
}
</script>
