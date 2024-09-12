<script setup>

import sweatshirtGreenFront from '~/assets/image/shop/Sweatshirt-LightGree-front.png';

const router = useRouter();

const toShopPage = () => {
  router.push('/shop');
};

const toLogoCrewneck = () => {
  window.location.reload();
};

</script>

<template>
  <div class="shopHeader">
    <div class="navi">
      <div @click="toShopPage" class="shopPage">Shop</div>
      <div class="great">&GT;</div>
      <div @click="toLogoCrewneck" class="pageLogoCrewneck">Logo Crewneck</div>
    </div>

    <div class="pageBoxSection">
      <div class="pictureBox">
        <img :src="sweatshirtGreenFront" alt="Sweatshirt Green Front" class="sweatshirtGreenFront" />
      </div>

      <div class="descriptBox">
        <div class="descriptHeader">
          Logo Crewneck
        </div>
        <div class="price">
          $40.00
        </div>

        <div class="list">
          <ul class="listProduct">
            <li class="listRow">80% cotton / 20% polyester</li>
            <li class="listRow">Soft-washed, ring spun, garment-dyed fabric</li>
            <li class="listRow">ade with OEKO-TEX certified low-impact dyes</li>
            <li class="listRow">1x1 rib collar, cuffs and waistband</li>
            <li class="listRow">Unisex</li>
          </ul>
        </div>

        <div class="selectBox">
          <div class="selectName">
            Size:
          </div>

          <div class="selectWrapper">
            <form action="">
              <div class="customSelect">
                <select name="size" id="size" class="select">
                  <option value="" disabled selected>Select Size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                  <option value="XLarge">XLarge</option>
                </select>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
.shopHeader {
  margin-bottom: 200px;
}

.navi {
  display: flex;
  margin: 40px 0 60px 86px;
  font-size: 14px;
}

.shopPage,
.pageLogoCrewneck {
  cursor: pointer;
}

.great {
  margin: 0 10px;
}

.pageBoxSection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 35px 48px;
}

.pictureBox,
.descriptBox {
  width: 45%;
  box-sizing: border-box;
  margin: 0px 20px;
}

.descriptHeader {
  font-size: 40px;
  text-shadow: 0.3px 0.3px 0.3px black;
  margin-top: 65px;
}

.price {
  font-size: 23px;
  text-shadow: 0.2px 0.2px 0.2px black;
  margin-top: 30px;
  margin-bottom: 25px;
}

.sweatshirtGreenFront {
  width: 100%;
  height: auto;
}

.listProduct {
  font-size: 14px;
}

.listRow {
  list-style-type: square;
  margin-top: 15px;
}

.customSelect {
  position: relative;
  width: 100%;
}

.select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  padding: 32px;
  border: 1px solid #000;
  width: 100%;
  cursor: pointer;
}

.select:focus {
  outline: none;
}

/* Имитация стрелки для стилизации */
.select::-ms-expand {
  display: none;
}

.selectWrapper::after {
  content: "\25BC";
  /* стрелка вниз */
  position: absolute;
  right: 120px;
  transform: translateY(-213%);
  pointer-events: none;
}
</style>