<template>
<nav class='navigation'><img
      id="logo"
      src="../public/logo.svg"
      alt="word-web-logo"
      @click="handleLogoClick"
      class="cursor-pointer"
    />
        <button class='other-button' @click='handlePlayClick' >Play Now</button>
              </nav>
</template>

<script>
export default {
  name: 'Navigation',

  methods: {
    handlePlayClick() {
      window.location.href = 'https://www.wordwebs.de/';
    },
    handleLogoClick() {
      this.$emit('close-signup');
    }
  },
};
</script>
