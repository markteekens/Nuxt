<template>
  <Header />
  <div>
    <h1 class="font-bold text-2xl">Welcome, {{ userSupa?.email }}</h1>
    <NuxtLink to="/products">
      Yes I want to go to the products<button class="underline ml-1">
        here
      </button>
    </NuxtLink>
    <div v-if="data" class="mt-20">{{ data.message }}</div>
    <div v-else class="mt-20">Loading..</div>
  </div>
</template>
<script setup>
const userSupa = useSupabaseUser();
definePageMeta({
  middleware: ["auth"],
});
const client = useSupabaseAuthClient();
const { data, pending } = await useFetch(`/api/ape?name=mario`, {
  method: "POST",
  body: { age: 30, isOld: true },
});
const { data: dataTypicode, pending: pendingTypicode } = await useFetch(
  `https://jsonplaceholder.typicode.com/posts`
);
const signOut = async () => {
  const data = await client.auth.signOut();
  console.log(data);
};
const getAuthStatus = async () => {
  const data = await client.auth.getUser();
  console.log(data);
};
onMounted(() => {
  watchEffect(() => {
    if (!userSupa.value) {
      navigateTo("/");
    }
  });
});
</script>
