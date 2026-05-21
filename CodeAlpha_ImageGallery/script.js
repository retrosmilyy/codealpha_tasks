const categories = {
  Cars: [
    {
      src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=100",
      full: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=100",
      title: "Midnight Racer",
      sub: "Studio Shot · 2024",
    },
    {
      src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=100",
      full: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=100",
      title: "Open Road",
      sub: "Highway Series · 2023",
    },
    {
      src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1200&q=100",
      full: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1400&q=100",
      title: "Red Beast",
      sub: "Supercar Series · 2023",
    },
  ],
  Animals: [
    {
      src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=1200&q=100",
      full: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=1400&q=100",
      title: "Golden Gaze",
      sub: "Wildlife · 2024",
    },
    {
      src: "https://images.unsplash.com/photo-1550358864-518f202c02ba?w=1200&q=100",
      full: "https://images.unsplash.com/photo-1550358864-518f202c02ba?w=1400&q=100",
      title: "Gentle Giraffe",
      sub: "Safari · 2023",
    },
    {
      src: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=1200&q=100",
      full: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=1400&q=100",
      title: "King of Plains",
      sub: "Safari · 2023",
    },
  ],
  Nature: [
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&q=100",
      full: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1400&q=100",
      title: "Verdant Stillness",
      sub: "Forest Series · 2024",
    },
    {
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=100",
      full: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=100",
      title: "Alpine Solitude",
      sub: "Mountain Series · 2023",
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=100",
      full: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=100",
      title: "Passage of Gold",
      sub: "Forest Light · 2024",
    },
  ],
  Cities: [
    {
      src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=100",
      full: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&q=100",
      title: "City of Light",
      sub: "Urban Series · 2024",
    },
    {
      src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=100",
      full: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1400&q=100",
      title: "Neon Nights",
      sub: "Night Series · 2023",
    },
    {
      src: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1200&q=100",
      full: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1400&q=100",
      title: "Rush Hour",
      sub: "Street Life · 2022",
    },
  ],
  Food: [
    {
      src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1200&q=100",
      full: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1400&q=100",
      title: "Morning Feast",
      sub: "Brunch Series · 2024",
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=100",
      full: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=100",
      title: "Plated Perfection",
      sub: "Fine Dining · 2023",
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=100",
      full: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=100",
      title: "Golden Hour Meal",
      sub: "Restaurant · 2022",
    },
  ],
}

// state
let activeCategory = "Cars"
let currentIndex = 0
let activeImg = "A"

// dom references
const imgA = document.getElementById("imgA")
const imgB = document.getElementById("imgB")
const cardTitle = document.getElementById("cardTitle")
const cardSub = document.getElementById("cardSub")
const catBadge = document.getElementById("catBadge")
const counter = document.getElementById("counter")
const counterSmall = document.getElementById("counterSmall")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightboxImg")
const lightboxClose = document.getElementById("lightboxClose")
const lightboxBackdrop = document.getElementById("lightboxBackdrop")
const imageWrap = document.getElementById("imageWrap")
const myBackground = document.getElementById("background")
const myCategories = document.getElementById("categories")

Object.entries(categories).forEach(([catName, photos]) => {
  photos.forEach((photo, i) => {
    const layer = document.createElement("div")
    layer.className = "bg-layer"
    layer.style.backgroundImage = `url(${photo.src})`
    layer.id = `bg-${catName}-${i}`
    myBackground.appendChild(layer)
  })
})

// preload lightbox images
Object.values(categories).forEach(photos => {
  photos.forEach(photo => {
    const thumb = new Image()
    thumb.src = photo.src

    const full = new Image()
    full.src = photo.full
  })
})

Object.keys(categories).forEach(catName => {
  const btn = document.createElement("button")
  btn.className = "cat-btn" + (catName === activeCategory ? " active" : "")
  btn.textContent = catName

  btn.addEventListener("click", () => {
    activeCategory = catName
    currentIndex = 0
    document
      .querySelectorAll(".cat-btn")
      .forEach(b => b.classList.remove("active"))
    btn.classList.add("active")
    showPhoto(0)
  })

  myCategories.appendChild(btn)
})

//showing pic
function showPhoto(index) {
  const photos = categories[activeCategory]
  const photo = photos[index]

  const incoming = activeImg === "A" ? imgB : imgA
  const outgoing = activeImg === "A" ? imgA : imgB

  incoming.src = ""
  incoming.src = photo.src

  incoming.onload = () => {
    incoming.classList.add("active")
    outgoing.classList.remove("active")
    activeImg = activeImg === "A" ? "B" : "A"
  }

  document
    .querySelectorAll(".bg-layer")
    .forEach(l => l.classList.remove("active"))
  document
    .getElementById(`bg-${activeCategory}-${index}`)
    .classList.add("active")

  cardTitle.textContent = photo.title
  cardSub.textContent = photo.sub
  catBadge.textContent = activeCategory
  counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(photos.length).padStart(2, "0")}`
  counterSmall.textContent = `${index + 1} / ${photos.length}`
  prevBtn.disabled = index === 0
  nextBtn.disabled = index === photos.length - 1
}

// next button
nextBtn.addEventListener("click", () => {
  const total = categories[activeCategory].length
  if (currentIndex < total - 1) {
    currentIndex++
    showPhoto(currentIndex)
  }
})

// prev button
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--
    showPhoto(currentIndex)
  }
})

document.addEventListener("keydown", e => {
  if (lightbox.classList.contains("open")) {
    if (e.key === "Escape") closeLightbox()
    return
  }
  if (e.key === "ArrowRight") nextBtn.click()
  if (e.key === "ArrowLeft") prevBtn.click()
})

// swipe on mobile
let touchStartX = 0
imageWrap.addEventListener("touchstart", e => {
  touchStartX = e.touches[0].clientX
})
imageWrap.addEventListener("touchend", e => {
  const diff = touchStartX - e.changedTouches[0].clientX
  if (diff > 50) nextBtn.click()
  if (diff < -50) prevBtn.click()
})

// lightbox
imageWrap.addEventListener("click", () => {
  lightboxImg.src = categories[activeCategory][currentIndex].full
  lightbox.classList.add("open")
})

function closeLightbox() {
  lightbox.classList.remove("open")
}
lightboxClose.addEventListener("click", closeLightbox)
lightboxBackdrop.addEventListener("click", closeLightbox)

imgA.src = categories[activeCategory][0].src
imgA.onload = () => imgA.classList.add("active")
imgA.onerror = () => imgA.classList.add("active")
cardTitle.textContent = categories[activeCategory][0].title
cardSub.textContent = categories[activeCategory][0].sub
catBadge.textContent = activeCategory
counter.textContent = `01 / 0${categories[activeCategory].length}`
counterSmall.textContent = `1 / ${categories[activeCategory].length}`
document.getElementById(`bg-${activeCategory}-0`).classList.add("active")
