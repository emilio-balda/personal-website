export function scrollTo(sectionId: string) {
  // document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth' })

  const element = document.getElementById(`${sectionId}`)
  if (!element) return
  const headerOffset = 50
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}

export function downloadFile({ filename, href }: { filename: string; href: string }) {
  // credit: https://www.bitdegree.org/learn/javascript-download
  const element = document.createElement('a')
  element.setAttribute('href', href)
  element.setAttribute('download', filename)
  element.setAttribute('target', '_blank')

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()
  document.body.removeChild(element)
}
