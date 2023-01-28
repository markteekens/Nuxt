<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between items-center">
      <NuxtLink to="/" class="font-bold">Zackercoda</NuxtLink>
      <ul class="flex gap-4 items-center">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products" class="buttonBase">Products</NuxtLink></li>
        <div class="flex items-center gap-1">
          <p class="text-2xl">Cart</p>
          <p class="text-3xl">({{ cart.length }})</p>
        </div>
        <div class="flex gap-2">
          <div v-if="!userSupa">
            <NuxtLink to="/signin">
              <button class="border-black p-2 border rounded-md">
                Sign in
              </button>
            </NuxtLink>
          </div>
          <div v-else>
            <button @click="signOut" class="border-black p-2 border rounded-md">
              Sign Out
            </button>
          </div>
          <NuxtLink to="/signup">
            <button class="border-black p-2 border rounded-md">Sign Up</button>
          </NuxtLink>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const cart = useCart();
console.log(cart?.value.length);
//auth
const client = useSupabaseAuthClient();
const userSupa = useSupabaseUser();

const signIn = async () => {
  const data = await client.auth.signInWithPassword({
    email: "mark.teekens@outlook.com",
    password: "pass123!",
  });
  setUser(data?.data.user.email);
};

const signOut = async () => {
  const data = await client.auth.signOut();
  console.log(data);
};
</script>
