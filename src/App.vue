<template>
  <div class="app">
    <h1>
      <a href="https://github.com/vadym4che/vue3-feedback-widget" target="_blank" rel="noopener noreferrer">
        <span class="product">{{ appTitle }}&nbsp;
          <span class="product-shadow">{{ appTitle }}&nbsp;</span>
        </span>
        <span>Feedback App</span>
      </a>
    </h1>
    <template v-if="!formSubmitted">
      <feedback-form :feedbackData="feedbackData" @formSubmittedToTrue="handleFormSubmission" />
    </template>
    <template v-else>
      <feedback-stats :feedbackData="feedbackData" />
    </template>
    <theme-toggler />
  </div>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue'
import FeedbackForm from '@/components/FeedbackForm.vue'
import ThemeToggler from '@/components/ThemeToggler.vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'

const FeedbackStats = defineAsyncComponent(() => import('@/components/FeedbackStats.vue'))
const appTitle = import.meta.env.VITE_TITLE || 'Service(-s)'

const formSubmitted = ref(false);
const feedbackData = ref([]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'feedbacks'))
  const data = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    feedbackData.value.push(doc.data())
  })
})

const handleFormSubmission = () => {
  formSubmitted.value = true
};
</script>

<style>
  .app {
    width: 100%;
    height: 96dvh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 3rem;
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: inherit;
  }

  .app > *:not(.v-card, .themeToggler) {
    flex-grow: 1;
  }

  @media (max-width: 768px), (max-height: 1080px) {
    h1 {
      flex-grow: 0;
      font-size: 1.5rem !important;
      height: 4.75rem;
      flex-shrink: 1;
      line-height: 2rem;
      margin-bottom: -2.5rem;
    }

    .app {
      justify-content: flex-start;
    }

    .app > * {
      transform: scale(0.8);
    }
  }

  .product {
    background: -webkit-linear-gradient(270deg, navy 30%, gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    font-weight: bold;
    font-size: 120%;
    text-align: center;
    position: relative;
    display: inline-flex;
  }

  .product-shadow {
    display: inline-flex;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    color: transparent;
    text-shadow: 0 0 3px var(--selection-colors-tx);
    opacity: 0.5;
  }
</style>