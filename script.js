// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#ffffff';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Here you would typically send the data to a server
            // For now, we'll just show an alert and reset the form
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            this.reset();
        });
    }

    // Skills Progress Animation
    function animateSkills() {
        const skillBars = document.querySelectorAll('.skill-progress-bar');
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }

    // Counter Animation
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200; // The lower the slower

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    // Modal functionality
    function initModal() {
        const modal = document.getElementById('projectModal');
        const closeBtn = document.querySelector('.close-modal');
        const viewDemoBtns = document.querySelectorAll('.view-demo');

        // Close modal
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Project demo button click handlers
        viewDemoBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const projectType = btn.getAttribute('data-project');
                showProjectDetails(projectType);
                modal.style.display = 'block';
            });
        });

        function showProjectDetails(projectType) {
            const modalTitle = document.getElementById('modalTitle');
            const modalDescription = document.getElementById('modalDescription');
            const modalFeatures = document.getElementById('modalFeatures');
            const modalTech = document.getElementById('modalTech');
            const modalGithub = document.getElementById('modalGithub');

            if (projectType === 'ai-chatbot') {
                modalTitle.textContent = 'AI SMS Chatbot for Agricultural Advice';
                modalDescription.textContent = 'An innovative Twilio-based SMS platform that provides real-time agricultural expertise to farmers. Users can text questions about crop diseases, pests, or farming techniques and receive AI-generated responses in multiple languages including Swahili and English. This project demonstrates practical application of AI in solving real-world problems for the agricultural sector.';
                
                modalFeatures.innerHTML = `
                    <li>Multi-language support (Swahili/English)</li>
                    <li>AI-powered agricultural expertise</li>
                    <li>Twilio SMS API integration</li>
                    <li>Real-time query resolution for farmers</li>
                    <li>Scalable architecture for multiple users</li>
                    <li>Secure data handling and privacy protection</li>
                `;
                
                modalTech.innerHTML = `
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">Twilio API</span>
                    <span class="tech-tag">SMS Integration</span>
                    <span class="tech-tag">AI/ML</span>
                    <span class="tech-tag">Swahili NLP</span>
                    <span class="tech-tag">RESTful APIs</span>
                `;
                
                modalGithub.href = 'https://github.com/sylviaadoyo77/AI-SMS-chatbot-for-agricultural-advice';
            } else if (projectType === 'pharmacy') {
                modalTitle.textContent = 'Pharmacy Management System';
                modalDescription.textContent = 'A comprehensive pharmacy management solution designed to streamline medication inventory, patient records, and sales operations. This system provides a complete solution for pharmacy operations with features for inventory tracking, patient management, and sales reporting. The application includes secure user authentication and an intuitive interface for efficient pharmacy management.';
                
                modalFeatures.innerHTML = `
                    <li>Inventory management & tracking</li>
                    <li>Patient records management</li>
                    <li>Sales and billing system</li>
                    <li>Secure user authentication</li>
                    <li>Reporting and analytics</li>
                    <li>Supplier and vendor management</li>
                `;
                
                modalTech.innerHTML = `
                    <span class="tech-tag">Java</span>
                    <span class="tech-tag">MySQL</span>
                    <span class="tech-tag">Swing GUI</span>
                    <span class="tech-tag">Database Design</span>
                    <span class="tech-tag">OOP</span>
                    <span class="tech-tag">JDBC</span>
                `;
                
                modalGithub.href = 'https://github.com/sylviaadoyo77/pharmacy-project';
            }
        }
    }

    // Enhanced scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe individual elements for staggered animations
    const elementObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.skill-category, .project-card, .timeline-item, .edu-item, .cert-item, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        elementObserver.observe(el);
    });

    // Add active class to navigation links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Intersection Observer for specific animations
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skills')) {
                    animateSkills();
                }
                if (entry.target.classList.contains('about')) {
                    animateCounters();
                }
            }
        });
    }, { threshold: 0.3 });

    // Initialize everything
    function initPortfolio() {
        initModal();
        
        // Observe sections for specific animations
        const skillsSection = document.querySelector('.skills');
        const aboutSection = document.querySelector('.about');
        
        if (skillsSection) animationObserver.observe(skillsSection);
        if (aboutSection) animationObserver.observe(aboutSection);
        
        // Initial call to set active navigation
        highlightNavigation();
    }

    // Initialize the portfolio
    initPortfolio();

    // Modal functionality with screenshot support
function initModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-modal');
    const viewDemoBtns = document.querySelectorAll('.view-demo');

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });

    // Project demo button click handlers
    viewDemoBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projectType = btn.getAttribute('data-project');
            showProjectDetails(projectType);
            modal.style.display = 'block';
        });
    });

    function showProjectDetails(projectType) {
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const modalFeatures = document.getElementById('modalFeatures');
        const modalTech = document.getElementById('modalTech');
        const modalGithub = document.getElementById('modalGithub');
        
        // Reset screenshot gallery to first image
        resetScreenshotGallery();

        if (projectType === 'ai-chatbot') {
            modalTitle.textContent = 'AI SMS Chatbot for Agricultural Advice';
            modalDescription.textContent = 'An innovative Twilio-based SMS platform that provides real-time agricultural expertise to farmers. Users can text questions about crop diseases, pests, or farming techniques and receive AI-generated responses in multiple languages including Swahili and English. The system handles real SMS conversations through Twilio\'s API, providing instant agricultural support to farmers in rural areas.';
            
            modalFeatures.innerHTML = `
                <li>Multi-language support (Swahili/English)</li>
                <li>AI-powered agricultural expertise</li>
                <li>Twilio SMS API integration</li>
                <li>Real-time query resolution for farmers</li>
                <li>Scalable architecture for multiple users</li>
                <li>Secure data handling and privacy protection</li>
                <li>Automated response system with AI intelligence</li>
            `;
            
            modalTech.innerHTML = `
                <span class="tech-tag">Python</span>
                <span class="tech-tag">Twilio API</span>
                <span class="tech-tag">SMS Integration</span>
                <span class="tech-tag">AI/ML</span>
                <span class="tech-tag">Swahili NLP</span>
                <span class="tech-tag">RESTful APIs</span>
                <span class="tech-tag">Cloud Deployment</span>
            `;
            
            modalGithub.href = 'https://github.com/sylviaadoyo77/AI-SMS-chatbot-for-agricultural-advice';
            
            // Show agricultural-specific caption
            document.querySelector('.screenshot-caption').textContent = 'Twilio SMS interface showing real agricultural Q&A with farmers';
            
        } else if (projectType === 'pharmacy') {
            modalTitle.textContent = 'Pharmacy Management System';
            modalDescription.textContent = 'A comprehensive pharmacy management solution designed to streamline medication inventory, patient records, and sales operations. This system provides a complete solution for pharmacy operations with features for inventory tracking, patient management, and sales reporting. The application includes secure user authentication and an intuitive interface for efficient pharmacy management.';
            
            modalFeatures.innerHTML = `
                <li>Inventory management & tracking</li>
                <li>Patient records management</li>
                <li>Sales and billing system</li>
                <li>Secure user authentication</li>
                <li>Reporting and analytics</li>
                <li>Supplier and vendor management</li>
                <li>Prescription tracking</li>
            `;
            
            modalTech.innerHTML = `
                <span class="tech-tag">Java</span>
                <span class="tech-tag">MySQL</span>
                <span class="tech-tag">Swing GUI</span>
                <span class="tech-tag">Database Design</span>
                <span class="tech-tag">OOP</span>
                <span class="tech-tag">JDBC</span>
            `;
            
            modalGithub.href = 'https://github.com/sylviaadoyo77/pharmacy-project';
            
            // Hide screenshot for pharmacy project (no screenshot available)
            document.querySelector('.modal-images').style.display = 'none';
        }
    }

    function resetScreenshotGallery() {
        // Show the first screenshot and hide navigation if only one image
        document.querySelector('.screenshot-item').classList.add('active');
        document.querySelector('.modal-images').style.display = 'block';
        
        // Disable navigation buttons since we only have one screenshot
        document.querySelector('.prev-btn').disabled = true;
        document.querySelector('.next-btn').disabled = true;
    }
}
});