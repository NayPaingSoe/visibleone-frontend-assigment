const nav = document.querySelector('.nav')
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelectorAll('a[href^="#"]')

function toggleNav() {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true'
  navToggle.setAttribute('aria-expanded', String(!expanded))
  nav.classList.toggle('open', !expanded)
}

navToggle.addEventListener('click', toggleNav)

links.forEach(l => {
  l.addEventListener('click', e => {
    const targetId = l.getAttribute('href')
    const el = document.querySelector(targetId)
    if (!el) return
    e.preventDefault()
    nav.classList.remove('open')
    navToggle.setAttribute('aria-expanded', 'false')
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible')
  })
}, { threshold: 0.15 })

document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
