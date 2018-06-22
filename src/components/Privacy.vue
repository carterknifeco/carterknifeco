<template>
<div class="pt-5 pb-5">
  <div class="pt-5" style="max-width:50rem; margin:auto;">
    <p class="privacy">
      This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used
      on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read my privacy policy carefully to get a clear understanding of how I collect, use, protect or otherwise handle
      your Personally Identifiable Information in accordance with my website.
      <br>
      <br>
      <strong>What personal information do I collect from the people that visit my blog, website or app?</strong>
      <br> When registering or requesting information on my site, as appropriate, you may be asked to enter your name, email address, phone number or other details to help you with your experience.
      <br>
      <br>
      <strong>When do I collect information?</strong>
      <br> The only time I ever receive your information is when you email me about my knives and I receive your email address and whatever other pertinent info you decide to divulge.
      <br>
      <br>
      <strong>How do I use your information?</strong>
      <br> I may use the information I collect from your email in the following ways:
    </p>
    <ul class="sub-list privacy">
      <li>
        To follow up with them after correspondence (live chat, email or phone inquiries)
      </li>
    </ul>
    <br>
    <p class="privacy">
      <strong>Do I use 'cookies'?</strong>
      <br> Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and
      remember certain information. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. I also use cookies to help us compile aggregate data about
      site traffic and site interaction so that I can offer better site experiences and tools in the future.
      <br>
      <br>
      <strong>I use Cookies to:</strong>
    </p>
    <ul class="sub-list privacy">
      <li>
        Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. I may also use trusted third-party services that track this information on my behalf.
      </li>
      <li>
        You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since each browser is a little different, look at your browser's Help Menu to learn the
        correct way to modify your cookies.
      </li>
      <li>
        If you turn cookies off, some features will be disabled.
      </li>
    </ul>
    <p class="privacy">
      <strong>Third-party disclosure</strong>
      <br> I do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless I provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating
      my website, conducting my business, or serving my users, so long as those parties agree to keep this information confidential. I may also release information when it's release is appropriate to comply with the law, enforce my site policies, or protect
      ours or others' rights, property or safety.
      <br>
      <br>
      <br>
      <strong>Third-party links</strong>
      <br> I do not include or offer third-party products or services on my website.
      <br>
      <br>
      <br> According to CalOPPA, I agree to the following:
    </p>
    <ul class="sub-list privacy">
      <li>
        Users can visit my site anonymously. Once this privacy policy is created, I will add a link to it on my home page or as a minimum, on the first significant page after entering my website. my Privacy Policy link includes the word 'Privacy' and can easily
        be found on the page specified above.
      </li>
    </ul>
    <p class="privacy">
      <strong>COPPA (Children Online Privacy Protection Act)</strong>
      <br> When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection
      agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.
      <br>
      <br> I do not specifically market to children under the age of 13 years old.
      <br>
      <br>
      <strong>Fair Information Practices</strong>
      <br> The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair
      Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.
      <br>
    </p>
    <p class="privacy">
      <strong>To be in accordance with CAN-SPAM, I agree to the following:</strong>
    </p>
    <p class="privacy">
      If at any time you would like to unsubscribe from receiving future emails, you never have to worry about that, because I don't collect, store, trade, give, or sell emails away.
    </p>
  </div>

</div>
</template>
<script>
import Jumbotron from './sections/Jumbotron.vue';
import Story from './sections/Story.vue';
var desktop = require("../assets/busFront.jpg");
var mobile = require("../assets/busFront.jpg");
var roo = require("../assets/roo.jpg");
export default {
  data() {
    return {
      imageSrc: {
        desktop: roo,
        mobile: roo,
        class: 'overlay bus align-middle',
        title: 'My Story'
      }
    }
  },
  components: {
    appJumbotron: Jumbotron,
    appStory: Story
  }
}
</script>
