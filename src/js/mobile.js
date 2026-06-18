function openMobile(menu, overlay) {
  menu.classList.add('show')
  if (overlay) overlay.classList.add('show')
  document.body.style.overflow = 'hidden'
}

function closeMobile(menu, overlay) {
  menu.classList.remove('show')
  if (overlay) overlay.classList.remove('show')
  document.body.style.overflow = ''
}

document.addEventListener('astro:page-load', () => {
  const menu = document.getElementById('mobile__navbar')
  const openButton = document.getElementById('openMobile')
  const closeButton = document.getElementById('closeMobile')
  const overlay = document.getElementById('mobile__overlay')

  if (menu && openButton) {
    openButton.addEventListener('click', () => {
      if (menu.classList.contains('show')) {
        closeMobile(menu, overlay)
      } else {
        openMobile(menu, overlay)
      }
    })
  }

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      closeMobile(menu, overlay)
    })
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      closeMobile(menu, overlay)
    })
  }

  const mobileLinks = document.querySelectorAll('.mobile__btn')
  mobileLinks.forEach(link => link.addEventListener('click', () => closeMobile(menu, overlay)))
})
