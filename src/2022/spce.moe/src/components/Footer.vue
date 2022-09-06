<!-- 
    This file was created for 'spce.moe'.
    File: Footer.vue @ https://github.com/owospace/spce.moe

    Updated components toolkit @ https://github.com/owospace/vue3-comp-toolkit
-->

<template>
    <div id="footer">
        <footer>
            <div class="md:grid md:grid-cols-3 md:gap-16 p-8 opacity-60 pb-16 pt-16 text-md">

                <div class="justify-center text-center pb-12">
                    <h1 class="font-semibold text-lg underline">applications</h1><br>
                    <p><a href="https://mail.spce.moe" target="_blank">mailbox</a></p>
                    <p><a href="https://jelly.spce.moe" target="_blank">media</a></p>
                </div>
                
                <div class="justify-center text-center pb-12">
                    <h1 class="font-semibold text-lg underline">about</h1><br>
                    <p><a href="#" target="">Matrix</a></p>
                </div>

                <div class="justify-center text-center pb-12">
                    <h1 class="font-semibold text-lg underline">contact</h1><br>
                    <p><a href="#">Business Enquiries<br>biz(at)spce.moe</a></p>
                    <p><a href="#">You like men.</a></p>
                    <div>
                        <button></button>
                    </div>
                </div>

            </div>

            <div class="font-semibold opacity-80 flex justify-center">
                <h3 class="pr-2">made with</h3>
                <img class="ico" src="../assets/heart.png">
                <h3 class="pl-2">@ spce.moe</h3>
            </div>
            <h3 class="text-center pb-24 opacity-80"><a href="https://github.com/owospace/spce.moe">You know this website is open source?</a></h3>

        </footer>
    </div>
</template>

<style scoped>
.ico {
    max-height: 25px;
    max-width: 25px;
    display: flex;
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
    text-transform: uppercase;
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