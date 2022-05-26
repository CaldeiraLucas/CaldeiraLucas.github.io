<script setup>
  function teste(ev, x) {
    let subj = ev.path[1].children[1];
    let dir = ev.target.className;

    if(dir == 'left'){
      subj.scrollBy({ left: -subj.offsetWidth, behavior: 'smooth' });
    }
    if(dir == 'right'){
      subj.scrollBy({ left: subj.offsetWidth, behavior: 'smooth' });
    }
  }
</script>

<template>
  <div class="item">
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <div>
        <a class="left" @click="event => teste(event)">&#10094;</a>
        <slot></slot>
        <a class="right" @click="event => teste(event)">&#10095;</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
}

.details {
  flex: 1;
  /* margin-left: 1rem; */
}

  .details div {
    max-width: 830px;
    display: flex;
    align-items: center;
  }

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.left,
.right {
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100%;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.3s ease;
  user-select: none;
  -webkit-user-select: none;
  z-index: 100;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);
}

.left {
  /* visibility: hidden; */
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0)
  );
  padding: 0px 24px 0px 12px;
}

.right {
  right: 0;
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0)
  );
  padding: 0px 12px 0px 24px;
}

.left:hover,
.right:hover {
  transition: 0.3s ease;
  background-color: rgba(0, 0, 0, 0);
}

.left:hover {
  background-image: linear-gradient(
    to right,
    rgb(241, 152, 0),
    rgba(241, 152, 0, 0)
  );
}
.right:hover {
  background-image: linear-gradient(
    to left,
    rgb(241, 152, 0),
    rgba(241, 152, 0, 0)
  );
}
</style>