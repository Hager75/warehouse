<template>
<nav class="navbar navbar-expand-lg navbar-light p-0">
  <div class="container-fluid">
 <a class="navbar-brand" href="#">
             <img src="../assets/logo.png" alt="logo" class="img-fluid">
    </a>

   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
              <form class="d-flex bg-light-blue align-items-center pe-2">
        <input class="form-control py-0 search" type="search" placeholder="Search" aria-label="Search">
        <i class="fas fa-search search__icon ps-2"></i>
        <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
      </form>
      <div class="d-flex align-items-center justify-content-end">
             <ul class="navbar-nav">
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              English
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Arabic</a></li>
            <li><a class="dropdown-item" href="#">Other</a></li>
          
          </ul>
        </li>
   
      </ul>
       <div class="d-flex align-items-center justify-content-center">
         <div>

     <img src="../assets/user.png" alt="profile picture" class="img-fluid">
         </div>
     <p class="m-0">{{userName}}</p>
     </div>
      </div>
   
    
    </div>
  </div>
</nav>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Header',
  data() {
    return {
    userName: 'Hager Mohamed'
    }
  },
   computed: {
     showProduct() {
      return this.$store.state.showProduct
    }
 }

//   components: {
//     HelloWorld
//   }

}

</script>

<style scoped>

 .navbar-brand img {
     max-width: 130px;
 }
 .search {
     background: #e8f0f7;
     border: none;
 }
 .navbar-nav .nav-item a{
     color:#59afde !important;
 }
 .bg-light-blue{
     background-color: #e8f0f7;
         border-radius: 0.25rem;
 }
 .search__icon{
 color:#0357a8 ;
 border-left: #0357a8 solid 2px;

 }
 p{
     color: #0357a8;
     font-size: 0.9rem;
 }
 nav{
       box-shadow: 3px 3px 10px #c9c9c9;
       background: #fff;

 }
 .navbar-toggler-icon{
font-size: 1rem;
 }

 </style>
