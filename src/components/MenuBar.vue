<template>
<div class="col-12">
    <div class="d-flex bg-blue px-2 my-2 rounded align-items-center">
<div class="menu__icon pe-2"  data-bs-toggle="modal" data-bs-target="#exampleModal">
    <i class="fas fa-bars"></i>
</div>
<div class="home__icon px-2">
    <router-link to="/" v-on:click="msg = false">
    <i class="fas fa-home"></i>
    Home</router-link> 
    <span v-if="msg">Product</span>
    <!-- <router-link to="/product">Product</router-link> -->
</div>
    </div>

    <!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> -->

<!-- Modal -->
<div class="modal fade px-3" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
  
 
 
      <div class="modal-body rounded m-0 ps-md-5 d-flex justify-content-between">
         
              <div class="d-flex flex-column align-items-center">
            <router-link to="/product" v-on:click="msg=true">

            <div class="productImg__wrap mx-auto" data-bs-dismiss="modal">
        <img src="../assets/admin.svg" alt="product" class="img-fluid">

            </div>
            <span data-bs-dismiss="modal">
Product</span>
            </router-link>

        </div>
          <div class="text-end pt-2 pe-2">
        <button type="button" class="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>

      </div>  
      </div>
  
    </div>
  </div>
</div>

</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'MenuBar',
  props:{
      msg: Boolean
  },
//   components: {
//     HelloWorld
//   }
methods:{
    login(){
        // alert("hello");
        this.msg = true
    }
},

// data(){
//     return{
// msg: false
//     }
// }
}
</script>
<style>
.bg-blue{
background: #0357a8 ;
color: #fff;
}
.menu__icon{
    border-right: 1px solid #fff ;
}
#exampleModal{
    position: absolute;
    bottom: 0;
    background: rgb(0 0 0 / 51%);
    height: auto !important;
}
.modal-dialog{
    max-width: 100% !important;
    width: 100%;
    padding: 0;
    margin-top: 2.2rem !important;
}
.productImg__wrap{
    max-width: 40px;
}
.productImg__wrap img {
    width: 100%;
}
.modal-body{
      background: #e8f0f7
}
</style>
