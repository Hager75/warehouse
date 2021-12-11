<template>
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
              @click="showZeroProduct($event)"
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
</template>