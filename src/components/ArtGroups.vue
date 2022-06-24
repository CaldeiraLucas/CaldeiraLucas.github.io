<script setup>
import ArtGroup from "./ArtGroup.vue";
import languageSelect from "./language";
import { ref } from "vue";

let ctg = languageSelect("arts");

let title = ctg.titles;
let captions = ctg.captions;

const show = ref(false);
const image = ref("");
const index = ref(0);
const subject = ref({});

function toggle(sub, i) {
  show.value = !show.value;
  index.value = i;
  subject.value = sub;
  image.value = sub[i];
}

function switchSlide(i) {
  index.value = i;
  if (index.value < 0) index.value = subject.value.length - 1;
  if (index.value > subject.value.length - 1) index.value = 0;
  image.value = subject.value[index.value];
}

let files = {
  copies: [
    {
      path: new URL("../assets/saber_lily.jpg", import.meta.url).href,
      caption: "Saber Lily (Fate/Unlimited Codes)",
    },
    {
      path: new URL("../assets/red_arc.jpg", import.meta.url).href,
      caption: "Red Arcueid (Melty Blood)",
    },
    {
      path: new URL("../assets/white_len.jpg", import.meta.url).href,
      caption: "White Len (Melty Blood)",
    },
    {
      path: new URL("../assets/kurisutina.png", import.meta.url).href,
      caption: "Makise Kurisu (Steins;Gate)",
    },
    {
      path: new URL("../assets/reproducao1.png", import.meta.url).href,
      caption: captions[0],
    },
    {
      path: new URL("../assets/reproducao2.png", import.meta.url).href,
      caption: captions[1],
    },
    {
      path: new URL("../assets/reproducao3.png", import.meta.url).href,
      caption: captions[2],
    },
    {
      path: new URL("../assets/caçamig.jpg", import.meta.url).href,
      caption: captions[3],
    },
  ],
  trads: [
    {
      path: new URL("../assets/Girassol.jpg", import.meta.url).href,
      caption: captions[4],
    },
    { path: new URL("../assets/draw2.jpg", import.meta.url).href },
    { path: new URL("../assets/draw3.png", import.meta.url).href },
    { path: new URL("../assets/draw8.png", import.meta.url).href },
    { path: new URL("../assets/girl2.png", import.meta.url).href },
    { path: new URL("../assets/drawpaola.png", import.meta.url).href },
    { path: new URL("../assets/rain.png", import.meta.url).href },
    {
      path: new URL("../assets/lightshot_1585342830.jpeg", import.meta.url)
        .href,
    },
    {
      path: new URL("../assets/lightshot_1585340065.jpeg", import.meta.url)
        .href,
      caption: captions[5],
    },
    {
      path: new URL("../assets/lightshot_1585339944.jpeg", import.meta.url)
        .href,
    },
    {
      path: new URL("../assets/lightshot_1585339318.jpeg", import.meta.url)
        .href,
    },
    { path: new URL("../assets/char.jpg", import.meta.url).href },
    {
      path: new URL("../assets/dancarina.jpeg", import.meta.url).href,
      caption: captions[6],
    },
    {
      path: new URL("../assets/treino 001.jpg", import.meta.url).href,
      caption: captions[7],
    },
  ],
  digis: [
    {
      path: new URL("../assets/Stella.png", import.meta.url).href,
      caption: captions[8],
    },
    { path: new URL("../assets/PaolaNY.jpg", import.meta.url).href },
    {
      path: new URL("../assets/Ayame.png", import.meta.url).href,
      caption: captions[9],
    },
    {
      path: new URL("../assets/Muslim.jpg", import.meta.url).href,
      caption: captions[10],
    },
    {
      path: new URL("../assets/New Canvas.png", import.meta.url).href,
      caption: captions[11],
    },
    {
      path: new URL("../assets/ferraria.jpg", import.meta.url).href,
      caption: captions[12],
    },
    {
      path: new URL("../assets/WTLD.jpg", import.meta.url).href,
      caption: captions[13],
    },
    {
      path: new URL("../assets/Vanessa.jpg", import.meta.url).href,
      caption: "Vanessa (The King of Fighters 2002)",
    },
    {
      path: new URL("../assets/Ciel.png", import.meta.url).href,
      caption: "Ciel (Tsukihime/2021)",
    },
    {
      path: new URL("../assets/JackPark.jpg", import.meta.url).href,
      caption: captions[14],
    },
    { path: new URL("../assets/akiha_chibi.jpg", import.meta.url).href },
    {
      path: new URL("../assets/rabisco8001_comparacao.png", import.meta.url)
        .href,
      caption: captions[15],
    },
    {
      path: new URL("../assets/draw9_comparacao.png", import.meta.url).href,
      caption: captions[16],
    },
    {
      path: new URL("../assets/maid.jpg", import.meta.url).href,
      caption: "'Nanyan?!'",
    },
    {
      path: new URL("../assets/summer_woman.jpg", import.meta.url).href,
      caption: captions[17],
    },
  ],
};
</script>

<template>
  <transition name="fade" mode="out-in">
    <div id="myModal" class="modal" v-if="show == true">
      <span class="close" @click="toggle">&times;</span>
      <div class="modal-content">
        <div class="mySlides">
          <div class="numbertext">{{ index + 1 }} / {{ subject.length }}</div>
          <img :src="image.path" />
          <div v-if="subject[index].caption" class="caption-container">
            <p id="caption">{{ subject[index].caption }}</p>
          </div>
        </div>

        <a class="prev" @click="switchSlide(--index)">&#10094;</a>
        <a class="next" @click="switchSlide(++index)">&#10095;</a>
      </div>
    </div>
  </transition>
  <ArtGroup>
    <template #heading>{{ title[0] }}</template>
    <div class="row" id="copies">
      <ul>
        <li
          v-for="(item, index) in files.copies"
          :key="item"
          @click="toggle(files.copies, index)"
        >
          <img :src="item.path" />
        </li>
      </ul>
    </div>
  </ArtGroup>
  <ArtGroup>
    <template #heading>{{ title[1] }}</template>
    <div class="row">
      <ul>
        <li
          v-for="(item, index) in files.trads"
          :key="item"
          @click="toggle(files.trads, index)"
        >
          <img :src="item.path" />
        </li>
      </ul>
    </div>
  </ArtGroup>
  <ArtGroup>
    <template #heading>{{ title[2] }}</template>
    <div class="row">
      <ul>
        <li
          v-for="(item, index) in files.digis"
          :key="item"
          @click="toggle(files.digis, index)"
        >
          <img :src="item.path" />
        </li>
      </ul>
    </div>
  </ArtGroup>
</template>

<style scoped>
.fade-enter-active {
  transition: all 0.15s ease-out;
}

.fade-leave-active {
  transition: all 0.15s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.row {
  overflow: hidden;
}

ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template: 200px / repeat(24, 1fr);
  align-items: center;
  margin: 0;
  gap: 10px;
}

li {
  float: left;
  width: 200px;
  height: 200px;
  transition: all 0.3s ease;
}

li:hover {
  display: visible;
  transition: all 0.3s 0.2s ease;
  transform: scale(1.05);
  cursor: pointer;
}

li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 15%;
}

.modal {
  display: unset;
  position: fixed;
  z-index: 111;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
}

/* Modal Content */
.modal-content {
  position: relative;
  margin: auto;
  padding: 0;
  width: fit-content;
  max-width: 80vw;
  background: none;
  top: 10%;
}

/* The Close Button */
.close {
  color: rgb(224, 224, 224);
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.15s;
}

.close:hover,
.close:focus {
  color: #f19800;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.15s;
  transform: scale(1.1);
}

.mySlides {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mySlides img {
  max-height: 80vh;
  max-width: 80vw;
  border-radius: 5px;
  /* width: 100%; */
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-size: 20px;
  transition: 0.3s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: #f19800;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px;
  position: absolute;
  top: -30px;
  left: 0;
}

.caption-container {
  text-align: center;
  background: none;
  margin: 10px 20px;
  color: white;
}
</style>