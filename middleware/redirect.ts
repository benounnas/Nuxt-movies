export default defineNuxtRouteMiddleware((to, from) => {
  // setting the redirect code to '301 Moved Permanently'
  return navigateTo("/movies");
});
