import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { succession_container, grow_in_item, shimmy } from "../utilities/animation";

//alpie's pretty little drawings
import ticket from "../design_elements/ticket.png";
import frangipani from "../design_elements/frangipani.png";
import frangipani_2 from "../design_elements/frangipani_2.png";
import beads from "../design_elements/beads.png";
import brush from "../design_elements/brush.png";
import gloves from "../design_elements/gloves.png";
import hibiscus from "../design_elements/hibiscus.png";
import jhumka from "../design_elements/jhumka.png";
import ribbon from "../design_elements/ribbon.png";
import sketch from "../design_elements/sketch.png";
import volleyball from "../design_elements/volleyball.png";
import facecard from "../design_elements/facecard.png";

//map for all the drawings:
const drawings = [
  { src: ticket,       alt: "travel ticket",     top: 0,  left: 21, width: 25, tilt: 0 },
  { src: sketch,       alt: "alpie sketch",      top: 1,  left: 50, width: 16, tilt: 0 },
  { src: brush,        alt: "paint brush",       top: 1,  left: 60, width: 18, tilt: -15 },
  { src: ribbon,       alt: "ribbon",            top: 1,  left: 35, width: 29, tilt: 0 },
  { src: frangipani,   alt: "frangipani",        top: 12, left: 65, width: 19, tilt: 0 },
  { src: frangipani_2, alt: "pink frangipani",   top: 36, left: 75, width: 9,  tilt: 0 },
  { src: hibiscus,     alt: "hibiscus",          top: 31, left: 11, width: 20, tilt: 0 },
  { src: facecard,     alt: "polaroid of alpie", top: 55, left: 21, width: 17, tilt: 15 },
  { src: jhumka,       alt: "jhumka earrings",   top: 62, left: 36, width: 17, tilt: 0 },
  { src: gloves,       alt: "boxing gloves",     top: 60, left: 53, width: 16, tilt: 0 },
  { src: beads,        alt: "name beads",        top: 53, left: 62, width: 25, tilt: -5 },
  { src: volleyball,   alt: "volleyball",        top: 68, left: 72, width: 13, tilt: 0 },
];

export default function MainPage() {
  return (
    <div className="min-h-screen bg-maroon flex flex-col">
      <Navbar />

      <motion.div
        variants={succession_container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto aspect-[2/1] w-[min(100%,calc((100vh-170px)*2))] [container-type:inline-size]"
      >
        {/*MAIN TITLE*/}
        <motion.h1
          variants={grow_in_item}
          className="font-heading text-rose absolute z-20 text-[10.5cqw] leading-none"
          style={{ top: "26%", left: "31%" }}
        >
          alpie
        </motion.h1>

        <motion.h1
          variants={grow_in_item}
          className="font-heading text-rose absolute z-20 text-[10.5cqw] leading-none"
          style={{ top: "40%", left: "39%" }}
        >
          portfolio
        </motion.h1>

        {/*the doodles shimmy*/}
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
