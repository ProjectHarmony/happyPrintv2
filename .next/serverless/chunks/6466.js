"use strict";
exports.id = 6466;
exports.ids = [6466];
exports.modules = {

/***/ 57377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./layouts/Preloader.js


function Preloader() {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            id: "preloader",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                id: "ctn-preloader",
                className: "ctn-preloader",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "animation-preloader",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "spinner"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "txt-loading",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        "data-text-preloader": "H",
                                        className: "letters-loading",
                                        children: "H"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        "data-text-preloader": "A",
                                        className: "letters-loading",
                                        children: "A"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        "data-text-preloader": "P",
                                        className: "letters-loading",
                                        children: "P"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        "data-text-preloader": "P",
                                        className: "letters-loading",
                                        children: "P"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        "data-text-preloader": "Y",
                                        className: "letters-loading",
                                        children: "Y"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        "data-text-preloader": "P",
                                        className: "letters-loading",
                                        children: "P"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        "data-text-preloader": "R",
                                        className: "letters-loading",
                                        children: "R"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        "data-text-preloader": "I",
                                        className: "letters-loading",
                                        children: "I"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        "data-text-preloader": "N",
                                        className: "letters-loading",
                                        children: "N"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        "data-text-preloader": "T",
                                        className: "letters-loading",
                                        children: "T"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "loader",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-3 loader-section section-left",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "bg"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-3 loader-section section-left",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "bg"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-3 loader-section section-right",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "bg"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-3 loader-section section-right",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "bg"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./node_modules/react-gtm-module/dist/index.js
var dist = __webpack_require__(1785);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./pages/_app.js













function MyApp({ Component , pageProps  }) {
    const { 0: activePreLoader , 1: setActivePreLoader  } = (0,react.useState)(true);
    (0,react.useEffect)(()=>{
        dist_default().initialize({
            gtmId: "G-70THS9DN64"
        });
    }, []);
    (0,react.useEffect)(()=>{
        setTimeout(()=>{
            setActivePreLoader(false);
        }, 3000);
    }, [
        activePreLoader
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Happy Print Advertising"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        httpEquiv: "x-ua-compatible",
                        content: "ie=edge"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "printing service template"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "images/logo/happyprintlogo.png"
                    })
                ]
            }),
            activePreLoader && /*#__PURE__*/ jsx_runtime.jsx(Preloader, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 97020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/QXoD_qwYt2xsfPnqP5uEz/_buildManifest.js","static/QXoD_qwYt2xsfPnqP5uEz/_ssgManifest.js","static/QXoD_qwYt2xsfPnqP5uEz/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/392-9f19c32e364720e5.js","static/chunks/353-8c1ce0174bc75ee0.js","static/chunks/710-c66b4e17d9a8905a.js","static/chunks/513-16175508b12f3811.js","static/chunks/465-bde303431778f391.js","static/css/dd13798a3395e146.css","static/chunks/685-66436c50d9d561bf.js","static/chunks/pages/index-f7410605df234ee7.js"],"/_app":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/css/a567fa658912e696.css","static/chunks/pages/_app-beb43c5bdef2c7bb.js"],"/_error":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/pages/_error-0a004b8b8498208d.js"],"/about":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/31-ac60eb1816651db0.js","static/chunks/353-8c1ce0174bc75ee0.js","static/chunks/710-c66b4e17d9a8905a.js","static/chunks/655-17b8b6eb1f315a15.js","static/chunks/685-66436c50d9d561bf.js","static/css/9d439bb1e2597238.css","static/chunks/pages/about-71b06d5cd77f815a.js"],"/advertising":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/332-cb127c7266bffd4a.js","static/chunks/31-ac60eb1816651db0.js","static/chunks/212-cb3dee4b3f94483c.js","static/chunks/685-66436c50d9d561bf.js","static/css/a6543150b4f597bd.css","static/chunks/pages/advertising-dfba4363c8d8aa93.js"],"/careers":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/332-cb127c7266bffd4a.js","static/chunks/353-8c1ce0174bc75ee0.js","static/chunks/513-16175508b12f3811.js","static/chunks/685-66436c50d9d561bf.js","static/css/a35aa87386133663.css","static/chunks/pages/careers-cb29033cb0613a38.js"],"/contact":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/513-16175508b12f3811.js","static/chunks/465-bde303431778f391.js","static/chunks/685-66436c50d9d561bf.js","static/css/a6543150b4f597bd.css","static/chunks/pages/contact-a6334b51b5cdc861.js"],"/digital":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/332-cb127c7266bffd4a.js","static/chunks/31-ac60eb1816651db0.js","static/chunks/212-cb3dee4b3f94483c.js","static/chunks/685-66436c50d9d561bf.js","static/css/a6543150b4f597bd.css","static/chunks/pages/digital-701f2c7aee05c542.js"],"/faq":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/685-66436c50d9d561bf.js","static/css/a6543150b4f597bd.css","static/chunks/pages/faq-800c78e445ce1870.js"],"/giveaway":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/332-cb127c7266bffd4a.js","static/chunks/31-ac60eb1816651db0.js","static/chunks/212-cb3dee4b3f94483c.js","static/chunks/685-66436c50d9d561bf.js","static/css/a6543150b4f597bd.css","static/chunks/pages/giveaway-aa1bd0bf9af6b05e.js"],"/graphics":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/332-cb127c7266bffd4a.js","static/chunks/31-ac60eb1816651db0.js","static/chunks/212-cb3dee4b3f94483c.js","static/chunks/685-66436c50d9d561bf.js","static/css/a6543150b4f597bd.css","static/chunks/pages/graphics-fd741d86f52c9eca.js"],"/index-02":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/353-8c1ce0174bc75ee0.js","static/chunks/710-c66b4e17d9a8905a.js","static/chunks/655-17b8b6eb1f315a15.js","static/chunks/685-66436c50d9d561bf.js","static/css/9d439bb1e2597238.css","static/chunks/pages/index-02-61a481c3e2698814.js"],"/largeformat":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/332-cb127c7266bffd4a.js","static/chunks/31-ac60eb1816651db0.js","static/chunks/212-cb3dee4b3f94483c.js","static/chunks/685-66436c50d9d561bf.js","static/css/a6543150b4f597bd.css","static/chunks/pages/largeformat-cf54998c6cfc876f.js"],"/news":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/353-8c1ce0174bc75ee0.js","static/chunks/685-66436c50d9d561bf.js","static/css/9a8e6a4a41de4a17.css","static/chunks/pages/news-1e72e75f028e665c.js"],"/news-details":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/685-66436c50d9d561bf.js","static/css/a6543150b4f597bd.css","static/chunks/pages/news-details-5f83732b01e8d993.js"],"/offset":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/332-cb127c7266bffd4a.js","static/chunks/31-ac60eb1816651db0.js","static/chunks/212-cb3dee4b3f94483c.js","static/chunks/685-66436c50d9d561bf.js","static/css/a6543150b4f597bd.css","static/chunks/pages/offset-309f842dce7e1391.js"],"/personal":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/332-cb127c7266bffd4a.js","static/chunks/31-ac60eb1816651db0.js","static/chunks/212-cb3dee4b3f94483c.js","static/chunks/685-66436c50d9d561bf.js","static/css/a6543150b4f597bd.css","static/chunks/pages/personal-eae10cd3d450f7f7.js"],"/pricing":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/685-66436c50d9d561bf.js","static/css/a6543150b4f597bd.css","static/chunks/pages/pricing-e91e64c1e6091785.js"],"/privacy-policy":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/pages/privacy-policy-8bdce1838fedb193.js"],"/project":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/353-8c1ce0174bc75ee0.js","static/chunks/710-c66b4e17d9a8905a.js","static/chunks/685-66436c50d9d561bf.js","static/css/1a87e81bfda51381.css","static/chunks/pages/project-bc5cab1d20f59756.js"],"/project-cimb":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/392-9f19c32e364720e5.js","static/chunks/685-66436c50d9d561bf.js","static/css/d8a81a2776b7d5d9.css","static/chunks/pages/project-cimb-bc80d6fb8697e34a.js"],"/project-concentrix":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/392-9f19c32e364720e5.js","static/chunks/685-66436c50d9d561bf.js","static/css/d8a81a2776b7d5d9.css","static/chunks/pages/project-concentrix-25471be3a2271e07.js"],"/project-details":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/685-66436c50d9d561bf.js","static/css/a6543150b4f597bd.css","static/chunks/pages/project-details-34c83eaebb8d35e8.js"],"/project-exl":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/392-9f19c32e364720e5.js","static/chunks/685-66436c50d9d561bf.js","static/css/d8a81a2776b7d5d9.css","static/chunks/pages/project-exl-953bcd2be2afbb1c.js"],"/project-ictsi":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/392-9f19c32e364720e5.js","static/chunks/685-66436c50d9d561bf.js","static/css/d8a81a2776b7d5d9.css","static/chunks/pages/project-ictsi-26161450b922fa41.js"],"/project-okada":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/392-9f19c32e364720e5.js","static/chunks/685-66436c50d9d561bf.js","static/css/d8a81a2776b7d5d9.css","static/chunks/pages/project-okada-328f465d72bfa77e.js"],"/project-prime":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/392-9f19c32e364720e5.js","static/chunks/685-66436c50d9d561bf.js","static/css/d8a81a2776b7d5d9.css","static/chunks/pages/project-prime-56e967f84bd16268.js"],"/project-sitel":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/392-9f19c32e364720e5.js","static/chunks/685-66436c50d9d561bf.js","static/css/d8a81a2776b7d5d9.css","static/chunks/pages/project-sitel-9066ac6c4e5c8a12.js"],"/project-teletech":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/392-9f19c32e364720e5.js","static/chunks/685-66436c50d9d561bf.js","static/css/d8a81a2776b7d5d9.css","static/chunks/pages/project-teletech-52a14fef46c9eb5c.js"],"/project-yumboss":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/392-9f19c32e364720e5.js","static/chunks/685-66436c50d9d561bf.js","static/css/d8a81a2776b7d5d9.css","static/chunks/pages/project-yumboss-db0a1fd5615f2d65.js"],"/service":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/353-8c1ce0174bc75ee0.js","static/chunks/685-66436c50d9d561bf.js","static/css/0da0ce63537542b8.css","static/chunks/pages/service-8b1ab3a87e8d7a07.js"],"/service-details":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/685-66436c50d9d561bf.js","static/css/a6543150b4f597bd.css","static/chunks/pages/service-details-a522871d6923692b.js"],"/team":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/685-66436c50d9d561bf.js","static/css/a6543150b4f597bd.css","static/chunks/pages/team-7d1c8f1b88bbe56c.js"],"/team-details":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/685-66436c50d9d561bf.js","static/css/a6543150b4f597bd.css","static/chunks/pages/team-details-11811471e3fe60d6.js"],"/texttile":["static/chunks/webpack-12a85e3c6b02768f.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-c94944e9a43ab586.js","static/chunks/139-6452d6b38c05a092.js","static/chunks/332-cb127c7266bffd4a.js","static/chunks/31-ac60eb1816651db0.js","static/chunks/212-cb3dee4b3f94483c.js","static/chunks/685-66436c50d9d561bf.js","static/css/a6543150b4f597bd.css","static/chunks/pages/texttile-fd364d0ccd2a7b70.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 59450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;