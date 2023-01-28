<template>
  <div>
    <p class="font-bold">Product details for</p>
    <p>{{ products.title }}</p>
    <div class="flex gap-1">
      <p class="font-bold">Price:</p>
      <p>{{ products.price }}</p>
    </div>
    <div>
      <img class="h-32 mt-6" :src="products.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  pageName: "ProductCard",
  props: ["products"],
};
</script>
