<template> 
    <CFooter :fixed="false">
      <CContainer> 
        <CRow align-vertical="center">
            <CCol  class="col-md-auto col">
              <img src="../assets/img/footer-logo.png" alt="">
            </CCol>
            <CCol class="col-auto   order-md-last">
              <TheSocialBtn/>
            </CCol>
            <CCol  class='col-md col-12 c-footer__col'>
              <CRow align-vertical="center">
                <CCol class="col-md-auto col"><a class="c-footer__link" href="#" target="_blank">Политика конфиденциальности</a></CCol>
                <CCol class="col-auto"><a class="c-footer__link" href="#" target="_blank">Правила участия</a></CCol>
              </CRow>
            </CCol>
        </CRow> 
      </CContainer>
    </CFooter> 
</template>
<script>
import TheSocialBtn from './TheSocialBtn'

export default {
  name: 'TheFooter',
  components:{
      TheSocialBtn
  }
}
</script>
