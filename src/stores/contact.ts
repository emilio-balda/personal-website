import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', () => {
  const contactInfo = ref([
    { icon: 'i-carbon-email bg-primary-500', href: 'mailto:me@emilio-balda.com', text: 'me@emilio-balda.com' },
    { icon: 'i-carbon-logo-linkedin bg-[var(--secondary-500)]', href: 'https://www.linkedin.com/in/emiliobalda/', text: 'emiliobalda' },
    { icon: 'i-carbon-logo-github bg-black', href: 'https://github.com/emilio-balda', text: 'emilio-balda' },
  ])

  return { contactInfo }
})
