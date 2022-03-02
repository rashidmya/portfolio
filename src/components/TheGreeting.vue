<script setup>
import anime from 'animejs'
import { onMounted } from 'vue';

onMounted(() => {
  const textWrapper = document.querySelector('.ml2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline()
    .add({
      targets: '.ml2 .letter',
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 1280,
      delay: (el, i) => 222 * i
    })
})
</script>

<template>
  <div class="greeting">
    <h1 class="ml2">Hello.</h1>
    <p class="name">My name is Rashid.</p>
    <p>
      I've studied Cyber Security & Forensics and i'm an independant self-taught full stack developer who enjoys learning new technologies.
      You can find most of my work on Github.
    </p>
    <p>My hobbies are playing video games, scuba diving, rock climbing & working out.</p>
  </div>
</template>

<style scoped>
.ml2 .letter {
  display: inline-block;
}

h1 {
  font-weight: 700;
  font-size: 4.7em;
  margin: 0;
}

.name {
  font-size: 2.5em;
  font-weight: 500;
}

p {
  font-weight: 300;
  font-size: 1.5em;
  margin: 1em 0;
}

.greeting h1,
.greeting .name,
.greeting p {
  text-align: center;
}

.greeting {
  padding: 2rem;
}

@media (min-width: 1024px) {
  .greeting h1,
  .greeting .name,
  .greeting p {
    text-align: left;
  }
}
</style>
