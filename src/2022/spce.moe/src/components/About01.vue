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
            <p>i work with computers.</p>
            <p>more specifically, i am an IT Specialist with a major passion in my field.</p>
            <p><br></p>
            <p>i am a big advocate on privacy; and also a huge geek.</p>
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
.card-title {
    color: #fff;
}

.card-text {
    color: #e8e8e8;
}

.background {
    background-color: #1e1e1e;
    /* background-image: url('../assets/miku1.jpg'); */
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