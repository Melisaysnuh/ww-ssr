<template>
  <div class='text-center'>
    <h1 class="text-pumpkin-orange text-xl m-2">Welcome to Word Web</h1>
    <p class="text-white text-center">
      Are you ready to spin your own word web and hunt for new anagrams? This
      free weekly word game challenges your mind to find anagrams woven from a
      unique cluster of seven letters. Change levels as you find new words, and
      try to trap the elusive pangram — a word using all seven letters.
    </p>

    <h3 class="text-pumpkin-orange ">How to Play Word Web</h3>
    <p class="text-white">
      The goal of Word Web is to find English words with at least 4 letters that
      include the center letter of the web. The more words you uncover, the more
      points you spin into your score:
    </p>
    <ul class="text-white text-center">
      <li>Four-letter words earn 1 point each.</li>
      <li>Words with five or more letters earn 1 point per letter.</li>
      <li>
        Snare the pangram — a perfect word that uses all seven letters — and
        reap a bonus of 7 points plus the word’s letter count!
      </li>
    </ul>
    <p class="text-white">
      Watch your progress grow as you catch more words and inch closer to
      weaving the perfect word web. Want More Word Web?
    </p>
    <p class="text-white">
      While you're spinning words, we're spinning up treats! Sign up now to
      receive updates and be the first to hear about new features, challenges,
      and exclusive puzzles. Join our community of word spiders and start
      spinning your web today!
    </p>

    <button @click="handleSignup" class="bg-light-purple">Sign up</button>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  emits: ['open-signup'],
  methods: {
    handleSignup() {
      this.$emit('open-signup');
    },
  },
};
</script>
