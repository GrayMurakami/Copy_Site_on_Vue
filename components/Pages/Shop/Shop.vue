<script setup>

  import sweatshirtGreenFront from '~/assets/image/shop/Sweatshirt-LightGree-front.png';
  import sweatshirtDarkGrayBack from '~/assets/image/shop/Sweatshirt-back.png';

  import jacketBlackFront from '~/assets/image/shop/ShellJacket-front.png';
  import tShirtBay from '~/assets/image/shop/Tshirt-Bay.png';

  import greenBag from '~/assets/image/shop/CordTote.png';
  import lightBag from '~/assets/image/shop/Bags_CanvasZip.png';

  import blackBag from '~/assets/image/shop/Tote_BlackZip.png';
  import blueHoodie from '~/assets/image/shop/Sweatshirt-back-blue-tiedye.png';

  import brownHoodie from '~/assets/image/shop/Sweatshirt-back-tiedye.png';

  import giftCard from '~/assets/image/shop/giftcard.jpg';

  const router = useRouter();

  const toBuyGiftCard = () => {
    window.location.href = 'https://squareup.com/gift/CF489X39H1FZN/order';
  }

</script>

<template>
  <div class="gallery">
    <div class="galleryShop">
      <RouterLink :to="{path:'/shop/page/logoCrewneck'}">
        <img :src="sweatshirtGreenFront" alt="Sweatshirt Green Front" class="sweatshirtGreenFront" />
        <div class="description">
          Logo Crewneck
        </div>
        <div class="price">
          $40.00
        </div>
      </RouterLink>
    </div>

    <div class="galleryShop">
      <RouterLink :to="{path:'/shop/page/coffeeHoodie'}">
        <img :src="sweatshirtDarkGrayBack" alt="Sweatshirt DarkGraY Back" class="sweatshirtDarkGrayBack">
        <div class="description">
          Good Times Better Coffee Hoodie        
        </div>
        <div class="price">
          $45.00
        </div>
      </RouterLink>
    </div>

    <div class="galleryShop">
      <RouterLink :to="{path:'/shop/page/blackLogoJacket'}">
        <img :src="jacketBlackFront" alt="Black Jacket" class="jacketBlackFront">
        <div class="description">
          Black Soft Shell Logo Jacket        
        </div>
        <div class="price">
          $65.00
        </div>
      </RouterLink>
    </div>

    <div class="galleryShop">
      <RouterLink :to="{path:'/shop/page/logoTShirt'}">
        <img :src="tShirtBay" alt="T-Shirt Light Green" class="tShirtBay">
        <div class="description">
          Logo T-Shirt        
        </div>
        <div class="price">
          $30.00
        </div>
      </RouterLink>
    </div>

    <div class="galleryShop">
      <RouterLink :to="{path:'/shop/page/corduroyBag'}">
        <img :src="greenBag" alt="Corduroy Bag" class="greenBag">
        <div class="description">
          Corduroy Tote Bag        
        </div>
        <div class="price">
          $30.00
        </div>
      </RouterLink>
    </div>

    <div class="galleryShop">
      <RouterLink :to="{path:'/shop/page/canvasBag'}">
        <img :src="lightBag" alt="Zippered Light Bag" class="lightBag">
        <div class="description">
          Canvas Zippered Tote Bag        
        </div>
        <div class="price">
          $35.00
        </div>
      </RouterLink>
    </div>

    <div class="galleryShop">
      <RouterLink :to="{path:'/shop/page/blackBag'}">
        <img :src="blackBag" alt="Zippered Black Bag" class="blackBag">
        <div class="description">
          Canvas Zippered Tote Bag        
        </div>
        <div class="price">
          $35.00
        </div>
      </RouterLink>
    </div>

    <div class="galleryShop">
      <RouterLink :to="{path:'/shop/page/blueHoodie'}">
        <img :src="blueHoodie" alt="Limited Edition Blue Hoodie" class="blueHoodie">
        <div class="description">
          Limited Edition | Good Times Better Coffee Blue Tie Dye Hoodie        
        </div>
        <div class="price">
          $60.00
        </div>
      </RouterLink>
    </div>

    <div class="galleryShop singleImage">
      <RouterLink :to="{path:'/shop/page/brownHoodie'}">
        <img :src="brownHoodie" alt="Limited Edition Brown Hoodie" class="brownHoodie">
        <div class="description">
          Limited Edition | Good Times Better Coffee Brown Tie Dye Hoodie        
        </div>
        <div class="price">
          $60.00
        </div>
      </RouterLink>
    </div>

    <div class="space"></div>

    <div class="giftCardContainer">
      <div class="pictureCard">
        <img :src="giftCard" alt="Gift Card" class="giftCard">
      </div>
      <div class="outLine">
        Share the good times and better coffee with friends.
        <div>
          <button @click="toBuyGiftCard" class="btnGiftCard">Buy Gift Card</button>
        </div>
      </div>
    </div>
    
  </div>
</template>

<style scoped>

  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 33px;
    margin-bottom: 5px;
  }

  .galleryShop {
    width: 46%;
    box-sizing: border-box;
    padding: 3px;
  }

  .galleryShop
  a {
    text-decoration: none;
    color: #000;
  }

  .description {
    font-size: 23px;
    text-shadow: 0.3px 0.3px 0.3px black;
    margin-top: 10px;
  }

  .price {
    margin-bottom: 37px;
  }

  .sweatshirtGreenFront,
  .sweatshirtDarkGrayBack,
  .jacketBlackFront,
  .tShirtBay,
  .greenBag,
  .lightBag,
  .blackBag,
  .blueHoodie,
  .brownHoodie {
    width: 100%;
    height: auto;
  }

  .sweatshirtGreenFront:hover {
    content: url('/assets/image/shop/Sweatshirt-LightGreen-back.png');
  }

  .sweatshirtDarkGrayBack:hover {
    content: url('/assets/image/shop/Sweatshirt-front.png');
  }

  .jacketBlackFront:hover {
    content: url('/assets/image/shop/ShellJacket-back.png');
  }

  .tShirtBay:hover {
    content: url('/assets/image/shop/Tshirt-Bay-reverse.png');
  }

  .greenBag:hover {
    content: url('/assets/image/shop/CordTote_Back.jpg');
  }

  .lightBag:hover {
    content: url('/assets/image/shop/Bags_CanvasZip_Reverse.png');
  }

  .blackBag:hover {
    content: url('/assets/image/shop/Tote_BlackZip-goodtimes.png');
  }

  .blueHoodie:hover {
    content: url('/assets/image/shop/Sweatshirt-front-blue-tiedye.png');
  }

  .brownHoodie:hover {
    content: url('/assets/image/shop/Sweatshirt-front.png');
  }

  .singleImage {
    margin-left: 34px;
  }

  .space {
    flex-grow: 1;
  }

  .giftCardContainer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .pictureCard {
    width: 50%;
    height: auto;
    box-sizing: border-box;
  }

  .giftCard {
    width: 85%;
    margin-left: 34px;
  }

  .outLine {
    width: 50%;
    height: auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 23px;
    text-shadow: 0.3px 0.3px 0.3px black;
    margin-top: -90px;
    padding: 0 20px 0 53px;
  }

  .btnGiftCard {
  background-color: #000;
  padding: 20px 35px;
  cursor: pointer;
  color: #fff;
  border-radius: 36px;
  border: none;
  font-size: 16px;
  text-shadow: 0.2px 0.2px 0.2px #fff;
  position: absolute;
  left: 54%;
  transform: translateY(91px);
  }

  .btnGiftCard:hover {
    opacity: 0.8;
  }


</style>