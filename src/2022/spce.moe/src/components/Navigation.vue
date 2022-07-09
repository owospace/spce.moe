<!-- 
    This is part of a new migration. Let's enjoy!
-->

<template>
    <div id="navigation">
        <header>
            <div class="mx-auto flex">

                <div class="p-8 mx-auto">
                    <a href="#"><img src="../assets/logo.png"></a>
                </div>

                <div class="text-center p-8 mx-auto">
                    <nav>
                        <ul>
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="about">About</router-link></li>
                            <!-- <li><router-link to="apps">Apps</router-link></li> -->
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
    color: #aaa;
}
</style>