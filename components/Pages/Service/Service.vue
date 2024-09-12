<script setup>

  import cort from '~/assets/image/espressocart.png';
  import office from '~/assets/image/officeprogram.png';
  import consulting from '~/assets/image/consulting.png';

  const redirectToChat = () => {
    window.location.href = 'mailto:aloha@thecoffeemovement.com';
  }

</script>

<template>

<div class="services">
  <div class="headLine">
    Our Services    
  </div>
  <div class="pictureContainer">
    <div class="pictureItemOne">
      <img :src="cort" alt="Espressocort" class="picture" />
        <div class="picTitle">
          Mobile Espresso Bar
        </div>
        <div class="descript">
          Have The Coffee Movement pop up anywhere – your office, private party, wedding, wherever. We offer full espresso and pour over menus with a hospitality first approach.
        </div>
        <div class="signLine">〰️</div>
        <div class="placeName">
          Bar Cart
        </div>
        <div class="placeAddress">
          ‘69 VW Truck
        </div>
    </div>
    <div class="pictureItemTwo">
      <img :src="office" alt="Officeprogram" class="picture" />
        <div class="picTitle">
          Office Coffee Program
        </div>
        <div class="descript">
          Help your employees and clients feel more appreciated and caffeinated by bringing The Coffee Movement to your space and elevate your existing brand experience.
        </div>
        <div class="signLine">〰️</div>
        <div class="placeName">
          Coffee Subscriptions
        </div>
        <div class="placeAddress">
          Equipment Outfitting
        </div>
    </div>
    <div class="pictureItemThree">
      <img :src="consulting" alt="Consulting" class="picture" />
        <div class="picTitle">
          Consulting
        </div>
        <div class="descript">
          Clients from Bubble Lab Robotics to DeLonghi have tapped into us to get their businesses and products ready for launch. We can help you too – whatever your needs may be.
        </div>
        <div class="signLine">〰️</div>
        <div class="placeName">
          Café &amp; Barista Training
        </div>
        <div class="placeAddress">
          Product Testing
        </div>
    </div>
  </div>
  <button @click="redirectToChat" class="chatButton">Let's chat</button>
</div>

</template>

<style scoped>

  .services {
    margin-bottom: 250px;
  }

  .headLine {
    text-align: center;
    font-size: 40px;
    text-shadow: 0.2px 0.2px 0.2px black;
    padding: 95px;
  }

  .pictureContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .pictureItemOne {
    text-align: center;
    margin: 0 0 20px 20px;
  }

  .pictureItemTwo {
    text-align: center;
    margin: 0 0 20px 0;
  }

  .pictureItemThree {
    text-align: center;
    margin: 0 20px 20px 0;
  }

  .picture {
    width: 100%;
    max-width: 370px;
  }

  .picTitle {
    font-size: 30px;
    text-shadow: 0.2px 0.2px 0.2px black;
    padding: 30px;
  }

  .descript {
    font-size: 14px;
    margin: 0 20px 15px 12px;
  }

  .placeName {
    margin: 17px 0 ;
    font-size: 15px;
    font-weight: 900;
  }

  .placeAddress {
    font-size: 15px;
    font-weight: 900;
  }

  .chatButton {
  background-color: hsla(27.36842105,42.85714286%,73.92156863%, 1);
  align-items: center;
  padding: 20px 35px;
  cursor: pointer;
  color: #fff;
  border-radius: 36px;
  border: none;
  font-size: 16px;
  text-shadow: 0.2px 0.2px 0.2px #fff;
  position: absolute;
  left: 45%;
  transform: translateY(81px);
  }

  .chatButton:hover {
  opacity: 0.8;
  }

</style>