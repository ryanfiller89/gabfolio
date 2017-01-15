---
layout: contact
title: Contact
permalink: /contact/
---

<form action="https://formspree.io/ryanfiller89@gmail.com" method="POST" class="contact">
    <div class="contact__row">
        <input class="contact__row--half" type="text" name="name" placeholder="Name *">
        <input class="contact__row--half" type="email" name="_replyto" placeholder="Email *">
    </div>
    <div class="contact__row">
        <input class="contact__row--full" type="text" name="_subject" placeholder="Subject *" />
    </div>
    <div class="contact__row contact__row--flex">
        <textarea class="contact__row--full" type="text" name="_message"
            placeholder="Message..."
        ></textarea>
    </div>
    <input type="text" name="_gotcha" style="display:none" />
    <input type="hidden" name="_next" value="/contact-success" />
    <div class="contact__row">
        <input class="contact__row--full button" type="submit" value="Send" />
    </div>
</form>
