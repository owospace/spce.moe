<template>
    <section>
        <h1 class="text-3xl font-semibold p-32 opacity-60 text-center p-16 bruh">Applications</h1>
        <div class="space-y-10 lg:grid lg:grid-cols-3 lg:gap-16 lg:space-y-0 p-8 opacity-60 bruh pb-32">

            <div class="rounded-xl p-16 text-center font-semibold bgstf fade">
                <h1 class="text-3xl">Mailbox</h1>
                <p class="pb-32">what do you think this is?</p>

                <div class="button" id="button-main">
                    <div id="circle"></div>
                    <button><a href="https://mail.spce.moe">Mailbox.App</a></button>
                </div>
                
            </div>
            <div class="rounded-xl p-16 text-center font-semibold bgstf fade">
                <h1 class="text-3xl">Vault</h1>
                <p class="pb-32">manager</p>

                <div class="button" id="button-main">
                    <div id="circle"></div>
                    <button><a href="https://vault.spce.moe">Vault.App</a></button>
                </div>
                
            </div>
            <div class="rounded-xl p-16 text-center font-semibold bgstf fade">
                <h1 class="text-3xl">Jellyfin</h1>
                <p class="pb-32">Media Player</p>

                <div class="button" id="button-main">
                    <div id="circle"></div>
                    <button><a href="https://jelly.spce.moe">Jelly.App</a></button>
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
  border: 4px solid #e8e8e8;
  margin: 20px 20px 20px 20px;
  color: #e8e8e8;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 30px;
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
  background: #e8e8e8;
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
h1,p {
    color: #e8e8e8;
}

.bgstf {
    background-color: #323232;
}

.bruh {
    background-color: #1e1e1e;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 2s;
  animation-name: fade;
  animation-duration: 2s
}

@-webkit-keyframes fade {
  from { bottom:-250px; opacity:0 } 
  to { bottom:0px; opacity:1.0 }
}

@keyframes fade { 
  from{ bottom:-250px; opacity:0 } 
  to{ bottom:0; opacity:1.0 }
}
</style>
