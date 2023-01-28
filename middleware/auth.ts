export default defineNuxtRouteMiddleware(async (to) => {
  const user = useSupabaseUser();

  if (!user.value && to.path == "/about") {
    navigateTo("/");
  } 
  else if (user.value && to.path == "/") {
    navigateTo("/about");
  }
  else if (user.value && to.path == "/signin") {
        navigateTo("/about");
  }
  else if (user.value && to.path == "/signup") {
    navigateTo("/about");
}
else if (!user.value && to.path.includes("/products")) {
    navigateTo("/");
}


});
