const anchoreTag = document.querySelectorAll("a");

anchoreTag.forEach((a) => {
    a.onclick = (event) => {
        event.preventDefault();
    };
});

// gsap file
gsap.registerPlugin(ScrollTrigger);

gsap.set(
    " #main .section-wrap .main-all-content .main-section-header h1, #main .btn-wrap a , #main",
    {
        opacity: 0,
    }
);

// master timeline
const masterTl = gsap.timeline();

// home page animation
function HomeAnimation() {
    const tl = gsap.timeline();

    // main
    tl.to("#main", {
        opacity: 1,
        duration: 1.5,
        delay: 1,
    })
        .fromTo(
            "#main main .container .section-wrap .main-all-content .main-section-header h1",
            {
                opacity: 0,
                y: "100%",
                skewX: "-15deg",
            },
            {
                opacity: 1,
                y: "0%",
                duration: 0.8,
                stagger: 0.33,
                skewX: "0",
            }
        )
        .fromTo(
            "#main main .container .section-wrap .main-highlight-img img",
            {
                opacity: 1,
                clipPath: "circle(0% at 50% 50%)",
            },
            {
                clipPath: "circle(60% at 50% 50%)",
                duration: 1,
            }
        )
        .from(
            "#main main .container .section-wrap .main-all-content .para span",
            {
                opacity: 0,
                y: "100%",
                stagger: 0.25,
                skewX: "-20deg",
                duration: 0.8,
            }
        )
        .fromTo(
            "#main header",
            {
                y: "-100%",
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
            },
            "<"
        )
        .fromTo(
            "#main main .btn-wrap a",
            {
                opacity: 0,
                y: "40px",
            },
            {
                opacity: 1,
                duration: 0.6,
                y: "0",
            },
            "<"
        );

    return tl;
}

gsap.utils.toArray("#spark-animation svg g").forEach((round) => {
    gsap.fromTo(
        round,
        {
            x: 0,
            y: 0,
            scale: 0.7,
        },
        {
            x: gsap.utils.random(25, 50),
            y: gsap.utils.random(25, 50),
            duration: 5,
            scale: 1,
            yoyo: true,
            repeat: -1,
            repeatRefresh: true,
        }
    );
});

function SparkAnimation() {
    const tl = gsap.timeline();

    tl.fromTo(
        "#spark-animation svg g",
        {
            opacity: 0,
        },
        {
            opacity: 1,
            duration: 1.2,
        }
    );

    return tl;
}

function aboutCerberus() {
    const tl = gsap.timeline();

    const animate = gsap
        .timeline()
        .fromTo(
            "#about-cerberus",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1.2,
            }
        )
        .fromTo(
            "#about-cerberus .container .section-title",
            {
                opacity: 0,
                y: "100%",
                skewX: "-15deg",
            },
            {
                opacity: 1,
                y: "0%",
                duration: 0.8,
                skewX: "0",
            }
        )
        .from("#about-cerberus .container .content-wrap .contents .para", {
            opacity: 0,
            y: "100%",
            stagger: 0.25,
            skewX: "-20deg",
            duration: 0.8,
        })
        .fromTo(
            "#about-cerberus .container .content-wrap .btn-wrap .btn-fill",
            {
                opacity: 0,
                scale: 0,
            },
            {
                opacity: 1,
                scale: 1,
            }
        )
        .fromTo(
            "#about-cerberus #about-cerberus-animation .cerberus",
            {
                x: "-50%",
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
            }
        );

    tl.add(animate);

    ScrollTrigger.create({
        animation: tl,
        trigger: "#about-cerberus",
        pin: true,
        // start: "center center",
        scrub: true,
    });
}

function crbrusBenefits() {
    const tl = gsap.timeline();

    const animate = gsap
        .timeline()
        .fromTo(
            "#crbrus-benefits .container .section-title",
            {
                opacity: 0,
                y: "100%",
                skewX: "-15deg",
            },
            {
                opacity: 1,
                y: "0%",
                duration: 0.8,
                skewX: "0",
            }
        )
        .fromTo(
            "#crbrus-benefits .container .card-wrap div:nth-child(1) img",
            {
                opacity: 0,
                scale: 0,
                y: 100,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                y: 0,
            }
        )
        .fromTo(
            "#crbrus-benefits .container .card-wrap div:nth-child(1) h4",
            {
                y: 50,
                opacity: 0,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.3,
            }
        )
        .fromTo(
            "#crbrus-benefits .container .card-wrap div:nth-child(2) img",
            {
                opacity: 0,
                scale: 0,
                y: 100,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                y: 0,
            }
        )
        .fromTo(
            "#crbrus-benefits .container .card-wrap div:nth-child(2) h4",
            {
                y: 50,
                opacity: 0,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.3,
            }
        )
        .fromTo(
            "#crbrus-benefits .container .card-wrap div:nth-child(3) img",
            {
                opacity: 0,
                scale: 0,
                y: 100,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                y: 0,
            }
        )
        .fromTo(
            "#crbrus-benefits .container .card-wrap div:nth-child(3) h4",
            {
                y: 50,
                opacity: 0,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.3,
            }
        );

    ScrollTrigger.create({
        animation: animate,
        trigger: "#crbrus-benefits ",
        pin: true,
        start: "center center",
    });
}

function projectRoadmap() {
    const tl = gsap.timeline();

    const animate = gsap.timeline().fromTo(
        "#project-roadmap .container .section-title",
        {
            opacity: 0,
            y: "100%",
            skewX: "-15deg",
        },
        {
            opacity: 1,
            y: "0%",
            duration: 0.8,
            skewX: "0",
        }
    );

    gsap.utils
        .toArray("#project-roadmap .container .roadmap li")
        .forEach((item, index) => {
            animate.add(
                gsap
                    .timeline()
                    .from(
                        `#project-roadmap .container .roadmap li:nth-child(${1+index})`,
                        {
                            opacity: 0,
                            y: "-25px",
                            duration: 0.6,
                        }
                    )
                    .from(
                        `#project-roadmap .container .roadmap li:nth-child(${1+index}) .line`,
                        {
                            opacity: 0,
                            y: "-45%",
                        }
                    )
            );
        });

    // .from("#project-roadmap .container .roadmap li:nth-child(1)", {
    //     opacity: 0,
    //     y: "-25px",
    //     duration: 0.6,
    // })
    // .from("#project-roadmap .container .roadmap li:nth-child(1) .line", {
    //     opacity: 0,
    //     y: "-45%"
    // })

    tl.add(animate);

    ScrollTrigger.create({
        animation: tl,
        trigger: "#project-roadmap",
        markers: true,
        pin: true,
    });
}

masterTl
    // .add(HomeAnimation())
    // .add(SparkAnimation())
    // .add(aboutCerberus())
    // .add(crbrusBenefits())
    .add(projectRoadmap());
