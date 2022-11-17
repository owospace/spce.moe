<!-- 
    This file was created for 'spce.moe'.
    File: Footer.vue @ https://github.com/owospace/spce.moe

    Updated components toolkit @ https://github.com/owospace/vue3-comp-toolkit
-->

<template>
    <div id="footer">
        <footer>
            <div class="md:grid font-mono md:grid-cols-3 md:gap-8 p-8 opacity-60 pb-8 pt-16 text-md">
                
                <div class="justify-center text-center pb-12">
                    <h1 class="font-semibold text-lg underline">shit</h1><br>
                    <p><a href="https://spce.moe/#/about">Work</a></p>
                    <p><a href="https://spce.moe/#/services">Services</a></p>
                    <p><a href="https://spce.moe/#/blog">Blog</a></p>
                </div>

                <div class="justify-center text-center pb-12">
                    <img class="mx-auto logf" src="../assets/logo.png">
                </div>

                <div class="justify-center text-center pb-12">
                    <h1 class="font-semibold text-lg underline">more shit</h1><br>
                    <p><a href="https://spce.moe/#/pphahaha">Privacy Policy</a></p>
                    <p><a href="https://spce.moe/#/faq">FAQ</a></p>
                    <p><a href="https://spce.moe/#/uses">Uses</a></p>
                    <div>
                        <button></button>
                    </div>
                </div>

            </div>

            <hr class="hr pb-8 ml-24 mr-24">

            <div class="font-semibold opacity-80 flex justify-center pb-8">
                <h3 class="pr-2">made with</h3>
                <img class="ico" src="../assets/heart.png">
                <h3 class="pl-2">@ spce.moe</h3>
            </div>

        </footer>
    </div>
</template>

<style scoped>
.hr {
    height: 1;
    border-width: 1;
    border-color: #1e1e1e;
}

.logf {
    max-width: 160px;
    max-height: 160px;
}

.ico {
    max-height: 25px;
    max-width: 25px;
}

.align-right {
    text-align: right;
    float: right;
}
.align-left {
    text-align: left;
    float: left;
}
.align-center {
    text-align: center;
    float: center;
}

.text-e8 {
    color: #e8e8e8;
}

h1 {
    color: #e8e8e8;
}
h3 {
    color: #e8e8e8;
}
p {
    color: #aaa;
    text-transform: uppercase;
    padding-top: 0.5px;
    padding-bottom: 2px;
}
a {
    color: #aaa;
    text-transform: lowercase;
}
a:hover {
    color: #fff;
}

img {
    max-height: 200px;
    max-width: 200px;
}
</style>

<script>
export default {
    name: "Footer",
}
</script>