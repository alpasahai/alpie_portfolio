//This is for all my little animations:

//Succession animation - "When the page initially opens, the main title and icons grow in"
export const succession_container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15, //delay between the icons popping in
        },
    },
};


export const grow_in_item = {
    hidden: {opacity: 0, scale: 0},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {type: "spring", stiffness: 120, damping: 10},
    },
};

//Shimmy-situation - gives a little wiggle for hand-drawn effect
export const shimmy = {
    whileHover: {
        rotate: [0, -6, 6, -4, 4, 0], 
        transition: {duration: 1},
    },
};

//Panning from RIGHT
export const pan_right = {
    hidden: {opacity: 0, x: 100},
    visible: {opacity: 1, x: 0, transition: {duration: 0.7, ease: "easeOut"}},
};

//Panning from LEFT
export const pan_left = {
    hidden: {opacity: 0, x: -100},
    visible: {opacity: 1, x: 0, transition: {duration: 0.7, ease: "easeOut"}},
};

