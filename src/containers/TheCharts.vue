<template>
	<div class="TheCharts">
		<div class="TheCharts-item"  
			v-for="(item, index) in items" 
			v-bind:key="index"
			> 
			<vue-circle
				:progress= "item.perc"
				:size="60"
				:reverse="false"
				line-cap="square"
				:fill="fill"
				empty-fill="#fff"
				:animation-start-value="0.0"
				:start-angle="30"
				insert-mode="append"
				:thickness="8"
				:show-percent="false">
				<p>{{item.p}}</p>
			</vue-circle>  
			<div class="TheCharts-item__caption">{{item.caption}}</div>
		</div>
	</div>
</template>

<script> 
import VueCircle from 'vue2-circle-progress'
export default {
  name: 'TheProgress',
  components: {
      VueCircle
		},
		data(){
      return{
				fill : { gradient: [["#F7A600", .01], ["#D14D18 ", 1]], gradientAngle: 180  },
				items: [
					{
						perc: (100 * 3 / 5),
						p: '3/5',
						caption:"Локации",
					},
					
					{
						perc:(100 * 4 / 5),
						p: '4/5',
						caption: 'Вопросы',
					},
					{
						perc:(75),
						p: '75',
						caption: 'Пройдено',
					}, 
				] 
      }
    },
    methods:{
      // progress(event,progress,stepValue){
      //   console.log(stepValue);
      // },
      // progress_end(event){
      //   console.log("Circle progress end");
      // }
    }
}
</script>
