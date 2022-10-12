<template>
<div class="mx-auto background p-8 pr-8 pl-8 md:pr-32 md:pl-32 lg:pr-48 lg:pl-48">

    <div class="flex justify-center">

        <div class="font-light text-xl card-text p-5 m-5">
            <h1 class="font-bold text-4xl pb-5 card-title">skillz & talent</h1>
            <p>As of 2019, I have been continuously expanding my skillset.</p>
            <p>In my opinion, hands-on experience means more than some arbitrary course or programme.</p>
            <br>

            <strong><button v-on:click="showDetails()" id="dbutton">+</button> System Administration - ⭐⭐⭐⭐⭐</strong>
                <span id="details">
                    <p class="pt-2 pb-10">
                        I am very self-proficient in System Administration.<br>
                        I go through such tasks on a daily basis. Utilising KVM & LXC to manage application software and hardware, keeping them up-to-date and secure.
                    </p>
                </span>

            <p>Virtual Machines (KVM) - ⭐⭐⭐⭐⭐</p>
            <p>Linux (Desktop/Server) - ⭐⭐⭐⭐⭐</p>
            <p>System Administration - ⭐⭐⭐⭐⭐</p>
            <p>Networking & Infra - ⭐⭐⭐⭐</p>
            <p>Programming - ⭐⭐⭐⭐</p>
            <p>Graphic Design - ⭐⭐⭐</p>
            <br>
            <p class="text-blue-200 hover:underline"><a href="https://github.com/owospace" target="_blank">I have <i>some</i> of my work published on GitHub.</a></p>
            <!-- Need to add Qualifications like CCNA/CompTia here. -->
            <!-- Should also add my personal stack, no? -->
        </div>

        <div class="card rounded-lg shadow-xl p-5 m-5 hover:rotate-6" id="about">
            <div class="font-bold text-6xl tracking-widest card-text">
                <a>02</a>
            </div>
            <div class="font-semibold text-3xl pt-16 pb-16 card-text">
                <a>expertise</a>
            </div>
        </div>

    </div>

</div>
</template>

<script>
export default {
    name: 'AboutCard',

    methods: {


        showDetails() {
            var details = document.getElementById("details");
            var button = document.getElementById("dbutton");

            if (details.style.display === "") {
                button.innerHTML = "-";
                details.style.display = 'inline';
            } else {
                button.innerHTML = "+";
                details.style.display = "";
            }
        }


    }
}

</script>

<style scoped>
.ico {
    max-height: 25px;
    max-width: 25px;
}

#details { display: none; }

.card-title {
    color: #fff;
}

.card-text {
    color: #e8e8e8;
}

.background {
    background-color: #1e1e1e;
    /* background-image: url('../assets/miku2.jpg'); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 70%;
    background-position-y: 20%;
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