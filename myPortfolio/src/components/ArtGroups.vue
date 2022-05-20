<script setup lang="ts">
import ArtGroup from "./ArtGroup.vue";
</script>

<template>
  <ArtGroup>
    <template #heading>Cópias</template>
    <div class="row">
      <ul>
        <li>
          <img src="../assets/arts/ilust/saber_lily.jpg" />
        </li>
        <li>
          <img src="../assets/arts/ilust/red_arc.jpg" />
        </li>
        <li>
          <img src="../assets/arts/ilust/white_len.jpg" />
        </li>
        <li>
          <img src="../assets/arts/ilust/kurisutina.png" />
        </li>
        <li>
          <img src="../assets/arts/ilust/reproducao1.png" />
        </li>
        <li>
          <img src="../assets/arts/ilust/reproducao2.png" />
        </li>
        <li>
          <img src="../assets/arts/ilust/reproducao3.png" />
        </li>
      </ul>
    </div>
  </ArtGroup>
  <ArtGroup>
    <template #heading>Artes tradicionais</template>
    <div class="row">
      <ul>
        <li>
          <img src="../assets/arts/ilust/Girassol.jpg" />
        </li>
        <li>
          <img src="../assets/arts/ilust/dancarina.jpeg" />
        </li>
        <li>
          <img src="../assets/arts/ilust/treino 001.jpg" />
        </li>
      </ul>
    </div>
  </ArtGroup>
  <ArtGroup>
    <template #heading>Artes digitais</template>
    <div class="row">
      <ul>
        <li>
          <img src="../assets/arts/ilust/Stella.png" />
        </li>
        <li>
          <img src="../assets/arts/ilust/PaolaNY.jpg" />
        </li>
        <li>
          <img src="../assets/arts/ilust/Ayame.png" />
        </li>
        <li>
          <img src="../assets/arts/ilust/Muslim.jpg" />
        </li>
        <li>
          <img src="../assets/arts/ilust/WTLD.jpg" />
        </li>
        <li>
          <img src="../assets/arts/ilust/Vanessa.jpg" />
        </li>
        <li>
          <img src="../assets/arts/ilust/Ciel.png" />
        </li>
      </ul>
    </div>
  </ArtGroup>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  display: flex;
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
  transition: all 0.3s;
  transform: scale(1.05);
  cursor: pointer;
}

li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>