<script setup>
import ArtGroup from "./ArtGroup.vue";
import { ref } from "vue";

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
      path: "src/assets/arts/ilust/saber_lily.jpg",
      caption: "Saber Lily (Fate/Unlimited Codes)",
    },
    {
      path: "src/assets/arts/ilust/red_arc.jpg",
      caption: "Red Arcueid (Melty Blood)",
    },
    {
      path: "src/assets/arts/ilust/white_len.jpg",
      caption: "White Len (Melty Blood)",
    },
    {
      path: "src/assets/arts/ilust/kurisutina.png",
      caption: "Makise Kurisu (Steins;Gate)",
    },
    {
      path: "src/assets/arts/ilust/reproducao1.png",
      caption:
        "Cópia de cena do Bruce Lee feita com papel vegetal e lápis B, 3B e 6B",
    },
    {
      path: "src/assets/arts/ilust/reproducao2.png",
      caption:
        "Cópia de fotografia de um Gaio-azul (Cyanocitta cristata) feita com papel vegetal e caneta nanquim",
    },
    {
      path: "src/assets/arts/ilust/reproducao3.png",
      caption: "Cópia de fotografia feita com papel vegetal e caneta nanquim",
    },
    {
      path: "src/assets/arts/ilust/caçamig.jpg",
      caption:
        "Cópia de fotografia de um caça Mig29 feita com papel vegetal, caneta nanquim e régua",
    },
  ],
  trads: [
    {
      path: "src/assets/arts/ilust/Girassol.jpg",
      caption:
        "Ao invés de apenas desenhar um girassol, pensei que seria interessante imitar um quadro também",
    },
    { path: "src/assets/arts/ilust/draw2.jpg" },
    { path: "src/assets/arts/ilust/draw3.png" },
    { path: "src/assets/arts/ilust/draw8.png" },
    { path: "src/assets/arts/ilust/girl2.png" },
    { path: "src/assets/arts/ilust/drawpaola.png" },
    { path: "src/assets/arts/ilust/rain.png" },
    { path: "src/assets/arts/ilust/lightshot_1585342830.jpeg" },
    { path: "src/assets/arts/ilust/lightshot_1585340065.jpeg", caption: "Personagem imaginada para uma história minha que ainda não foi para o papel"  },
    { path: "src/assets/arts/ilust/lightshot_1585339944.jpeg"},
    { path: "src/assets/arts/ilust/lightshot_1585339318.jpeg" },
    { path: "src/assets/arts/ilust/char.jpg" },
    { path: "src/assets/arts/ilust/dancarina.jpeg", caption: "um solitário trabalho com lápis, caneta nanquim e lápis de cor" },
    { path: "src/assets/arts/ilust/treino 001.jpg", caption: "Primeira e por enquanto única tentativa de ilustrar algo com giz de cera" },
  ],
  digis: [
    { path: "src/assets/arts/ilust/Stella.png", caption: "Desenhado a lápis mas colorido digitalmente, por isso está aqui" },
    { path: "src/assets/arts/ilust/PaolaNY.jpg" },
    { path: "src/assets/arts/ilust/Ayame.png", caption: "Retrabalho da personagem Ayame, originalmente criada por Bigorados" },
    { path: "src/assets/arts/ilust/Muslim.jpg", caption: "Inspirado numa fotografia da National Geographic. Não ficou tão bonita quanto, mas um bom treino" },
    { path: "src/assets/arts/ilust/New Canvas.png", caption: "De dia uma pessoa comum, de noite uma jogadora de rpg. Ilustrado para uma apresentação sobre tecnologia VR." },
    { path: "src/assets/arts/ilust/ferraria.jpg", caption: "Desenho não usado para um projeto de jogo de tabuleiro com temática medieval" },
    { path: "src/assets/arts/ilust/WTLD.jpg", caption: "Ilustração para o conto de natal 'When the lights are down' (Noveland)" },
    { path: "src/assets/arts/ilust/Vanessa.jpg", caption: "Vanessa (The King of Fighters 2002)" },
    { path: "src/assets/arts/ilust/Ciel.png", caption: "Ciel (Tsukihime remake style)" },
    { path: "src/assets/arts/ilust/JackPark.jpg", caption: "Ilustração para Jack Park e o Mistério das Realidades Alternativas, web novel de Lupe Sano" },
    { path: "src/assets/arts/ilust/akiha_chibi.jpg" },
    { path: "src/assets/arts/ilust/rabisco8001_comparacao.png", caption: "Mensurando minha evolução, parte 1" },
    { path: "src/assets/arts/ilust/draw9_comparacao.png", caption: "Mensurando minha evolução, parte 2" },
    { path: "src/assets/arts/ilust/maid.jpg", caption: "'Nanyan?!'" },
    { path: "src/assets/arts/ilust/summer_woman.jpg", caption: "9 de 10 especialistas afirmaram que se expor ao sol regularmente faz bem à saude. O décimo não foi encontrado, deve estar na praia" },
  ],
};
</script>

<template>
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

  <ArtGroup>
    <template #heading>Reproduções</template>
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
    <template #heading>Papel + lápis, etc</template>
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
    <template #heading>Digitais (total ou parcial)</template>
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
  transform: scale(1.25);
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