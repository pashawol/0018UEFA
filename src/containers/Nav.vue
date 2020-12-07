<template>
	<CHeaderNav class="  nav-links ">
		<CHeaderNavItem class="px-3">
			<CHeaderNavLink class="c-header-nav-link--text" to="/index">
				Квест                           
			</CHeaderNavLink>
		</CHeaderNavItem>
		<CHeaderNavItem class="px-3">
			<CHeaderNavLink class="c-header-nav-link--text" to="/users" >
				О событии   
			</CHeaderNavLink>
		</CHeaderNavItem>
		<CHeaderNavItem class="px-3">
			<CHeaderNavLink class="c-header-nav-link--text" to="/index">
				Помощь участникам
			</CHeaderNavLink>
		</CHeaderNavItem>

		<CHeaderNavItem class="px-3">
			<CHeaderNavLink class="c-header-nav-link--text" to="/index">
				Рейтинг
			</CHeaderNavLink>
		</CHeaderNavItem>
	</CHeaderNav>
</template>

<script> 
export default {
  name: 'Nav',
  
}
</script>
