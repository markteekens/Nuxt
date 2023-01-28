<template>

<header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between items-center">
          <NuxtLink to="/" class="font-bold">Zackercoda</NuxtLink>
    <ul class="flex gap-4 items-center">
    <li><NuxtLink to="/">Home</NuxtLink></li>
    <li><NuxtLink to="/about">About</NuxtLink></li>
    <li><NuxtLink to="/products" class="buttonBase">Products</NuxtLink></li>
    <div class="flex items-center gap-1"><p class="text-2xl">Cart</p> <p class="text-3xl">({{cart.length}})</p></div>
    
  </ul>
</nav>
</header>
  
</template>

<script setup>
const cart = useCart()
console.log(cart?.value.length)
</script>