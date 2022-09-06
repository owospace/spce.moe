<!-- 
    This file was created for 'spce.moe'.
    File: PetalPage.vue @ https://github.com/owospace/spce.moe

    Updated components toolkit @ https://github.com/owospace/vue3-comp-toolkit
-->

<template>
    <section>
        <div class="bg p-16">

            <div class="text-center font-light text-2xl p-8 md:p-24">
                <img class="logo mx-auto" src="../assets/petal.png">
                <h1>Welcome to your <a class="font-bold">new</a> music player.</h1>
            </div>

            <div class="mx-auto space-y-10 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 p-16 text-gray-200">
                <div>
                    <img class="mx-auto logo" src="../assets/476756.gif">
                </div>
                <div>
                    <h1 class="font-bold text-3xl">PETAL?</h1>
                    <p>Petal is a <strong>new</strong> (heavily wip) music player.</p>
                    <p>For audio-fanatics, or someone looking to switch from other (paid) services. Petal is for you.</p>
                </div>
            </div>

            <div class="mx-auto space-y-10 md:grid md:grid-cols-2 md:gap-16 md:space-y-0 p-16 text-gray-200">
                <div class="text-right">
                    <h1 class="font-bold text-3xl">FEATURES</h1>
                    <p>Petal currently supports:</p>
                    <p>- Subsonic (or otherwise compatible) servers.</p>
                    <p>- 'Offline Mode' Playback.</p>
                    <br>
                    <p>Petal additionally features:</p>
                    <p>A new and improved UI for navigation, with custom themes included.</p>
                    <p>Like the look of Spoteefi? That's included.</p>
                    <p>Like the look of Clementine? That's included. It's all here.</p>
                    <br>
                    <p>Built on Electron, Petal can be adapted to virtually any enviroment.</p>
                    <p>Had enough of Wine? Petal will work on: Windows, Linux, MacOS & more.</p>
                </div>
                <div>
                    <img class="mx-auto logo" src="../assets/uwu.png">
                </div>
            </div>

            <div class="mx-auto space-y-10 md:grid md:grid-cols-2 md:gap-16 md:space-y-0 p-16 text-gray-200">
                <div>
                    <img class="mx-auto logo" src="../assets/miku3.jpg">
                </div>
                <div>
                    <h1 class="font-bold text-3xl">I want the best music experience.</h1>
                    <p>Download the Petal Client and get started today:</p>
                    <p>Simply click on the binary applicable to you, or check out the <a href="https://github.com/blssm/petal">source ;)</a></p>
                </div>
            </div>

            <div class="mx-auto justify-center md:flex md:p-32">
                <div class="button flex" id="button-main">
                    <div id="circle"></div>
                    <img class="petsm" src="../assets/petalwin.png">
                    <a href="soon" target="_blank"> Windows</a>
                </div>

                <div class="button flex" id="button-main">
                    <div id="circle"></div>
                    <img class="petsm" src="../assets/petalwin.png">
                    <a href="soon.tm" target="_blank"> MacOS</a>
                </div>

                <div class="button flex" id="button-main">
                    <div id="circle"></div>
                    <img class="petsm" src="../assets/petalwin.png">
                    <a href="soon.tm" target="_blank"> Linux</a>
                </div>
                

            </div>

        </div>
     </section>
</template>

<style scoped>
 /* Button! Ooh! */
 .button {
  display: inline-flex;
  height: 80px;
  width: 250px;
  border: 4px solid #fec5ff;
  margin: 20px 20px 20px 20px;
  color: #e8e8e8;
  text-transform: uppercase;
  text-decoration: none;
  font-size: .8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

#button-main {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
#button-main a {
  position: relative;
  transition: all .45s ease-Out;
  color: #e8e8e8;
  text-decoration: none;
}

#circle {
  width: 0%;
  height: 0%;
  opacity: 0;
  line-height: 40px;
  border-radius: 50%;
  background: #fec5ff;
  position: absolute;
  transition: all .5s ease-Out;
  top: 20px;
  left: 70px;
}

#button-main:hover #circle {
  width: 200%;
  height: 500%;
  opacity: 1;
  top: -70px;
  left: -70px;
}
#button-main:hover a {
  color: #1e1e1e;
}

.petsm {
    max-height: 50px;
    max-width: 50px;
}
.bg {
    background-color: #1e1e1e;
    background-image: url('../assets/miku1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: 10%;
}

h1 {
    color: #e8e8e8;
}

.logo {
    max-height: 300px;
    max-width: 300px;
}
</style>

<script>
export default {
    name: "HomeCard",
}
</script>