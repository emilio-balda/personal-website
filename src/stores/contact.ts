import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', () => {
  const contactInfo = ref([
    { icon: 'i-carbon-email bg-app-paragraph', href: 'mailto:me@emilio-balda.com', text: 'me@emilio-balda.com' },
    { icon: 'i-carbon-logo-linkedin bg-app-paragraph', href: 'https://www.linkedin.com/in/emiliobalda/', text: 'emiliobalda' },
    { icon: 'i-carbon-logo-github bg-app-paragraph', href: 'https://github.com/emilio-balda', text: 'emilio-balda' },
  ])

  return { contactInfo }
})
