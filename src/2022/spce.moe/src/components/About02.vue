<template>
<div class="mx-auto background p-8 pr-8 pl-8 md:pr-32 md:pl-32 lg:pr-48 lg:pl-48">

    <div class="flex justify-center">

        <div class="font-light text-xl card-text p-5 m-5">
            <h1 class="font-bold text-4xl pb-5 card-title">skillz & talent</h1>
            <p>As of 2019, I have been continuously working hard to expand my skillset.</p>
            <p>In my opinion, hands-on experience means more than some arbitrary course or programme.</p>
            <br>

            <strong><button v-on:click="showDetails1()" id="dbutton1">+</button> System Administration - ⭐⭐⭐⭐⭐</strong>
                <span id="details1">
                    <p class="pt-2 pb-10">
                        I am very self-proficient in System Administration.<br>
                        I go through such tasks on a daily basis. Utilising KVM & LXC to manage application software and hardware, keeping them up-to-date and secure.
                    </p>
                </span>
                <br>

            <strong><button v-on:click="showDetails2()" id="dbutton2">+</button> Linux (Desktop/Server) - ⭐⭐⭐⭐⭐</strong>
                <span id="details2">
                    <p class="pt-2 pb-10">
                        I am currently using Linux as a Desktop OS.<br>
                        I am very experienced with Ubuntu/Debian server distributions, alongside my sysadmin skills, I can deploy a server quickly, securely and as optimally as you need.
                    </p>
                </span>
                <br>

            <strong><button v-on:click="showDetails3()" id="dbutton3">+</button> Networking - ⭐⭐⭐⭐⭐</strong>
                <span id="details3">
                    <p class="pt-2 pb-10">
                        I am experienced with networks and how they work.<br>
                        I currently use and have strong familiarity with setting up VLANs, security and ensuring a uptime-crucial environment.<br>
                        <br>
                        I like the metaphor 'KISS'- Keep It Simple Stupid. Which applies to all my work but *especially* networking.
                    </p>
                </span>
                <br>
            
            <strong><button v-on:click="showDetails4()" id="dbutton4">+</button> Programming - ⭐⭐⭐⭐</strong>
                <span id="details4">
                    <p class="pt-2 pb-10">
                        I do love working with Java, JS, C, and a lot of other languages- almost on the daily.<br>
                        However, I do much prefer understanding fundamentals and how systems work.
                    </p>
                </span>

            
            <p class="text-blue-200 hover:underline pt-6"><a href="https://github.com/owospace" target="_blank">I have <i>some</i> of my work published on GitHub.</a></p>
            <!-- Need to add Qualifications like CCNA/CompTia here. -->
            <!-- Should also add my personal stack, no? -->
        </div>

        <div class="card rounded-lg shadow-xl p-5 m-5" id="about">
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
        showDetails1() {
            var details = document.getElementById("details1");
            var button = document.getElementById("dbutton1");

            if (details.style.display === "") {
                button.innerHTML = "-";
                details.style.display = 'inline';
            } else {
                button.innerHTML = "+";
                details.style.display = "";
            }
        },
        showDetails2() {
            var details = document.getElementById("details2");
            var button = document.getElementById("dbutton2");

            if (details.style.display === "") {
                button.innerHTML = "-";
                details.style.display = 'inline';
            } else {
                button.innerHTML = "+";
                details.style.display = "";
            }
        },
        showDetails3() {
            var details = document.getElementById("details3");
            var button = document.getElementById("dbutton3");

            if (details.style.display === "") {
                button.innerHTML = "-";
                details.style.display = 'inline';
            } else {
                button.innerHTML = "+";
                details.style.display = "";
            }
        },
        showDetails4() {
            var details = document.getElementById("details4");
            var button = document.getElementById("dbutton4");

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

#details1,#details2,#details3,#details4 { display: none; }

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