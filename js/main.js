// Main JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobileMenuButton")
  const mobileMenu = document.getElementById("mobileMenu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("active")
      this.querySelector("i").classList.toggle("fa-bars")
      this.querySelector("i").classList.toggle("fa-times")
    })
  }

  // Set current year in footer
  const currentYearElement = document.getElementById("currentYear")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }

  // Handle tab switching
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabContents = document.querySelectorAll(".tab-content")

  if (tabButtons.length > 0 && tabContents.length > 0) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons and contents
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        tabContents.forEach((content) => content.classList.remove("active"))

        // Add active class to clicked button and corresponding content
        this.classList.add("active")
        const tabId = this.getAttribute("data-tab") + "-tab"
        document.getElementById(tabId)?.classList.add("active")
      })
    })
  }

  // Payment method selection
  const paymentMethods = document.querySelectorAll(".payment-method")

  if (paymentMethods.length > 0) {
    paymentMethods.forEach((method) => {
      method.addEventListener("click", function () {
        // Remove active class from all methods
        paymentMethods.forEach((m) => m.classList.remove("active"))

        // Add active class to clicked method
        this.classList.add("active")

        // Check the radio button
        const radio = this.querySelector('input[type="radio"]')
        if (radio) radio.checked = true

        // Show/hide card details based on selected method
        const cardDetails = document.getElementById("cardDetails")
        if (cardDetails) {
          if (radio && radio.value === "card") {
            cardDetails.style.display = "block"
          } else {
            cardDetails.style.display = "none"
          }
        }
      })
    })
  }
})

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("currentYear").textContent = new Date().getFullYear()

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobileMenuButton")
  const mobileMenu = document.getElementById("mobileMenu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")

      // Change icon
      const icon = mobileMenuButton.querySelector("i")
      if (icon) {
        if (mobileMenu.classList.contains("active")) {
          icon.classList.remove("fa-bars")
          icon.classList.add("fa-times")
        } else {
          icon.classList.remove("fa-times")
          icon.classList.add("fa-bars")
        }
      }
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (mobileMenu && mobileMenuButton) {
      const isClickInsideMenu = mobileMenu.contains(event.target)
      const isClickOnButton = mobileMenuButton.contains(event.target)

      if (!isClickInsideMenu && !isClickOnButton && mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active")

        // Change icon back
        const icon = mobileMenuButton.querySelector("i")
        if (icon) {
          icon.classList.remove("fa-times")
          icon.classList.add("fa-bars")
        }
      }
    }
  })

  // Add active class to current page link
  const currentLocation = window.location.pathname
  const navLinks = document.querySelectorAll(".nav-link")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a")

  navLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (
      href === currentLocation || 
      (href === 'index.html' && (currentLocation === '/' || currentLocation.endsWith('/')))
    ) {
      link.classList.add('active');
    }
    
  })

  mobileNavLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (
      href === currentLocation ||
      (href === "index.html" && (currentLocation === "/" || currentLocation.endsWith("/")))
    ) {
      link.classList.add("active")
    }
  })

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const emailInput = this.querySelector('input[type="email"]')
      if (emailInput && emailInput.value) {
        // Here you would normally send the data to your server
        alert("Rahmat! Siz muvaffaqiyatli obuna bo'ldingiz.")
        emailInput.value = ""
      }
    })
  }
})

