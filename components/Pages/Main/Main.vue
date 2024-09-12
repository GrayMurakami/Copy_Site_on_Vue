<script setup>
  import centerPic from '~/assets/image/centerPicture.png';

</script>

<template>
  <div>
    <div class="container">
      <img :src="centerPic" alt="GoodTime" class="centerPicture">
    </div>
    <div class="headLine">
      <div class="headLineMain">serving coffee everyday</div>

      <div class="firstLoca"> 
        <div class="district">Chinatown</div> <!-- для него один класс и div -->
        <div class="address">1030 Washington Street</div> <!-- остальные завернуть в div -->
        <div class="weekday">Monday-Thursday: 7am-2pm</div>
        <div class="weekend">Friday-Sunday: 7am-4pm</div>
      </div>

      <div class="secondLoca"> <!-- закинуть всё под один firstLoca -->
        <div class="district">Inner Richmond</div>
        <div class="address">1737 Balboa Street</div>
        <div class="weekday">Everyday: 7am-4pm</div>
      </div>

    </div>
  
  </div>
</template>

<style scoped>

  .container {
    background: url('/assets/image/background.jpg');
    background-size: cover;
    background-position: 100% 59%;
    background-attachment: scroll;
    height: 400px; /* Фиксированная высота */
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .centerPicture {
    width: 600px;
  }


  .headLine
  .headLineMain {
    color: hsla(18,37.03703704%,42.35294118%, 1);
    text-align: center;
    padding: 30px;
    font-size: 32px;
  }

  .headLine {
    color: hsla(18,37.03703704%,42.35294118%, 1);
    text-align: center;
    padding: 30px 0 20px 0;
  }

  .district,
  .address,
  .weekday,
  .weekend {
    color: hsla(18,37.03703704%,42.35294118%, 1);
    text-align: center;
    font-size: 14px;
  }

  .district {
    font-weight: 600;
  }

  .secondLoca {
    margin-top: 20px;
    margin-bottom: 30px;
  }

</style>
