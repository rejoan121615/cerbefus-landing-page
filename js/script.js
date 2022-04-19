// const anchoreTag = document.querySelectorAll("a");

// anchoreTag.forEach((a) => {
//     a.onclick = (event) => {
//         event.preventDefault();
//     };
// });

// responsive nav bar
const respBtn = document.querySelector("#resp-nav-btn");

let condition = true;
const navbar = document.querySelector("header .nav-wrap");
respBtn.onclick = function () {
    if (condition) {
        navbar.style.height = "290px";
        condition = false;
    } else {
        navbar.style.height = "0px";
        condition = true;
    }
};

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
    const animate = gsap
        .timeline()
        .to("#main", {
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
            "header",
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
    tl.add(animate);

    // ScrollTrigger.create({
    //     animation: tl,
    //     trigger: "#main",
    //     markers: true,
    //     scrub: true,
    //     pin: true
    // })
}


function HomeAnimationXl() {
    const tl = gsap.timeline();

    // main
    const animate = gsap
        .timeline()
        .to("#main", {
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
            "header",
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
                onComplete: function () {
                    document.querySelector("body").style.overflowY = "scroll";
                }
            },
            "<"
        );
    tl.add(animate);
}



function homeBgParallexXl() {
    const tl = gsap.timeline();

    const animate = gsap.timeline().to("#bottom-left", {
        x: '-70%',
    }).to("#bottom-right", {
        x: "100%"
    }, "<").to("#top-right", {
        x: "100%",
        y: "100px"
    }, "<").to("#top-left", {
        x: "-100%",
        y: "100px"
    }, "<")

    tl.add(animate);

    ScrollTrigger.create({
        animation: tl,
        trigger: "#main",
        start: "center center",
        scrub: true
    });
}

// gsap.utils.toArray("#spark-animation svg g").forEach((round) => {
//     gsap.fromTo(
//         round,
//         {
//             x: 0,
//             y: 0,
//             scale: 0.7,
//         },
//         {
//             x: gsap.utils.random(25, 50),
//             y: gsap.utils.random(25, 50),
//             duration: 5,
//             scale: 1,
//             yoyo: true,
//             repeat: -1,
//             repeatRefresh: true,
//         }
//     );
// });

// function SparkAnimation() {
//     const tl = gsap.timeline();

//     tl.fromTo(
//         "#spark-animation svg g",
//         {
//             opacity: 0,
//         },
//         {
//             opacity: 1,
//             duration: 1.2,
//         }
//     );

//     return tl;
// }

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
                duration: 0.5,
                skewX: "0",
            }
        )
        .from("#about-cerberus .container .content-wrap .contents .para", {
            opacity: 0,
            y: "100%",
            stagger: 0.25,
            skewX: "-20deg",
            duration: 0.6,
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
        start: "center center",
    });
}

function aboutCerberusLg() {
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
                duration: 0.5,
                skewX: "0",
            }
        )
        .from("#about-cerberus .container .content-wrap .contents .para", {
            opacity: 0,
            y: "100%",
            stagger: 0.25,
            skewX: "-20deg",
            duration: 0.6,
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
        trigger: "#about-cerberus ",
        scrub: 2,
        start: "top bottom",
        end: "center center",
        pinnedContainer: "#about-cerberus",
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
                duration: 0.5,
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
                duration: 0.5,
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
                duration: 0.4,
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
                duration: 0.5,
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
                duration: 0.4,
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
                duration: 0.5,
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
                duration: 0.4,
            }
        );

    ScrollTrigger.create({
        animation: animate,
        trigger: "#crbrus-benefits ",
        scrub: true,
        pin: true,
    });
}

function crbrusBenefitsXl() {
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
                duration: 0.5,
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
                duration: 0.5,
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
                duration: 0.4,
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
                duration: 0.5,
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
                duration: 0.4,
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
                duration: 0.5,
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
                duration: 0.4,
            }
        );

    ScrollTrigger.create({
        animation: animate,
        trigger: "#crbrus-benefits ",
        scrub: true,
        pin: true,
        start: "center center"
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
                        `#project-roadmap .container .roadmap li:nth-child(${
                            1 + index
                        })`,
                        {
                            opacity: 0,
                            y: "-25px",
                            duration: 0.4,
                        }
                    )
                    .from(
                        `#project-roadmap .container .roadmap li:nth-child(${
                            1 + index
                        }) .line`,
                        {
                            opacity: 0,
                            y: "-45%",
                            duration: 0.4,
                        }
                    )
            );
        });

    tl.add(animate);

    ScrollTrigger.create({
        animation: tl,
        trigger: "#project-roadmap",
        pin: true,
        scrub: true,
    });
}

function joinCommunity() {
    const tl = gsap.timeline();

    const animation = gsap
        .timeline()
        .fromTo(
            "#join-cerberus .container .section-title",
            {
                lineHeight: "175%",
                opacity: 0,
                y: "100%",
            },
            {
                lineHeight: "110%",
                opacity: 1,
                duration: 0.5,
                y: "0%",
            }
        )
        .fromTo(
            "#join-cerberus .container .para",
            {
                lineHeight: "175%",
                opacity: 0,
                y: "50%",
            },
            {
                lineHeight: "140%",
                opacity: 1,
                duration: 0.5,
                y: "0%",
            }
        )
        .fromTo(
            "#join-cerberus .container .btn-wrap .btn-fill",
            {
                scale: 0,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
            }
        );

    tl.add(animation);

    ScrollTrigger.create({
        animation: tl,
        trigger: "#join-cerberus",
    });
}
function joinCommunityXl() {
    const tl = gsap.timeline();

    const animation = gsap
        .timeline()
        .fromTo(
            "#join-cerberus .container .section-title",
            {
                lineHeight: "175%",
                opacity: 0,
                y: "100%",
            },
            {
                lineHeight: "110%",
                opacity: 1,
                duration: 0.5,
                y: "0%",
            }
        )
        .fromTo(
            "#join-cerberus .container .para",
            {
                lineHeight: "175%",
                opacity: 0,
                y: "50%",
            },
            {
                lineHeight: "140%",
                opacity: 1,
                duration: 0.5,
                y: "0%",
            }
        )
        .fromTo(
            "#join-cerberus .container .btn-wrap .btn-fill",
            {
                scale: 0,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
            }
        );

    tl.add(animation);

    ScrollTrigger.create({
        animation: tl,
        trigger: "#join-cerberus",
        start: "top 60%",
        end: "50% center",
        scrub: true
    });
}

ScrollTrigger.matchMedia({
    "(max-width: 1199px)": function () {
        masterTl
            .add(HomeAnimation())
            .add(aboutCerberus())
            .add(crbrusBenefits())
            .add(projectRoadmap())
            .add(joinCommunity());
    },
    "(min-width: 1200px)": function () {
        masterTl
            .add(HomeAnimationXl())
            .add(homeBgParallexXl())
            .add(aboutCerberusLg())
            .add(crbrusBenefitsXl())
            .add(projectRoadmap())
            .add(joinCommunityXl());
    },
});

$(".section").scrollWatchMapTo("header .nav-item", null, {
    resolutionMode: "focus-line",
    viewMarginTop: 53,
});

// sticky navbar
window.onscroll = function () {
    myFunction();
};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
