<template>
  <div class="template-block">
    <div class="bg-block">
      <img class='  img-bg-main' src='../assets/img/bg-main.jpg' alt="">
      <img class='img-top d-none d-lg-block' src='../assets/img/img-top.png' alt="">
    </div>

    <div class="main-page main-page--index">
      <CContainer>
        <div class="d-none d-md-block">
          <BtnVideo/>
        </div>
        <CIcon 
              class="logo--lg" 
              name="logo" 
              size="custom-size"  
              viewBox="0 0 138 72"
            />
        
        <CButton color="primary" size="lg"><span></span>Пройти квест</CButton>
      </CContainer>
      
    </div>
    <div class="text-block text-block--dark">
      <CContainer>
      <CRow>
        <CCol >
          <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов </p>
        </CCol>
        <CCol class="col-md-auto col-12">
          <CButton color="primary" variant='outline' size="sm"><span></span>Правила конкурса</CButton>
        </CCol>
      </CRow>
      </CContainer>
    </div>
    <div class="container d-md-none">
          <BtnVideo/>
        </div>
  </div>
</template>

<script>

import BtnVideo from '../containers/BtnVideo'

export default {
  name: 'Index',
  components: {
    BtnVideo
  },
  data () {
    return {
     
    }
  },
  methods: {
 
  }
}
</script>
