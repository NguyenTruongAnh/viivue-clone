gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.matchMedia({
    // Pc
    "(min-width: 1024px)": function () {
        // Header
        gsap.timeline({
            scrollTrigger: {
                trigger: '.hero',
                start: '20% 50px',
                end: '20% 50px',
                markers: false,
                scrub: 1.5,
            }
        })
            .to(".header", { y: '-100%' })

        // Show
        gsap.timeline({
            scrollTrigger: {
                trigger: '.show',
                start: '-100px 70%',
                end: 'top 60%',
                markers: false,
                scrub: 2,
            }
        })
            .to(".hero-content", { opacity: 0.8, scale: 0.8 })
            .to(".hero-video", { opacity: 0.8, scale: 0.8 }, "<")

        // Work
        let workElementWidth = document.querySelector('.work-item').offsetWidth

        gsap.timeline({
            scrollTrigger: {
                trigger: '.work',
                start: 'center center',
                end: '200% top',
                markers: false,
                scrub: 1,
                pin: true,
            }
        })
            .from(".work-main__subheading", { y: "50%", opacity: 0 })
            .from(".work-main__heading", { y: "50%", opacity: 0 })
            .from(".work-main__btn", { y: "50%", opacity: 0 })
            
        gsap.timeline({
            scrollTrigger: {
                trigger: '.work',
                start: '50.1% center',
                end: '400% top',
                markers: false,
                scrub: 1,
                pin: true,
            }
        })   
            .to(".work-container", { x: `-${workElementWidth * 4.3}` })

        // Option
        gsap.timeline({
            scrollTrigger: {
                trigger: '.option',
                start: 'center center',
                end: '150% top',
                markers: false,
                scrub: true,
                pin: true,
            }
        })
            .to(".option-overlay__column1", { y: '-30vh' })
            .to(".option-overlay__column2", { y: '-30vh' })
            .to(".option-overlay__column3", { y: '-30vh' })
            .to(".option-overlay__column4", { y: '-30vh' })
            .to(".option-overlay__column5", { y: '-30vh' })
            .to(".option-overlay__column6", { y: '-30vh' })

        // Brand
        gsap.timeline({
            scrollTrigger: {
                trigger: '.brand',
                start: 'center center',
                end: '200% top',
                markers: false,
                scrub: 1,
                pin: true,
            }
        })
            .from(".brand-heading", { y: "20%", opacity: 0 })
            .from(".brand-image", { y: "20%", opacity: 0 })
            .from(".brand-list1", { x: -50, opacity: 0 })
            .from(".brand-list2", { x: 50, opacity: 0 }, "<")
    },

    // Tablet & Mobile
    "(max-width: 1023px)": function () {
        // Brand
        gsap.timeline({
            scrollTrigger: {
                trigger: '.brand',
                start: 'top center',
                end: 'bottom top',
                markers: false,
                scrub: 1,
            }
        })
            .to(".brand-list1", { x: 20 })
            .to(".brand-list2", { x: -20 }, "<")
    },
});

const toggleBtn = document.querySelector('.header-toggle')
const navHeaderMobile = document.querySelector('.header-nav-mobile')
const navHeaderMobileOverlay = document.querySelector('.header-nav-mobile__overlay')
const headerMain = document.querySelector('.header-main')

toggleBtn.addEventListener('click', function () {
    this.classList.toggle('active')
    navHeaderMobile.classList.toggle('active')
    headerMain.classList.toggle('active')
})

navHeaderMobileOverlay.addEventListener('click', function () {
    toggleBtn.classList.remove('active')
    navHeaderMobile.classList.remove('active')
    headerMain.classList.remove('active')
})
