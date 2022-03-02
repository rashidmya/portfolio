

<template>
    <div class="apps">
        <a class="mail icon" href="mailto:rashid.myaa@gmail.com"><fa icon="envelope" type="fas"></fa></a>
         <a class="wa icon" href="tel:0505289982"><fa icon="whatsapp" type="fab"></fa></a>
         <a class="gh icon" target=”_blank” href="https://github.com/rashidmya"><fa icon="github" type="fab"></fa></a>
         <a class="li icon" target=”_blank” href="https://www.linkedin.com/in/rashidalawadhi/"><fa icon="linkedin" type="fab"></fa></a>
    </div>
</template>

<style scoped>

h2 {
    padding-top: 80px;
    font-weight: 500;
    font-size: 1.2em;
}

.apps {
    background-color: rgb(5, 5, 5);
    border-radius: 25px;
    height: 80px;
    width: 310px;
    display: flex;
    margin: auto;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    left: 10px;
}
.icon {
    color: white;
    width: 50px;
    height: 50px;
    margin: 1em;
    background-color: blue;
    padding: 10px;
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
    background: linear-gradient(
        0deg,
        rgb(102, 151, 255) 0%,
        rgb(0, 81, 255) 100%
    );

}
.wa {
    background: rgb(31, 150, 33);
    background: linear-gradient(
        0deg,
        rgba(31, 150, 33, 1) 0%,
        rgba(56, 255, 59, 1) 100%
    );
}

.wa:hover {
    background: rgb(1, 151, 4);
    background: linear-gradient(
        0deg,
        rgb(0, 141, 2) 0%,
        rgb(0, 255, 4) 100%
    );
}
.gh {
    background: rgb(60, 60, 60);
    background: linear-gradient(
        0deg,
        rgba(60, 60, 60, 1) 0%,
        rgba(71, 71, 71, 1) 100%
    );
}

.gh:hover {
    background: rgb(49, 49, 49);
    background: linear-gradient(
        0deg,
        rgb(49, 49, 49) 0%,
        rgb(56, 56, 56) 100%
    );
}
.li {
    background: rgb(31, 69, 180);
    background: linear-gradient(
        0deg,
        rgba(31, 69, 180, 1) 0%,
        rgba(31, 69, 180, 1) 100%
    );
}

.li:hover {
    background: rgb(0, 45, 179);
    background: linear-gradient(
        0deg,
        rgb(10, 51, 177) 0%,
        rgb(15, 57, 180) 100%
    );
}
@media (min-width: 1024px) {
    .apps {
        width: 350px;
        bottom: 10px;
        left: 12px;
    }

    .icon {
        width: 55px;
        height: 55px;
    }
}
</style>