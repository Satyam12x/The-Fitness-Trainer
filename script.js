//here is the script of this website

const certificateData = {
  cpt: {
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80",
    title: "Certified Personal Trainer",
    issuer: "National Academy of Sports Medicine",
    date: "Issued January 2023",
    description:
      "This certificate confirms that the trainer has met the rigorous standards of NASM. The certification demonstrates expertise in creating tailored workout programs and ensuring client safety.",
    info: [
      { label: "Credential ID", value: "NASM-12345" },
      { label: "Valid Until", value: "January 2026" },
    ],
  },
  ces: {
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    title: "Corrective Exercise Specialist",
    issuer: "American Council on Exercise",
    date: "Issued March 2023",
    description:
      "This certificate validates the trainer's ability to assess and correct movement imbalances to aid in injury prevention and rehabilitation.",
    info: [
      { label: "Credential ID", value: "ACE-54321" },
      { label: "Valid Until", value: "March 2026" },
    ],
  },
  pes: {
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    title: "Performance Enhancement Specialist",
    issuer: "National Academy of Sports Medicine",
    date: "Issued May 2023",
    description:
      "This certificate qualifies trainers to work with athletes in enhancing physical performance, including speed, strength, and agility.",
    info: [
      { label: "Credential ID", value: "NASM-67890" },
      { label: "Valid Until", value: "May 2026" },
    ],
  },
  nutrition: {
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    title: "Nutrition Coach Certification",
    issuer: "Precision Nutrition",
    date: "Issued February 2023",
    description:
      "This certification demonstrates a deep understanding of nutritional science, meal planning, and behavioral change to aid in achieving optimal health.",
    info: [
      { label: "Credential ID", value: "PN-11223" },
      { label: "Valid Until", value: "February 2026" },
    ],
  },
  yoga: {
    image:
      "https://images.pexels.com/photos/3822354/pexels-photo-3822354.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Yoga Instructor Certification",
    issuer: "Yoga Alliance",
    date: "Issued April 2023",
    description:
      "This certificate confirms that the instructor is proficient in yoga techniques, teaching methods, and holistic wellness practices.",
    info: [
      { label: "Credential ID", value: "YA-33445" },
      { label: "Valid Until", value: "April 2026" },
    ],
  },
  group: {
    image:
      "https://images.pexels.com/photos/8436731/pexels-photo-8436731.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Group Fitness Instructor",
    issuer: "American Council on Exercise",
    date: "Issued June 2023",
    description:
      "This certificate demonstrates expertise in managing group fitness classes, ensuring an engaging, safe, and motivating workout environment.",
    info: [
      { label: "Credential ID", value: "ACE-77889" },
      { label: "Valid Until", value: "June 2026" },
    ],
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuOverlay = document.getElementById("menu-overlay");
  const body = document.body;

  function toggleMenu() {
    mobileMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
    mobileMenuButton.classList.toggle("active");
    body.classList.toggle("no-scroll");

    // Accessibility
    const expanded =
      mobileMenuButton.getAttribute("aria-expanded") === "true" || false;
    mobileMenuButton.setAttribute("aria-expanded", !expanded);

    if (mobileMenu.classList.contains("active")) {
      mobileMenu.style.pointerEvents = "auto";
    } else {
      setTimeout(() => {
        mobileMenu.style.pointerEvents = "none";
      }, 300);
    }
  }

  mobileMenuButton.addEventListener("click", toggleMenu);
  menuOverlay.addEventListener("click", toggleMenu);

  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu();
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      toggleMenu();
    }
  });

  if ("ontouchstart" in window) {
    mobileMenuButton.addEventListener("touchstart", function (e) {
      e.preventDefault();
      toggleMenu();
    });

    menuOverlay.addEventListener("touchstart", function (e) {
      e.preventDefault();
      toggleMenu();
    });
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768 && mobileMenu.classList.contains("active")) {
      toggleMenu();
    }
  });

  let touchStartX = 0;
  let touchEndX = 0;

  function checkSwipeDirection() {
    if (touchEndX < touchStartX) {
      if (mobileMenu.classList.contains("active")) {
        toggleMenu();
      }
    }
  }

  mobileMenu.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  mobileMenu.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    checkSwipeDirection();
  });

  mobileMenu.addEventListener(
    "touchmove",
    function (e) {
      const menuHeight = mobileMenu.scrollHeight;
      const menuScrollTop = mobileMenu.scrollTop;
      if (menuScrollTop <= 0 && e.touches[0].clientY > 50) {
        e.preventDefault();
      }
      if (
        menuScrollTop + mobileMenu.clientHeight >= menuHeight &&
        e.touches[0].clientY < window.innerHeight - 50
      ) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="button"], input[type="submit"]'
    );

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    });
  }

  trapFocus(mobileMenu);

  if (!mobileMenu.classList.contains("active")) {
    mobileMenu.style.pointerEvents = "none";
  }

  mobileMenuButton.setAttribute("aria-expanded", "false");
  mobileMenuButton.setAttribute("aria-controls", "mobile-menu");
  mobileMenuButton.setAttribute("aria-label", "Toggle navigation menu");

  // Select all sections and nav items
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-item");

  // Create the intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Only consider sections that are intersecting
        if (entry.isIntersecting) {
          // Remove active state from all nav links
          navLinks.forEach((link) => link.classList.remove("active"));

          // Get the current section id and match its nav item
          const id = entry.target.getAttribute("id");
          const activeLink = document.querySelector(`.nav-item[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    },
    {
      threshold: 0.7, // Try adjusting this value (e.g., 0.3 or 0.7)
      // This offsets the bottom, triggering earlier
    }
  );

  // Observe each section
  sections.forEach((section) => {
    observer.observe(section);
  });

  const heroSection = document.querySelector(".hero-section");
  function createParticle(x, y) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    particle.style.width = Math.random() * 4 + 2 + "px";
    particle.style.height = particle.style.width;
    particle.style.setProperty("--moveX", `${(Math.random() - 0.5) * 100}px`);
    particle.style.setProperty("--moveY", `${(Math.random() - 0.5) * 100}px`);
    heroSection.appendChild(particle);
    setTimeout(() => particle.remove(), 2000);
  }

  heroSection.addEventListener("mousemove", (e) => {
    if (Math.random() > 0.9) createParticle(e.clientX, e.clientY);
  });

  for (let i = 0; i < 15; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    setTimeout(() => createParticle(x, y), Math.random() * 2000);
  }

  window.addEventListener("mousemove", (e) => {
    const circles = document.querySelectorAll(".design-circle");
    const lines = document.querySelectorAll(".design-line");
    const dotGrids = document.querySelectorAll(".design-dot-grid");
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    circles.forEach((circle, index) => {
      const factor = (index + 1) * 0.2;
      circle.style.transform = `translate(${xAxis * factor}px, ${
        yAxis * factor
      }px)`;
    });

    lines.forEach((line, index) => {
      const factor = (index + 1) * 0.1;
      line.style.transform = `translate(${xAxis * factor}px, ${
        yAxis * factor
      }px) rotate(${index % 2 === 0 ? "45deg" : "-30deg"})`;
    });

    dotGrids.forEach((dotGrid, index) => {
      const factor = (index + 1) * 0.05;
      dotGrid.style.transform = `translate(${xAxis * factor}px, ${
        yAxis * factor
      }px) rotate(45deg)`;
    });
  });

  const statNumbers = document.querySelectorAll(
    ".stat-number, .trainer-stat-number, .testimonial-count, .rating-score"
  );
  function animateCounter(element) {
    const target = element.innerText;
    const suffix = target.includes("k") ? "k" : target.includes("+") ? "+" : "";
    const num = parseFloat(target.replace(/[^\d.]/g, "")) || 0;
    let startValue = 0;
    const duration = 2000;
    const step = num / (duration / 30);
    const counter = setInterval(() => {
      startValue += step;
      if (startValue >= num) {
        element.innerText = target;
        clearInterval(counter);
      } else {
        element.innerText = Math.round(startValue * 10) / 10 + suffix;
      }
    }, 30);
  }

  const observer2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer2.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  statNumbers.forEach((stat) => observer2.observe(stat));
  const categoryTabs = document.querySelectorAll(".category-tab");
  const serviceCards = document.querySelectorAll(".service-card");

  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      categoryTabs.forEach((tab) => tab.classList.remove("active"));

      // Add active class to clicked tab
      this.classList.add("active");

      const category = this.getAttribute("data-category");

      // Show all services if "All" is selected
      if (category === "all") {
        serviceCards.forEach((card) => {
          card.style.display = "flex";
        });
      } else {
        // Show only services that match the selected category
        serviceCards.forEach((card) => {
          if (card.getAttribute("data-categories").includes(category)) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      }
    });
  });
  const contactForm = document.getElementById("contactForm");
  const formSubmitted = document.getElementById("formSubmitted");
  const sendAnother = document.getElementById("sendAnother");
  const progressBar = document.getElementById("formProgress");
  const messageCounter = document.getElementById("messageCounter");
  const messageField = document.getElementById("message");
  const MAX_MESSAGE_LENGTH = 500;

  // Update form completion progress
  function updateFormProgress() {
    const fields = contactForm.querySelectorAll(".form-control");
    let filledFields = 0;

    fields.forEach((field) => {
      if (field.value.trim() !== "") {
        filledFields++;
      }
    });

    const progressPercentage = (filledFields / fields.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  }

  // Form validation function
  function validateForm() {
    let isValid = true;

    // Validate name
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const nameGroup = nameInput.parentElement;

    if (nameInput.value.trim() === "") {
      nameGroup.classList.add("error");
      nameGroup.classList.remove("success");
      nameError.textContent = "Please enter your name";
      isValid = false;
    } else if (nameInput.value.trim().length < 2) {
      nameGroup.classList.add("error");
      nameGroup.classList.remove("success");
      nameError.textContent = "Name must be at least 2 characters";
      isValid = false;
    } else {
      nameGroup.classList.remove("error");
      nameGroup.classList.add("success");
    }

    // Validate email
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailGroup = emailInput.parentElement;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
      emailGroup.classList.add("error");
      emailGroup.classList.remove("success");
      emailError.textContent = "Please enter your email address";
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailGroup.classList.add("error");
      emailGroup.classList.remove("success");
      emailError.textContent = "Please enter a valid email address";
      isValid = false;
    } else {
      emailGroup.classList.remove("error");
      emailGroup.classList.add("success");
    }

    // Validate message
    const messageInput = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    const messageGroup = messageInput.parentElement;

    if (messageInput.value.trim() === "") {
      messageGroup.classList.add("error");
      messageGroup.classList.remove("success");
      messageError.textContent = "Please enter your message";
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      messageGroup.classList.add("error");
      messageGroup.classList.remove("success");
      messageError.textContent = "Message must be at least 10 characters";
      isValid = false;
    } else if (messageInput.value.trim().length > MAX_MESSAGE_LENGTH) {
      messageGroup.classList.add("error");
      messageGroup.classList.remove("success");
      messageError.textContent = `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters`;
      isValid = false;
    } else {
      messageGroup.classList.remove("error");
      messageGroup.classList.add("success");
    }

    return isValid;
  }

  // Real-time validation for inputs
  const inputs = contactForm.querySelectorAll(".form-control");
  inputs.forEach((input) => {
    // Validate on blur
    input.addEventListener("blur", function () {
      validateInput(this);
      updateFormProgress();
    });

    // Validate on input if already in error state
    input.addEventListener("input", function () {
      if (this.parentElement.classList.contains("error")) {
        validateInput(this);
      }
      updateFormProgress();

      // Update character counter for message field
      if (this.id === "message") {
        const currentLength = this.value.length;
        messageCounter.textContent = `${currentLength}/${MAX_MESSAGE_LENGTH}`;

        // Visual feedback when approaching limit
        if (currentLength > MAX_MESSAGE_LENGTH * 0.9) {
          messageCounter.style.color = "#ff3860";
        } else {
          messageCounter.style.color = "";
        }
      }
    });

    // Handle focus state for tooltip and highlighting
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focus");
    });

    input.addEventListener("blur", function () {
      this.parentElement.classList.remove("focus");
    });
  });

  function validateInput(input) {
    const id = input.id;
    const value = input.value.trim();
    const errorElement = document.getElementById(`${id}Error`);
    const group = input.parentElement;

    switch (id) {
      case "name":
        if (value === "") {
          group.classList.add("error");
          group.classList.remove("success");
          errorElement.textContent = "Please enter your name";
        } else if (value.length < 2) {
          group.classList.add("error");
          group.classList.remove("success");
          errorElement.textContent = "Name must be at least 2 characters";
        } else {
          group.classList.remove("error");
          group.classList.add("success");
        }
        break;
      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value === "") {
          group.classList.add("error");
          group.classList.remove("success");
          errorElement.textContent = "Please enter your email address";
        } else if (!emailPattern.test(value)) {
          group.classList.add("error");
          group.classList.remove("success");
          errorElement.textContent = "Please enter a valid email address";
        } else {
          group.classList.remove("error");
          group.classList.add("success");
        }
        break;
      case "message":
        if (value === "") {
          group.classList.add("error");
          group.classList.remove("success");
          errorElement.textContent = "Please enter your message";
        } else if (value.length < 10) {
          group.classList.add("error");
          group.classList.remove("success");
          errorElement.textContent = "Message must be at least 10 characters";
        } else if (value.length > MAX_MESSAGE_LENGTH) {
          group.classList.add("error");
          group.classList.remove("success");
          errorElement.textContent = `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters`;
        } else {
          group.classList.remove("error");
          group.classList.add("success");
        }
        break;
    }
  }

  // Auto-expanding textarea
  messageField.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });

  // Form submission handler
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission with loading state
      contactForm.classList.add("loading");

      // Simulate server delay
      setTimeout(function () {
        // Reset loading state
        contactForm.classList.remove("loading");

        // Show success message
        contactForm.style.display = "none";
        formSubmitted.style.display = "block";
      }, 1500);
    }
  });

  // Send another message button handler
  sendAnother.addEventListener("click", function () {
    contactForm.reset();
    formSubmitted.style.display = "none";
    contactForm.style.display = "block";

    // Reset progress bar
    progressBar.style.width = "0%";

    // Reset character counter
    messageCounter.textContent = `0/${MAX_MESSAGE_LENGTH}`;
    messageCounter.style.color = "";

    // Reset textarea height
    messageField.style.height = "auto";

    // Remove all success/error states
    const formGroups = contactForm.querySelectorAll(".form-group");
    formGroups.forEach((group) => {
      group.classList.remove("error", "success");
    });
  });

  // Add keyboard accessibility for social links
  const socialLinks = document.querySelectorAll(".social-link");
  socialLinks.forEach((link) => {
    link.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      }
    });
  });

  // Touch device enhancements
  if ("ontouchstart" in window) {
    // Add active state for touch devices
    const touchElements = document.querySelectorAll(
      ".submit-btn, .btn-back, .social-link, .info-item"
    );
    touchElements.forEach((element) => {
      element.addEventListener("touchstart", function () {
        this.classList.add("active");
      });

      element.addEventListener("touchend", function () {
        this.classList.remove("active");
      });
    });
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Form feedback animations
  const inputFields = document.querySelectorAll(".form-control");

  inputFields.forEach((field) => {
    field.addEventListener("focus", function () {
      // Add subtle animation when field gets focus
      this.style.transition = "transform 0.3s ease";
      this.style.transform = "translateX(5px)";

      setTimeout(() => {
        this.style.transform = "translateX(0)";
      }, 300);
    });
  });

  // Initial form progress update
  updateFormProgress();
  // Back to top button functionality
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Newsletter form validation
  const newsletterForm = document.querySelector(".newsletter-form");
  const emailInput = document.querySelector(".newsletter-input");

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || !emailPattern.test(email)) {
      emailInput.style.borderColor = "#ff3860";
      emailInput.focus();

      // Reset border after animation
      setTimeout(() => {
        emailInput.style.borderColor = "";
      }, 3000);
    } else {
      // Simulate successful subscription
      emailInput.value = "";
      emailInput.style.borderColor = "#23d160";

      // Create success notification
      const notification = document.createElement("div");
      notification.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    color: white;
                    padding: 15px 25px;
                    border-radius: 8px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                    animation: fadeInRight 0.4s ease forwards;
                    z-index: 1000;
                `;
      notification.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <i class="ri-check-line" style="font-size: 22px;"></i>
                        <div>
                            <p style="margin: 0; font-weight: 600;">Thank you for subscribing!</p>
                            <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.8;">You'll receive our updates soon.</p>
                        </div>
                    </div>
                `;
      document.body.appendChild(notification);

      // Remove notification after 4 seconds
      setTimeout(() => {
        notification.style.animation = "fadeOutRight 0.4s ease forwards";
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 400);
      }, 4000);

      // Reset input border
      setTimeout(() => {
        emailInput.style.borderColor = "";
      }, 3000);
    }
  });

  // Add keydown event for back to top button
  backToTopBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });

  // Create animations
  const style = document.createElement("style");
  style.textContent = `
            @keyframes fadeInRight {
                from {
                    opacity: 0;
                    transform: translateX(20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes fadeOutRight {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(20px);
                }
            }
        `;
  document.head.appendChild(style);

  // Gallery filtering functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      // Filter items
      galleryItems.forEach((item) => {
        if (filterValue === "*") {
          item.classList.remove("hidden");
          setTimeout(() => {
            item.style.display = "block";
          }, 300);
        } else if (item.classList.contains(filterValue.substring(1))) {
          item.classList.remove("hidden");
          setTimeout(() => {
            item.style.display = "block";
          }, 300);
        } else {
          item.classList.add("hidden");
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // Lightbox functionality
  const lightbox = document.querySelector(".lightbox");
  const lightboxContent = document.querySelector(".lightbox-content");
  const lightboxClose = document.querySelector(".lightbox-close");
  const lightboxPrev = document.querySelector(".lightbox-nav-btn.prev");
  const lightboxNext = document.querySelector(".lightbox-nav-btn.next");
  const lightboxCaption = document.querySelector(".lightbox-caption");
  const lightboxCounter = document.querySelector(".lightbox-counter");
  const lightboxLoader = document.querySelector(".lightbox-loader");

  let currentIndex = 0;
  let galleryData = [];

  // Prepare gallery data
  galleryItems.forEach((item, index) => {
    const imgSrc = item.querySelector(".gallery-img").getAttribute("src");
    const title = item.querySelector(".gallery-item-title").textContent;
    const category = item.querySelector(".gallery-item-category").textContent;
    const isVideo = item.classList.contains("video-item");
    let videoId = null;

    if (isVideo) {
      videoId = item.getAttribute("data-video-id");
    }

    galleryData.push({
      index: index,
      imgSrc: imgSrc,
      title: title,
      category: category,
      isVideo: isVideo,
      videoId: videoId,
    });

    // Open lightbox on item click
    item.addEventListener("click", () => {
      openLightbox(index);
    });
  });

  // Functions to handle lightbox
  function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";

    // Clear lightbox content after animation
    setTimeout(() => {
      const existingImage = lightboxContent.querySelector(".lightbox-image");
      const existingVideo = lightboxContent.querySelector(".lightbox-video");

      if (existingImage) {
        existingImage.remove();
      }

      if (existingVideo) {
        existingVideo.remove();
      }
    }, 300);
  }

  function updateLightboxContent() {
    // Show loader
    lightboxLoader.style.display = "block";

    // Clear previous content
    const existingImage = lightboxContent.querySelector(".lightbox-image");
    const existingVideo = lightboxContent.querySelector(".lightbox-video");

    if (existingImage) {
      existingImage.remove();
    }

    if (existingVideo) {
      existingVideo.remove();
    }

    const item = galleryData[currentIndex];

    // Update counter
    lightboxCounter.textContent = `${currentIndex + 1}/${galleryData.length}`;

    // Update caption
    lightboxCaption.querySelector("h3").textContent = item.title;
    lightboxCaption.querySelector("p").textContent = item.category;

    if (item.isVideo) {
      // Create video container
      const videoContainer = document.createElement("div");
      videoContainer.className = "lightbox-video";

      // In a real implementation, you would use the videoId to get the actual video
      // For this demo, we'll just show a placeholder with a message
      const videoMessage = document.createElement("div");
      videoMessage.style.position = "absolute";
      videoMessage.style.top = "0";
      videoMessage.style.left = "0";
      videoMessage.style.width = "100%";
      videoMessage.style.height = "100%";
      videoMessage.style.display = "flex";
      videoMessage.style.alignItems = "center";
      videoMessage.style.justifyContent = "center";
      videoMessage.style.background = "#111";
      videoMessage.style.color = "white";
      videoMessage.style.fontSize = "16px";
      videoMessage.style.padding = "20px";
      videoMessage.style.textAlign = "center";
      videoMessage.textContent = `Video Player - ${item.title} (In a real implementation, this would be an actual video player)`;

      videoContainer.appendChild(videoMessage);
      lightboxContent.appendChild(videoContainer);
    } else {
      // Create image element
      const img = document.createElement("img");
      img.className = "lightbox-image";
      img.src = item.imgSrc;
      img.alt = item.title;

      // Only append image once it's loaded
      img.onload = function () {
        lightboxLoader.style.display = "none";
      };

      lightboxContent.appendChild(img);
    }

    // Hide loader after a maximum time (in case of loading errors)
    setTimeout(() => {
      lightboxLoader.style.display = "none";
    }, 1000);
  }

  function showPrevItem() {
    currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    updateLightboxContent();
  }

  function showNextItem() {
    currentIndex = (currentIndex + 1) % galleryData.length;
    updateLightboxContent();
  }

  // Event listeners for lightbox controls
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", showPrevItem);
  lightboxNext.addEventListener("click", showNextItem);

  // Close lightbox when clicking outside content
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      showPrevItem();
    } else if (e.key === "ArrowRight") {
      showNextItem();
    }
  });

  // Load More button functionality
  const loadMoreBtn = document.querySelector(".load-more-btn");
  let itemsToShow = 12; // Number of items initially shown
  const itemsPerLoad = 6; // Number of items to add when "Load More" is clicked
  let moreItemsAvailable = true; // Flag to track if more items can be loaded

  // For demonstration, we'll simulate loading more items
  loadMoreBtn.addEventListener("click", function () {
    // If there are no more items to load, disable the button
    if (!moreItemsAvailable) {
      return;
    }

    // In a real implementation, you would fetch more items from the server
    // For this demo, we'll add placeholder items
    const galleryGrid = document.querySelector(".gallery-grid");

    // Create and add new items
    for (let i = 0; i < itemsPerLoad; i++) {
      // Create a random item
      const categories = [
        "workout",
        "success",
        "facilities",
        "events",
        "videos",
      ];
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];
      const isVideo = randomCategory === "videos";
      const isWide = Math.random() > 0.7; // 30% chance to be wide
      const isTall = Math.random() > 0.8; // 20% chance to be tall

      const newItem = document.createElement("div");
      newItem.className = `gallery-item ${randomCategory} fade-in`;

      if (isWide) newItem.classList.add("wide");
      if (isTall) newItem.classList.add("tall");
      if (isVideo) newItem.classList.add("video-item");

      newItem.setAttribute("data-category", randomCategory);

      if (isVideo) {
        newItem.setAttribute("data-type", "video");
        newItem.setAttribute("data-video-id", `dynamic-${Date.now()}-${i}`);
      }

      // Determine image dimensions based on item size
      let imgWidth = 400;
      let imgHeight = 300;

      if (isWide) imgWidth = 600;
      if (isTall) imgHeight = 620;

      newItem.innerHTML = `
                        <img src="/api/placeholder/${imgWidth}/${imgHeight}" alt="Dynamic Gallery Item" class="gallery-img">
                        <div class="gallery-overlay">
                            <h3 class="gallery-item-title">Dynamic Gallery Item ${
                              itemsToShow + i + 1
                            }</h3>
                            <p class="gallery-item-category">${
                              randomCategory.charAt(0).toUpperCase() +
                              randomCategory.slice(1)
                            }</p>
                        </div>
                        <div class="gallery-item-icon">
                            <i class="ri-${
                              isVideo ? "play-fill" : "zoom-in-line"
                            }"></i>
                        </div>
                    `;

      galleryGrid.appendChild(newItem);

      // Add to galleryData for lightbox functionality
      const itemData = {
        index: galleryData.length,
        imgSrc: newItem.querySelector(".gallery-img").getAttribute("src"),
        title: newItem.querySelector(".gallery-item-title").textContent,
        category: newItem.querySelector(".gallery-item-category").textContent,
        isVideo: isVideo,
        videoId: isVideo ? newItem.getAttribute("data-video-id") : null,
      };

      galleryData.push(itemData);

      // Add lightbox event listener
      newItem.addEventListener("click", () => {
        openLightbox(itemData.index);
      });
    }

    // Update items count
    itemsToShow += itemsPerLoad;

    // For demo purposes, limit to 30 items total
    if (itemsToShow >= 30) {
      loadMoreBtn.textContent = "No More Items";
      loadMoreBtn.disabled = true;
      loadMoreBtn.style.opacity = "0.6";
      loadMoreBtn.style.cursor = "not-allowed";
      moreItemsAvailable = false;
    }

    // Apply current filter to new items
    const activeFilter = document
      .querySelector(".filter-btn.active")
      .getAttribute("data-filter");
    if (activeFilter !== "*") {
      const newItems = document.querySelectorAll(
        ".gallery-item:nth-child(n+" + (itemsToShow - itemsPerLoad + 1) + ")"
      );
      newItems.forEach((item) => {
        if (!item.classList.contains(activeFilter.substring(1))) {
          item.classList.add("hidden");
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    }
  });

  // Simulate scroll animation when elements come into view
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function handleScrollAnimation() {
    const fadeElements = document.querySelectorAll(".fade-in");

    fadeElements.forEach((element) => {
      if (
        isElementInViewport(element) &&
        !element.classList.contains("animated")
      ) {
        element.classList.add("animated");
        element.style.animation = "fadeIn 0.8s ease forwards";
      }
    });
  }

  // Initial check on load
  handleScrollAnimation();

  // Check on scroll
  window.addEventListener("scroll", handleScrollAnimation);

  const modal = document.getElementById("certificate-modal");
  const modalClose = document.getElementById("modal-close");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalIssuerDate = document.getElementById("modal-issuer-date");
  const modalDescription = document.getElementById("modal-description");
  const modalInfo = document.getElementById("modal-info");

  // Open modal when view certificate button is clicked
  const viewButtons = document.querySelectorAll(".view-certificate-btn");
  viewButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const certId = btn.getAttribute("data-certificate");
      const data = certificateData[certId];
      if (data) {
        modalImage.src = data.image;
        modalTitle.textContent = data.title;
        modalIssuerDate.textContent = data.issuer + " | " + data.date;
        modalDescription.textContent = data.description;
        // Clear and add info items
        modalInfo.innerHTML = "";
        data.info.forEach((item) => {
          const infoItem = document.createElement("div");
          infoItem.classList.add("certificate-modal-info-item");
          infoItem.innerHTML = `<div class="certificate-modal-info-label">${item.label}:</div>
                                              <div class="certificate-modal-info-value">${item.value}</div>`;
          modalInfo.appendChild(infoItem);
        });
        // Show modal
        modal.classList.add("active");
      }
    });
  });
  // Close modal when clicking on the close button or clicking outside modal content
  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  const bmiClose = document.getElementById("bmi-close");
  const popup = document.getElementById("bmiPopup");
  const bmiCalculator = document.getElementById("bmi-calculator");
  const openBmiCalculator = document.getElementById("open-bmi-calculator");
  const bmiContainer = document.querySelector(".bmi-container");
  const metricInputs = document.querySelector(".metric-inputs");
  const imperialInputs = document.querySelector(".imperial-inputs");
  const tabButtons = document.querySelectorAll(".tab-btn");

  const heightCmInput = document.getElementById("height-cm");
  const weightKgInput = document.getElementById("weight-kg");
  const heightFtInput = document.getElementById("height-ft");
  const heightInInput = document.getElementById("height-in");
  const weightLbInput = document.getElementById("weight-lb");

  const calculateButton = document.getElementById("calculate-bmi");
  const bmiValue = document.getElementById("bmi-value");
  const bmiCategory = document.getElementById("bmi-category");
  const bmiMessage = document.getElementById("bmi-message");
  const bmiIndicator = document.getElementById("bmi-indicator");
  const bmiResult = document.querySelector(".bmi-result");
  const fitnessTipsContainer = document.getElementById(
    "fitness-tips-container"
  );

  openBmiCalculator.addEventListener("click", () => {
    bmiCalculator.classList.add("active");
    popup.style.display = "none";
  });

  bmiClose.addEventListener("click", () => {
    bmiCalculator.classList.remove("active");
  });

  // document.addEventListener("click", (e) => {
  //   if (e.target !== bmiContainer && e.target !== openBmiCalculator) {
  //     bmiCalculator.classList.remove("active");
  //   }
  // });

  // Function to reset calculator result
  function resetCalculator() {
    bmiValue.textContent = "--";
    bmiCategory.textContent = "--";
    bmiMessage.textContent =
      "Enter your height and weight to calculate your BMI";
    bmiIndicator.style.left = "50%";
    bmiResult.classList.remove("has-value");
    fitnessTipsContainer.innerHTML = "";
  }

  // Function to show error if input is invalid
  function showError() {
    alert("Please enter valid numbers for both height and weight.");
    resetCalculator();
  }

  // Tab switching functionality
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const unit = button.getAttribute("data-unit");

      // Update active tab
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Show/hide input fields with animation
      if (unit === "metric") {
        metricInputs.classList.add("active");
        imperialInputs.classList.remove("active");

        gsap.fromTo(
          ".metric-inputs",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
      } else {
        metricInputs.classList.remove("active");
        imperialInputs.classList.add("active");

        gsap.fromTo(
          ".imperial-inputs",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
      }

      // Reset result when changing tabs
      resetCalculator();
    });
  });

  // Calculate BMI when button is clicked
  calculateButton.addEventListener("click", () => {
    // Determine which unit system is active
    const isMetric = metricInputs.classList.contains("active");
    let bmi, height, weight;

    if (isMetric) {
      // Metric calculation
      height = parseFloat(heightCmInput.value);
      weight = parseFloat(weightKgInput.value);

      // Input validation
      if (!height || !weight || height <= 0 || weight <= 0) {
        showError();
        return;
      }

      // BMI formula: weight(kg) / height(m)^2
      bmi = weight / Math.pow(height / 100, 2);
    } else {
      // Imperial calculation
      const feet = parseFloat(heightFtInput.value) || 0;
      const inches = parseFloat(heightInInput.value) || 0;
      weight = parseFloat(weightLbInput.value);

      // Convert height to total inches
      height = feet * 12 + inches;

      // Input validation
      if (!height || !weight || height <= 0 || weight <= 0) {
        showError();
        return;
      }

      // BMI formula for imperial: (weight(lb) / height(in)^2) * 703
      bmi = (weight / Math.pow(height, 2)) * 703;
    }

    // Round to 1 decimal place
    bmi = Math.round(bmi * 10) / 10;

    // Display the result
    displayResult(bmi);

    // Add animation effect to the button
    gsap.to(calculateButton, {
      scale: 0.95,
      duration: 0.1,
      onComplete: function () {
        gsap.to(calculateButton, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      },
    });
  });

  // Function to display BMI result
  function displayResult(bmi) {
    let category, message, indicatorPosition;
    let personalizedTips = [];

    // Determine BMI category and set corresponding values
    if (bmi < 18.5) {
      category = "Underweight";
      message =
        "Your BMI indicates you may need to gain weight. Consider consulting with a nutritionist.";
      personalizedTips = [
        {
          icon: "fa-apple-alt",
          title: "Calorie-Dense Foods",
          content:
            "Include healthy high-calorie options like nuts, avocados, and olive oil in your meals.",
        },
        {
          icon: "fa-dumbbell",
          title: "Strength Training",
          content: "Incorporate resistance training to build lean muscle mass.",
        },
        {
          icon: "fa-utensils",
          title: "Frequent Meals",
          content: "Try eating more frequently to boost your calorie intake.",
        },
      ];
    } else if (bmi < 25) {
      category = "Normal Weight";
      message =
        "Your weight is within the healthy range. Keep up the balanced lifestyle!";
      personalizedTips = [
        {
          icon: "fa-heart",
          title: "Maintain Balance",
          content: "Stick with a mix of cardio and strength training.",
        },
        {
          icon: "fa-running",
          title: "Vary Workouts",
          content: "Change up your routine to keep challenging your body.",
        },
        {
          icon: "fa-carrot",
          title: "Quality Nutrition",
          content: "Ensure a balanced diet rich in whole foods.",
        },
      ];
    } else if (bmi < 30) {
      category = "Overweight";
      message =
        "Consider adopting healthier lifestyle habits to reduce health risks.";
      personalizedTips = [
        {
          icon: "fa-walking",
          title: "Increase Activity",
          content: "Aim for at least 150 minutes of exercise per week.",
        },
        {
          icon: "fa-clock",
          title: "Portion Control",
          content: "Be mindful of portion sizes to manage calories.",
        },
        {
          icon: "fa-tint",
          title: "Stay Hydrated",
          content: "Drink plenty of water to support your metabolism.",
        },
      ];
    } else {
      category = "Obese";
      message =
        "Your BMI indicates increased health risks. Consult with healthcare professionals.";
      personalizedTips = [
        {
          icon: "fa-user-md",
          title: "Professional Guidance",
          content:
            "Consider working with a healthcare provider for a tailored plan.",
        },
        {
          icon: "fa-shoe-prints",
          title: "Start Slow",
          content:
            "Begin with low-impact activities such as walking or swimming.",
        },
        {
          icon: "fa-apple-alt",
          title: "Nutritional Overhaul",
          content: "Focus on whole foods and reducing processed food intake.",
        },
      ];
    }

    // Calculate the indicator position as a percentage relative to a maximum BMI of 40
    indicatorPosition = (bmi / 40) * 100;
    if (indicatorPosition > 100) indicatorPosition = 100;

    // Update DOM elements with the calculated values
    bmiValue.textContent = bmi;
    bmiCategory.textContent = category;
    bmiMessage.textContent = message;
    bmiResult.classList.add("has-value");

    // Move the BMI indicator based on the calculated percentage
    bmiIndicator.style.left = indicatorPosition + "%";

    // Render personalized tips
    renderFitnessTips(personalizedTips);
  }

  // Function to render fitness tips dynamically
  function renderFitnessTips(tips) {
    fitnessTipsContainer.innerHTML = "";
    tips.forEach((tip) => {
      const tipItem = document.createElement("div");
      tipItem.classList.add("tip-item", "fade-in");

      const tipIcon = document.createElement("div");
      tipIcon.classList.add("tip-icon");
      tipIcon.innerHTML = `<i class="fas ${tip.icon}"></i>`;

      const tipContent = document.createElement("div");
      tipContent.classList.add("tip-content");
      tipContent.innerHTML = `<h5>${tip.title}</h5><p>${tip.content}</p>`;

      tipItem.appendChild(tipIcon);
      tipItem.appendChild(tipContent);
      fitnessTipsContainer.appendChild(tipItem);
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("bmiPopup");
  const closePopup = document.getElementById("closePopup");

  // Show the popup by setting display to flex (to enable centering)
  popup.style.display = "flex";

  // Add a click event listener to the close button to hide the popup
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
