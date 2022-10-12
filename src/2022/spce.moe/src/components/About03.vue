<template>
<div class="mx-auto background p-8 pr-8 pl-8 md:pr-32 md:pl-32 lg:pr-48 lg:pl-48">

    <div class="flex justify-center">

        <div class="card rounded-lg shadow-xl p-5 m-5 hover:-rotate-6" id="about">
            <div class="font-bold text-6xl tracking-widest card-text">
                <a>03</a>
            </div>
            <div class="font-semibold text-3xl pt-16 pb-16 card-text">
                <a>contact</a>
            </div>
        </div>

        <div class="font-light text-xl card-text p-5 m-5">
            <h1 class="font-bold text-4xl pb-5 card-title">how to get in touch...</h1>
            <p>
                via email or (some form of) matrix client.<br>
                <br>
                (mail) biz at spce dot moe<br>
                (matrix) at space semicolon matrix dot org
            </p>
            <!-- Average Response Time: 1-365 business days -->
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