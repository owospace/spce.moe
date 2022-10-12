<template>
    <div id="petal">

        <PetalPage />
        
    </div>
</template>

<script>
import PetalPage from "@/components/PetalPage.vue";

export default {

    name: "Petal",
    
    data() {
        return {
            loading: true,
            title: 'petal'
        };
    },

    components: {
        //Loading,
        PetalPage,
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