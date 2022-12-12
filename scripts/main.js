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
gsap.timeline({
    scrollTrigger: {
        trigger: '.work',
        start: 'center center',
        end: '400% top',
        markers: false,
        scrub: 1,
        pin: true,
    }
})
.from(".work-main__subheading", { y: "50%", opacity: 0 })
.from(".work-main__heading", { y: "50%", opacity: 0 })
.from(".work-main__btn", { y: "50%", opacity: 0 })
.to(".work-container", { x: "-100%"})
.to(".work-container", { x: "-200%"})
.to(".work-container", { x: "-300%"})

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
.to(".option-overlay__column1", { y : '-30vh' })
.to(".option-overlay__column2", { y : '-30vh' })
.to(".option-overlay__column3", { y : '-30vh' })
.to(".option-overlay__column4", { y : '-30vh' })
.to(".option-overlay__column5", { y : '-30vh' })
.to(".option-overlay__column6", { y : '-30vh' })

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