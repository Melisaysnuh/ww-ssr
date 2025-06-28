<script setup lang="ts">
import Signup from '~/components/Signup.vue';
import Welcome from '~/components/Welcome.vue';
import Modal from '~/components/Modal.vue';
import Navigation from '~/components/Navigation.vue';

useHead({
  title: 'Word Web - A Game for Anagram Hunters',
  meta: [
    {
      name: 'description',
      content: 'Find anagrams from a group of seven-letter words to become a Black Widow.',
    },
    { name: 'keywords', content: 'word, games' },
    { property: 'og:title', content: 'Word Web - A Game for Anagram Hunters' },
    { property: 'og:description', content: 'Find anagrams from a group of seven-letter words to become a Black Widow.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.wordwebs.de' },
  ],
  link: [
   { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
   { href: 'https://fonts.googleapis.com/css2?family=Averia+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap', rel: 'stylesheet' },
   { rel: 'preconnect', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=refresh' }
]
})

const showSignup = ref(false)


function openSignup() {
  showSignup.value = true
}
function closeSignup() {
  showSignup.value = false
}

</script>

<template>
  <div id="background" class="fixed inset-0 z-50 flex flex-col justify-center items-center bg-darkest-night">
    <Navigation @close-signup="closeSignup" ></Navigation>
    <Modal >
      <Welcome v-if="!showSignup" @open-signup="openSignup" />
      <Signup v-else @close-signup="closeSignup" />
    </Modal>
  </div>
</template>
