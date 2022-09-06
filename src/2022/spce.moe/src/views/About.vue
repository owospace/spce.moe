<template>
    <div id="about">
        <About01 />
        <About02 />
        <About03 />
    </div>
</template>

<script>
import About01 from "@/components/About01.vue";
import About02 from "@/components/About02.vue";
import About03 from "@/components/About03.vue";

export default {

    name: "About",
    
    data() {
        return {
            loading: true,
            title: 'about'
        };
    },

    components: {
        //Loading,
        About01,
        About02,
        About03,
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
