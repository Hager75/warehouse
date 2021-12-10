<template>
  <div class="about">
    <h6>Product</h6>
  </div>
  <div class="d-flex flex-grow-1 bg-white justify-content-around">
    <div class="container-fluid">
      <!--  -->
      <h6><i class="fas fa-clone"></i> Basic Information</h6>
      <div class="row align-items-center">
        <div class="col-12 col-sm-4 col-lg-4">
          <div class="mb-3">
            <label for="select1" class="form-label m-0">Warehouse *</label>
            <select
              class="form-select form-select-sm mb-3"
              aria-label=".form-select-lg example"
              id="select1" v-model="selectedOption"
            >
              <option selected value="" disabled >Select Warehouse</option>
              <option :value="item.name" :key="item.id" v-for="item in arr">{{item.name}}</option>
              <!-- <option value="2">Two</option>
              <option value="3">Three</option> -->
            </select>
          </div>
        </div>
        <div class="col-12 col-sm-4 col-lg-4">
          <div class="mb-3">
            <label for="select1" class="form-label m-0">Type *</label>
            <select
              class="form-select form-select-sm mb-3"
              aria-label=".form-select-lg example"
              id="select1" :disabled="!selectedOption ? isWareHouse = true : isWareHouse = false" 
              v-model="selectedType"
            >
              <option selected disabled value="">Select UOM Type</option>
              <option :key="item.id" v-for ="item in filteredType" :value="item.type">{{item.type}}</option>
            </select>
          </div>
        </div>
        <div class="col-12 col-sm-4 col-lg-3">
          <div class="form-check mt-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Show Zero Balance
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4">
          <label for="radio-product" class="form-label m-0"
            >Product Classification</label
          >
          <div class="mb-3 d-flex justify-content-between">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="all"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked v-model="picked" :disabled="!selectedType"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                All Product
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="sep"
                name="flexRadioDefault"
                id="flexRadioDefault2" v-model="picked" :disabled="!selectedType"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Specific Product
               
              </label>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-4 offset-sm-2 col-lg-5 offset-lg-0" v-if = 'picked == "sep"'>
          <div class="mb-3">
            <label for="select1" class="form-label m-0">Product *</label>
            <select
              class="form-select form-select-sm mb-3"
              aria-label=".form-select-lg example"
              id="select1"
            >
              <option selected disabled>Select Product</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row text-start justify-content-sm-end text-sm-end">
        <div class="col-12 col-lg-2">
          <button type="button" class="btn btn-primary" :disabled="!selectedType" @click="searchProduct" >Search</button>
        </div>
      </div>
      <h6><i class="fas fa-file-alt"></i> Product Details</h6>
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">On-Hand</th>
                  <th scope="col">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <form class="d-flex bg-light-blue align-items-center pe-2">
                      <input
                        class="form-control py-0 search"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <i class="fas fa-search search__icon ps-2"></i>
                      <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
                    </form>
                  </td>
                  <td>
                    <form class="d-flex bg-light-blue align-items-center pe-2">
                      <input
                        class="form-control py-0 search"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <i class="fas fa-search search__icon ps-2"></i>
                      <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
                    </form>
                  </td>
                  <td>
                    <form class="d-flex bg-light-blue align-items-center pe-2">
                      <input
                        class="form-control py-0 search"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <i class="fas fa-search search__icon ps-2"></i>
                      <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
                    </form>
                  </td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td colspan="1">Larry the Bird</td>
                  <td colspan="1">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td colspan="3">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination m-0">
                        <li class="page-item">
                          <a class="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li class="page-item text-dark">
                          <a class="page-link">1</a>
                        </li>
                        <li class="page-item"><a class="page-link">2</a></li>
                        <li class="page-item"><a class="page-link">3</a></li>
                        <li class="page-item">
                          <a class="page-link" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {

    data() {
    return {
    
   isWareHouse: false,
   picked:'',
   selectedOption: '',
   selectedType:'',
   filterdArr: [],
   arr:[
     {name:'a-warehouse', types:[{
       type:'typeA',
       products: [
         {
           product1: 'tel',
           Quantity:0
         },
           {
           product2: 'tel',
           Quantity:2
         }
       ]
       },
       {
       type:'typeb',
       products: [
         {
           product1: 'tel',
           Quantity:5
         },
           {
           product2: 'tel',
           Quantity:2
         }
       ]
       }]
       
       },
     {name:'b-warehouse', types:[{
type:'typeD'
     }]},
     {name:'c-warehouse', types:[{
       type:'typeG'
     }]},
   ]
    }
  },

  methods: {
    searchProduct(){
      console.log(this.selectedType);
  
      let fh = this.filterdArr.types 
      console.log(fh);

  

    }
  },
  computed:{
    filteredType(){
      let hh = this.arr.find(e=>{
      return e.name.includes(this.selectedOption)
      }); 
      console.log(hh.types);
      this.filterdArr = hh ;
      console.log(this.filterdArr);
     return hh.types
    },
    hideDrop(){
return this.selectedOption;
    }
  },
  watch:{
    selectedOption(){
      this.selectedType = ''
    }
  }
    
}
</script>