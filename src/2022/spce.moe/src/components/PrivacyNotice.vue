<template>
<div class="mx-auto background p-8 pr-8 pl-8 md:pr-32 md:pl-32 lg:pr-48 lg:pl-48">

    <h1 class="text-3xl pb-4">Privacy Policy</h1>
    <p>
        spce.moe does not collect or store any data about your usage of the site. Though, our other services might. So this is more posted for transparency to you.<br>
    </p>

    <h1 class="text-3xl pb-4 pt-20">・ Website Visitors</h1>
    <p>
        For visitors of the site, you probably know how the internet works. Your IP address is sent across to our services to be able to provide the information you request back.<br>
        <br>
        I do not log any IP addresses, HTTP referrers, requests, date visited, device types or any other PII on the local server. However, the following may be stored and used:<br>
        <br>
        ・ Name, email address and other contact information which is provided (for example, through the contact page) goes through a mail server so I can recieve your message without the inconvenience.<br>
        ・ I utilise Cloudflare and a VPS to host this website, to avoid concerns relating to security. These services might log your IP or requests. Again, this information is not stored, provided or used by me.<br>
        ・ Cookies are not utilised on this website. However, please note that any embedded content, such as a YouTube url, redirects to their own page, they definitely do store cookies- not provided by me.<br>
        <br>
        This information, should it be provided will *never* be shared with *anyone*.
    </p>

    <h1 class="text-3xl pb-4 pt-20">・ Webmail Customers</h1>
    <p>
        Mail servers are much more... sophisticated.<br>
        Mail servers utilise more than just one service (ie, smtp, pop, etc)<br>
        The data collected & stored from this service are as follows:<br>
        <br>
        ・ IP addresses are stored to provide data back and for security. (such as blocking too many requests, or a foreign/unknown IP address signing in)<br>
        ・ Mail content, though you have to trust my word that I have no interest in the hentae you may (or may not) store on the service, all your mail content is still stored on the service. (Even if encryption were to be put into place, this would still mean I have the means of unencrypting said content.)<br>
    </p>

    <h1 class="text-3xl pb-4 pt-20">・ Jellyfin</h1>
    <p>
        Our Jellyfin service is not really offered publically, but I will still post a policy regarding it.<br>
        <br>
        ・ IP address, which is stored to provide security and send transcodes back to you.<br>
        ・ Usernames, emails, other information (which may be) provided by you. This information is not sold or used. Just data that you can provide.<br>
        ・ Device information, I may use this data to diagnose issues, like diagnosing a transcode problem for a specific device having troubles.<br>
        ・ The usage of the content I provide is also stored, this is to provide you with a dashboard of what you've been watching and to keep track of your library.<br>
        <br>
        IP & Device information is automatically purged after 90 days, unless requested otherwise.<br>
    </p>

    <h1 class="text-3xl pb-4 pt-20">・ I want to purge all knowledge.</h1>
    <p>
        If you're schizophrenic (like me) and want all data stored about you by any service we host removed, you are fully within your right to do so.<br>
        <br>
        Please send a email to 'biz(at)spce.moe' with your inquiry and I will have all your data removed as soon as possible.<br>
        <br>
        ・ Please note that this does not include any external third party data (such as embedded YouTube URL) and the request will involve all your accounts, services and subscriptions.<br>
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