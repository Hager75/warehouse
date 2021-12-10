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
              id="select1"
            >
              <option selected disabled>Select Warehouse</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
            >
              <option selected disabled>Select UOM Type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault1">
                All Product
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Specific Product
              </label>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-4 offset-sm-2 col-lg-5 offset-lg-0">
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
          <button type="button" class="btn btn-primary">Search</button>
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
