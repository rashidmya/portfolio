<template>
  <div class="doodle">
    <img class="whip" src="@/assets/batman.png" alt="">
  </div>
</template>

<style>
.doodle {
  display: block;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.whip {
  max-height: 80vw;
 
}

@media (min-width: 1024px) {
  .whip {
    height: 35vw;
    width: 100%;
  }
  .doodle {
    max-height: 35vw;
  }
}
</style>

