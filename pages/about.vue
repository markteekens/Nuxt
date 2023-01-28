<template>
    <div>
      <h1 class="font-bold text-2xl">Welcome, {{userSupa?.email}}</h1>
      <h1 class="font-bold text-2xl">About</h1>
      <div v-if="data" class="mt-20">{{ data.message }}</div>
       <div v-else class="mt-20">Loading..</div>
  </div>
  <div>
      <h1 class="font-bold text-2xl">About</h1>
      <div v-if="dataTypicode">{{ dataTypicode.map((dat) => (dat.id)) }}</div>
       <div v-else class="mt-20">Loading..</div>
  </div>
  <button @click="signOut" class="border-black border">Sign out</button>
  <button @click="getAuthStatus" class="border-black border">Get status</button>
</template>
<script setup>
const userSupa = useSupabaseUser()
definePageMeta({
    middleware: ['auth']
})
const client = useSupabaseAuthClient()
const {data, pending} = await useFetch(`/api/ape?name=mario`, {
  method: 'POST',
  body: {age: 30, isOld: true}
})
const {data: dataTypicode, pending: pendingTypicode} = await useFetch(`https://jsonplaceholder.typicode.com/posts`)
const signOut = async () =>{
    const data = await client.auth.signOut()
    console.log(data)
    
}
const getAuthStatus = async () =>{
    const data = await client.auth.getUser()
    console.log(data)
    
}
onMounted(() =>{
    watchEffect(() => {
        if(!userSupa.value){
            navigateTo("/")
        }
    })
})
</script>