<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from '@/components/HelloWorld.vue'
import languageSelect from "./components/language";

const language = languageSelect();
const pt = ["Perfil", "Artes"];
const en = ["Profile", "Arts"];

let menu;

switch (language) {
  case "pt":
    {
      menu = pt;
    }
    break;

  case "en":
    {
      menu = en;
    }
    break;
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="400" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/" name="perfil">{{ menu[0] }}</RouterLink>
        <RouterLink to="/arts" name="arts">{{ menu[1] }}</RouterLink>
        <RouterLink to="/design" name="design">Design</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<style>
@import "@/assets/base.css";

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

main {
  display: grid;
  height: 75vh;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 2rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  flex-direction: column;
}

.logo {
  display: block;
  margin: 0;
}

a,
.green {
  text-decoration: none;
  color: hsla(170, 100%, 37%, 1);
  transition: 0.4s;
}

p {
  margin-bottom: 10px;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(170, 100%, 37%, 0.2);
  }

  [name~="arts"]:hover {
    background-color: hsla(54, 100%, 40%, 0.2);
  }

  [name~="design"]:hover {
    background-color: hsla(0, 100%, 40%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--vt-c-white-soft);
}

nav a.router-link-exact-active[name~="perfil"] {
  /* color: var(--color-text); */
  /* color: hsla(170, 100%, 37%, 1); */
  border-bottom: 1px solid hsla(170, 100%, 37%, 1);
}

nav a.router-link-exact-active[name~="arts"] {
  border-bottom: 1px solid hsla(54, 100%, 40%, 1);
}

nav a.router-link-exact-active[name~="design"] {
  border-bottom: 1px solid hsla(0, 100%, 40%, 1);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  color: var(--color-text);
  display: inline-block;
  padding: 0.3rem 1rem;
}

/* nav a:first-of-type {
  border: 0;
} */

@media (min-width: 1024px) {
  body {
    display: flex;
    /* place-items: center; */
  }

  #app {
    display: grid;
    /* grid-template-columns: 1fr 1fr;
    padding: 0 2rem; */
  }

  header {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  header .wrapper {
    display: flex;
    place-items: center stretch;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0;
  }

  nav {
    text-align: center;
    /* margin-left: -1rem; */
    font-size: 1rem;
    /* padding: 1rem 0; */
    margin-top: 0.5rem;
    display: flex;
  }
}
</style>
