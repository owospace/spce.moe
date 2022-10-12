<!-- 
    This file was created for 'spce.moe'.
    File: Navigation.vue @ https://github.com/owospace/spce.moe

    Updated components toolkit @ https://github.com/owospace/vue3-comp-toolkit
-->

<template>
    <div id="navigation">
        <header>
            <div class="mx-auto flex">

                <div class="p-8 mx-auto">
                    <a href="#"><img src="../assets/logo.png"></a>
                </div>

                <div class="text-center p-8 fade mx-auto">
                    <nav>
                        <ul>
                            <div class="selector" id="selector-main"><li><div id="slash"></div><router-link class="p-1" to="/">Home</router-link></li></div>
                            <div class="selector" id="selector-main"><li><div id="slash"></div><router-link class="p-1" to="/about">About</router-link></li></div>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: "Navigation",
}
</script>

<style scoped>
body {
    background-color: #1e1e1e;
}

img {
    max-width: 65px;
    max-height: 65px;
}

nav {
    text-align: center;
}

nav a {
    font-weight: bold;
    color: #1e1e1e;
}

nav a.router-link-exact-active {
    color: #fff !important;
    transition: opacity 2s;
}

nav a:hover {
    transition: opacity 2s;
    color: #e8e8e8;
;
}

.fade {
    transition: opacity 1s;
    opacity: 50%;
}

.fade:hover {
    opacity: 100%;
    transition: opacity 1s;
}

#selector-main {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
#selector-main a {
  position: relative;
  transition: all .45s ease-Out;
  color: #aaa;
  text-decoration: none;
}

#slash {
  width: 0%;
  height: 0%;
  opacity: 0;
  line-height: 40px;
  border-radius: 50%;
  background: #1e1e1e;
  position: absolute;
  transition: all .5s ease-Out;
  top: 20px;
  left: 70px;
}

#selector-main:hover #slash {
  width: 200%;
  height: 500%;
  opacity: 1;
  top: -70px;
  left: -70px;
}
#selector-main:hover a {
  color: #aaa;
}
</style>