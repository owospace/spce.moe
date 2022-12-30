<template>
    <div id="uses">

        <div class="mx-auto background p-8 pr-8 pl-8 md:pr-32 md:pl-32 lg:pr-48 lg:pl-48">
            <h1 class="text-3xl pb-4">spce.moe provided services</h1>
            <p>Some of these services are not for public use.</p>

            <h1>Mailbox</h1>
            https://mail.spce.moe
        </div>

    </div>
</template>

<style scoped>
h1,p {
    color: #e9e9e9;
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
</style>

<script>
export default {

    name: "Services",
    
    data() {
        return {
            loading: true,
            title: 'services'
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
