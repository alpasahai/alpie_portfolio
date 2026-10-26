import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { succession_container, grow_in_item, shimmy } from "../utilities/animation";

//Where every drawing lives on the canvas (all % of the canvas)
//tilt = how much it leans in degrees
const drawings = [
  { src: ribbon,     alt: "ribbon",          top: 4,  left: 38, width: 13, tilt: 0 },
  { src: ticket,     alt: "travel ticket",   top: 14, left: 17, width: 17, tilt: -12 },
  { src: sketch,     alt: "alpie sketch",    top: 8,  left: 50, width: 9,  tilt: 6 },
  { src: brush,      alt: "paint brush",     top: 10, left: 57, width: 14, tilt: -40 },
  { src: frangipani, alt: "frangipani",      top: 22, left: 66, width: 13, tilt: 0 },
  { src: hibiscus,   alt: "hibiscus",        top: 38, left: 11, width: 11, tilt: 0 },
  { src: facecard,   alt: "polaroid of alpie", top: 52, left: 21, width: 13, tilt: -8 },
  { src: jhumka,     alt: "jhumka earrings", top: 66, left: 38, width: 7,  tilt: 0 },
  { src: beads,      alt: "name beads",      top: 64, left: 46, width: 15, tilt: -4 },
  { src: gloves,     alt: "boxing gloves",   top: 70, left: 58, width: 9,  tilt: 8 },
  { src: volleyball, alt: "volleyball",      top: 60, left: 69, width: 8,  tilt: 0 },
];

export default function MainPage() {
  return (
    <div className="min-h-screen bg-maroon flex flex-col">
      <Navbar />

      {/*THE CANVAS - always 16:9, but never taller than the screen*/}
      <motion.div
        variants={succession_container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto aspect-[16/9] w-[min(100%,calc((100vh-170px)*16/9))] [container-type:inline-size]"
      >
        {/*MAIN TITLE - cqw = % of the canvas width, so it shrinks with the drawings*/}
        <motion.h1
          variants={grow_in_item}
          className="font-heading text-blush absolute z-20 text-[11cqw] leading-none"
          style={{ top: "33%", left: "28%" }}
        >
          alpie
        </motion.h1>

        <motion.h1
          variants={grow_in_item}
          className="font-heading text-blush absolute z-20 text-[8cqw] leading-none"
          style={{ top: "47%", left: "40%" }}
        >
          portfolio
        </motion.h1>

        {/*THE LITTLE PICTURES*/}
        {drawings.map((d) => (
          <motion.img
            key={d.alt}
            src={d.src}
            alt={d.alt}
            variants={grow_in_item}
            whileHover={shimmy.whileHover}
            className="absolute z-10"
            style={{
              top: `${d.top}%`,
              left: `${d.left}%`,
              width: `${d.width}%`,
              rotate: d.tilt,
            }}
          />
        ))}
      </motion.div>

      {/*Making sure that the footer is at the bottom*/}
      <p className="text-right font-body text-blush pb-6 pr-10 mt-auto">
        @alpie productions
      </p>
    </div>
  );
}
