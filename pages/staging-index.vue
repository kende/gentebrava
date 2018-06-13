<template>
  <div>
    <div class="partner"><a class="partner-btn" href="https://elizabeth-ai.typeform.com/to/JAV8p3" target="_blank">BECOME A PARTNER</a></div>
    <div ref="card"></div> <!-- stripe test -->
  </div>
</template>

<script>
let stripe = Stripe(`YOUR_STRIPE_PUBLISHABLE_KEY`),
    elements = stripe.elements(),
    card = undefined;

export default {
  mounted: function () {
    card = elements.create('card');
    card.mount(this.$refs.card);
  }
};
</script>
