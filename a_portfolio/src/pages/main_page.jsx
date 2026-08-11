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
    <div className="min-h-screen bg-maroon">
      <Navbar />

      <motion.div
        variants={succession_container}
        initial="hidden"
        animate="visible"
        className="relative h-[70vh] max-w-5xl mx-auto"
      >
        {/*title*/}
        <motion.h1
          variants={grow_in_item}
          className="font-heading text-6xl text-blush absolute top-10 left-1/3"
        >
          alpie<br />portfolio
        </motion.h1>

        {/*For each item: grow in on load PLUS shimmy on hover*/}
        {/*TO BE REPOSITIONED PROPERLY*/}
        <motion.img
          src={ticket}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute top-0 left-0 w-52"
        />
        <motion.img
          src={frangipani}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute top-24 left-72 w-36"
        />
        <motion.img
          src={beads}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute top-56 left-8 w-44"
        />
        <motion.img
          src={brush}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute top-64 left-64 w-28"
        />
        <motion.img
          src={gloves}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute top-56 left-96 w-32"
        />
        <motion.img
          src={hibiscus}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute top-56 left-96 w-32"
        />
        <motion.img
          src={jhumka}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute top-56 left-96 w-32"
        />   
        <motion.img
          src={ribbon}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute top-56 left-96 w-32"
        /> 
        <motion.img
          src={sketch}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute top-56 left-96 w-32"
        />            
        <motion.img
          src={volleyball}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute top-60 left-[32rem] w-20"
        />
        <motion.img
          src={facecard}
          variants={grow_in_item}
          whileHover={shimmy}
          className="absolute top-56 left-96 w-32"
        />
      </motion.div>

      <p className="text-center font-body text-blush pb-4">@alpie productions</p>
    </div>
  );
}