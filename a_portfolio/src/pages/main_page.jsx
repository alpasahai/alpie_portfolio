import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { succession_container, grow_in_item, shimmy } from "../utilities/animation";

//alpie's pretty little drawings
import ticket from "../design_elements/ticket.png";
import frangipani from "../design_elements/frangipani.png";
import beads from "../design_elements/beads.png";
import brush from "../design_elements/brush.png";
import gloves from "../design_elements/gloves.png";
import hibiscus from "../design_elements/hibiscus.png";
import jhumka from "../design_elements/jhumka.png";
import ribbon from "../design_elements/ribbon.png";
import sketch from "../design_elements/sketch.png";
import volleyball from "../design_elements/volleyball.png";
import facecard from "../design_elements/facecard.png";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-maroon flex flex-col">
      <Navbar />
      <motion.div
        variants={succession_container}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-[1440px] aspect-[16/9] mx-auto"
      >
        {/*MAIN TITLE*/}
        <motion.h1
          variants={grow_in_item}
          className="font-heading text-[clamp(4rem,8vw,8rem)] text-blush absolute z-20"
          style={{ top: "30%", left: "30%" }}
        >
          alpie
        </motion.h1>

        <motion.h1
          variants={grow_in_item}
          className="font-heading text-[clamp(4rem,8vw,8rem)] text-blush absolute z-20"
          style={{ top: "40%", left: "40%" }}
        >
          portfolio
        </motion.h1>

        {/*THE LITTLE PICTURES*/}
        <motion.img
          src={ticket}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute z-10 w-[28%]"
          style={{ top: "4%", left: "3%" }}
        />

        <motion.img
          src={sketch}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute z-10 w-[13%]"
          style={{ top: "4%", left: "27%" }}
        />

        <motion.img
          src={frangipani}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute z-10 w-[17%]"
          style={{ top: "12%", left: "70%" }}
        />

        <motion.img
          src={ribbon}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute z-10 w-[9%]"
          style={{ top: "29%", left: "37%" }}
        />
        
        <motion.img
          src={hibiscus}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute z-10 w-[17%]"
          style={{ top: "38%", left: "4%" }}
        />

        <motion.img
          src={facecard}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute z-10 w-[20%]"
          style={{ top: "51%", left: "10%" }}
        />

        <motion.img
          src={beads}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute z-10 w-[15%]"
          style={{ top: "63%", left: "27%" }}
        />

        <motion.img
          src={gloves}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute z-10 w-[17%]"
          style={{ top: "58%", left: "40%" }}
        />

        <motion.img
          src={jhumka}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute z-10 w-[11%]"
          style={{ top: "50%", left: "35%" }}
        />

        <motion.img
          src={volleyball}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute z-10 w-[10%]"
          style={{ top: "49%", left: "70%" }}
        />

        <motion.img
          src={brush}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute z-10 w-[27%]"
          style={{
            top: "64%",
            left: "48%",
            transform: "rotate(-25deg)"
          }}
        />
      </motion.div>

      {/*Making sure that the footer is at the bottom*/}
      <p className="text-right font-body text-blush pb-6 pr-10 mt-auto">
        @alpie productions
      </p>
    </div>
  );
}