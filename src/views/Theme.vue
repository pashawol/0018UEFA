<template>
  <div class="template-block">
  
      <img class='  img-bg ' src='../assets/img/bg-theme.jpg' alt=""> 
    <div class="bg-block bg-block--theme">
    </div>

    <div class="main-page mw-100">
      <CContainer>
        <div class="page-head">
          <div class="row">
            <div class="col">
              <h1>Выберите тематику</h1>
            </div>
            <div class="col-md-auto">
              <TheProgress/>
            </div>
          </div>
        </div>
        <TheThemeSection/>
      </CContainer>
      
    </div>
    <div class="text-block  text-white">
      <CContainer>
          <p class="">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.</p>
          <CButton color="white" variant='outline' size="sm"><span></span>Правила конкурса</CButton>
      
      </CContainer>
    </div>
    
  </div>
</template>

<script>

import TheProgress from '../containers/TheProgress'
import TheThemeSection from '../containers/TheThemeSection'

export default {
  name: 'Theme',
  components: {
    TheProgress,
    TheThemeSection
  },
  data () {
    return {
     
    }
  },
  methods: {
 
  }
}
</script>
