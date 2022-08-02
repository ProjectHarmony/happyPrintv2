"use strict";
exports.id = 9724;
exports.ids = [9724];
exports.modules = {

/***/ 89724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ GoogleMap)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/google-map-react/dist/index.js
var dist = __webpack_require__(61492);
;// CONCATENATED MODULE: ./components/Plugins/GoogleMap/MyMarker.js


const MyMarker = ({ text , tooltip , $hover  })=>{
    const handleClick = ()=>{
        console.log(`You clicked on ${tooltip}`);
    };
    return /*#__PURE__*/ _jsx("div", {
        className: $hover ? "circle hover" : "circle",
        onClick: handleClick,
        children: /*#__PURE__*/ _jsx("span", {
            className: "circleText",
            title: tooltip,
            children: text
        })
    });
};
/* harmony default export */ const GoogleMap_MyMarker = ((/* unused pure expression or super */ null && (MyMarker)));

;// CONCATENATED MODULE: ./components/Plugins/GoogleMap/GoogleMap.js




// implementation of this function is needed for codesandbox example to work
// you can remove it otherwise
const distanceToMouse = (pt, mp)=>{
    if (pt && mp) {
        // return distance between the marker and mouse pointer
        return Math.sqrt((pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y));
    }
};
const points = [
    {
        id: 1,
        title: "Round Pond",
        lat: 51.506,
        lng: -0.184
    },
    {
        id: 2,
        title: "The Long Water",
        lat: 51.508,
        lng: -0.175
    },
    {
        id: 3,
        title: "The Serpentine",
        lat: 51.505,
        lng: -0.164
    }
];
const demos = {
    gmap: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.812408026513!2d121.08951151535182!3d14.60975978076766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b86d067889a1%3A0x76c43b1dce9effa2!2sHappy%20Print%20Advertising!5e0!3m2!1sen!2sph!4v1652341592427!5m2!1sen!2sph" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
};
function Iframe(props) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        dangerouslySetInnerHTML: {
            __html: props.iframe ? props.iframe : ""
        }
    });
}
function GoogleMap() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "google-map",
        id: "contact-map",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Iframe, {
                iframe: demos["gmap"],
                allow: "autoplay"
            }),
            ","
        ]
    });
};


/***/ })

};
;