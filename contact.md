---
layout: contact
title: Contact
permalink: /contact/
---

<div class="contact">
    <form id="contact-form">
        <div class="contact__row">
            <input class="contact__row--half" type="text" name="name" placeholder="Name *" required>
            <input class="contact__row--half" type="email" name="_replyto" placeholder="Email *" required>
        </div>
        <div class="contact__row">
            <input class="contact__row--full" type="text" name="_subject" placeholder="Subject *" required>
        </div>
        <div class="contact__row contact__row--flex">
            <textarea class="contact__row--full" type="text" name="_message" required
                placeholder="Message..."
            ></textarea>
        </div>
        <div class="contact__row">
            <input type="text" name="_gotcha" style="display:none" />
            <input class="contact__row--full button" type="submit" value="Send" />
        </div>
    </form>
    <div style="display:none;" class="contact__message contact__message--sending">Sending message…</div>
    <div style="display:none;" class="contact__message contact__message--sent">
        Message sent!
        <a onClick="window.location.reload()">Send Another?</a>
    </div>
    <div style="display:none;" class="contact__message contact__message--error">
        Oops, something was missing.
        <a onclick="goBack()">Go Back?</a>
        <script>
            function goBack() {
                window.history.back();
            }
        </script>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js"></script>
<script src="/assets/js/contact-form.js"></script>
