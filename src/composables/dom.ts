export function scrollTo(sectionId: string) {
  document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth' })
}
