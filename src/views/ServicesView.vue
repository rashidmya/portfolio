<script setup>
import MySkills from '@/components/Services/MySkills.vue';
import ContactMe from '@/components/Services/ContactMe.vue'
</script>

<template>
  <div class="services">
    <div class="marvel-device iphone-x">
      <div class="notch">
        <div class="camera"></div>
        <div class="speaker"></div>
      </div>
      <div class="top-bar"></div>
      <div class="sleep"></div>
      <div class="bottom-bar"></div>
      <div class="volume"></div>
      <div class="overflow">
        <div class="shadow shadow--tr"></div>
        <div class="shadow shadow--tl"></div>
        <div class="shadow shadow--br"></div>
        <div class="shadow shadow--bl"></div>
      </div>
      <div class="inner-shadow"></div>
      <div class="screen">
        <div class="container">
          <div class="intro">
            <p>I create static, dynamic (CMS) and full stack web applications that are responsive, fast & easy to use.</p>
            <MySkills />
          </div>
          <ContactMe />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url(@/assets/devices.min.css);

.marvel-device {
  width: 333px !important;
}

.marvel-device.iphone-x .notch {
  width: 180px;
}

.marvel-device.iphone-x .camera {
  left: 145px;
}

.services {
  color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 33px 0;
}

.container {
  background-color: #121314;
  padding: 33px;
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.intro {
  margin-top: 70px;
}

h2 {
  font-size: 2em;
  font-weight: 700;
}

p {
  font-size: 1.3em;
  font-weight: 300;
  margin: 33px 0;
}

@media (min-width: 1024px) {
  .services {
    padding: 0;
  }
  .container {
    min-height: 80vh;
  }

  .marvel-device {
    width: 375px !important;
  }

  .marvel-device.iphone-x .notch {
    width: 210px;
  }

  .marvel-device.iphone-x .camera {
    left: 154px;
  }
}
</style>
