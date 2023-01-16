<template>
    <div>
        <ProductCard :products="products"/>
    </div>
</template>

<script setup>
const { id } = useRoute().params

const {data: products} = await useFetch(`https://fakestoreapi.com/products/${id}`)

if(!products.value){
    throw createError({statusCode: 404, statusMessage: "product not found", fatal: true})
}
</script>

