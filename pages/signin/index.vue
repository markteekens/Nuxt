<template>
  <Header />
  <div class="min-h-screen flex justify-center">
    <div class="flex flex-col">
      <div class="flex flex-col">
        <label>Username</label>
        <input type="text" />
      </div>
      <div class="flex flex-col">
        <label>Password</label>
        <input type="password" />
      </div>
      <button @click="signIn" type="submit">Sign In</button>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseAuthClient();
const userSupa = useSupabaseUser();
const signIn = async () => {
  const data = await client.auth.signInWithPassword({
    email: "mark.teekens@outlook.com",
    password: "pass123!",
  });
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
