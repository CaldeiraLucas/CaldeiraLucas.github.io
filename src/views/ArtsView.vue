<script setup lang="ts">
import TheArts from "@/components/TheArts.vue";

function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);        

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}

console.log(getScrollbarWidth());


</script>

<template>
  <main>
    <TheArts />
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  main {
    max-width: 830px;
    overflow: hidden;
    display: grid;
    gap: 40px;
    height: initial;
    min-height: 100vh;
    margin: 30px 0;
  }
}
</style>
