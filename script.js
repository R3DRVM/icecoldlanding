// Y2K Kawaii Dreamland Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Enhanced magical wand-like sparkle trail effect
    let mouseX = 0, mouseY = 0;
    let lastMouseX = 0, lastMouseY = 0;
    let mouseVelocity = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Calculate mouse velocity for dynamic effects
        const deltaX = mouseX - lastMouseX;
        const deltaY = mouseY - lastMouseY;
        mouseVelocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        // Optimized cursor sparkle trail - much less frequent
        const sparkleChance = Math.min(0.05 + mouseVelocity * 0.002, 0.15);
        if (Math.random() < sparkleChance) {
            createMagicalSparkleTrail(mouseX, mouseY, mouseVelocity);
        }
        
        // Optimized magical burst - only on very fast movement
        if (mouseVelocity > 60) {
            createMagicalBurst(mouseX, mouseY);
        }
        
        lastMouseX = mouseX;
        lastMouseY = mouseY;
    });
    
    function createMagicalSparkleTrail(x, y, velocity) {
        const sparkle = document.createElement('div');
        
        // More magical icon types
        const iconTypes = ['star', 'snowflake'];
        const iconType = iconTypes[Math.floor(Math.random() * iconTypes.length)];
        sparkle.innerHTML = `<i data-lucide="${iconType}"></i>`;
        
        sparkle.style.position = 'fixed';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.pointerEvents = 'none';
        
        // Dynamic sizing based on velocity
        const baseSize = 12;
        const velocitySize = Math.min(velocity * 0.3, 15);
        sparkle.style.fontSize = (baseSize + velocitySize) + 'px';
        
        sparkle.style.zIndex = '1000';
        sparkle.style.animation = 'magicalSparkleTrail 2.5s ease-out forwards';
        
        // Enhanced magical colors
        const magicalColors = [
            '#FF69B4', '#87CEEB', '#DDA0DD', '#FFD700', 
            '#FFB6C1', '#E6E6FA', '#F0E68C', '#98FB98',
            '#FFA07A', '#20B2AA', '#FF6347', '#9370DB'
        ];
        sparkle.style.color = magicalColors[Math.floor(Math.random() * magicalColors.length)];
        
        // Add magical glow effect
        sparkle.style.filter = 'drop-shadow(0 0 8px currentColor)';
        sparkle.style.textShadow = '0 0 10px currentColor';
        
        document.body.appendChild(sparkle);
        
        // Re-initialize Lucide icons for the new element
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        setTimeout(() => {
            sparkle.remove();
        }, 2500);
    }
    
    function createMagicalBurst(x, y) {
        // Create multiple sparkles in a burst pattern
        for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                const angle = (i / 8) * Math.PI * 2;
                const distance = Math.random() * 30 + 10;
                const burstX = x + Math.cos(angle) * distance;
                const burstY = y + Math.sin(angle) * distance;
                createMagicalSparkleTrail(burstX, burstY, 25);
            }, i * 30);
        }
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
            for (let i = 0; i < 4; i++) {
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
    
    // Disabled hover effects for better performance
    // const socialBubbles = document.querySelectorAll('.social-bubble');
    // socialBubbles.forEach(bubble => {
    //     bubble.addEventListener('mouseenter', function() {
    //         // Create floating sparkles
    //         for (let i = 0; i < 2; i++) {
    //             createFloatingSparkle(this);
    //         }
    //     });
    //     
    //     bubble.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         
    //         // Create click sparkle burst
    //         for (let i = 0; i < 6; i++) {
    //             createSparkleBurst(this);
    //         }
    //         
    //         // Show coming soon message
    //         showKawaiiMessage('coming soon! ✨');
    //     });
    // });
    
    // Disabled hover effects for better performance
    // const socialItems = document.querySelectorAll('.social-item');
    // socialItems.forEach(item => {
    //     item.addEventListener('mouseenter', function() {
    //         // Create floating sparkles
    //         for (let i = 0; i < 1; i++) {
    //             createFloatingSparkle(this);
    //         }
    //     });
    //     
    //     item.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         
    //         // Create click sparkle burst
    //         for (let i = 0; i < 4; i++) {
    //             createSparkleBurst(this);
    //         }
    //         
    //         // Show coming soon message
    //         showKawaiiMessage('coming soon! ✨');
    //     });
    // });
    
    // Add hover effects to navigation buttons
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // Create floating sparkles
            for (let i = 0; i < 2; i++) {
                createFloatingSparkle(this);
            }
        });
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create click sparkle burst
            for (let i = 0; i < 6; i++) {
                createSparkleBurst(this);
            }
            
            // Show coming soon message
            showKawaiiMessage('coming soon! ✨');
        });
    });
    
    // Add hover effects to message inputs
    const messageInputs = document.querySelectorAll('.message-input');
    messageInputs.forEach(input => {
        input.addEventListener('mouseenter', function() {
            // Create floating sparkles
            for (let i = 0; i < 2; i++) {
                createFloatingSparkle(this);
            }
        });
        
        input.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create click sparkle burst
            for (let i = 0; i < 5; i++) {
                createSparkleBurst(this);
            }
            
            // Show coming soon message
            showKawaiiMessage('coming soon! ✨');
        });
    });
    
    // Add hover effects to banners
    const banners = document.querySelectorAll('.banner');
    banners.forEach(banner => {
        banner.addEventListener('mouseenter', function() {
            // Create floating sparkles
            for (let i = 0; i < 1; i++) {
                createFloatingSparkle(this);
            }
        });
        
        banner.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create click sparkle burst
            for (let i = 0; i < 4; i++) {
                createSparkleBurst(this);
            }
            
            // Show coming soon message
            showKawaiiMessage('coming soon! ✨');
        });
    });
    
    // Add hover effects to about icon items
    const aboutIconItems = document.querySelectorAll('.about-icon-item');
    aboutIconItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Create floating sparkles
            for (let i = 0; i < 1; i++) {
                createFloatingSparkle(this);
            }
        });
        
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create click sparkle burst
            for (let i = 0; i < 6; i++) {
                createSparkleBurst(this);
            }
            
            // Show coming soon message
            showKawaiiMessage('coming soon! ✨');
        });
    });
    
    // Add hover effects to profile image
    const profileImage = document.querySelector('.main-profile-image');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', function() {
            // Create floating sparkles
            for (let i = 0; i < 2; i++) {
                createFloatingSparkle(this);
            }
        });
        
        profileImage.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create click sparkle burst
            for (let i = 0; i < 5; i++) {
                createSparkleBurst(this);
            }
            
            // Show coming soon message
            showKawaiiMessage('icybear says hi! ❄️');
        });
    }
    
    // Add hover effects to social icon circles
    const socialIconCircles = document.querySelectorAll('.social-icon-circle');
    socialIconCircles.forEach(circle => {
        circle.addEventListener('mouseenter', function() {
            // Create floating sparkles
            for (let i = 0; i < 1; i++) {
                createFloatingSparkle(this);
            }
        });
        
        circle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create click sparkle burst
            for (let i = 0; i < 4; i++) {
                createSparkleBurst(this);
            }
            
            // Show coming soon message
            showKawaiiMessage('coming soon! ✨');
        });
    });
    
    // Add hover effects to schedule items
    const scheduleItems = document.querySelectorAll('.schedule-item');
    scheduleItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Create floating sparkles
            for (let i = 0; i < 2; i++) {
                createFloatingSparkle(this);
            }
        });
        
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create click sparkle burst
            for (let i = 0; i < 5; i++) {
                createSparkleBurst(this);
            }
            
            // Show coming soon message
            showKawaiiMessage('stream coming soon! ❄️');
        });
    });
    
    // Add hover effects to countdown numbers
    const countdownNumbers = document.querySelectorAll('.countdown-number');
    countdownNumbers.forEach(number => {
        number.addEventListener('mouseenter', function() {
            // Create floating sparkles
            for (let i = 0; i < 1; i++) {
                createFloatingSparkle(this);
            }
        });
        
        number.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create click sparkle burst
            for (let i = 0; i < 6; i++) {
                createSparkleBurst(this);
            }
            
            // Show coming soon message
            showKawaiiMessage('countdown active! ⏰');
        });
    });
    
    // Add hover effects to border VTuber images
    const borderImages = document.querySelectorAll('.border-image');
    borderImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            // Create floating sparkles
            for (let i = 0; i < 4; i++) {
                createFloatingSparkle(this);
            }
        });
        
        image.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create click sparkle burst
            for (let i = 0; i < 4; i++) {
                createSparkleBurst(this);
            }
            
            // Show coming soon message
            showKawaiiMessage('icybear spotted! 🐻❄️');
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
        @keyframes magicalSparkleTrail {
            0% { 
                opacity: 1; 
                transform: scale(1) rotate(0deg) translateY(0);
                filter: drop-shadow(0 0 8px currentColor) brightness(1);
            }
            25% { 
                opacity: 0.9; 
                transform: scale(1.2) rotate(90deg) translateY(-5px);
                filter: drop-shadow(0 0 12px currentColor) brightness(1.2);
            }
            50% { 
                opacity: 0.7; 
                transform: scale(1.1) rotate(180deg) translateY(-10px);
                filter: drop-shadow(0 0 15px currentColor) brightness(1.1);
            }
            75% { 
                opacity: 0.4; 
                transform: scale(0.8) rotate(270deg) translateY(-15px);
                filter: drop-shadow(0 0 10px currentColor) brightness(0.8);
            }
            100% { 
                opacity: 0; 
                transform: scale(0.3) rotate(360deg) translateY(-25px);
                filter: drop-shadow(0 0 5px currentColor) brightness(0.5);
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
    
    // Meme Cycling Functionality
    const memeImages = [
        'assets/memes/be nice copy.png',
        'assets/memes/competition copy.png',
        'assets/memes/do not estimate me copy.png',
        'assets/memes/friendmaxxing copy.png',
        'assets/memes/full of love copy.png',
        'assets/memes/gangsta like me.png',
        'assets/memes/its all about copy.png',
        'assets/memes/love note copy.png',
        'assets/memes/mog mode copy.png',
        'assets/memes/N copy.png',
        'assets/memes/normalize the void copy.png',
        'assets/memes/rly proud of u copy.png',
        'assets/memes/shooting you copy.png',
        'assets/memes/ticker icy copy.png',
        'assets/memes/trade offer copy.png',
        'assets/memes/version of yourself copy.png',
        'assets/memes/absolute cinema copy.png',
        'assets/memes/get a load of this guy copy.png',
        'assets/memes/no copy.png'
    ];
    
    const memeImage = document.getElementById('memeImage');
    const memeButton = document.getElementById('memeButton');
    
    function getRandomMeme() {
        const randomIndex = Math.floor(Math.random() * memeImages.length);
        return memeImages[randomIndex];
    }
    
    function showNewMeme() {
        const newMemeSrc = getRandomMeme();
        
        // Add fade out effect
        memeImage.style.opacity = '0';
        
        setTimeout(() => {
            memeImage.src = newMemeSrc;
            memeImage.style.opacity = '1';
        }, 200);
        
        // Create sparkle burst effect
        for (let i = 0; i < 8; i++) {
            createSparkleBurst(memeButton);
        }
        
        // Show kawaii message
        showKawaiiMessage('new meme unlocked! ✨');
    }
    
    if (memeButton) {
        memeButton.addEventListener('click', showNewMeme);
    }
    
    if (memeImage) {
        memeImage.addEventListener('click', showNewMeme);
    }
    
    // Auto-cycle memes every 10 seconds
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance to auto-cycle
            showNewMeme();
        }
    }, 10000);
    
    // VTuber Image Cycling Functionality
    const vtuberImages = [
        'assets/vtuber assets/nyoom.png',
        'assets/vtuber assets/screenshot_20250716133155292.png',
        'assets/vtuber assets/screenshot_20250716150739968.png',
        'assets/vtuber assets/screenshot_20250716150945323.png',
        'assets/vtuber assets/screenshot_20250716151016782.png',
        'assets/vtuber assets/screenshot_20250716151525193.png',
        'assets/vtuber assets/screenshot_20250716151624222.png',
        'assets/vtuber assets/screenshot_20250716151726340.png',
        'assets/vtuber assets/screenshot_20250716151916790.png',
        'assets/vtuber assets/screenshot_20250728153209004.png',
        'assets/vtuber assets/screenshot_20250728153228474.png',
        'assets/vtuber assets/screenshot_20250729092153524.png',
        'assets/vtuber assets/screenshot_20250731113132378.png',
        'assets/vtuber assets/screenshot_20250731113148117.png',
        'assets/vtuber assets/screenshot_20250804122644209.png',
        'assets/vtuber assets/screenshot_20250804122732782.png',
        'assets/vtuber assets/screenshot_20250805122610866.png',
        'assets/vtuber assets/screenshot_20250808113041093.png',
        'assets/vtuber assets/screenshot_20250810160428566.png',
        'assets/vtuber assets/screenshot_20250916233701640.png',
        'assets/vtuber assets/screenshot_20250916234154839.png',
        'assets/vtuber assets/screenshot_20250917001157143.png',
        'assets/vtuber assets/screenshot_20250917001441012.png',
        'assets/vtuber assets/screenshot_20250917001716443.png',
        'assets/vtuber assets/screenshot_20250917002917876.png',
        'assets/vtuber assets/screenshot_20250917003137123.png',
        'assets/vtuber assets/screenshot_20250917010509065.png',
        'assets/vtuber assets/screenshot_20250920075726143.png',
        'assets/vtuber assets/screenshot_20250920080830428.png',
        'assets/vtuber assets/screenshot_20250920091252731.png',
        'assets/vtuber assets/screenshot_20250920092130937.png'
    ];
    
    const vtuberImage1 = document.getElementById('vtuberImage1');
    const vtuberImage2 = document.getElementById('vtuberImage2');
    const vtuberImage3 = document.getElementById('vtuberImage3');
    
    function getRandomVtuberImage() {
        const randomIndex = Math.floor(Math.random() * vtuberImages.length);
        return vtuberImages[randomIndex];
    }
    
    function cycleVtuberImages() {
        // Check if elements exist
        if (!vtuberImage1 || !vtuberImage2 || !vtuberImage3) {
            return;
        }
        
        // Get three different random images
        let image1Src = getRandomVtuberImage();
        let image2Src = getRandomVtuberImage();
        let image3Src = getRandomVtuberImage();
        
        // Ensure all three images are different
        while (image2Src === image1Src) {
            image2Src = getRandomVtuberImage();
        }
        while (image3Src === image1Src || image3Src === image2Src) {
            image3Src = getRandomVtuberImage();
        }
        
        // Add fade effect
        [vtuberImage1, vtuberImage2, vtuberImage3].forEach(img => {
            img.style.opacity = '0';
        });
        
        setTimeout(() => {
            vtuberImage1.src = image1Src;
            vtuberImage2.src = image2Src;
            vtuberImage3.src = image3Src;
            
            [vtuberImage1, vtuberImage2, vtuberImage3].forEach(img => {
                img.style.opacity = '1';
            });
        }, 200);
        
        // Create sparkle burst effect
        for (let i = 0; i < 6; i++) {
            createSparkleBurst(vtuberImage1);
        }
    }
    
    // Add click functionality to VTuber images
    if (vtuberImage1) {
        vtuberImage1.addEventListener('click', cycleVtuberImages);
    }
    if (vtuberImage2) {
        vtuberImage2.addEventListener('click', cycleVtuberImages);
    }
    if (vtuberImage3) {
        vtuberImage3.addEventListener('click', cycleVtuberImages);
    }
    
    // Auto-cycle VTuber images every 15 seconds
    setInterval(() => {
        if (Math.random() < 0.4) { // 40% chance to auto-cycle
            cycleVtuberImages();
        }
    }, 15000);
    
    // Make function globally accessible for test button
    window.cycleVtuberImages = cycleVtuberImages;
    
    // Smol Poses Cycling Functionality
    const smolPosesImages = [
        'assets/smol poses for site/display1 copy.png',
        'assets/smol poses for site/display2 copy.png',
        'assets/smol poses for site/screenshot_20250716150945323 copy.png',
        'assets/smol poses for site/screenshot_20250716151624222 copy.png',
        'assets/smol poses for site/screenshot_20250716151916790 copy.png',
        'assets/smol poses for site/screenshot_20250728153228474 copy.png',
        'assets/smol poses for site/screenshot_20250729092153524 copy.png',
        'assets/smol poses for site/screenshot_20250804122732782 copy.png',
        'assets/smol poses for site/screenshot_20250808113041093 copy.png',
        'assets/smol poses for site/screenshot_20250917001157143 copy.png',
        'assets/smol poses for site/screenshot_20250917001716443 copy.png',
        'assets/smol poses for site/screenshot_20250920080830428 copy.png',
        'assets/smol poses for site/screenshot_20251003121737306 copy.png'
    ];
    
    const floatingVtuberImages = document.querySelectorAll('.floating-vtuber img');
    
    function getRandomSmolPose() {
        const randomIndex = Math.floor(Math.random() * smolPosesImages.length);
        return smolPosesImages[randomIndex];
    }
    
    function cycleSmolPoses() {
        floatingVtuberImages.forEach(img => {
            const newPoseSrc = getRandomSmolPose();
            
            // Add fade effect
            img.style.opacity = '0';
            
            setTimeout(() => {
                img.src = newPoseSrc;
                img.style.opacity = '1';
            }, 200);
        });
        
        // Create sparkle burst effect
        floatingVtuberImages.forEach(img => {
            for (let i = 0; i < 3; i++) {
                createSparkleBurst(img);
            }
        });
    }
    
    // Auto-cycle smol poses every 20 seconds
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance to auto-cycle
            cycleSmolPoses();
        }
    }, 20000);
    
    // Make function globally accessible
    window.cycleSmolPoses = cycleSmolPoses;
    
    // Stay Hydrated Popup Functionality
    const hydrationPopup = document.getElementById('hydrationPopup');
    const closeHydrationPopup = document.getElementById('closeHydrationPopup');
    const dismissHydration = document.getElementById('dismissHydration');
    
    function showHydrationPopup() {
        hydrationPopup.classList.add('show');
        
        // Create sparkle burst effect
        for (let i = 0; i < 12; i++) {
            createSparkleBurst(hydrationPopup);
        }
    }
    
    function hideHydrationPopup() {
        hydrationPopup.classList.remove('show');
    }
    
    if (closeHydrationPopup) {
        closeHydrationPopup.addEventListener('click', hideHydrationPopup);
    }
    
    if (dismissHydration) {
        dismissHydration.addEventListener('click', hideHydrationPopup);
    }
    
    // Show hydration popup after 5 seconds
    setTimeout(() => {
        showHydrationPopup();
    }, 5000);
    
    // Show hydration popup every 2 minutes
    setInterval(() => {
        if (Math.random() < 0.5) { // 50% chance
            showHydrationPopup();
        }
    }, 120000);

    console.log('✨ Y2K Kawaii Dreamland Loaded! ✨');
    console.log('🎀 All sparkly interactions are ready! 🎀');
    console.log('💖 Click everything for magical effects! 💖');
    console.log('🎭 Meme cycling is active! 🎭');
});
    // Frost Cursor Effect
    let frostCursor = null;
    let frostTrails = [];
    let lastMouseX = 0;
    let lastMouseY = 0;
    let mouseVelocity = 0;
    
    function createFrostCursor() {
        frostCursor = document.createElement('div');
        frostCursor.className = 'frost-cursor';
        document.body.appendChild(frostCursor);
        
        // Create trail elements
        for (let i = 0; i < 5; i++) {
            const trail = document.createElement('div');
            trail.className = 'frost-cursor-trail';
            frostTrails.push(trail);
            document.body.appendChild(trail);
        }
    }
    
    function updateFrostCursor(e) {
        if (!frostCursor) return;
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Calculate velocity for dynamic effects
        const deltaX = mouseX - lastMouseX;
        const deltaY = mouseY - lastMouseY;
        mouseVelocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        // Update main cursor
        frostCursor.style.left = mouseX - 10 + 'px';
        frostCursor.style.top = mouseY - 10 + 'px';
        
        // Scale cursor based on velocity
        const scale = Math.min(1 + mouseVelocity * 0.01, 1.5);
        frostCursor.style.transform = `scale(${scale})`;
        
        // Update trails with delay
        frostTrails.forEach((trail, index) => {
            const delay = (index + 1) * 0.05;
            setTimeout(() => {
                trail.style.left = mouseX - 3 + 'px';
                trail.style.top = mouseY - 3 + 'px';
                trail.style.opacity = Math.max(0.1, 1 - (index * 0.2));
            }, delay * 1000);
        });
        
        // Create frost particles occasionally
        if (Math.random() < 0.3) {
            createFrostParticle(mouseX, mouseY);
        }
        
        lastMouseX = mouseX;
        lastMouseY = mouseY;
    }
    
    function createFrostParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'frost-particle frost-particle-float';
        particle.style.left = x + (Math.random() - 0.5) * 20 + 'px';
        particle.style.top = y + (Math.random() - 0.5) * 20 + 'px';
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1500);
    }
    
    function hideFrostCursor() {
        if (frostCursor) {
            frostCursor.style.opacity = '0';
        }
        frostTrails.forEach(trail => {
            trail.style.opacity = '0';
        });
    }
    
    function showFrostCursor() {
        if (frostCursor) {
            frostCursor.style.opacity = '1';
        }
        frostTrails.forEach(trail => {
            trail.style.opacity = '1';
        });
    }
    
    // Initialize frost cursor
    createFrostCursor();
    
    // Add event listeners
    document.addEventListener('mousemove', updateFrostCursor);
