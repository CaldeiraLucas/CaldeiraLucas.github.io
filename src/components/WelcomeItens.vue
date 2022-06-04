<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import scrollBehavior from "./scroll";
import languageSelect from "./language";

window.onload = function () {
  let icon1 = document.getElementsByTagName("I");
  scrollBehavior(icon1);
};

const language = languageSelect();

const pt = {
  intro: {
    title: "Quem sou",
    text: `<p>Bacharel em Desenho Industrial com Habilitação em Design de Mídias
            Digitais pela PUC-Rio (2014-2019).
          </p>
          <p>
            Embora seja de falar pouco, gosta de ouvir as pessoas. Racional,
            empático e esforçado, tenta ser útil o quanto possível para os
            outros. Em busca de mais conhecimentos em desenvolvimento web
            (front-end) e ilustração.
          </p>
          <p>
            Nas horas vagas, ouve música, pratica esportes, assiste Youtube ou
            Netflix, e joga casualmente.
          </p>`,
  },
  courses: {
    title: "Cursos",
    text: `        <li>Design Gráfico e Web Design (Seven/2014)</li>
        <li>Inglês (Kumon/2019)</li>
        <li>Introdução à linguagem Python (Udemy/2019)</li>
        <li>Introdução à linguagem Javascript (Udemy/2019)</li>
        <li>Vuejs - Primeiros Passos (Udemy)</li>
        <li>Git e Github para iniciantes (Udemy)</li>`,
  },
  exp: {
    title: "Experiências profissionais",
    text: `        <li>
          Monitorias PUC-Rio
          <ul>
            <li>Modelagem virtual (2016.2 - 2017.1)</li>
            <li>Edição e tratamento de imagem (2018.1)</li>
          </ul>
        </li>
        <li>Tradutor e editor na VNX+</li>
        <li>Editor na Noveland (2018 - 2020)</li>
        <li>UI Designer/Front End Dev Jr na Voodfy (2020 - 2021)</li>
        <li>Diagramador de capas na Kiniga (2021 - )</li>`,
  },
  knowhow: {
    title: "Conhecimentos",
    subtitle: [
      "Desenvolvimento Web",
      "Design, Artes e Edição",
      "Idiomas",
      "Outros",
    ],
    text: ["Inglês", "Espanhol"],
  },
};

const en = {
  intro: {
    title: "Who I am",
    text: `                    <p>
                    Bachelor in Industrial Design with Qualification in Digital Media Design at PUC-Rio (2014-2019)
                    </p>
                    <p>
                    Although he doesn't talk much, he likes to listen to people.
                    Rational, empathetic and hardworking, try to be as helpful as possible for the team.
                    Looking for more knowledge in web development (front-end) and illustration.
                    </p>
                    <p>
                    In spare time, listen music, play sports, watch Youtube or Netflix, and casually play video-games.
                    </p>`,
  },
  courses: {
    title: "Courses",
    text: `
                    <li>Graphic Design and Web Design (Seven/2014)</li>
                    <li>English (Kumon/2019)</li>
                    <li>"Introduction to the Python language" (Udemy/2019)</li>
                    <li>"Introduction to the Javascript language" (Udemy/2019)</li>
                    <li>"Vuejs - First Steps" (Udemy)</li>
                    <li>"Git and Github for beginners" (Udemy)</li>
                `,
  },
  exp: {
    title: "Professional experiences",
    text: `
                    <li>Tutorships PUC-Rio
                    <ul>
                        <li>Virtual modeling (2016.2 - 2017.1)</li>
                        <li>Editing and image processing (2018.1)</li>
                    </ul>
                    </li>
                    <li>Translator and editor at VNX+</li>
                    <li>Editor at Noveland (2018 - 2020)</li>
                    <li>UI Designer/Front End Dev Jr at Voodfy (2020 - 2021)</li>
                    <li>Cover editor at Kiniga (2021)</li>
                `,
  },
  knowhow: {
    title: "Knowledges",
    subtitle: [
      "Web Development",
      "Design, Arts and Editing",
      "Languages",
      "Others",
    ],
    text: ["English", "Spanish"],
  },
};

let title, subtitle, text;

switch (language) {
  case "pt":
    {
      title = [
        pt.intro.title,
        pt.courses.title,
        pt.exp.title,
        pt.knowhow.title,
      ];
      (subtitle = pt.knowhow.subtitle),
        (text = [pt.intro.text, pt.courses.text, pt.exp.text, pt.knowhow.text]);
    }
    break;

  case "en":
    {
      title = [
        en.intro.title,
        en.courses.title,
        en.exp.title,
        en.knowhow.title,
      ];
      (subtitle = en.knowhow.subtitle),
        (text = [en.intro.text, en.courses.text, en.exp.text, en.knowhow.text]);
    }
    break;
}
</script>

<template>
  <div id="content">
    <WelcomeItem>
      <template #heading>{{ title[0] }}</template>
      <div class="presentation">
        <div class="pf_image"><img src="../assets/photo.jpg" alt="" /></div>
        <div v-html="text[0]"></div>
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
      <template #heading>{{ title[1] }}</template>
      <ul v-html="text[1]"></ul>
    </WelcomeItem>

    <WelcomeItem>
      <template #heading>{{ title[2] }}</template>
      <ul v-html="text[2]"></ul>
    </WelcomeItem>

    <WelcomeItem>
      <template #heading>{{ title[3] }}</template>
      <div class="dev_web">
        <h2>{{ subtitle[0] }}</h2>
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
        <h2>{{ subtitle[1] }}</h2>
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
        <h2>{{ subtitle[2] }}</h2>
        <ul>
          <li>{{ text[3][0] }}</li>
          <li>{{ text[3][1] }}</li>
        </ul>
      </div>
      <div class="others">
        <h2>{{ subtitle[3] }}</h2>
        <ul>
          <li>GameMaker Studio</li>
          <li>Microsoft Office</li>
          <li>Autodesk 3D Studio Max</li>
        </ul>
      </div>
    </WelcomeItem>
  </div>
</template>

<style scoped>
#content {
  padding-top: 30px;
  overflow-y: hidden;
}

.presentation {
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

.dev_web,
.edit,
.lang,
.others {
  border-radius: 15px;
  margin-top: 40px;
  width: fit-content;
}

.dev_web {
  border: 3px solid #009cde;
}

.edit {
  border: 3px solid #f19800;
}

.lang {
  border: 3px solid #e0040b;
}

.others {
  border: 3px solid #00bd9d;
}

/* .pill {
  border: 2px solid var(--color-text);
  border-radius: 15px;
  margin-top: 20px;
  margin-right: 20px;
  width: fit-content;
  padding: 5px 15px;
  white-space: nowrap;
} */

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

/* .others {
  display: flex;
  flex-wrap: wrap;
} */

.dev_web ul,
.edit ul,
.lang ul,
.others ul {
  list-style: none;
  display: flex;
  padding: 5px 20px 15px 20px;
  margin: 0;
  flex-wrap: wrap;
}

.dev_web ul li,
.edit ul li,
.lang ul li,
.others ul li {
  margin-right: 30px;
}

ul li:last-child {
  margin-right: 0;
}
</style>
