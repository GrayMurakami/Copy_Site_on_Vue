<script setup>
  import logo from '~/assets/image/logo.png';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const router = useRouter();

  const redirectToContact = () => {
    router.push('/contact');
  };

  const links = reactive([
    //{to:'/', name:'Go to Main Pages'},
    {to:'/about', name:'About Us'},
    {to:'/service', name:'Our Services'},
    {to:'/menu', name:'Café Menu'},
    {to:'/shop', name:'Shop'}
  ])
</script>

<template>

  <div class="header">
    <div class="logo-container">
      <RouterLink :to="{ path:'/'}">
        <img :src="logo" alt="Logo" class="logo" /> <!-- Двоеточием указываем импорт из script, будет какая то переменная JS в свойстве, любое выражение, функции -->
      </RouterLink>
    </div>
    <div class="headerLink">
      <RouterLink v-for="(item, i) in links" :key="'link' + i" :to="item.to" :class="{ 'active-link': route.path === item.to }" class="link">{{ item.name }}</RouterLink>
      <button @click="redirectToContact" class="contactButton">Contact Us</button>
    </div>
  </div>

</template>

<style scoped>

.header {
  background-color: hsla(41.53846154,39.39393939%,93.52941176%,1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo-container {
  margin-top: 17px;
  margin-bottom: 10px;
  margin-left: 19px;
}

.logo {
  width: 120px;
  height: auto;
}

.headerLink {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  text-shadow: 0.1px 0.1px 0.1px black;
}

.link {
  text-decoration: none;
  color: #000;
  margin: 0 11px;
}

.active-link {
  text-decoration: underline;
}

.contactButton {
  background-color: hsla(27.36842105,42.85714286%,73.92156863%, 1);
  padding: 18px 28px;
  cursor: pointer;
  color: #fff;
  border-radius: 29px;
  border: none;
  font-size: 15px;
  text-shadow: 0.2px 0.2px 0.2px #fff;
  margin-left: 20px;
  margin-right: 17px;
}

.contactButton:hover {
  opacity: 0.8;
}

</style>
