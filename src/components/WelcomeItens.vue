<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import scrollBehavior from "./scroll";
import languageSelect from "./language";

window.onload = function () {
  let icon1 = document.getElementsByTagName("I");
  scrollBehavior(icon1);
};

const pf = languageSelect("profile");

let title = [pf.intro.title, pf.courses.title, pf.exp.title, pf.knowhow.title];
let subtitle = pf.knowhow.subtitle;
let text = [pf.intro.text, pf.courses.text, pf.exp.text, pf.knowhow.text];
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
