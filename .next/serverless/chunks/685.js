"use strict";
exports.id = 685;
exports.ids = [685];
exports.modules = {

/***/ 50685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout1)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/metismenujs/dist/metismenujs.js
var metismenujs = __webpack_require__(91833);
var metismenujs_default = /*#__PURE__*/__webpack_require__.n(metismenujs);
;// CONCATENATED MODULE: ./layouts/MobileMenu.js





function MobileMenu() {
    (0,react.useEffect)(()=>{
        new (metismenujs_default())("#metismenu");
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
            className: "mobile-nav",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                className: "metismenu",
                id: "metismenu",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: "menu_has_children",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                children: "Home"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/about",
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                children: "About"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/service",
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                children: "Services"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/project",
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                children: "Projects & Testimonials"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/careers",
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                children: "Careers"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/contact",
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                children: "Contact"
                            })
                        })
                    })
                ]
            })
        })
    });
};
;
/*#__PURE__*/ jsx_runtime.jsx("nav", {
    id: "mobile-menu",
    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
        className: "metismenu",
        id: "metismenu",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                className: "menu_has_children",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            className: "has-arrow",
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        children: "Home Style 01"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/index-02",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        children: "Home Style 02"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/about",
                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                        children: "About"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "#",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            className: "has-arrow",
                            children: "Pages"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/team",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        children: "Team"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/pricing",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        children: "Pricing"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/faq",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        children: "Faq"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/team-details",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        children: "Team Details"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/service-details",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        children: "Service Details"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/project-details",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        children: "Project Details"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/privacy-policy",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        children: "Privacy Policy"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/service",
                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                        children: "Services"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/project",
                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                        children: "Project"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/news",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            className: "has-arrow",
                            children: "Article"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/news-details",
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    children: "Article Details"
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/contact",
                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                        children: "Contact"
                    })
                })
            })
        ]
    })
});

;// CONCATENATED MODULE: ./layouts/Header1.js




function Header1() {
    const { 0: isToggled , 1: setToggled  } = (0,react.useState)(false);
    const toggleTrueFalse = ()=>setToggled(!isToggled)
    ;
    const { 0: isSelect , 1: setSelect  } = (0,react.useState)("Eng");
    const { 0: isMobileMenu , 1: setMobileMenu  } = (0,react.useState)(false);
    const MobileMenuTrueFalse = ()=>setMobileMenu(!isMobileMenu)
    ;
    const { 0: scroll , 1: setScroll  } = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        window.addEventListener("scroll", ()=>{
            setScroll(window.scrollY > 100);
        });
    }, [
        scroll
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
            className: "header",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "header__top",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-lg-6 col-md-12 p-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        className: "header__info",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "telto:2202588-6500",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fa fa-phone-volume"
                                                            }),
                                                            " 632 8654 5029"
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "mailto:sales@happyprint.ph",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fal fa-envelope-open"
                                                            }),
                                                            "sales@happyprint.ph"
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-lg-6 col-md-12 my-auto p-0",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "social__links",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "https://www.facebook.com/HappyPrintPH/",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: `header__bottom ${scroll ? "sticky-header animated fadeInDown" : ""}`,
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xl-9 col-lg-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "navarea",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    className: "site-logo",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/images/logo/happyprintlogo.png",
                                                        alt: "LOGO",
                                                        width: "110"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "mainmenu d-none d-lg-block",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                                    id: "mobile-menu",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                className: "menu_has_children",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        children: "Home"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/about",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        children: "About"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/service",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        children: "Services"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/project",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        children: "Projects & Testimonials"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/careers",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        children: "Careers"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: "/contact",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        children: "Contact"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mobile-menu mean-container d-block d-lg-none ",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "mean-bar",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                onClick: MobileMenuTrueFalse,
                                                                href: "#nav",
                                                                className: isMobileMenu ? "meanmenu-reveal d-none" : "meanmenu-reveal",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {}),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {}),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {})
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                onClick: MobileMenuTrueFalse,
                                                                href: "#nav",
                                                                className: isMobileMenu ? "meanmenu-reveal" : "meanmenu-reveal d-none",
                                                                style: {
                                                                    "right": "0px",
                                                                    "left": "auto",
                                                                    "textAlign": "center",
                                                                    "textIndent": "0px",
                                                                    "fontSize": "18px"
                                                                },
                                                                children: "X"
                                                            })
                                                        ]
                                                    }),
                                                    isMobileMenu && /*#__PURE__*/ jsx_runtime.jsx(MobileMenu, {})
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xl-3 col-lg-2 my-auto",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "lang-quote",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/contact",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                className: "quote-btn",
                                                children: "Get a quote"
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./layouts/Footer.js


function Footer() {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
            className: "footer footer__2 pt-120",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row mt-none-50 justify-content-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-2 col-lg-3 mt-50",
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "index.html",
                                    className: "footer__logo",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/images/logo/happyprintlogo.png",
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-2 col-lg-4 mt-50 pl-45 pr-0",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "footer-widget footer-widget__2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "widget-title",
                                            children: "Our Service"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        href: "/service",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fa fa-angle-right"
                                                            }),
                                                            " Branding / Custom Design"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        href: "/service",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fa fa-angle-right"
                                                            }),
                                                            " Advertising / Fabrication"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        href: "/service",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fa fa-angle-right"
                                                            }),
                                                            " Graphic Design"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        href: "/service",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fa fa-angle-right"
                                                            }),
                                                            " Cutting Solutions"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        href: "/service",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fa fa-angle-right"
                                                            }),
                                                            " Large Format Printing"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        href: "/service",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fa fa-angle-right"
                                                            }),
                                                            " Offset Printing"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        href: "/service",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fa fa-angle-right"
                                                            }),
                                                            " Textile Printing"
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-3 col-lg-5 mt-50 pl-70 pr-0",
                                hidden: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "footer-widget footer-widget__2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "widget-title",
                                            children: "Recent News"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "recent-news mt-none-20",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "recent-news__content mt-20",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "news-details.html",
                                                            className: "recent-news__title",
                                                            children: "Rutrum felis facilisi lorem com modo habitasse portam"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "news-details.html",
                                                            className: "recent-news__date",
                                                            children: "Sep 20. 2020"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "recent-news__content mt-20",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "news-details.html",
                                                            className: "recent-news__title",
                                                            children: "Montes conubia alique vel nisl cras maecenas enim hac."
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "news-details.html",
                                                            className: "recent-news__date",
                                                            children: "Sep 21. 2020"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-4 offset-xl-1 col-lg-6 mt-50",
                                hidden: true,
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "footer-widget footer-widget__2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "newslater",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                className: "newslater__title",
                                                children: "Subscribe to our Newsletter"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "newslater__form",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                                    action: "index.html",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "email",
                                                            name: "email",
                                                            id: "email",
                                                            placeholder: "Enter Email"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            type: "submit",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "far fa-paper-plane"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "footer__bottom footer__bottom--2 mt-115",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-lg-6 my-auto",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "copyright-text",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            children: [
                                                "Copyright 2022 \xa9 ",
                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "#",
                                                    children: "Happy Print Advertising."
                                                }),
                                                " All Rights Reserved."
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "social__links social__links--2",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "https://www.facebook.com/HappyPrintPH/?ref=page_internal",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./layouts/Layout1.js




function Layout1({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header1, {}),
            children,
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
};


/***/ })

};
;