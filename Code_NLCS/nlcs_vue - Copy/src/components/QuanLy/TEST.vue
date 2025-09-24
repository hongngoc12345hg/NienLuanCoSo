
<!-- <template>
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

export default {
  name: "ProductGallery",
  data() {
    return {
      selectedImage: sac1, // mặc định ảnh lớn đầu tiên
      images: [sac1, ssa53, oplung],
      quantity:1,
    };
  },
};
</script>

<style scoped>

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

  .thumbnail-item.active {
    border: 3px solid goldenrod;
  }

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
  .product-gallery {
    box-shadow: 0 4px 15px rgba(218, 165, 32, 0.3); /* ánh sáng vàng nhẹ */
    transition: box-shadow 0.4s ease, transform 0.3s ease;
  }

  .product-gallery:hover {
    box-shadow: 0 8px 25px rgba(218, 165, 32, 0.5);
    transform: translateY(-3px);
  }

  .card {
    box-shadow: 0 4px 15px rgba(218, 165, 32, 0.3);
    transition: box-shadow 0.4s ease, transform 0.3s ease;
  }

  .card:hover {
    box-shadow: 0 8px 25px rgba(218, 165, 32, 0.5);
    transform: translateY(-3px);
  }


</style> -->

<template>
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

export default {
  name: "ProductGallery",
  data() {
    return {
      selectedImage: sac1, // mặc định ảnh lớn đầu tiên
      images: [sac1, ssa53, oplung],
      quantity:1,
    };
  },
};
</script>

<style scoped>

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

/* Phần menu */

</style>
