<template>
  <div class="social">
		<a 
			class="social__item"
			v-for="(socItem, index) in socItems" 
			:href="socItem.href" 
			v-bind:key="index"
			>
			<CIcon 
				class="social__icon" 
				:name="socItem.name"
			/>
		</a>
  </div>
</template>

<script>
export default {
	name: 'TheSocialBtn',
	data() {
    return {
			socItems: [
				{
					name:'twitter',
					href: "#"
				},
				
				{
					name:'facebook',
					href: "#"
				},
				{
					name:'instagram',
					href: "#"
				},
				{
					name:'vk',
					href: "#"
				}, 
			]
		}
	}
}
</script>
