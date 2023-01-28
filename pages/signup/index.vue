<template>
  <Header />
  <div class="min-h-screen flex justify-center">
    <form @submit.prevent="() => signUp()" class="flex flex-col">
      <div class="flex flex-col">
        <label>Username</label>
        <input v-model="name" type="text" />
      </div>
      <div class="flex flex-col">
        <label>Password</label>
        <input v-model="password" type="password" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script setup>
const client = useSupabaseAuthClient();
const userSupa = useSupabaseUser();

const signUp = async () => {
  const name = ref("");
  const password = ref("");
  const data = await client.auth.signUp({
    email: "mark@rubyfinance.nl",
    password: "123456P",
  });
  navigateTo("/confirm");
  console.log(data);
};

definePageMeta({
  middleware: ["auth"],
});

onMounted(() => {
  watchEffect(() => {
    if (userSupa.value) {
      navigateTo("/about");
    }
  });
});
</script>
