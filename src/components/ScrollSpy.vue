<script setup>
import DocumentationIcon from "./icons/IconDocumentation.vue";
</script>

<template>
  <div class="icons">
    <i className="active">
      <slot name="icon1"></slot>
    </i>
    <i>
      <slot name="icon2"></slot>
    </i>
    <i>
      <slot name="icon3"></slot>
    </i>
    <i>
      <slot name="icon4"></slot>
    </i>
  </div>
</template>

<style scoped>
.icons {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  align-self: center;
}

i{
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

/* h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
} */

@media (min-width: 1024px) {
  i {
    /* top: calc(50% - 25px);
    left: -26px;
    position: absolute; */
    border: 1px solid var(--color-border);
    background: var(--color-background-soft);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  i.active, #profile-icon.active {
    color: var(--vt-c-white-soft);
    border: 1px solid var(--vt-c-white-soft);
  }

  .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
