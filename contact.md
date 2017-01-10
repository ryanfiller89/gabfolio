---
layout: contact
title: Contact
permalink: /contact/
---

<form action="https://formspree.io/ryanfiller89@gmail.com" method="POST" class="contact">
    <div class="contact__row">
        <input class="contact__row--half" type="text" name="name" value="name">
        <input class="contact__row--half" type="email" name="_replyto" value="email">
    </div>
    <div class="contact__row">
        <input class="contact__row--full" type="text" name="_subject" value="subject" />
    </div>
    <div class="contact__row">
        <textarea class="contact__row--full" type="text" name="_message" value="subject">
            message goes here
        </textarea>
    </div>
    <input type="text" name="_gotcha" style="display:none" />
    <input type="hidden" name="_next" value="/contact-success" />
    <div class="contact__row">
        <input class="contact__row--full button" type="submit" value="Send" />
    </div>
</form>
