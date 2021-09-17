<template>
  <div class="contend-payments">
    <div class="custom-container">
      <b-row>
        <b-col cols="6" class="custom-payment">
          <span class="title"> Información General</span>
          <!-- Datos de usuario -->
          <b-row class="mt-3">
            <b-col cols="6" class="mb-3">
              <b-form-group
                label="Tipo de identificación"
                label-for="input-identification"
                class="mb-0 identification"
              >
                <b-form-select
                  id="input-identification"
                  v-model="selected"
                  :options="options"
                />
              </b-form-group>
            </b-col>
            <b-col cols="6" class="mb-3">
              <b-form-group
                label="Número de Identificación"
                label-for="input-id"                
                class="mb-0 identification"
              >
                <b-form-input
                  id="input-id"
                  v-model="id"

                />
              </b-form-group>
            </b-col>            
            <b-col cols="6" class="mb-3">
              <b-form-group
                label="Nombres"
                label-for="input-name"                
                class="mb-0 identification"
              >
                <b-form-input
                  id="input-name"
                  v-model="name"

                />
              </b-form-group>
            </b-col>            
            <b-col cols="6" class="mb-3">
              <b-form-group
                label="Apellidos"
                label-for="input-lastname"                
                class="mb-0 identification"
              >
                <b-form-input
                  id="input-lastname"
                  v-model="lastname"
                />
              </b-form-group>
            </b-col>            
          </b-row>
          <!-- METODOS DE PAGO -->
          <!-- TARJETA DE CREDITO -->
          <div class="mb-3" :class="[ methodPayment == 1 ? 'tarjeta-credito-active': 'tarjeta-credito']">
            <b-button @click="changeMethodPayment(1)">Tarjeta de credito 
               <img id="img-tarjeta" src="../assets/img/Mastercard.png" >
               <img id="img-visa" src="../assets/img/Visa.png" >
               </b-button>
          </div>
              <!-- PAGO PSE -->
          <div class="mb-3" :class="[ methodPayment == 2 ? 'tarjeta-credito-active': 'tarjeta-credito']">
            <b-button @click="changeMethodPayment(2)">PSE
              <img id="img-pse" src="../assets/img/Pse.png" >
            </b-button>
          </div>
          <!-- PAGO DAVIPLATA  -->
          <div class="mb-3" :class="[ methodPayment == 3 ? 'tarjeta-credito-active': 'tarjeta-credito']">
            <b-button @click="changeMethodPayment(3)">Daviplata
              <img id="img-daviplata" src="../assets/img/Daviplata.png" >
            </b-button>
          </div>
          <!-- PAGO EN EFECTIVO  -->
          <div class="mb-3" :class="[ methodPayment == 4 ? 'tarjeta-credito-active': 'tarjeta-credito']">
            <b-button @click="changeMethodPayment(4)">Pago en efectivo
              <img id="img-bolsa" src="../assets/img/Bolsa.svg" >
            </b-button>
            
          </div>
        </b-col>

        <!-- Informacion de los pagos -->
        
        <b-col class="info-payment">
          <div class="h-auto w-auto">
            <span class="title2">Información Del Pago</span>
          </div>
          <div class="content-title-big">
            <span class="title-big">Orden N°:</span>
            <div class="contenedor-interno">
              <span class="title-num">1201</span>
          </div>
          </div>
          <div class="content-title-big-2">
            <span class="title-big">Valor a Pagar:</span>
            <div class="contenedor-interno-2">
              <span class="title-num-2">1.000.000</span>
          </div>
          </div>
          <!-- DATOS DE PAGO  -->
          <div class="container-payments" v-if="methodPayment == 1">
            <!-- nombre del titular  -->
            <div class="container-payments-data">
            <b-col  cols="6" class="mb-5 ">
              <b-form-group
                label="Nombre del titular"
                label-for="input-name-2"                
                class="mb-0 identification-2"
              >
                <b-form-input
                  id="input-name-2"
                  v-model="name_2"
                />
              </b-form-group>
            </b-col> 
            <!-- Fecha -->
            <b-col id="date-1" cols="6" class="mb-3">
              <b-form-group
                label="Mes / Año"
                label-for="input-date"                
                class="mb-0 identification-date"
              >
                <b-form-input
                  id="input-date"
                  v-model="date"

                />
              </b-form-group>
            </b-col> 
             <!-- CCV -->
            <b-col id="num-ccv" cols="5.5" class="mb-3">
              <b-form-group
                label="CCV"
                label-for="input-ccv"                
                class="mb-0 identification-ccv"
              >
                <b-form-input
                  id="input-ccv"
                  v-model="ccv"

                />
              </b-form-group>
            </b-col> 
             <!-- Numero de tarjeta -->
            <b-col cols="6" class="mb-3">
              <b-form-group
                label="Número de tarjeta"
                label-for="input-card"                
                class="mb-0 identification-card"
              >
                <b-form-input
                  id="input-card"
                  v-model="card"

                />
              </b-form-group>
            </b-col> 
             <!-- Numero de cuotas -->
            <b-col cols="6" class="mb-3">
              <b-form-group
                label="Número de cuotas"
                label-for="input-dues"                
                class="mb-0 identification-dues"
              >
                <b-form-input
                  id="input-dues"
                  v-model="dues"

                />
              </b-form-group>
            </b-col> 
          </div>
            </div>
            
          <div class="container-payments" v-else-if="methodPayment == 2">
            <b-col  cols="6" class="mb-5 container-pse">
              <b-form-group
                label="Correo elctronico"
                label-for="input-email"                
                class="mb-0 identification-email"
              >
                <b-form-input
                  id="input-email"
                  v-model="email_pse"
                />
              </b-form-group>
            </b-col> 
          </div>
          <div class="container-payments" v-else-if="methodPayment == 3">
            <b-col  cols="6" class="mb-5 container-pse">
              <b-form-group
                label="Correo elctronico"
                label-for="input-email"                
                class="mb-0 identification-email"
              >
                <b-form-input
                  id="input-email"
                  v-model="email_daviplata"
                />
              </b-form-group>
            </b-col> 
          </div>
          <div class="container-payments" v-else-if="methodPayment == 4">
            <b-col  cols="6" class="mb-5 container-pse">
              <b-form-group
                label="Correo elctronico"
                label-for="input-email"                
                class="mb-0 identification-email"
              >
                <b-form-input
                  id="input-email"
                  v-model="email_pse"
                />
              </b-form-group>
            </b-col> 
            <b-col cols="6" class="mb-3">
              <b-form-group
                label="Tipo de identificación"
                label-for="input-identification"
                class="mb-0 input-identification-service"
              >
                <b-form-select
                  id="input-identification-select"
                  v-model="selected"
                  :options="options_payments"
                />
              </b-form-group>
            </b-col>
          </div>
          <div class="container-button-confirm">
            <b-button class="button-confirm">Confirmar</b-button>
          </div>
        </b-col>
      </b-row>
    </div>        
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: '',
      name: '',
      lastname: '',
      methodPayment: 1,
      selected: null,
      options: [
        { value: null, text: 'Seleccione una opcion' },
        { value: 'CC', text: 'Cedula de Ciudadania' },
        { value: 'CE', text: 'Cedula de extrangeria' },
        { value: 'PA', text: 'Pasaporte' },
        { value: 'CA', text: 'Carnet Diplomático'}
      ],
      options_payments: [
        { value: null, text: 'Seleccione una opcion' },
        { value: 'baloto', text: 'Baloto'},
        { value: 'puntored', text: 'Punto red' },
        { value: 'efecty', text: 'Efecty' },
        { value: 'bancolombia', text: 'Bancolombia'}
      ]
    }
  },
  methods: {
    changeMethodPayment(method) {
      this.methodPayment = method
    }
  }
}
</script>
<style>
*{
  display: flexbox;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
  .contend-payments {
    background-color:#FFFFFF ; 
  }
  .custom-container{
    padding: 107px 208px 107px 208px ;
  }
  .custom-payment {
    margin-top: 47px;
  }
  /* TITULOS */
  .title{
    font-size: 20px;
    color:#ffffff;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    opacity: 1;
    font-weight: 700;
  }

  .identification label{
    color: #707070;
    margin: unset;
    font-size: 18px;
    font-weight: 500;

  }
  .tarjeta-credito {
    height: 84px;
    background-color: #4B4B4B !important;
    border-radius: 5px;
    display: flex;
    margin-right:-20px;
    align-items: center;
  }
  .tarjeta-credito-active {
    height: 84px;
    background-color: #919191!important;
    border-radius: 5px;
    display: flex;
    margin-right:-20px;
    align-items: center;
  }
  .tarjeta-credito button {
    background-color: #ffffff;
    color: #FB0241 !important;
    position: relative;
    left: -10px;
    border: unset;
    font-weight: 700;
    height: 36px;
    min-width: 280px;
    text-align: left;
    padding-left: 49px;
  }
  .tarjeta-credito-active button {
    background-color: #ffffff;
    color: #FB0241 !important;
    position: relative;
    left: -10px;
    border: unset;
    font-weight: 700;
    height: 36px;
    min-width: 280px;
    text-align: left;
    padding-left: 49px;
  }
  .tarjeta-credito button:hover {
    background-color: #eeeeee;
    color: #FB0241 !important;
  }
  .tarjeta-credito button:active {
    background-color: #ffffff;
  }
  .tarjeta-credito button:focus {
    background-color: #ffffff;
  }
  .tarjeta-credito-active button:hover {
    background-color: #eeeeee;
    color: #FB0241 !important;
  }
  .tarjeta-credito-active button:active {
    background-color: #ffffff;
  }
  .tarjeta-credito-active button:focus {
    background-color: #ffffff;
  }
  /* INPUTS DE DATOS PERSONA */
  #input-identification{
     border: 1px solid;
  }
  #input-id{
    border: 1px solid;
  }
   #input-name{
    border: 1px solid;
  }
  #input-lastname{
    border: 1px solid;
  }
  /* INFORMACION DE PAGO */
  .info-payment {
    background-color: #919191!important;
    padding-left: 81px !important;
    border-radius:0px 0px 20px 20px;
    margin:0px 0px -107px 0px ;
    margin-top:-108px;
    margin-right:108px;
    
    padding-top: 100px;
  }
     .title2{
    font-size: 20px;
    color:#ffffff;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    opacity: 1;
    font-weight: 700;
  }
  .contenedor-interno{
    height: 40px;
    width: 35vh;
    float: right;
    display: flexbox;
    margin-top:12px;
    background-color: #FB0241 !important;
    border-radius:10px 0px 0px 10px;
    text-align:initial;
    padding-left:15px;
  }
  .contenedor-interno .title-num{
    font-size: 25px;
    color:#ffffff;
  }
    .contenedor-interno-2{
    height: 40px;
    width: 300px;
    float: right;
    display: flexbox;
    margin-top:5px;
    background-color: #FB0241 !important;
    border-radius:10px 0px 0px 10px;
    text-align:initial;
    padding-left:20px;
  }
  .contenedor-interno-2 .title-num-2{
    font-size: 25px;
    color:#ffffff;
  }

  .content-title-big {
    margin-top: 30px;
    margin-right:-14px;
  }
  .content-title-big .title-big {
    font-size: 35px;
    font-weight: 700;
    color: #ffffff;
    
  }
  .content-title-big-2{
    margin-top: 30px;
    margin-right:-14px;
  }
  .content-title-big-2 .title-big {
    font-size: 30px;
    font-weight: 650;
    color: #ffffff;

  }
  /* DATOS DE PAGO TARJETA */
  .container-payments {
    margin-top:60px;
    margin-left: -25px;
  }
  /* NOMBRE DEL TITULAR  */
   .identification-2 label{
    color: white;
    opacity: 0.6;
    margin: 10px 10px 3px 0px;
    font-size: 16px;
  }
    .identification-2 {
    color: white;
    width:520px;
    margin: -20px 0px 0px 0px;
    font-size: 18px;
    font-weight: 500;
  }
  /* FECHA  */
    .identification-date {
    color: white;
    width:240px;
    margin: -20px 0px 0px 0px;
    font-size: 18px;
    font-weight: 500;
  }
  .identification-date label{
    color: white;
    opacity: 0.6;
    margin: 10px 10px 3px 0px;
    font-size: 16px;
  }
      #date-1{
    float: left;
    margin-right:0;
  }
  /* CODIGO TARJETA  */
    .identification-ccv{
    color: white;
    width:240px;
    margin: -20px 0px 0px 0px !important;
    font-size: 18px;
    font-weight: 500;
  }
  .identification-ccv label{
    color: white;
    opacity: 0.6;
    margin: 10px 10px 3px 0px;
    font-size: 16px;
  }
  #num-ccv{
    float: right;
    margin-right:50px;
  }
  /* TARJETA  */

    .identification-card {
    color: white;
    width:520px;
    margin: unset;
    font-size: 18px;
    margin-top:100px;
    font-weight: 500;
  }
  .identification-card label{
    color: white;
    opacity: 0.6;
    margin: 10px 10px 3px 0px;
    font-size: 16px;
  }
  /* CUOTAS */
      .identification-dues {
    color: white;
    width:520px;
    margin: unset;
    font-size: 18px;
    font-weight: 500;
  }
  .identification-dues label{
    color: white;
    opacity: 0.6;
    margin: 10px 10px 3px 0px;
    font-size: 16px;
  }
  /* INPUTS DE DATOS DE PAGOS */
  #input-name-2{
    border-radius: 8px;
    border: 1px solid;
  }
  #input-date{
    border-radius: 8px;
    border: 1px solid;
  }
  #input-ccv{
    border-radius: 8px;
    border: 1px solid;
  }
  #input-card{
    border-radius: 8px;
    border: 1px solid;
  }
  #input-dues{
    border-radius: 8px;
    border: 1px solid;
  }
   #input-email{
    border-radius: 8px;
    border: 1px solid;
  }
    /* DATOS DE PAGO PSE */
  .container-pse{
    margin-top:150px ;
  }
  .identification-email{
     color: white;
    width:520px;
    margin: unset;
    font-size: 18px;
    font-weight: 500;
  }
  .identification-email label{
    color: white;
    opacity: 0.6;
    margin: 10px 10px 3px 0px;
    font-size: 16px;
  }
  .input-identification-service{
     color: white;
    width:520px;
    margin: unset;
    font-size: 18px;
    font-weight: 500;
  }
   .input-identification-service label{
    color: white;
    opacity: 0.6;
    margin: 10px 10px 3px 0px;
    font-size: 16px;
  }
  /* boton confirmar */
  .container-button-confirm{
    margin-top:50px;
    font-size: 80px;
    text-align: center;
    margin-left: -50px; 
  }
  .button-confirm{
    width:250px;
    height:60px;
    background-color:#FB0241 !important; 
    font-size: 30px !important;
    color:#ffffff;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    opacity: 1;
    font-weight: 700 !important;
    border-radius:10px 10px 10px 10px !important;

    

  }



  /* Imagenes */
  #img-tarjeta{
     width: 40px;
    margin: -5px 0px 0px 40px;

  }
    #img-visa{
     width: 40px;
    margin: -5px 0px 0px 20px;

  }
   #img-pse{
    width: 75px;
    margin: -5px 0px 0px 45px;

  }
   #img-daviplata{
    width: 80px;
    margin: -13px 0px 0px 20px;

  }
   #img-bolsa{
    width: 25px;
    margin-left: 25px;

  }
</style>