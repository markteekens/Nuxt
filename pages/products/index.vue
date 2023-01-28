<template>
  <div>
    <p>Products</p>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
        <img :src="p.image" alt="image" class="h-20" />
      </div>
    </div>
  </div>
</template>

<script setup>
//fetch the products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
const userSupa = useSupabaseUser();
onMounted(() => {
  watchEffect(() => {
    if (!userSupa.value) {
      navigateTo("/");
    }
  });
});
definePageMeta({
  middleware: ["auth"],
});
</script>
