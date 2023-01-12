
<template>
    <div>
        <p>Products</p>
        <div class="grid grid-cols-4 gap-5 ">
            <div v-for="p in products" :key="p.id">
                <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
            </div>
            <div v-for="p, index in products" :key="index">
                {{p.id}}
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "product"
})
//fetch the products
const {data: products} = await useFetch("https://fakestoreapi.com/products")

</script>