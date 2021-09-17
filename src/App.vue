<template>
  <div id="app">
    <div class="logo">
      <!-- <img :src="require(`@/assets/img/logo.png`)" alt=""> -->
      <!-- <img src="../assets/img/logo.png" alt=""> -->
      <img id="img-logo" src="./assets/img/Logo.png" alt="">
    </div>
   <router-view/>
  </div>
</template>


<style>
.logo{
background-color: #FFFFFF;
text-align: center;
box-shadow: 0px 30px 0px 01px ;
}
#img-logo{
  width: 180px;
  margin:20px 20px 20px 20px;

}
</style>
