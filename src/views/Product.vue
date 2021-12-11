<template>
  <div class="about">
    <h6>Product</h6>
  </div>
  <div class="d-flex flex-grow-1 bg-white justify-content-around">
    <div class="container-fluid p-2 py-md-3 px-md-5">
      <!--  -->
      <h6 class="header-style"><i class="fas fa-clone icon-color"></i> Basic Information</h6>
      <div class="row align-items-center">
        <div class="col-12 col-sm-4 col-lg-4">
          <div class="mb-3">
            <label for="select1" class="form-label m-0">Warehouse *</label>
            <select
              class="form-select form-select-sm mb-3"
              aria-label=".form-select-lg example"
              id="select1"
              v-model="selectedOption"
            >
              <option selected value="" disabled>Select Warehouse</option>
              <option :value="item.name" :key="item.id" v-for="item in arr">
                {{ item.name }}
              </option>
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
              id="select1"
              :disabled="
                !selectedOption ? (isWareHouse = true) : (isWareHouse = false)
              "
              v-model="selectedType"
            >
              <option selected disabled value="">Select UOM Type</option>
              <option
                :key="item.id"
                v-for="item in filteredType"
                :value="item.type"
              >
                {{ item.type }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-12 col-sm-4 col-lg-3">
          <div class="form-check mt-2">
            <input
              class="form-check-input"
              type="checkbox"
              :value="showZero"
              id="flexCheckDefault"
              v-model="showZero"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Show Zero Balance
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4">
          <label for="radio-product" class="form-label m-0 "
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
                checked
                v-model="picked"
                :disabled="!selectedType"
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
                id="flexRadioDefault2"
                v-model="picked"
                :disabled="!selectedType"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Specific Product
              </label>
            </div>
          </div>
        </div>
        <div
          class="col-12 col-sm-4 offset-sm-2 col-lg-5 offset-lg-0"
          v-if="picked == 'sep' && selectedType"
        >
          <div class="mb-3">
            <label for="select1" class="form-label m-0">Product *</label>
            <Multiselect
              v-model="value"
              mode="tags"
              placeholder="Select Product"
              :options="options"
              class="form-select-sm mb-3"
            />
      
          </div>
        </div>
      </div>
      <div class="row text-start justify-content-sm-end text-sm-end">
        <div class="col-12 col-lg-2">
          <button
            type="button"
            class="btn search-btn-color mb-3"
            :disabled="!selectedType"
            @click="searchProduct"
          >
            Search
          </button>
        </div>
      </div>
      <h6 class="header-style"><i class="fas fa-file-alt icon-color"></i> Product Details</h6>
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

export default {
  components: {
    Multiselect,
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
      showZero: "",
      showTable: false,
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
    searchProduct() {
      this.showTable = true;
      this.searchedType = this.selectedType;
      let SelectedWareHouse = this.filterdArr.types;
      let newTypes = SelectedWareHouse.filter((e) => {
        return e.type.includes(this.selectedType);
      });
      this.selectedProduct = newTypes[0].products;
     this.options = this.selectedProduct.map((e)=>e.name)
     console.log(this.options);

      if (this.showZero == "") {
        this.selectedProduct = this.selectedProduct.filter((e) => {
          return e.quantity > 0;
        });
      
      }
  
      console.log(this.options);
    },
  },
  computed: {
    filteredType() {
      let hh = this.arr.find((e) => {
        return e.name.includes(this.selectedOption);
      });
      this.filterdArr = hh;
      return hh.types;
    },
 
  },
  watch: {
    selectedOption() {
      this.selectedType = "";
    },
    selectedType(){
      this.value = []
       this.options = [];
           this.searchedType = this.selectedType;
      let SelectedWareHouse = this.filterdArr.types;
      let newTypes = SelectedWareHouse.filter((e) => {
        return e.type.includes(this.selectedType);
      });
      this.selectedProduct = newTypes[0].products;
     this.options = this.selectedProduct.map((e)=>e.name)
     console.log(this.options);
    }
  },
 
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped>
.multiselect-tag{
  background: #0357a8;
}
.multiselect{
padding: 0;
min-height: auto;
}
.icon-color{
  color: #48dbdf;
}
.search-btn-color{
  background: #48dbdf;
  color: #fff;
  font-weight: bold;
}
.header-style{
  border-bottom: rgb(228, 228, 228) 1px solid !important  ;
  color: #0357a8;
  font-weight: bold;
}

</style>
