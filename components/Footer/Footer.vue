<script setup>
</script>

<template>

<div class="footer">
  <div class="footerMain">
    <div class="footerName">
      THE COFFEE MOVEMENT
    </div>
    <div class="footerCopy">
      2024 &copy; The Coffee Movement. All rights reserved.
    </div>
  </div> 
  <div class="footerLink">
    <div><a href="mailto:aloha@thecoffeemovement.com" class="footerLinkChat">Let's chat</a> / </div>
    <div><a href="https://www.instagram.com/thecoffeemovementsf/" class="footerLinkInsta">instagram</a> / </div>
    <div><a href="https://www.yelp.com/biz/the-coffee-movement-san-francisco" class="footerLinkYelp">Yelp</a> / </div>
    <div><a href="http://www.facebook.com/thecoffeemovement" class="footerLinkFace">Facebook</a></div>
  </div>
</div>

</template>

<style scoped>

  .footer {
    background-color: hsla(27.36842105,42.85714286%,73.92156863%, 1);
    display: flex;
  }

  .footerMain {
    width: 100%;
    color: hsla(18,37.03703704%,42.35294118%, 1);
    padding: 25px 0 10px 30px;
  }

  .footerMain
  .footerName {
    font-size: 15px;
    font-weight: 800;
  }

  .footerCopy {
    font-size: 13px;
    font-weight: 100;
    margin-bottom: 15px;
  }

  .footerLink {
    color: hsla(18,37.03703704%,42.35294118%, 1);
    padding: 25px 10px 10px 0;
    margin-left: -380px;
    display: flex;
    flex-wrap: wrap;
  }


  .footerLinkChat,
  .footerLinkInsta,
  .footerLinkYelp,
  .footerLinkFace {
    text-decoration: underline;
    color: hsla(18,37.03703704%,42.35294118%, 1);
    font-size: 14px;
    margin-left: 5px;
    font-weight: 900;
  }


/* стили не присывают тегам */
</style>