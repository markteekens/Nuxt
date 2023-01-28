
<script setup>


//auth

const client = useSupabaseAuthClient()
const signUp = async () =>{
    const data = await client.auth.signUp({
        email: "mark.teekens@outlook.com",
        password: "pass123!"
    })
    console.log(data)
   
    
}
const userSupa = useSupabaseUser()
const [user, setUser] = useStateReact('');
const signIn = async () =>{
    const data = await client.auth.signInWithPassword({
        email: "mark.teekens@outlook.com",
        password: "pass123!"
    })
   setUser(data?.data.user.email)
    
}

const getAuthStatus = async () =>{
    const data = await client.auth.getUser()
    console.log(data)
    
}
const {data: products, pending: isLoading} = await useFetch("https://fakestoreapi.com/products")
const cart = useCart()
const addToCart = ()  => {
    cart.value.push("Item")

}
const clearCart = () =>{
    cart.value.length = 0
}

const RomoveLastItem = () =>{
    cart.value.pop()
}
definePageMeta({
    middleware: ['auth']
})

onMounted(() =>{
    watchEffect(() => {
        if(userSupa.value){
            navigateTo("/about")
        }
    })
})
</script>

<template>

    <div class="">
       <Header />
        <div class="min-h-screen">
        
        <div class="h-40">
            
        </div>
       <div c>
      
        <div class="flex justify-center items-center -ml-20 ">
            
                <NuxtLink :to="`/products/${products[1]?.id}`">
                <p class="w-6/12 mx-auto">{{ products[1]?.title }}</p>
                </NuxtLink>
                <img :src="products[1]?.image" alt="image" class="h-40 " />
            
            
        </div>
    </div>
        <div class="flex gap-4 p-2 justify-center"> 
        <button class="transition duration-500 border-black border rounded-lg p-2 hover:text-white hover:bg-black font-bold" @click="addToCart">Add to cart</button>
         <button class="transition duration-500 border-black border rounded-lg p-2 hover:text-white hover:bg-black font-bold" @click="clearCart">Clear Cart</button>
          <button class="transition duration-500 border-black border rounded-lg p-2 hover:text-white hover:bg-black font-bold" @click="RomoveLastItem">Remove last item</button>
          </div>
          <div><button @click="signUp" class="border-black border">Sign Up</button><button @click="signIn" class="border-black border">Sign in</button></div>
          <button @click="getAuthStatus" class="border-black border">Get status</button>
          </div>
          <Footer />
    </div>
</template>

