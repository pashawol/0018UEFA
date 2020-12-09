<template>
	<div>
		<div class="text-white text-right mb-3 d-none d-md-block">Пройдено квеста, %</div>
		<div class="progressBlock d-none d-md-block">
			<div class="progressBlock__bar">
				<div class="progressBlock__total"  style="left:calc(70% - 2.66375rem)">75</div>
				<div class="progressBlock__item bg-primary"></div>
				<div class="progressBlock__item bg-primary"></div>
				<div class="progressBlock__item bg-primary"></div>
				<div class="progressBlock__item"></div>
				<div class="progressBlock__item"></div>
			</div>
		</div>
		<div class="d-md-none text-white"><small>Пройдено квеста</small> <span class="text-primary progressBlock__count">75%</span></div>
	</div>
</template>

<script> 
export default {
  name: 'TheProgress',
  
}
</script>
