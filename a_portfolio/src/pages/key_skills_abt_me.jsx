import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  succession_container,
  grow_in_item,
  shimmy,
  pan_left,
  pan_right,
} from "../utilities/animations";

import dark_comp from "../design_elements/dark_comp.png";
import ks_card from "../design_elements/ks_card.png";

export default function KeySkillsAboutMe() {
  return (
    <div className="min-h-screen bg-maroon">
      <Navbar />

      <div className="max-w-6xl mx-auto flex justify-between px-10 py-10">
        {/*Key Skills come in frm the left*/}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={pan_left}
          className="w-1/2"
        >
          <h2 className="font-heading text-5xl text-blush mb-6">key skills</h2>

          <h3 className="font-nav text-rose italic mb-2">programming</h3>
          <p className="font-body text-blush mb-6 text-sm">
            ALPA TO UPDATE
            Lorem ipsum dolor sit amet...
          </p>

          <h3 className="font-nav text-rose italic mb-2">soft skills</h3>
          <p className="font-body text-blush text-sm">
            ALPA TO UPDATE
            Lorem ipsum dolor sit amet...
          </p>

          {/*Animation for the computer*/}
          <motion.img
            src={dark_comp}
            initial="hidden"
            animate="visible"
            variants={grow_in_item}
            whileHover={shimmy.whileHover}
            className="w-40 mt-8"
          />
        </motion.div>

        {/*About Me come in frm the left*/}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={pan_right}
          className="w-1/2 flex flex-col items-end text-right"
        >
          {/*Animation for the cute polaroid*/}
          <motion.img
            src={ks_card}
            initial="hidden"
            animate="visible"
            variants={grow_in_item}
            whileHover={shimmy.whileHover}
            className="w-72 mb-6"
          />
          <p className="font-body text-blush text-sm mb-4">Lorem ipsum...</p>
          <p className="font-body text-blush text-sm mb-4">Lorem ipsum...</p>
          <h2 className="font-heading text-5xl text-blush mt-4">about me</h2>
        </motion.div>
      </div>
    </div>
  );
}
