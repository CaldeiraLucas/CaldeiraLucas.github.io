<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
</script>

<template>
  <div style="padding-top: 30px; overflow-y: hidden">
    <WelcomeItem>
      <template #heading>Quem sou</template>
      <div class="content">
        <div class="pf_image"><img src="../assets/photo.jpg" alt="" /></div>
        <div>
          <p>
            Bacharel em Desenho Industrial com Habilitação em Design de Mídias
            Digitais pela PUC-Rio (2014-2019).
          </p>
          <p>
            Embora seja de falar pouco, gosta de ouvir as pessoas. Racional,
            empático e esforçado, tenta ser útil o quanto possível para a
            equipe. Em busca de mais conhecimentos em desenvolvimento web
            (front-end) e ilustração.
          </p>
          <p>
            Nas horas vagas, ouve música, pratica esportes, assiste Youtube ou
            Netflix, e joga casualmente.
          </p>
        </div>
      </div>
      <div class="socials">
        <a href="https://github.com/CaldeiraLucas" target="_blank"><img src="../assets/GitHub-Mark-Light-64px.png" alt="" /></a>
        <a href="https://www.linkedin.com/in/lucas-caldeira-de-macedo-aaba08134/" target="_blank"><img src="../assets/In-White-48.png" alt="" /></a>
        <a href="https://www.behance.net/LucasCaldeira" target="_blank"><img src="../assets/behance.jpeg" alt="" /></a>
        <a href="https://www.pixiv.net/en/users/5951600" target="_blank"><img src="../assets/pixiv.png" alt="" /></a>
        <a href="https://www.deviantart.com/lucascaldeira" target="_blank"><img src="../assets/deviantart.png" alt="" /></a>
        <a href="https://www.instagram.com/l.caldeira.m/" target="_blank"><img src="../assets/instagram.png" alt="" /></a>
      </div>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Cursos</template>

      This project is served and bundled with
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite</a>.
      The recommended IDE setup is
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a
      >. If you need to test your components and web pages, check out
      <a href="https://www.cypress.io/" target="_blank">Cypress</a> and
      <a
        href="https://docs.cypress.io/guides/component-testing/introduction"
        target="_blank"
        >Cypress Component Testing</a
      >.

      <br />

      More instructions are available in <code>README.md</code>.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Experiências profissionais</template>

      Get official tools and libraries for your project:
      <a target="_blank" href="https://pinia.vuejs.org/">Pinia</a>,
      <a target="_blank" href="https://router.vuejs.org/">Vue Router</a>,
      <a target="_blank" href="https://test-utils.vuejs.org/">Vue Test Utils</a
      >, and
      <a target="_blank" href="https://github.com/vuejs/devtools"
        >Vue Dev Tools</a
      >. If you need more resources, we suggest paying
      <a target="_blank" href="https://github.com/vuejs/awesome-vue"
        >Awesome Vue</a
      >
      a visit.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Conhecimentos</template>

      Got stuck? Ask your question on
      <a target="_blank" href="https://chat.vuejs.org">Vue Land</a>, our
      official Discord server, or
      <a
        target="_blank"
        href="https://stackoverflow.com/questions/tagged/vue.js"
        >StackOverflow</a
      >. You should also subscribe to
      <a target="_blank" href="https://news.vuejs.org">our mailing list</a> and
      follow the official
      <a target="_blank" href="https://twitter.com/vuejs">@vuejs</a>
      twitter account for latest news in the Vue world.
    </WelcomeItem>
  </div>
</template>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 40px;
}

.pf_image {
  width: 250px;
  overflow: hidden;
}

.pf_image img {
  width: 400px;
  margin-left: -100px;
}

.socials {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
}

.socials a:hover {
  background-color: transparent;
}

.socials img {
  width: 45px;
  border-radius: 5px;
}
</style>
