// Y2K Kawaii Dreamland Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Add sparkle trail effect on mouse move
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create sparkle trail occasionally
        if (Math.random() < 0.15) {
            createSparkleTrail(mouseX, mouseY);
        }
    });
    
    function createSparkleTrail(x, y) {
        const sparkle = document.createElement('div');
        const iconType = Math.random() < 0.5 ? 'sparkles' : 'star';
        sparkle.innerHTML = `<i data-lucide="${iconType}"></i>`;
        sparkle.style.position = 'fixed';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.fontSize = (Math.random() * 15 + 10) + 'px';
        sparkle.style.zIndex = '1000';
        sparkle.style.animation = 'sparkleTrail 2s ease-out forwards';
        sparkle.style.color = ['#FF69B4', '#87CEEB', '#DDA0DD', '#FFD700'][Math.floor(Math.random() * 4)];
        
        document.body.appendChild(sparkle);
        
        // Re-initialize Lucide icons for the new element
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.follow-button, .join-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            // Create sparkle burst
            for (let i = 0; i < 8; i++) {
                createSparkleBurst(this);
            }
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    function createSparkleBurst(element) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '<i data-lucide="sparkles"></i>';
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = '16px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        
        const rect = element.getBoundingClientRect();
        sparkle.style.left = (rect.left + rect.width / 2) + 'px';
        sparkle.style.top = (rect.top + rect.height / 2) + 'px';
        
        document.body.appendChild(sparkle);
        
        // Re-initialize Lucide icons for the new element
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        // Animate sparkle
        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 60;
        const duration = 1000 + Math.random() * 500;
        
        sparkle.animate([
            { 
                transform: 'translate(0, 0) scale(0) rotate(0deg)',
                opacity: 1
            },
            { 
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1) rotate(360deg)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            sparkle.remove();
        };
    }
    
    // Add hover effects to social bubbles
    const socialBubbles = document.querySelectorAll('.social-bubble');
    socialBubbles.forEach(bubble => {
        bubble.addEventListener('mouseenter', function() {
            // Create floating sparkles
            for (let i = 0; i < 5; i++) {
                createFloatingSparkle(this);
            }
        });
        
        bubble.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create click sparkle burst
            for (let i = 0; i < 12; i++) {
                createSparkleBurst(this);
            }
            
            // Show coming soon message
            showKawaiiMessage('coming soon! ✨');
        });
    });
    
    function createFloatingSparkle(element) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '<i data-lucide="sparkles"></i>';
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = '12px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        
        const rect = element.getBoundingClientRect();
        sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        
        document.body.appendChild(sparkle);
        
        // Re-initialize Lucide icons for the new element
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        sparkle.animate([
            { 
                transform: 'translateY(0px) scale(0)',
                opacity: 0
            },
            { 
                transform: 'translateY(-30px) scale(1)',
                opacity: 1
            },
            { 
                transform: 'translateY(-60px) scale(0)',
                opacity: 0
            }
        ], {
            duration: 2000,
            easing: 'ease-out'
        }).onfinish = () => {
            sparkle.remove();
        };
    }
    
    // Add hover effects to retro windows
    const windows = document.querySelectorAll('.retro-window');
    windows.forEach(window => {
        window.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0,0,0,0.3)';
            
            // Add sparkle effect
            createWindowSparkles(this);
        });
        
        window.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
        });
        
        window.addEventListener('click', function() {
            // Create click effect
            this.style.animation = 'window-click 0.3s ease-out';
            
            setTimeout(() => {
                this.style.animation = 'window-float 4s ease-in-out infinite';
            }, 300);
        });
    });
    
    function createWindowSparkles(element) {
        for (let i = 0; i < 3; i++) {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '<i data-lucide="sparkles"></i>';
            sparkle.style.position = 'absolute';
            sparkle.style.fontSize = '14px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '1000';
            
            const rect = element.getBoundingClientRect();
            sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
            sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
            
            document.body.appendChild(sparkle);
            
            // Re-initialize Lucide icons for the new element
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
            
            sparkle.animate([
                { 
                    transform: 'scale(0) rotate(0deg)',
                    opacity: 0
                },
                { 
                    transform: 'scale(1) rotate(180deg)',
                    opacity: 1
                },
                { 
                    transform: 'scale(0) rotate(360deg)',
                    opacity: 0
                }
            ], {
                duration: 1500,
                easing: 'ease-out'
            }).onfinish = () => {
                sparkle.remove();
            };
        }
    }
    
    // Add hover effects to icon items
    const iconItems = document.querySelectorAll('.icon-item');
    iconItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Create floating effect
            this.style.transform = 'translateY(-8px) scale(1.05)';
            
            // Add sparkle effect
            createIconSparkles(this);
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    function createIconSparkles(element) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '<i data-lucide="sparkles"></i>';
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = '16px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        
        const rect = element.getBoundingClientRect();
        sparkle.style.left = (rect.left + rect.width / 2) + 'px';
        sparkle.style.top = (rect.top + rect.height / 2) + 'px';
        
        document.body.appendChild(sparkle);
        
        // Re-initialize Lucide icons for the new element
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        sparkle.animate([
            { 
                transform: 'translate(-50%, -50%) scale(0)',
                opacity: 0
            },
            { 
                transform: 'translate(-50%, -50%) scale(1.5)',
                opacity: 1
            },
            { 
                transform: 'translate(-50%, -50%) scale(0)',
                opacity: 0
            }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => {
            sparkle.remove();
        };
    }
    
    // Add random sparkle generation
    setInterval(() => {
        if (Math.random() < 0.2) {
            createRandomSparkle();
        }
    }, 3000);
    
    function createRandomSparkle() {
        const sparkle = document.createElement('div');
        const iconType = Math.random() < 0.5 ? 'sparkles' : 'star';
        sparkle.innerHTML = `<i data-lucide="${iconType}"></i>`;
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.fontSize = (Math.random() * 20 + 15) + 'px';
        sparkle.style.zIndex = '1000';
        sparkle.style.animation = 'randomSparkle 4s ease-out forwards';
        sparkle.style.opacity = '0.8';
        sparkle.style.color = ['#FF69B4', '#87CEEB', '#DDA0DD', '#FFD700', '#FFB6C1'][Math.floor(Math.random() * 5)];
        
        document.body.appendChild(sparkle);
        
        // Re-initialize Lucide icons for the new element
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        setTimeout(() => {
            sparkle.remove();
        }, 4000);
    }
    
    // Add parallax effect to floating shapes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const floatingShapes = document.querySelectorAll('.floating-star, .floating-heart, .floating-bear, .floating-cloud');
        
        floatingShapes.forEach((element, index) => {
            const speed = 0.3 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Add click effect to character
    const character = document.querySelector('.character');
    if (character) {
        character.addEventListener('click', function() {
            // Create character sparkle burst
            for (let i = 0; i < 15; i++) {
                createSparkleBurst(this);
            }
            
            // Add character bounce
            this.style.animation = 'character-bounce 0.5s ease-out';
            
            setTimeout(() => {
                this.style.animation = 'character-bounce 4s ease-in-out infinite';
            }, 500);
        });
    }
    
    // Add hover effect to water bottle
    const waterBottle = document.querySelector('.water-bottle');
    if (waterBottle) {
        waterBottle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            
            // Create bubble effect
            for (let i = 0; i < 5; i++) {
                createBubble(this);
            }
        });
        
        waterBottle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    function createBubble(element) {
        const bubble = document.createElement('div');
        bubble.innerHTML = '<i data-lucide="droplet"></i>';
        bubble.style.position = 'absolute';
        bubble.style.fontSize = '12px';
        bubble.style.pointerEvents = 'none';
        bubble.style.zIndex = '1000';
        
        const rect = element.getBoundingClientRect();
        bubble.style.left = (rect.left + rect.width / 2) + 'px';
        bubble.style.top = (rect.top + rect.height / 2) + 'px';
        
        document.body.appendChild(bubble);
        
        // Re-initialize Lucide icons for the new element
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        bubble.animate([
            { 
                transform: 'translateY(0px) scale(0)',
                opacity: 0
            },
            { 
                transform: 'translateY(-20px) scale(1)',
                opacity: 1
            },
            { 
                transform: 'translateY(-40px) scale(0)',
                opacity: 0
            }
        ], {
            duration: 1500,
            easing: 'ease-out'
        }).onfinish = () => {
            bubble.remove();
        };
    }
    
    // Utility function to show kawaii messages
    function showKawaiiMessage(text) {
        const message = document.createElement('div');
        message.textContent = text;
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.background = 'linear-gradient(135deg, #FF69B4, #DDA0DD)';
        message.style.color = 'white';
        message.style.padding = '20px 30px';
        message.style.borderRadius = '25px';
        message.style.fontSize = '18px';
        message.style.fontWeight = '600';
        message.style.zIndex = '10000';
        message.style.animation = 'kawaiiMessagePop 2s ease-out forwards';
        message.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)';
        message.style.border = '3px solid rgba(255, 255, 255, 0.3)';
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 2000);
    }
    
    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkleTrail {
            0% {
                opacity: 1;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 0.8;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0.5) rotate(360deg);
            }
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes randomSparkle {
            0% {
                opacity: 0;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0.5) rotate(360deg);
            }
        }
        
        @keyframes window-click {
            0% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-5px) scale(0.98); }
            100% { transform: translateY(0px) scale(1); }
        }
        
        @keyframes kawaiiMessagePop {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
            }
            20% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.1);
            }
            80% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('✨ Y2K Kawaii Dreamland Loaded! ✨');
    console.log('🎀 All sparkly interactions are ready! 🎀');
    console.log('💖 Click everything for magical effects! 💖');
});