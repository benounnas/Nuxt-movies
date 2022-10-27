<template>
  <div class="btm-nav btm-nav-md z-50">
    <NuxtLink to="/" tag="button">
      <Icon name="akar-icons:home" width="25" height="25" />
    </NuxtLink>
    <NuxtLink to="/movies">
      <Icon name="icon-park-solid:movie" width="25" height="25" />
    </NuxtLink>
    <NuxtLink to="/tv">
      <Icon name="eva:tv-fill" width="25" height="25" />
    </NuxtLink>
    <NuxtLink to="/search" class="active">
      <Icon name="akar-icons:search" width="25" height="25" />
    </NuxtLink>
  </div>
</template>
