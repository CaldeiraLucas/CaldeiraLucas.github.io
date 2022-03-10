<script setup lang="ts">
import WelcomeItens from "./WelcomeItens.vue";
import WelcomeItem from "./WelcomeItem.vue";
import ScrollSpy from "./ScrollSpy.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ProfileIcon from "./icons/IconProfile.vue";
import StudiesIcon from "./icons/IconStudies.vue";

</script>

<template>
  <ScrollSpy>
    <template #icon1>
      <ProfileIcon/>
    </template>
    <template #icon2>
      <StudiesIcon />
    </template>
    <template #icon3>
      <DocumentationIcon />
    </template>
  </ScrollSpy>
  <WelcomeItens>
  </WelcomeItens>
</template>

