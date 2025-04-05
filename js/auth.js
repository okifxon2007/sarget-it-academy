// Authentication related functionality
document.addEventListener("DOMContentLoaded", () => {
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
  const userName = localStorage.getItem("userName") || "Foydalanuvchi"

  // Get DOM elements
  const authButtons = document.getElementById("authButtons")
  const userMenu = document.getElementById("userMenu")
  const userNameElement = document.getElementById("userName")
  const mobileAuth = document.getElementById("mobileAuth")
  const mobileUser = document.getElementById("mobileUser")
  const logoutButton = document.getElementById("logoutButton")
  const mobileLogout = document.getElementById("mobileLogout")

  // Update UI based on auth state
  if (isLoggedIn) {
    // Show user menu, hide auth buttons
    if (authButtons) authButtons.classList.add("hidden")
    if (userMenu) {
      userMenu.classList.remove("hidden")
      if (userNameElement) userNameElement.textContent = userName
    }

    // Mobile version
    if (mobileAuth) mobileAuth.classList.add("hidden")
    if (mobileUser) mobileUser.classList.remove("hidden")
  } else {
    // Show auth buttons, hide user menu
    if (authButtons) authButtons.classList.remove("hidden")
    if (userMenu) userMenu.classList.add("hidden")

    // Mobile version
    if (mobileAuth) mobileAuth.classList.remove("hidden")
    if (mobileUser) mobileUser.classList.add("hidden")
  }

  // Handle logout
  if (logoutButton) {
    logoutButton.addEventListener("click", (e) => {
      e.preventDefault()
      logout()
    })
  }

  if (mobileLogout) {
    mobileLogout.addEventListener("click", (e) => {
      e.preventDefault()
      logout()
    })
  }

  // Logout function
  function logout() {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userName")
    localStorage.removeItem("userToken")

    // Redirect to home page
    window.location.href = "index.html"
  }

  // Handle login form submission
  const loginForm = document.getElementById("loginForm")
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const email = document.getElementById("email").value
      const password = document.getElementById("password").value

      // Simple validation
      if (!email || !password) {
        showAlert("Iltimos, barcha maydonlarni to'ldiring", "danger")
        return
      }

      // Here you would normally send the data to your server for authentication
      // For demo purposes, we'll just simulate a successful login

      // Simulate API call delay
      showAlert("Kirish amalga oshirilmoqda...", "info")

      setTimeout(() => {
        // Store login state
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("userName", email.split("@")[0])
        localStorage.setItem("userToken", "demo-token-" + Math.random().toString(36).substr(2))

        showAlert("Muvaffaqiyatli kirdingiz! Yo'naltirilmoqda...", "success")

        // Redirect to dashboard
        setTimeout(() => {
          window.location.href = "dashboard.html"
        }, 1000)
      }, 1500)
    })
  }

  // Handle registration form submission
  const registerForm = document.getElementById("registerForm")
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const fullName = document.getElementById("fullName").value
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      const confirmPassword = document.getElementById("confirmPassword").value

      // Simple validation
      if (!fullName || !email || !password || !confirmPassword) {
        showAlert("Iltimos, barcha maydonlarni to'ldiring", "danger")
        return
      }

      if (password !== confirmPassword) {
        showAlert("Parollar mos kelmadi", "danger")
        return
      }

      // Here you would normally send the data to your server for registration
      // For demo purposes, we'll just simulate a successful registration

      // Simulate API call delay
      showAlert("Ro'yxatdan o'tkazilmoqda...", "info")

      setTimeout(() => {
        // Store login state
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("userName", fullName)
        localStorage.setItem("userToken", "demo-token-" + Math.random().toString(36).substr(2))

        showAlert("Muvaffaqiyatli ro'yxatdan o'tdingiz! Yo'naltirilmoqda...", "success")

        // Redirect to dashboard
        setTimeout(() => {
          window.location.href = "dashboard.html"
        }, 1000)
      }, 1500)
    })
  }

  // Helper function to show alerts
  function showAlert(message, type) {
    const alertContainer = document.getElementById("alertContainer")
    if (!alertContainer) return

    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`
    alert.textContent = message

    // Clear previous alerts
    alertContainer.innerHTML = ""
    alertContainer.appendChild(alert)

    // Auto-dismiss after 5 seconds
    if (type !== "info") {
      setTimeout(() => {
        alert.remove()
      }, 5000)
    }
  }
})

