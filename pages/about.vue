<template>
    <div>
      <h1 class="font-bold text-2xl">About</h1>
      <div class="mt-20">{{ data.message }}</div>
  </div>
</template>
<script setup>

const {data} = await useFetch(`/api/ape?name=mario`, {
  method: 'POST',
  body: {age: 30}
})
</script>