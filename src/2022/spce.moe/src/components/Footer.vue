<!-- 
    This is part of a new migration. Let's enjoy!
-->

<template>
    <div id="footer">
        <footer>
            <div class="md:grid md:grid-cols-3 md:gap-16 p-8 opacity-60 pb-16 pt-16 text-md">

                <div class="justify-center text-center pb-12">
                    <h1 class="font-semibold text-lg underline">pinned</h1><br>
                    <p><a href="https://mail.spce.moe" target="_blank">mailbox</a></p>
                    <p><a href="https://jelly.spce.moe" target="_blank">media</a></p>
                </div>
                
                <div class="justify-center text-center pb-12">
                    <h1 class="font-semibold text-lg underline">social</h1><br>
                    <p><a href="#" target="">Matrix (soon)</a></p>
                </div>

                <div class="justify-center text-center pb-12">
                    <h1 class="font-semibold text-lg underline">shortcut</h1><br>
                    <p><a href="#">home</a></p>
                </div>

            </div>

            <div class="text-center p-4 font-semibold opacity-80">
                <h3>🌑 made with 💕 @ spce.moe</h3>
            </div>

        </footer>
    </div>
</template>

<style scoped>
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
h2 {

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