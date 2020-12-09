<template>
  <div class="template-block">
  
      <img class='  img-bg ' src='../assets/img/bg-culture.jpg' alt=""> 
    <div class="bg-block bg-block--theme">
    </div>

    <div class="main-page mw-100">
      <CContainer>
        <!-- <div class="page-head">
          <div class="row">
            <div class="col-auto pr-0">
              <a href="#" class="link-back">
                <CIcon  
                  name="arrowLeftStrong" 
                  size="custom-size" 
                  :width="20" 
                  :height="20"
                />
              </a>
            </div>
            <div class="col">
              <h1>КУЛЬТУРА</h1>
            </div>
            <div class="col-md-auto">
              <TheCharts/>
            </div>
          </div>
        </div> -->
        <TheLoacations/>
      </CContainer>
      
    </div>
    
  </div>
</template>

<script>

import TheCharts from '../containers/TheCharts'
import TheLoacations from '../containers/TheLoacations'

export default {
  name: 'Theme',
  components: {
    TheCharts,
    TheLoacations
  },
  data () {
    return {
     
    }
  },
  methods: {
 
  }
}
</script>
