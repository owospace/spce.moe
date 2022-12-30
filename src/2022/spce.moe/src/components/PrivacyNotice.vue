<template>
<div class="mx-auto background p-8 pr-8 pl-8 md:pr-32 md:pl-32 lg:pr-48 lg:pl-48">

    <h1 class="text-3xl pb-4">Privacy Policy</h1>
    <p>
        spce.moe does not collect or store any data about your usage of the site. Neither do I care enough to setup such. Though, other services might. So this is more posted for transparency to you.<br>
    </p>

    <h1 class="text-3xl pb-4 pt-20">・ Website Visitors</h1>
    <p>
        For visitors of the site, you probably know how the internet works. Your IP address is sent across to our services to be able to provide the information you request back.<br>
        <br>
        I do not personally log any IP addresses, HTTP referrers, requests, date visited, device types or any other data unless specified otherwise on the local server. However, the following may be stored and used:<br>
        <br>
        ・ Name, email address and other contact information which is provided (for example, through the contact page)<br>
        ・ I utilise Cloudflare and a VPS to host this website to avoid concerns relating to security. <a class="text-blue-300 hover:underline" href="https://www.cloudflare.com/privacypolicy/" target="_blank">You can view their own policy here.</a><br>
        ・ Cookies are not utilised on this website. However, please note that any embedded content, such as a YouTube url, redirects to their own page, they definitely do store cookies- not provided by me.<br>
        <br>
        The information which is provided by you to be shared with me will *never* be shared with *anyone*. It'll be our own little secret ;)
    </p>

    <h1 class="text-3xl pb-4 pt-20">・ Webmail Customers</h1>
    <p>
        Mail servers are much more... sophisticated.<br>
        Mail servers utilise more than just one service (ie: smtp, pop, etc)<br>
        The data collected & stored from this service are as follows:<br>
        <br>
        ・ IP addresses are stored to provide data back and for security. (such as blocking too many requests, or a foreign/unknown IP address signing in)<br>
        ・ Mail content, though you have to trust my word that I have no interest in the hentae you may (or may not) store on the service, all your mail content is still stored on the service. (Even if encryption were to be put into place, this would still mean I have the means of unencrypting said content.)<br>
        ・ Cookies are stored for the purposes of keeping you logged in.<br>
    </p>

    <h1 class="text-3xl pb-4 pt-20">・ Jellyfin</h1>
    <p>
        Our Jellyfin service is not really offered publically, but I will still post a policy regarding it.<br>
        <br>
        ・ IP address, which is stored to provide security and send transcodes back to you.<br>
        ・ Usernames, emails, other information (which may be) provided by you. This information is not sold or used. Just data that you can provide.<br>
        ・ Device information, I may use this data to diagnose issues, like diagnosing a transcode problem for a specific device having troubles.<br>
        ・ The usage of the content provided is also stored, this is to show you a dashboard of what you've been watching and to keep track of your library.<br>
        <br>
        IP & Device information is automatically purged after 30 days, unless requested otherwise.<br>
    </p>

    <h1 class="text-3xl pb-4 pt-20">・ I want to purge all knowledge.</h1>
    <p>
        If you're schizophrenic (like me) or just a Genshin Impact player and want all data stored about you by any service we host removed, you are fully within your right to do so.<br>
        <br>
        Please send a email to 'biz(at)spce.moe' with your inquiry and I will have all your data removed as soon as possible.<br>
        <br>
        ・ Please note that this does not include any external third party data, such as embedded YouTube URLs or Cloudflare. You will need to contact them separately.<br>
        ・ Please also note that this erasure request will include all accounts (such as Jellyfin) as well as services (like Webmail) and/or subscriptions.
    </p>


</div>
</template>

<script>
export default {
    name: 'Privacy',
}
</script>

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