<!-- 
    This file was created for 'spce.moe'.
    File: HomeCard.vue @ https://github.com/owospace/spce.moe

    Updated components toolkit @ https://github.com/owospace/vue3-comp-toolkit
-->

<template>
    <section>
        <div class="bg p-16">
            <div class="slice-div slice-div-large"></div>

            <div class="p-8 fade rounded-2xl text-center mx-auto card opacity-60">

                <img class="container pt-10" src="../assets/logo.png">
                <h1 class="font-semibold text-3xl hcl">space</h1>
                
                <p class="pb-6 pt-2 font-mono">welcome</p>

                <div class="flex justify-center pb-1">
                    <img class="ico" src="../assets/briefcase.png"><p class="font-mono pl-2">IT Specialist</p>
                </div>

                <div class="flex justify-center">
                    <img class="ico" src="../assets/location.png"><p class="font-mono pl-2">cybrspce</p>
                </div>


                <p class="pb-6 pt-8 font-mono">> coexisting with my bed</p>
                
                <p class="font-mono"><a href="https://spce.moe/#/about">About Me »</a></p>

                <!-- <router-link to="about">About</router-link> -->

            </div>
        </div>
     </section>
</template>

<style scoped>
.ico {
    max-height: 20px;
    max-width: 20px;
}

@keyframes parallax {
	100% {
		background-position: 
			-1000px 20%,
			-800px 95%,
			500px 50%,
			1000px 100%,
			1500px 0;
	}
}

.hcl {
    color: #fff !important;
}

.slice-div,.slice-div-large {
    left: -1%;
    transform: skew(-1deg, 0deg) rotate(-2deg);
    top: 345px;
    right: 0%;
    bottom: auto;
    height: 100%;
    position: absolute;
    display: flex;
    background-color: #1e1e1e;
    background-image: url('../assets/constellation.png');
    background-size: 1920px;
    animation: 50s parallax infinite linear;
    background-repeat: cover;
}

.bg {
    background-color: #1e1e1e;
    position: relative;
    height: 480px;
    max-width: 100%;
    /* overflow: hidden; */
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    /* This option fixes the weird margin/'invisible' background/body bug whatever */
    margin-bottom: 450px;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 2s;
  animation-name: fade;
  animation-duration: 2s
}

@-webkit-keyframes fade {
  from { bottom:-50px; opacity:0 } 
  to { bottom:0px; opacity:0.6 }
}

@keyframes fade { 
  from{ bottom:-50px; opacity:0 } 
  to{ bottom:0; opacity:0.6 }
}

h1,p {
    color: #e8e8e8;
}

.card {
    max-width: 350px;
    min-height: 720px;
    max-height: 850px;
    background-color: #323232;
    overflow: hidden;
    position: relative;
    padding-top: 0;
    padding-bottom: 0;
}

.card:after {
    content: '';
    width: 500px;
    height: 200px;
    top: calc(110% - 175px);
    left: calc(40% - 175px);
    background: inherit;
    position: absolute;
    box-shadow: inset 0 0 0 200px #1e1e1e;
    filter: blur(10px);
}

img {
    max-width: 400px;
    max-height: 400px;
}
</style>

<script>
export default {
    name: "HomeCard",
}
</script>