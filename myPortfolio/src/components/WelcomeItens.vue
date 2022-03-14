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
        <a href="https://github.com/CaldeiraLucas" target="_blank"
          ><img src="../assets/GitHub-Mark-Light-64px.png" alt=""
        /></a>
        <a
          href="https://www.linkedin.com/in/lucas-caldeira-de-macedo-aaba08134/"
          target="_blank"
          ><img src="../assets/In-White-48.png" alt=""
        /></a>
        <a href="https://www.behance.net/LucasCaldeira" target="_blank"
          ><img src="../assets/behance.jpeg" alt=""
        /></a>
        <a href="https://www.pixiv.net/en/users/5951600" target="_blank"
          ><img src="../assets/pixiv.png" alt=""
        /></a>
        <a href="https://www.deviantart.com/lucascaldeira" target="_blank"
          ><img src="../assets/deviantart.png" alt=""
        /></a>
        <a href="https://www.instagram.com/l.caldeira.m/" target="_blank"
          ><img src="../assets/instagram.png" alt=""
        /></a>
      </div>
    </WelcomeItem>

    <WelcomeItem>
      <template #heading>Cursos</template>

      <ul>
        <li>Design Gráfico e Web Design (Seven/2014)</li>
        <li>Inglês (Kumon/2019)</li>
        <li>Introdução à linguagem Python (Udemy/2019)</li>
        <li>Introdução à linguagem Javascript (Udemy/2019)</li>
        <li>Vuejs - Primeiros Passos (Udemy)</li>
        <li>Git e Github para iniciantes (Udemy)</li>
      </ul>
    </WelcomeItem>

    <WelcomeItem>
      <template #heading>Experiências profissionais</template>

      <ul>
        <li>
          Monitorias PUC-Rio
          <ul>
            <li>Modelagem virtual (2016.2 - 2017.1)</li>
            <li>Edição e tratamento de imagem (2018.1)</li>
          </ul>
        </li>
        <li>Tradutor e editor na VNX+</li>
        <li>Editor na Noveland (2018 - 2020)</li>
        <li>UI Designer/Front End Dev Jr na Voodfy (2020 - 2021)</li>
        <li>Diagramador de capas na Kiniga (2021 - )</li>
      </ul>
    </WelcomeItem>

    <WelcomeItem>
      <template #heading>Conhecimentos</template>

      <div class="dev_web">
        <h2>Desenvolvimento Web</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
          <li>Wordpress</li>
          <li>Vue.js</li>
          <li>Git</li>
          <li>Figma</li>
        </ul>
      </div>
      <div class="edit">
        <h2>Design, Artes e Edição</h2>
        <ul>
          <li>Photoshop</li>
          <li>After Effects</li>
          <li>Premiere</li>
          <li>InDesign</li>
          <li>Illustrator</li>
          <li>Paint Tool SAI</li>
        </ul>
      </div>
      <div class="lang">
        <h2>Idiomas</h2>
        <ul>
          <li>Inglês</li>
          <li>Espanhol</li>
        </ul>
      </div>
      <div class="others">
        <div class="pill">GameMaker Studio</div>
        <div class="pill">Microsoft Office</div>
        <div class="pill">Autodesk 3D Studio Max</div>
      </div>
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

.dev_web, .edit, .lang {
	border-radius: 15px;
	margin-top: 40px;
	width: fit-content;
}

.dev_web {
	border: 3px solid #009CDE;
}

.edit {
	border: 3px solid #F19800;
}

.lang {
	border: 3px solid #E0040B;
}

.pill {
	border: 2px solid #FFFFFF;
	border-radius: 15px;
	margin-top: 20px;
	margin-right: 20px;
	width: fit-content;
	padding: 5px 15px;
	white-space: nowrap;
}


h2 {
	font-size: 16px;
	width: fit-content;
	padding: 2px 12px;
	/* border-radius: 15px; */
	margin-top: -20px;
	margin-left: 20px;
  color: #fff;
  background: var(--color-background-soft);
}

/* .dev_web h2 {
	background: #009CDE;
}

.edit h2 {
	background: #F19800;
}

.lang h2 {
	background: #E0040B;
} */

.others {
	display: flex;
	flex-wrap: wrap;
}

.dev_web ul, .edit ul, .lang ul {
	list-style: none;
	display: flex;
	padding: 5px 20px 15px 20px;
	margin: 0;
	flex-wrap: wrap;
}

.dev_web ul li, .edit ul li, .lang ul li {
	margin-right: 30px;
}

ul li:last-child {
	margin-right: 0;
}
</style>
