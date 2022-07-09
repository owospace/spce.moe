<template>
    <div id="apps">
        <AppCards />
    </div>
</template>

<script>
import AppCards from "@/components/AppCards.vue";

export default {

    name: "Apps",
    
    data() {
        return {
            loading: true,
            title: 'apps'
        };
    },

    components: {
        //Loading,
        AppCards,
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