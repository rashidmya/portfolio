<template>
  <div class="doodle">
    <img class="whip" src="@/assets/batman.png" alt="">
  </div>
</template>

<style>
.whip {
  max-height: 80vw;
  display: block;
  align-items: center;
  justify-content: center;
  margin: auto;
}

@media (min-width: 1024px) {
  .whip {
    height: 30vw;
    width: 100%;
  }
  .doodle {
    max-height: 30vw;
  }
}
</style>

