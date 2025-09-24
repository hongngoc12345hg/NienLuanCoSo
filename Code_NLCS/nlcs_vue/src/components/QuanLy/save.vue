<template>
  <div class="row">
      <div class="col">
        <div class="accordion " id="accordionPanelsStayOpenExample">
          <div class="accordion-item ">
            <h2 class="accordion-header ">
              <button class="accordion-button" :class="{ 'collapsed': !isAccordionOpen[0] }" type="button" @click="toggleAccordion(0)">
                Accordion Item #1
                <i class="accordion-arrow" :class="{ 'rotate-180': !isAccordionOpen[0] }"></i>
              </button>
            </h2>
            <div class="accordion-collapse" :class="{ 'collapse': !isAccordionOpen[0], 'show': isAccordionOpen[0] }">
              <div class="accordion-body">
                <!-- <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. -->
                <ul class="row list-unstyled gy-3">               
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text" @click="gotoChitietsp()">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- Các card khác -->
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul class="row list-unstyled gy-3">
                
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- Các card khác -->
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-xl-2 col-mđ-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="accordion " id="accordionPanelsStayOpenExample">
          <div class="accordion-item ">
            <h2 class="accordion-header ">
              <button class="accordion-button" :class="{ 'collapsed': !isAccordionOpen[1] }" type="button" @click="toggleAccordion(1)">
                Accordion Item #2
                <i class="accordion-arrow" :class="{ 'rotate-180': !isAccordionOpen[1] }"></i>
              </button>
            </h2>
            <div class="accordion-collapse" :class="{ 'collapse': !isAccordionOpen[1], 'show': isAccordionOpen[1] }">
              <div class="accordion-body">
                <!-- <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. -->
                
                
                <ul class="row list-unstyled gy-3">
                
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- Các card khác -->
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul class="row list-unstyled gy-3">
                
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- Các card khác -->
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="col-xl-2 col-md-3 col-4 mb-4">
                    <div class="card h-100">
                      <img src="..." class="card-img-top" alt="...">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-grid gap-2 mt-auto">
                          <a href="#" class="btn btn-primary ">Thêm vào giỏ hàng</a>
                          <a href="#" class="btn btn-primary ">Mua ngay</a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Chi tiets san pham -->
    <div class="container-fluid">
    <div class="container">
      <div class="row d-flex align-items-stretch ">
        <div class="col-6">
          <div class="product-gallery text-center bg-light p-4 rounded h-100">
            
            <div class="main-image mb-3 ">
              <img :src="selectedImage" class="img-fluid rounded border" />
            </div>

            
            <div class="thumbnail-list d-flex justify-content-center gap-3">
              <div
                v-for="(image, index) in images"
                :key="index"
                class="thumbnail-item"
                :class="{ active: selectedImage === image }"
                @click="selectedImage = image"
              >
                <img :src="image" />
              </div>
            </div>
          </div>
        </div>
        
       
        <div class="col-6">
          <div class="card text-center mb-3 h-100" style="width: 25rem; border-radius: 20px; ">
            <div class="card-body ms-4 me-4">
              <br>
              <h5 class="card-title">MẬT ONG HOA SÂM NGỌC LINH</h5>
              
              <hr>
              <p class="card-text text-left">Thương hiệu: DG | Tình trạng: Còn hàng</p>
              <hr>
              <p class="card-text text-left"><b>Đặc điểm sản phẩm:</b>
                <br>
                Ong hút mật của hoa sâm Ngọc Linh và các loại dược liệu quý khác nên mật thơm, mùi vị có chút khác biệt so với các loại mật ong khác.</p>
              <hr>
              
              <p class="card-text text-left">
                <span class="h4 text-warning">100.000đ</span>
              </p>
              <hr>
              
              <div class="d-flex justify-content-between align-items-center ">
                <div class="btn-group mt-1">
                  <button type="button" class="btn btn-sm btn-outline-secondary" @click="decreaseQuantity"><i class="fa-solid fa-minus"></i></button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">{{ quantity }}</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" @click="increaseQuantity"><i class="fa-solid fa-plus"></i></button>
                </div>
              </div>
              
              <div class="d-grid gap-2 d-md-block mt-4">
                <button class="btn btn-warning btn-warning1 marginright " type="button"> <i class="fa-solid fa-plus"></i> Thêm vào giỏ hàng</button>
                <button class="btn btn-warning btn-warning2 " type="button"><i class="fa-solid fa-cart-shopping"></i> Mua ngay</button>
              </div>
                <br>
            </div>
          </div>
        </div>
        

      </div>  
    </div>
  </div>



</template>

<script>
import sac1 from "@/img/sac1.jpeg";
import ssa53 from "@/img/ssa53.jpg";
import oplung from "@/img/oplung.jpg";


export default{
    name:"save",
    data(){
        return {
            isAccordionOpen: [true, false, false],
            
            selectedImage: sac1, // mặc định ảnh lớn đầu tiên
            images: [sac1, ssa53, oplung],
            quantity:1,
        }
    },
    methods: {
    toggleAccordion(index) {
      this.isAccordionOpen[index] = !this.isAccordionOpen[index];
    },
    gotoChitietsp(){
      this.$router.replace('/Chitietsp')  
    },
  }
}
</script>

<style scoped>
 .accordion-button:not(.collapsed) .accordion-arrow {
  transform: rotate(180deg);
}

.accordion-arrow {
  transition: transform 0.3s ease;
}

/* Chi tiets san pham */
.thumbnail-item {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
  padding: 4px;
  border: 2px solid transparent;
  width: 68px;  /* 60px + 4px padding + 2px border */
  height: 68px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.thumbnail-item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
  display: block;
  transition: all 0.3s ease;
}

/* Viền vàng khi ảnh được chọn */
.thumbnail-item.active {
  border: 3px solid goldenrod;
}

/* Hover — chỉ scale ảnh chứ không scale khung */
.thumbnail-item:hover img {
  transform: scale(1.05);
}
.main-image {
  width: 100%;
  max-width: 400px;   /* tối đa trên desktop */
  aspect-ratio: 1/1;  /* giữ ảnh hình vuông, hoặc 4/3, 16/9 tùy nhu cầu */
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  border: 2px solid #ccc;
  transition: all 0.3s ease;
}

.marginright{
      margin-right: 10px;
    }
    .hoverable {
      cursor: pointer;
    }

    .hoverable:hover {
      color: #007bff;
    }

    .hoverable:hover .sameproduct {
      background-color: #007bff;
      color: #fff;
    }
    .carousel-control-prev{
      margin-left: -150px;
    }
    .carousel-control-next{
      margin-right: -150px;
    }
    .carousel-indicators button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #999;
      margin: 0 5px;
    }

    .carousel-indicators button.active {
      background-color: #333;
    }
    .btn-warning1 {
      background-color: white;
      color: goldenrod;
      
    }
    .btn-warning1:hover {
      background-color: goldenrod;
      color: white;
    }
    .btn-warning2:hover {
      background-color: white;
      color: goldenrod;
      border: 1px solid goldenrod;
    }
    .btn-warning2 {
      background-color: goldenrod;
      color: white;
    }

</style>




<!-- <template>
  <div class="container-fluid text-center bg-warning clor">
    <div class="container py-4">
      <hr />
      <b class="title h4">SẢN PHẨM NỔI BẬT</b>
      <ul class="row list-unstyled gy-3 mt-3">
        <li class="col-3" v-for="sp in paginatedSanPhams" :key="sp.id">
          <div class="card h-100">
            <img :src="sp.sp_duongdan" class="card-img-top" alt="Hình sản phẩm" />
            <div class="card-body d-flex flex-column p-2">
              <p class="mb-2 text-center text-warning h5">
                {{ formatCurrency(sp.sp_dongia) }}
              </p>
              <p class="mb-1 h6"><strong>{{ sp.sp_ten }}</strong></p>
              <p class="mb-1 text-muted small">Thương hiệu: {{ sp.nsx_ten }}</p>
              <p class="mb-1 small">
                Tình trạng:
                <span :class="sp.sp_soluong > 0 ? 'text-success' : 'text-danger'">
                  {{ sp.sp_soluong > 0 ? 'Còn hàng' : 'Hết hàng' }}
                </span>
              </p>
              <p class="mb-2 small text-center">
                Đánh giá: {{ sp.sp_rate }} <i class="fa-solid fa-star"></i> |
                Lượt bán: {{ sp.luotban }}
              </p>
              <div class="mt-auto">
                <a href="#" class="btn btn-warning about w-100" @click.prevent="gotoChitietsp(sp.id)">
                  <i class="fa-solid fa-magnifying-glass"></i> Xem thêm
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>

      
      <div class="d-flex justify-content-center mt-3">
        <nav>
          <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <button class="page-link" @click="gotoPage(currentPage - 1)" :disabled="currentPage === 1">
                Trước
              </button>
            </li>
            <li
              class="page-item"
              v-for="page in totalPages"
              :key="page"
              :class="{ active: currentPage === page }"
            >
              <button class="page-link" @click="gotoPage(page)">{{ page }}</button>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <button class="page-link" @click="gotoPage(currentPage + 1)" :disabled="currentPage === totalPages">
                Sau
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SanPhamNoiBat',
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 4,
      sanPhams: [],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.sanPhams.length / this.itemsPerPage);
    },
    paginatedSanPhams() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.sanPhams.slice(start, start + this.itemsPerPage);
    }
  },
  methods: {
    gotoPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    gotoChitietsp(id) {
      this.$router.push(`/chitietsanpham/${id}`);
    },
    formatCurrency(value) {
      if (!value) return '0 ₫';
      return value.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
      });
    },
    dssanpham() {
      axios.get('http://localhost:8000/sanpham')
        .then((response) => {
          this.sanPhams = response.data;
        })
        .catch((error) => {
          console.error('Lỗi khi tải danh sách sản phẩm:', error);
        });
    },
  },
  created() {
    this.dssanpham();
  }
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 15px rgba(218, 165, 32, 0.2);
  transition: 0.3s ease;
  border: none;
  border-radius: 10px;
}
.card:hover {
  box-shadow: 0 8px 25px rgba(218, 165, 32, 0.5);
  transform: translateY(-2px);
}
.card-img-top {
  height: 160px;
  object-fit: cover;
  padding: 6px;
  border-radius: 8px;
}
.card-body {
  font-size: 14px;
}
.about {
  padding: 8px 12px;
  border-radius: 20px;
  color: white;
  background-color: goldenrod;
  font-size: 14px;
}
.about:hover {
  background-color: #333;
  color: white;
}
.pagination .page-link {
  color: goldenrod;
}
.pagination .active .page-link {
  background-color: goldenrod;
  color: white;
  border-color: goldenrod;
}
.clor {
  background: linear-gradient(135deg, #ead8a8, #eadf9f, #e9d798);
}
.title {
  margin-bottom: 12px;
}
.title:hover {
  color: #c38208;
}
.fa-star {
  color: gold;
}
</style> -->
