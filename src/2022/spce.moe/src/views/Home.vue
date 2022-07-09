<template>
    <div id="home">
        <HomeCard />
    </div>
</template>

<style scoped>

</style>

<script>
import HomeCard from "@/components/HomeCard.vue";

export default {

    name: "Home",
    
    data() {
        return {
            loading: true,
            title: 'home'
        };
    },

    components: {
        //Loading,
        HomeCard,
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