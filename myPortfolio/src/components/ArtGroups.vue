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
  if (index.value < 0)
    index.value = subject.value.length-1;
  if (index.value > subject.value.length-1)
    index.value = 0;
  image.value = subject.value[index.value];
}

let files = {
  copies: [
    "src/assets/arts/ilust/saber_lily.jpg",
    "src/assets/arts/ilust/red_arc.jpg",
    "src/assets/arts/ilust/white_len.jpg",
    "src/assets/arts/ilust/kurisutina.png",
    "src/assets/arts/ilust/reproducao1.png",
    "src/assets/arts/ilust/reproducao2.png",
    "src/assets/arts/ilust/reproducao3.png",
  ],
  trads: [
    "src/assets/arts/ilust/Girassol.jpg",
    "src/assets/arts/ilust/draw2.jpg",
    "src/assets/arts/ilust/draw3.png",
    "src/assets/arts/ilust/draw8.png",
    "src/assets/arts/ilust/girl2.png",
    "src/assets/arts/ilust/drawpaola.png",
    "src/assets/arts/ilust/rain.png",  
    "src/assets/arts/ilust/lightshot_1585342830.jpeg",
    "src/assets/arts/ilust/lightshot_1585340065.jpeg",
    "src/assets/arts/ilust/lightshot_1585339944.jpeg",
    "src/assets/arts/ilust/lightshot_1585339318.jpeg",   
    "src/assets/arts/ilust/char.jpg", 
    "src/assets/arts/ilust/dancarina.jpeg", 
    "src/assets/arts/ilust/treino 001.jpg",
  ],
  digis: [
    "src/assets/arts/ilust/Stella.png",
    "src/assets/arts/ilust/PaolaNY.jpg",
    "src/assets/arts/ilust/Ayame.png",
    "src/assets/arts/ilust/Muslim.jpg",
    "src/assets/arts/ilust/New Canvas.png",
    "src/assets/arts/ilust/ferraria.jpg",
    "src/assets/arts/ilust/WTLD.jpg",
    "src/assets/arts/ilust/Vanessa.jpg",
    "src/assets/arts/ilust/Ciel.png",
    "src/assets/arts/ilust/JackPark.jpg",
    "src/assets/arts/ilust/akiha_chibi.jpg",
    "src/assets/arts/ilust/rabisco8001_comparacao.png",
    "src/assets/arts/ilust/draw9_comparacao.png",
    "src/assets/arts/ilust/maid.jpg",
  ],
};
</script>

<template>
  <div id="myModal" class="modal" v-if="show == true">
    <span class="close" @click="toggle">&times;</span>
    <div class="modal-content">
      <div class="mySlides">
        <div class="numbertext">{{ index+1 }} / {{ subject.length }}</div>
							<img :src="image">
      </div>

      <a class="prev" @click="switchSlide(--index)">&#10094;</a>
			<a class="next" @click="switchSlide(++index)">&#10095;</a>

      <!-- <div class="caption-container">
							<p id="caption"></p>
						</div> -->
    </div>
  </div>

  <ArtGroup>
    <template #heading>Cópias</template>
    <div class="row"  id="copies">
      <ul>
        <li v-for="(item, index) in files.copies" :key="item" @click="toggle(files.copies, index)">
          <img :src="item" />
        </li>
      </ul>
    </div>
  </ArtGroup>
  <ArtGroup>
    <template #heading>Artes tradicionais</template>
    <div class="row">
      <ul>
        <li v-for="(item, index) in files.trads" :key="item" @click="toggle(files.trads, index)">
          <img :src="item" />
        </li>
      </ul>
    </div>
  </ArtGroup>
  <ArtGroup>
    <template #heading>Artes digitais</template>
    <div class="row">
      <ul>
        <li v-for="(item, index) in files.digis" :key="item" @click="toggle(files.digis, index)">
          <img :src="item" />
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
}

/* Modal Content */
.modal-content {
  position: relative;
  margin: auto;
  padding: 0;
  width: fit-content;
  max-width: 90vw;
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
  transition: all .15s;
}

.close:hover,
.close:focus {
  color: #f19800;
  text-decoration: none;
  cursor: pointer;
  transition: all .15s;
  transform: scale(1.25);
}

.mySlides img {
  max-height: 80vh;
  border-radius: 5px;
  width: 100%;
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
	padding: 2px 16px;
	color: white;
}
</style>