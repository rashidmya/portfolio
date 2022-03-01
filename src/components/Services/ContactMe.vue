

<template>
    <div class="contact-me">
        <h2>You can contact me using the following channels</h2>
        <div class="apps">
            <fa icon="envelope" type="fas" class="mail icon"></fa>
            <fa icon="whatsapp" type="fab" class="wa icon"></fa>
            <fa icon="github" type="fab" class="gh icon"></fa>
            <fa icon="linkedin" type="fab" class="li icon"></fa>
        </div>
    </div>
</template>

<style scoped>
.contact-me {
    margin: 99px 0;
    height: 270px;
}

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
    bottom: 32px;
    left: -22px;
}
.icon {
    width: 50px;
    height: 50px;
    margin:  1em;
    background-color: blue;
    padding: 10px;
    border-radius: 10px;
}

.mail {
background: rgb(131,171,255);
background: linear-gradient(0deg, rgba(131,171,255,1) 0%, rgba(33,105,255,1) 100%);
}
.wa {
    background: rgb(31,150,33);
background: linear-gradient(0deg, rgba(31,150,33,1) 0%, rgba(56,255,59,1) 100%);
}
.gh{
    background: rgb(60,60,60);
background: linear-gradient(0deg, rgba(60,60,60,1) 0%, rgba(71,71,71,1) 100%);
}
.li {
    background: rgb(31,69,180);
background: linear-gradient(0deg, rgba(31,69,180,1) 0%, rgba(31,69,180,1) 100%);
    }
@media (min-width: 1024px) {
.apps {
    width: 350px;
    bottom: 0;
    left: -20px;
}

.icon {
    width: 55px;
    height: 55px;
}
}
</style>