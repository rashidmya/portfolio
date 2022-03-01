<template>
    <div class="my-skills">
        <div class="front-end">
            <p>Frontend</p>
            <div class="tool html"></div>
            <div class="tool css"></div>
            <div class="tool vue"></div>
            <div class="tool javascript"></div>
            <div class="tool jquery"></div>
            <div class="tool bootstrap"></div>
            <div class="progress">
                <div class="progress-bar-frontend" style="width: 60%"></div>
            </div>
        </div>
        <div class="back-end">
            <p>Backend</p>
            <div class="tool typescript"></div>
            <div class="tool nodejs"></div>
            <div class="tool express"></div>
            <div class="tool nuxtjs"></div>
            <div class="tool socketio"></div>
            <div class="progress">
                <div class="progress-bar-backend" style="width: 85%"></div>
            </div>
        </div>
        <div class="databases">
            <p>Databases</p>
            <div class="tool mongodb"></div>
            <div class="tool mysql"></div>
            <div class="tool postgresql"></div>
            <div class="progress">
                <div class="progress-bar-databases" style="width: 75%"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.progress {
  background: #e1e4e8;
  width: 100%;
  height: 0.333em;
  bottom: 0;
  position: absolute;
  overflow: hidden;
}

.progress-bar-frontend {
  background: linear-gradient(
    90deg,
    #ffd33d,
    #ea4aaa 17%,
    #b34bff 34%,
    #01feff 51%,
    #ffd33d 68%,
    #ea4aaa 85%,
    #b34bff
  );
  background-size: 300% 100%;
  height: 0.333em;
  animation: progress-animation 2s linear infinite;
}

.progress-bar-backend {
  background: linear-gradient(
    90deg,
    #ffd33d,
    #ea4aaa 17%,
    #b34bff 34%,
    #01feff 51%,
    #ffd33d 68%,
    #ea4aaa 85%,
    #b34bff
  );
  background-size: 300% 100%;
  height: 0.333em;
  animation: progress-animation 2s linear infinite;
}

.progress-bar-databases {
  background: linear-gradient(
    90deg,
    #ffd33d,
    #ea4aaa 17%,
    #b34bff 34%,
    #01feff 51%,
    #ffd33d 68%,
    #ea4aaa 85%,
    #b34bff
  );
  background-size: 300% 100%;
  height: 0.333em;
  animation: progress-animation 2s linear infinite;
}

@keyframes progress-animation {
  0% {
    background-position: 100%;
  }
  100% {
    background-position: 0;
  }
}
.html {
  background-image: url(@/assets/flamingo/html5/html5-original.svg);
  background-repeat: no-repeat;
  height: var(--tools-size);
  width: var(--tools-size);
}

.css {
  background-image: url(@/assets/flamingo/css3/css3-original.svg);
  background-repeat: no-repeat;
  height: var(--tools-size);
  width: var(--tools-size);
}

.javascript {
  background-image: url(@/assets/flamingo/javascript/javascript-original.svg);
  background-repeat: no-repeat;
  height: var(--tools-size);
  width: var(--tools-size);
}

.vue {
  background-image: url(@/assets/flamingo/vuejs/vuejs-original.svg);
  background-repeat: no-repeat;
  height: var(--tools-size);
  width: var(--tools-size);
}

.nodejs {
  background-image: url(@/assets/flamingo/nodejs/nodejs-original.svg);
  background-repeat: no-repeat;
  height: var(--tools-size);
  width: var(--tools-size);
}

.express {
  background-image: url(@/assets/flamingo/express/express-original.svg);
  background-repeat: no-repeat;
  height: var(--tools-size);
  width: var(--tools-size);
}

.nuxtjs {
  background-image: url(@/assets/flamingo/nuxtjs/nuxtjs-original.svg);
  background-repeat: no-repeat;
  height: var(--tools-size);
  width: var(--tools-size);
}
.socketio {
  background-image: url(@/assets/flamingo/socketio/socketio-original.svg);
  background-repeat: no-repeat;
  height: var(--tools-size);
  width: var(--tools-size);
}
.typescript {
  background-image: url(@/assets/flamingo/typescript/typescript-original.svg);
  background-repeat: no-repeat;
  height: var(--tools-size);
  width: var(--tools-size);
}
.mongodb {
  background-image: url(@/assets/flamingo/mongodb/mongodb-original.svg);
  background-repeat: no-repeat;
  height: var(--tools-size);
  width: var(--tools-size);
}
.mysql {
  background-image: url(@/assets/flamingo/mysql/mysql-original.svg);
  background-repeat: no-repeat;
  height: var(--tools-size);
  width: var(--tools-size);
}
.postgresql {
  background-image: url(@/assets/flamingo/postgresql/postgresql-original.svg);
  background-repeat: no-repeat;
  height: var(--tools-size);
  width: var(--tools-size);
}

.jquery {
  background-image: url(@/assets/flamingo/jquery/jquery-original.svg);
  background-repeat: no-repeat;
  height: var(--tools-size);
  width: var(--tools-size);
}

.bootstrap {
  background-image: url(@/assets/flamingo/bootstrap/bootstrap-original.svg);
  background-repeat: no-repeat;
  height: var(--tools-size);
  width: var(--tools-size);
}

.my-skills {
  margin-top: 88px;
  margin-bottom: 0;
}

.front-end,
.back-end,
.databases {
  display: flex;
  align-items: baseline;
  justify-content: left;
  line-height: 0;
  margin: 20px 0;
}

.front-end p,
.back-end p,
.databases p {
  display: block;
  margin-right: 5px;
  font-size: 1.2em;
  font-weight: 700;
  margin: 1em 0;
  padding: 0;
}

.tool {
  display: none;
  margin: 0.7em 1em;
}

@media (min-width: 1024px) {

  .front-end,
  .back-end,
  .databases {
    justify-content: left;
  }

  .front-end p,
  .back-end p,
  .databases p {
    margin: 0;
  }

  .tool {
    display: block;
  }
}
</style>