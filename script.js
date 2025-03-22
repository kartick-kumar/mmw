// Search Function for Table Filtering
function searchTable() {
    let input = document.getElementById('myInput').value.toUpperCase();
    let table = document.getElementById('application');
    let tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        let found = false;
        let td = tr[i].getElementsByTagName('td');

        for (let j = 0; j < td.length; j++) {
            if (td[j]) {
                let txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(input) > -1) {
                    found = true;
                    break;
                }
            }
        }
        // Mobile Navbar Toggle
        document.addEventListener("DOMContentLoaded", function() {
            let menuButton = document.getElementById("menu-toggle");
            let navLinks = document.querySelector(".nav-links");

            menuButton.addEventListener("click", function() {
                navLinks.classList.toggle("nav-active");
            });
        });

        tr[i].style.display = found ? "" : "none";
    }

}
let darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
document.getElementById("quoteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let part = document.getElementById("part").value;
    let quantity = document.getElementById("quantity").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    Email.send({
        SecureToken: "YOUR_SMTP_TOKEN",
        To: "your-email@example.com",
        From: "your-email@example.com",
        Subject: "New Quote Request",
        Body: `Name: ${name} <br> Email: ${email} <br> Part: ${part} <br> Quantity: ${quantity}`
    }).then(
        message => alert("Thank you! Your quote request has been sent.")
    );

    document.getElementById("quoteForm").reset();
});
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function() {
    let logo = document.getElementById("animated-logo");

    // Fade-in and slide down effect when page loads
    setTimeout(() => {
        logo.style.opacity = "1";
        logo.style.transform = "translateY(0)";
    }, 500);

    // Optional: Add a rotation effect when clicked
    logo.addEventListener("click", function() {
        this.classList.toggle("rotate");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll(".category-item");

    categories.forEach(category => {
        category.addEventListener("click", function() {
            let targetId = this.getAttribute("data-target");
            let targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Highlight active section when scrolling
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY + 150;

        categories.forEach(category => {
            let targetId = category.getAttribute("data-target");
            let targetElement = document.getElementById(targetId);

            if (targetElement) {
                let sectionTop = targetElement.offsetTop;
                let sectionHeight = targetElement.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    categories.forEach(cat => cat.classList.remove("active"));
                    category.classList.add("active");
                }
            }
        });
    });
});

document.querySelectorAll(".scroll-btn").forEach(button => {
    button.addEventListener("click", function() {
        let targetId = this.getAttribute("data-target");
        let targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".scroll-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            let targetId = this.getAttribute("data-target");
            let targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Smooth scrolling
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

                // Remove active class from all buttons
                buttons.forEach(btn => btn.classList.remove("active"));

                // Add active class to the clicked button
                this.classList.add("active");
            }
        });
    });

    // Highlight the active section when scrolling
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY + 150; // Offset for better activation

        buttons.forEach(button => {
            let targetId = button.getAttribute("data-target");
            let targetElement = document.getElementById(targetId);

            if (targetElement) {
                let sectionTop = targetElement.offsetTop;
                let sectionHeight = targetElement.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    // Remove active class from all buttons
                    buttons.forEach(btn => btn.classList.remove("active"));
                    // Add active class to the button that matches the current section
                    button.classList.add("active");
                }
            }
        });
    });
});

document.getElementById("quoteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your quote request has been submitted! We will contact you soon.");
});

// Event Listener for Search Bar
document.addEventListener("DOMContentLoaded", function() {
    let searchInput = document.getElementById("myInput");
    if (searchInput) {
        searchInput.addEventListener("keyup", searchTable);
    }
});

// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Navbar Toggle (Hamburger Menu)
function toggleMenu() {
    let nav = document.getElementById("navlist");
    nav.classList.toggle("active");
}

// Add event listener to hamburger menu button
document.addEventListener("DOMContentLoaded", function() {
    let menuButton = document.getElementById("menu-toggle");
    if (menuButton) {
        menuButton.addEventListener("click", toggleMenu);
    }
});

// Back to Top Button
let backToTop = document.createElement("button");
backToTop.innerHTML = "⬆";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px";
backToTop.style.background = "#ffcc00";
backToTop.style.color = "#004080";
backToTop.style.border = "none";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.borderRadius = "5px";
backToTop.style.fontSize = "18px";
backToTop.style.zIndex = "1000";

backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function() {
    let dropdown = document.querySelector(".dropdown");
    dropdown.addEventListener("click", function() {
        this.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // Toggle mobile menu
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    // Toggle dropdown menu on mobile
    dropdownToggle.addEventListener("click", function(e) {
        e.preventDefault();
        dropdownMenu.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function(e) {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    // ✅ Toggle mobile menu when clicking the hamburger button
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    // ✅ Close the menu when clicking outside
    document.addEventListener("click", function(e) {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove("active");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown > a");

    if (dropdown) {
        dropdown.addEventListener("click", function(e) {
            e.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // ✅ Toggle mobile menu
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");

        // Close dropdown if menu is closed
        if (!navLinks.classList.contains("active")) {
            dropdownMenu.classList.remove("show");
        }
    });

    // ✅ Toggle dropdown menu on mobile
    dropdownToggle.addEventListener("click", function(e) {
        e.preventDefault();
        dropdownMenu.classList.toggle("show");
    });

    // ✅ Close menu when clicking outside
    document.addEventListener("click", function(e) {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove("active");
            dropdownMenu.classList.remove("show");
        }
    });
});
// ✅ Dropdown Toggle for Mobile Users
document.addEventListener("DOMContentLoaded", function() {
    let dropdown = document.querySelector(".dropdown");
    let dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("click", function(e) {
        e.stopPropagation(); // Prevents closing when clicking inside the dropdown
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function(e) {
        if (!dropdown.contains(e.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let menuToggle = document.getElementById("menu-toggle");
    let navLinks = document.getElementById("nav-links");
    let dropdown = document.querySelector(".dropdown");
    let dropdownMenu = document.querySelector(".dropdown-menu");

    // ✅ Toggle Mobile Menu
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    // ✅ Toggle Dropdown in Mobile
    dropdown.addEventListener("click", function(e) {
        e.stopPropagation(); // Prevents closing when clicking inside the dropdown
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // ✅ Close dropdown when clicking outside
    document.addEventListener("click", function(e) {
        if (!dropdown.contains(e.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const servicesBtn = document.getElementById("services-btn");
    const servicesMenu = document.getElementById("menu-services");

    // Toggle mobile menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Toggle services dropdown
    servicesBtn.addEventListener("click", () => {
        servicesMenu.style.display = (servicesMenu.style.display === "block") ? "none" : "block";
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!servicesBtn.contains(event.target) && !servicesMenu.contains(event.target)) {
            servicesMenu.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const servicesBtn = document.getElementById("services-btn");
    const servicesMenu = document.getElementById("menu-services");

    // Toggle dropdown on click
    servicesBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevents click from bubbling up
        servicesMenu.style.display = (servicesMenu.style.display === "block") ? "none" : "block";
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!servicesBtn.contains(event.target) && !servicesMenu.contains(event.target)) {
            servicesMenu.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const servicesBtn = document.getElementById("services-btn");
    const servicesMenu = document.getElementById("services-menu");

    servicesBtn.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent click from closing immediately
        servicesMenu.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (!servicesBtn.contains(event.target) && !servicesMenu.contains(event.target)) {
            servicesMenu.classList.remove("show");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const servicesBtn = document.getElementById("services-btn");
    const servicesMenu = document.getElementById("services-menu");

    // Toggle dropdown when clicking "Services"
    servicesBtn.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent immediate close
        servicesMenu.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (!servicesBtn.contains(event.target) && !servicesMenu.contains(event.target)) {
            servicesMenu.classList.remove("show");
        }
    });

    // Ensure dropdown works on hover for desktop users
    if (window.innerWidth > 768) {
        document.querySelector(".dropdown").addEventListener("mouseenter", function() {
            servicesMenu.classList.add("show");
        });

        document.querySelector(".dropdown").addEventListener("mouseleave", function() {
            servicesMenu.classList.remove("show");
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const servicesBtn = document.getElementById("services-btn");
    const servicesMenu = document.getElementById("services-menu");

    // ✅ Toggle Mobile Menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // ✅ Toggle Services Dropdown in Mobile
    servicesBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        servicesMenu.classList.toggle("show");
    });

    // ✅ Hide dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!servicesBtn.contains(event.target) && !servicesMenu.contains(event.target)) {
            servicesMenu.classList.remove("show");
        }
    });

    // ✅ Ensure dropdown works on hover for desktop users
    if (window.innerWidth > 768) {
        document.querySelector(".dropdown").addEventListener("mouseenter", function() {
            servicesMenu.classList.add("show");
        });

        document.querySelector(".dropdown").addEventListener("mouseleave", function() {
            servicesMenu.classList.remove("show");
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const servicesBtn = document.getElementById("services-btn");
    const servicesMenu = document.getElementById("services-menu");

    // ✅ Toggle Mobile Menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // ✅ Toggle Services Dropdown in Mobile
    servicesBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        servicesMenu.classList.toggle("show");
    });

    // ✅ Hide dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!servicesBtn.contains(event.target) && !servicesMenu.contains(event.target)) {
            servicesMenu.classList.remove("show");
        }
    });

    // ✅ Ensure dropdown works on hover for desktop users
    if (window.innerWidth > 768) {
        document.querySelector(".dropdown").addEventListener("mouseenter", function() {
            servicesMenu.classList.add("show");
        });

        document.querySelector(".dropdown").addEventListener("mouseleave", function() {
            servicesMenu.classList.remove("show");
        });
    }
});

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("backToTop");

    // Show button when scrolling down
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Scroll to top when clicked
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".category-item, .scroll-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const target = this.getAttribute("data-target");
            const targetElement = document.getElementById(target);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
                console.log("Scrolling to:", target); // Debugging
            } else {
                console.log("Target not found:", target);
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const categoryItems = document.querySelectorAll(".category-item");

    categoryItems.forEach(item => {
        item.addEventListener("click", function() {
            let targetId = this.getAttribute("data-target");
            let targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                console.error("Error: No section found for", targetId);
            }
        });
    });
});
document.querySelector(".menu-icon").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
});
// Lazy Load Images
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img[loading='lazy']");
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
});
// Show/Hide Back to Top Button on Scroll
window.onscroll = function() {
    let button = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Smooth Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
// 🌙 Dark Mode Toggle
const themeSwitcher = document.getElementById("themeSwitcher");
const body = document.body;

// Check user preference from localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    themeSwitcher.textContent = "☀ Light Mode";
}

// Toggle Dark Mode
themeSwitcher.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        themeSwitcher.textContent = "☀ Light Mode";
    } else {
        localStorage.setItem("darkMode", "disabled");
        themeSwitcher.textContent = "🌙 Dark Mode";
    }
});
// 🌙 Dark Mode Toggle Functionality
document.addEventListener("DOMContentLoaded", function() {
    const themeSwitcher = document.getElementById("themeSwitcher");
    const body = document.body;

    // 🌑 Check user preference in localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        themeSwitcher.textContent = "☀ Light Mode";
    }

    // Toggle Dark Mode on button click
    themeSwitcher.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            themeSwitcher.textContent = "☀ Light Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            themeSwitcher.textContent = "🌙 Dark Mode";
        }
    });
});
// Automatically link important words to internal pages
document.addEventListener("DOMContentLoaded", function() {
    let keywords = {
        "Auto Parts": "/products",
        "Manufacturing": "/about",
        "Contact Us": "/contact"
    };

    let content = document.body.innerHTML;
    for (let keyword in keywords) {
        let link = `<a href="${keywords[keyword]}">${keyword}</a>`;
        let regex = new RegExp(`\\b${keyword}\\b`, "g");
        content = content.replace(regex, link);
    }
    document.body.innerHTML = content;
});
// Auto-share blog posts to Twitter when clicked
document.querySelectorAll('.blog-share').forEach(btn => {
    btn.addEventListener('click', function() {
        let postUrl = this.getAttribute('data-url');
        window.open(`https://twitter.com/intent/tweet?url=${postUrl}&text=Check%20out%20this%20awesome%20article!`, '_blank');
    });
});

// Mobile Menu Toggle
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("backToTop");

    // ✅ Check if button exists in the document
    if (!backToTopButton) {
        console.error("Error: 'Back to Top' button not found in HTML.");
        return;
    }

    // ✅ Show button when scrolling down
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // ✅ Smooth scroll to top when clicked
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    console.log("Back to Top button script loaded successfully.");
});