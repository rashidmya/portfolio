<template>
  <div class="greeting">
    <h1>Hello.</h1>
    <p class="name">My name is Rashid.</p>
    <p>
      I am a security and forensics graduate & an independant self-taught full stack developer who enjoys learning new technologies.
      You can find most of my work on Github.
    </p>
    <p>My hobbies are playing video games, scuba diving, rock climbing & working out.</p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
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
