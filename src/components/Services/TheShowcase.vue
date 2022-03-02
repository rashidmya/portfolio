<script setup>
import { ref, toRef, watch } from 'vue';

const showcase = ref(false);
const props = defineProps(['tool'])
const tool = toRef(props, 'tool')

watch(tool, (val) => {
    if (val === 'none') {
    showcase.value = false
} else {
    showcase.value = true
}
})

</script>

<template>
    <div class="item-3d">
        <div class="item-display">
           
            <span class="ground"></span>
            <div class="item-content group">
                <div class="item-img">
                     <Transition name="slide-fade">
                    <img v-if="showcase"
                        :src="'/src/assets/flamingo/' + tool +'/' + tool + '-original.svg'"
                        @click="fuck"
                    />
                   </Transition>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
// =========================
// colors
// =========================
.item-3d {
    display: none;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media (min-width: 1024px) {
    $master-grey: #f0f0f000;

    // 3 shades of grey
    $master-l-10: mix(black, $master-grey, 10%);
    $master-d-10: mix(white, $master-grey, 10%);
    $master-d-15: mix(white, $master-grey, 15%);

    // font colors
    $font-base: mix(black, $master-grey, 50%);
    $font-dark: mix(black, $master-grey, 80%);
    $font-spot: #08c;

    // =========================
    // one breakpoint is enough for this demo
    // =========================
    $wide-m: 600px;

    @mixin wide-m {
        @media (max-width: #{$wide-m}) {
            @content;
        }
    }
    // @include wide-m {};

    // =========================
    // max-width for centered boxes
    // =========================
    $mx-width: 50rem;

    // =========================
    // reset and styling stuff
    // =========================
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .group:after {
        content: "";
        display: table;
        clear: both;
    }

    a {
        text-decoration: none;
        color: $font-spot;
    }

    strong {
        font-weight: normal;
        color: $font-dark;
    }

    // =========================
    // this wraps one single item
    // =========================
    .item-3d {
        display: block;
        width: 100%;
        margin-bottom: 20%;
        padding-top: 10%;
        padding-bottom: 5%;
        transform-origin: 50% 100%;
        transform-style: preserve-3d;
        //box-shadow: inset 0 0 0 1px red;

        @include wide-m {
            margin-bottom: 40%;
        }
    }

    // =========================
    // this fakes the 3d surface
    // has to be wider than it's parent
    // =========================
    .ground {
        position: absolute;
        top: 0;
        right: -50%;
        bottom: 0;
        left: -50%;
        width: 200%;
        margin: 0 auto;
        background-image: linear-gradient($master-d-10, $master-l-10 60%);
        background-size: 100%;
        transform-origin: 50% 100%;
        transform: rotateX(70deg);
        transform-style: preserve-3d;
        backface-visibility: hidden;
        //box-shadow: inset 0 0 0 10px black;

        &:before,
        &:after {
            content: "";
            position: absolute;
            width: 100%;
        }

        // this contains a radial-gradient, which fakes the watch's dropshadow
        &:before {
            top: 0;
            left: 62%;
            height: 100%;
            width: 50%;
            max-width: $mx-width;
            background-image: radial-gradient(
                $master-d-15,
                rgba($master-d-15, 0) 60%
            );
            background-size: 50% 80%;
            background-repeat: no-repeat;
            transform: translateX(-50%);
            //box-shadow: inset 0 0 0 5px purple;
        }

        // the front-side
        &:after {
            bottom: -500px;
            left: 0;
            height: 500px;
            background-image: linear-gradient($master-d-10, $master-l-10);
            transform-origin: 50% 0;
            transform: rotateX(-70deg);
            //box-shadow: inset 0 0 0 5px blue;
        }
    }

    //switching the dropshadows from left to right
    .item-3d:nth-child(even) .ground:before {
        background-position: 100% 50%;
        animation: floating-shadow-r 5s -1s infinite;
    }

    .item-3d:nth-child(odd) .ground:before {
        background-position: 0 50%;
        animation: floating-shadow-l 5s -1s infinite;
    }

    // animations for the shadows
    @keyframes floating-shadow-l {
        0%,
        100% {
            background-size: 35% 80%;
            background-position: 10% 80%;
        }
        50% {
            background-size: 50% 80%;
            background-position: 0 80%;
        }
    }

    @keyframes floating-shadow-r {
        0%,
        100% {
            background-size: 35% 80%;
            background-position: 90% 80%;
        }
        50% {
            background-size: 50% 80%;
            background-position: 100% 80%;
        }
    }

    // =========================
    // a figure element that wraps
    // the image and the caption
    // =========================
    .item-content {
        position: relative;
        width: 100%;
        max-width: $mx-width;
        margin: 0 auto;
        display: flex;
        align-items: center;
        transform: translateZ(0); // fixes the layers in Safari
        //box-shadow: inset 0 0 0 1px green;
    }

    // =========================
    // additional wrap for the image
    // =========================
    .item-img {
        position: relative;
        margin: auto;
        display: show;
        width: 50%;
        transform-origin: 50% 50%;
        transform-style: preserve-3d;
        animation: floating 5s -1s infinite;
        //box-shadow: inset 0 0 0 1px red;

        img {
            display: block;
            width: 100%;
            height: auto;
            transform-origin: 50% 100%;
            transform: translateZ(-5rem);
        }
    }

    .item-3d:nth-child(even) .item-img {
        float: right;
        order: 1;
    }

    // animation for the image
    @keyframes floating {
        0%,
        100% {
            transform: translateY(-5%);
        }
        50% {
            transform: translateY(0);
        }
    }
}
</style>