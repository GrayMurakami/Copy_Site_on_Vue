<script setup>
</script>

<template>
  <div>
    <div class="contentHeader">
      Café Menu
    </div>
      <div class="menuSection">
        <div class="menuHeader">
          Classics
        </div>
          <div class="menuItem">
            Quick Filter
              <div class="menuPrice">
                $3
             </div>
          </div>
          <div class="menuItem">
            Piccolo
              <div class="menuPrice">
                $3.5
             </div>            
          </div>
          <div class="menuItem">
            Slow Drip
              <div class="menuPrice">
                $4
             </div>
          </div>
          <div class="menuItem">
            Cappuccino
              <div class="menuPrice">
                $3.5
             </div>
          </div>
          <div class="menuItem">
            Espresso
              <div class="menuPrice">
                $3
             </div>
          </div>
          <div class="menuItem">
            Latte   
              <div class="menuPrice">
                $4
             </div>         
          </div>
        <div class="menuHeader">
          Signature Drinks
        </div>
          <div class="menuItem">
            Cocoa Cappuccino
              <div class="itemDescript">
                dark chocolate dusted cappuccino
              </div>
              <div class="menuPrice menuPriceAlign">
                $4.25
              </div>
          </div>
          <div class="menuItem">
            Espresso Tonic
              <div class="itemDescript">
                extra shot espresso, ice, tonic water, lemon
              </div>
              <div class="menuPrice menuPriceAlign">
                $6
              </div>
          </div>
          <div class="menuItem menuItemLeft">
            Tasting Flight
              <div class="itemDescript">
                three pours of today’s featured coffees - or - one
                coffee prepared three different ways
              </div>
              <div class="menuPrice menuPriceEx">
                $5 / $7
              </div>
          </div>
        <div class="menuHeader">
          Seasonal Drinks
        </div>
          <div class="menuItem">
            Vanilla Rosemary Latte
              <div class="itemDescript itemDescriptSeasonal">
                espresso, milk and our seasonal vanilla syrup infused 
                with rosemary and juniper
              </div>
              <div class="menuPrice menuPriceAlign menuPriceAlignSeason">
                $4.75
              </div>
          </div>
          <div class="menuItem">
            Hot Toddy
              <div class="itemDescript itemDescriptSeasonal">
                americano with lemon, honey, “whiskey” (0% abv), 
                smoked apple garnish
              </div>
              <div class="menuPrice menuPriceAlign menuPriceAlignSeasonTwo">
                $6
              </div>
          </div>
          <div class="menuItem menuItemLeft">
            Chai Tea Latte
              <div class="itemDescript itemDescriptSeasonal">
                black tea, milk, cinnamon, cardamom, ginger, pepper, 
                malt
              </div>
              <div class="menuPrice menuPriceEx menuPriceExTwo">
                $5
              </div>
          </div>
        <div class="menuHeader">
          Tea by Song Tea
        </div>
          <div class="menuItem">
            Winter Sprout / Oolong / Taiwan
              <div class="itemDescript">
                carmelized ginger, cotton candy, kettle corn
              </div>
              <div class="menuPrice menuPriceAlign">
                $5
              </div>
          </div>
          <div class="menuItem menuItemAlign">
            Soba / Caffeine-Free Botanical /
            San Francisco
              <div class="itemDescript">
                roasted buckwheat, cocoa nibs, star anise
              </div>
              <div class="menuPrice menuPriceAlign menuPriceAlignTwo">
                $4
              </div>
          </div>
      </div>
  </div>
</template>

<style scoped>

  .contentHeader {
    text-align: center;
    font-size: 40px;
    text-shadow: 0.2px 0.2px 0.2px black;
    padding: 95px 95px 0;
  }

  .menuSection {
    text-align: center;
    font-size: 33px;
    text-shadow: 0.2px 0.2px 0.2px black;
    padding: 30px;
    margin-bottom: 135px;
  }

  .menuHeader {
    margin-top: 100px;
    margin-bottom: 40px;
  }

  .menuItem {
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 35%;
    font-size: 24px;
    text-shadow: 0.2px 0.2px 0.2px black;
    padding: 14px 24px 14px 27px;
  }

  .menuItemAlign {
    text-align: left;
  }

  .menuItemLeft {
    display: flex;
    margin-left: 129px;
  }

  .menuPrice {
    font-size: 14px;
    opacity: 0.8;
  }

  .menuPriceAlign {
    margin-top: -36px;
  }

  .menuPriceAlignSeason {
    margin: -76px 384px;
  }

  .menuPriceAlignSeasonTwo {
    margin: -76px 404px;
  }

  .menuPriceAlignTwo {
    margin-right: -10px;
    margin-top: -75px;
  }

  .menuPriceEx {
    margin-top: -75px;
    padding-left: 373px;
  }

  .menuPriceExTwo {
    margin-top: -75px;
    padding-left: 402px;
  }

  .itemDescript {
    font-size: 14px;
    opacity: 0.8;
    margin: 3px 78px 0 0;
    text-align: left;
  }

  .itemDescriptSeasonal {
    margin-right: 44px;
  }

</style>