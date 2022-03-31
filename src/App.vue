<script setup>
import TheGreeting from "@/components/TheGreeting.vue";
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <TheGreeting />

      <div class="nav">
        <div class="nav-wrapper">
          <a href="https://www.linkedin.com/in/rashidalawadhi/" class="li icon"
            ><fa icon="linkedin" type="fab"></fa
          ></a>
          <a href="https://github.com/rashidmya" class="gh icon"
            ><fa icon="github" type="fab"></fa
          ></a>
          <a href="mailto:rashid.myaa@gmail.com" class="mail icon"
            ><fa icon="envelope" type="fas"></fa
          ></a>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
@import "@/assets/base.css";
.nav {
  width: 100%;
}

.icon {
  color: white;
  width: 50px;
  height: 50px;
  margin: 1em;
  background-color: blue;
  padding: 8px;
  border-radius: 10px;
}

.mail {
  background: rgb(131, 171, 255);
  background: linear-gradient(
    0deg,
    rgba(131, 171, 255, 1) 0%,
    rgba(33, 105, 255, 1) 100%
  );
}

.mail:hover {
  background: rgb(104, 151, 255);
  background: linear-gradient(0deg, rgb(102, 151, 255) 0%, rgb(0, 81, 255) 100%);
}
.gh {
  background: rgb(60, 60, 60);
  background: linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(71, 71, 71, 1) 100%);
}

.gh:hover {
  background: rgb(49, 49, 49);
  background: linear-gradient(0deg, rgb(49, 49, 49) 0%, rgb(56, 56, 56) 100%);
}

.li {
  background: rgb(31, 69, 180);
  background: linear-gradient(0deg, rgba(31, 69, 180, 1) 0%, rgba(31, 69, 180, 1) 100%);
}

.li:hover {
  background: rgb(0, 45, 179);
  background: linear-gradient(0deg, rgb(10, 51, 177) 0%, rgb(15, 57, 180) 100%);
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

#app {
  max-width: 1400px;
  min-width: 90vw;
  margin: 0 auto;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  margin-bottom: 1em;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: rgb(169, 0, 0);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(0, 100%, 37%, 0.2);
  }
}

.nav-wrapper {
  display: flex;
  width: 100%;
  font-size: 1em;
  text-align: center;
  margin-top: 2rem;
  justify-content: center;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 10);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: 1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  .nav-wrapper {
    text-align: left;
    margin-left: 1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
    justify-content: left;
  }

  .icon {
  color: white;
  width: 50px;
  height: 50px;
  margin: 1em;
  background-color: blue;
  padding: 8px;
  border-radius: 10px;
  margin: 0 1em;
}
}
</style>
