<template>
  <div class="item">
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <div class="row">
        <a class="left">&#10094;</a>
        <slot></slot>
        <a class="right">&#10095;</a>
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

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.row {
  max-width: 830px;
  display: flex;
  align-items: center;
}

.left,
.right {
  cursor: pointer;
  position: absolute;
  width: auto;
  padding: 16px;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  font-size: 20px;
  transition: 0.3s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
  z-index: 100;
}

.left {
  /* visibility: hidden; */
}

.right {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.left:hover,
.right:hover {
  background-color: rgba(0, 0, 0, 1);
}
</style>