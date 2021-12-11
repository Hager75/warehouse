


<template>
  <div class="about">
    <h6>Product</h6>
  </div>
  <div class="d-flex flex-grow-1 bg-white justify-content-around">
    <div class="container-fluid p-2 py-md-3 px-md-5">
      <!--  -->
      <h6 class="header-style">
        <i class="fas fa-clone icon-color"></i> Basic Information
      </h6>
   <!-- basic info-->
   <BasicInfo/>
      <h6 class="header-style">
        <i class="fas fa-file-alt icon-color"></i> Product Details
      </h6>
      <div class="row">
        <div class="col-12">
          <div
            class="d-flex flex-column align-items-center justify-content-center"
            v-if="!showTable"
          >
            <img
              src="../assets/noDataFoundGreen.svg"
              alt="select warehouse"
              class="img-fluid"
            />
            <h6>Select Warehouse and Product</h6>
          </div>
          <div class="table-responsive" v-if="showTable">
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
                <tr :key="item.id" v-for="item in selectedProduct">
                  <td>{{ item.name }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>{{ searchedType }}</td>
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
import Multiselect from "@vueform/multiselect";
import BasicInfo from './BasicInfo.vue'

export default {
  components: {
    Multiselect,
    BasicInfo
  },
  data() {
    return {
      value: [],
      options: [],
      isWareHouse: false,
      picked: "",
      selectedOption: "",
      selectedType: "",
      searchedType: "",
      selectedProduct: [],
      filterdArr: [],
      existProducts: [],
      showZero: false,
      showTable: false,
      typesProdcut: [],
      originSelectedProduct: [],
      newTypes:[],
      arr: [
        {
          name: "a-warehouse",
          types: [
            {
              type: "typeA",
              products: [
                {
                  name: "tel",
                  quantity: 0,
                },
                {
                  name: "phone",
                  quantity: 2,
                },
              ],
            },
            {
              type: "typeb",
              products: [
                {
                  name: "tel",
                  quantity: 5,
                },
                {
                  name: "tel",
                  quantity: 2,
                },
              ],
            },
          ],
        },
        {
          name: "b-warehouse",
          types: [
            {
              type: "typeD",
            },
          ],
        },
        {
          name: "c-warehouse",
          types: [
            {
              type: "typeG",
            },
          ],
        },
      ],
    };
  },

  methods: {
    showZeroProduct($event) {
      console.log($event.target);
      if (!$event.target.checked) {
        this.selectedProduct = this.selectedProduct.filter((e) => {
          return e.quantity > 0;
        });
      } else if ($event.target.checked) {
        return (this.selectedProduct = this.originSelectedProduct);
      }
    },
    searchProduct() {
      this.showTable = true;
      this.searchedType = this.selectedType;
      console.log(this.value);
    },
  },
  computed: {
    filteredType() {
      let selectedWareHouse = this.arr.find((e) => {
        return e.name.includes(this.selectedOption);
      });
      this.filterdArr = selectedWareHouse;
      this.typesProdcut = selectedWareHouse.types;
      return selectedWareHouse.types;
    },
  },
  watch: {
    selectedOption() {
      this.selectedType = "";
    },
    selectedType() {
      this.value = [];
      this.options = [];
      this.searchedType = this.selectedType;
      this.newTypes = this.typesProdcut.filter((e) => {
        return e.type.includes(this.selectedType);
      });
      this.selectedProduct = this.newTypes[0].products;
      this.originSelectedProduct = this.newTypes[0].products;
      let options = this.selectedProduct.map((e) => e.name);
      const uniqueOptions = new Set(options);
      this.options = [...uniqueOptions];
    },
    value() {
      let searchByProduct = this.selectedProduct;
      console.log(this.selectedProduct);
      console.log(this.value);
      if (this.value.length) {
      
        let hh = searchByProduct.filter((e) => {
          return e.name.includes(...this.value); 
        
        });
        this.selectedProduct = hh;
        console.log(hh);
      } else {
        this.selectedProduct = this.newTypes[0].products;
      }
    },
  },
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style>
.multiselect-tag {
  background: #0357a8;
}
.multiselect {
  padding: 0;
  min-height: auto;
}
.icon-color {
  color: #48dbdf;
}
.search-btn-color {
  background: #48dbdf;
  color: #fff;
  font-weight: bold;
}
.header-style {
  border-bottom: rgb(228, 228, 228) 1px solid !important  ;
  color: #0357a8;
  font-weight: bold;
}
</style>
