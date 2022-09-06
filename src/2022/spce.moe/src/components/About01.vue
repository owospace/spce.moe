<template>
<div class="mx-auto background p-8 pr-8 pl-8 md:pr-32 md:pl-32 lg:pr-48 lg:pl-48">

    <div class="flex justify-center">

        <div class="card rounded-lg shadow-xl p-5 m-5 hover:-rotate-6" id="about">
            <div class="font-bold text-6xl tracking-widest card-text">
                <a>01</a>
            </div>
            <div class="font-semibold text-3xl pt-16 pb-16 card-text">
                <a>about</a>
            </div>
        </div>

        <div class="font-light text-xl card-text p-5 m-5">
            <h1 class="font-bold text-4xl pb-5 card-title">heya, i'm space!</h1>
            <p>I'm an IT specialist with a major passion in my field.</p>
            <br>
            <p>I created this page to give a quick & digestible run down about me.</p>
            <br>
            <p>I love the idea of a better world. I respect privacy advocation & am a geek when I want to be.</p>
            <!-- See, this is where i'd put some big life story, but you definitely don't care about that. -->
        </div>

    </div>

</div>
</template>

<script>
export default {
    name: 'AboutCard',
}
</script>

<style scoped>
h1{
  padding: 8px; 
  position: relative; 
  z-index: 2;
  color: #444;
}

h1:first-child{ border-left: 8px solid #e8e8e8; }

h1:after { 
  content: "";
  height: 100%; 
  left: 0; 
  top: 0; 
  width: 0px;  
  position: absolute; 
  transition: all 0.3s ease 0s; 
  -webkit-transition: all 0.3s ease 0s; 
  z-index: -1;
}

h1:hover:after{ width: 75%; }
h1:after{ background: #323232; }

.card-title {
    color: #fff;
}

.card-text {
    color: #e8e8e8;
}

.background {
    background-color: #1e1e1e;
    /* background-image: url('../assets/constellation.png'); */
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    padding: 10%;
}

.card {
    background-color: #323232;
}

#about {
    max-width: 200px;
    max-height: 250px;
}

@media screen and (max-width: 768px) {
    #about {
        display: none;
    }
    #links {
        display: none;
    }
}
</style>