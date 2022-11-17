<template>
    <div id="privacy">

        <PrivacyNotice />

    </div>
</template>

<script>
import PrivacyNotice from "@/components/PrivacyNotice.vue";

export default {

    name: "Privacy",
    
    data() {
        return {
            loading: true,
            title: 'privacy'
        };
    },

    components: {
        //Loading,
        PrivacyNotice,
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
