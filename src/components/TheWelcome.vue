<script setup lang="ts">
import WelcomeItens from "./WelcomeItens.vue";
import WelcomeItem from "./WelcomeItem.vue";
import ScrollSpy from "./ScrollSpy.vue";
import WorksIcon from "./icons/IconWorks.vue";
import ProfileIcon from "./icons/IconProfile.vue";
import StudiesIcon from "./icons/IconStudies.vue";
import SkillsIcon from "./icons/IconSkills.vue";
</script>

<template>
  <ScrollSpy>
    <template #icon1>
      <ProfileIcon />
    </template>
    <template #icon2>
      <StudiesIcon />
    </template>
    <template #icon3>
      <WorksIcon />
    </template>
    <template #icon4>
      <SkillsIcon />
    </template>
  </ScrollSpy>
  <WelcomeItens> </WelcomeItens>
</template>

