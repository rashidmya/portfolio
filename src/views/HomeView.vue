<template>
<div class="home">
  <div class="marvel-device macbook">
    <div class="top-bar"></div>
    <div class="camera"></div>
    <div class="screen">
        <div class="desktop"></div>
      </div>
    <div class="bottom-bar"></div>
  </div>
</div>
</template>

<style scoped>
@import url(@/assets/devices.min.css);

.home {
    padding: 33px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  .desktop {
    background-image: url(@/assets/desktop.png);
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }


.marvel-device.macbook {
    width: 70vw;
    height: 338px;
  }

  .top-bar {
    width: calc(80vw + 2 * 50px) !important;
    top: 418px !important;
    left: -45px !important;
}

.marvel-device.macbook .bottom-bar {
    background: transparent;
    width: calc(80vw + 2 * 50px);
    top: 418px !important;
    left: -45px;
}

@media (min-width: 1024px) {

  .home {
    width: 42vw;
    margin: auto;
  }

  .marvel-device.macbook {
    width: 600px;
    height: 338px;
  }

  .top-bar {
    width: calc(100% + 2 * 50px) !important;
    top: 418px !important;
    left: -45px !important;
}

.marvel-device.macbook .bottom-bar {
    background: transparent;
    width: calc(100% + 2 * 50px);
    top: 418px !important;
    left: -45px;
}
}
</style>

