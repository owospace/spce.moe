<template>
    <div id="404">
        <div class="md:flex justify-center bg p-8">

            <img src="../assets/hutaobaa.png" style="max-width:200px;max-height:200px;">

            <div class="rounded-xl text-2xl text-e8 pl-12">
                
                <h1 class="text-8xl text-left">404</h1>
                <p class="">
                    The resource you requested was not found.<br>
                    <br>
                    Whatever you were looking for, might've been misplaced in limbo.<br>
                    Let's get you back on track, shall we?<br>
                </p>
                <div class="button" id="button-main">
                    <div id="circle"></div>
                    <a href="#">🏠 home</a>
                </div>

            </div>

        </div>
    </div>
</template>

<script>

export default {

    name: "404",
    
    data() {
        return {
            loading: true,
            title: '404'
        };
    },

    components: {
        //Loading,
    },

    created() {
        const title = this.title + ' @ spce.moe'
        if (title) {
            document.title = title
        }
    },

    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 1200);
    },

};
</script>

<style scoped>
.bg {
    background-color: #1e1e1e;
}
.text-e8 {
    color: #e8e8e8;
}

 /* Button! Ooh! */
 .button {
  display: inline-flex;
  height: 40px;
  width: 150px;
  border: 2px solid #e8e8e8;
  margin: 20px 20px 20px 20px;
  color: #e8e8e8;
  text-transform: uppercase;
  text-decoration: none;
  font-size: .8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

#button-main {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
#button-main a {
  position: relative;
  transition: all .45s ease-Out;
  color: #e8e8e8;
  text-decoration: none;
}

#circle {
  width: 0%;
  height: 0%;
  opacity: 0;
  line-height: 40px;
  border-radius: 50%;
  background: #e8e8e8;
  position: absolute;
  transition: all .5s ease-Out;
  top: 20px;
  left: 70px;
}

#button-main:hover #circle {
  width: 200%;
  height: 500%;
  opacity: 1;
  top: -70px;
  left: -70px;
}
#button-main:hover a {
  color: #1e1e1e;
}
</style>