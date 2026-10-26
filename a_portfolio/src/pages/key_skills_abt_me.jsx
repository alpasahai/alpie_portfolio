import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  grow_in_item,
  shimmy,
  pan_left,
  pan_right,
} from "../utilities/animation";

import dark_comp from "../design_elements/dark_comp.png";
import ks_card from "../design_elements/ks_card.png";

export default function KeySkillsAboutMe() {
  return (
    <div className="min-h-screen bg-maroon flex flex-col">
      <Navbar />

      {/*3 columns like the OG design: skills | polaroid | about me*/}
      <div className="flex-1 w-full max-w-7xl mx-auto grid grid-cols-[1fr_1.3fr_1fr] gap-12 px-12 py-6">

        {/*COLUMN 1 - Key Skills come in frm the left*/}
        <motion.div initial="hidden" animate="visible" variants={pan_left} className="flex flex-col">
          <h2 className="font-heading text-6xl text-blush mb-8">key skills</h2>

          <h3 className="font-nav text-rose text-xl mb-2">• programming</h3>
          <p className="font-body text-blush text-sm leading-relaxed mb-8 pl-4">
            ALPA TO UPDATE Lorem ipsum dolor sit amet...
          </p>

          <h3 className="font-nav text-rose text-xl mb-2">• soft skills</h3>
          <p className="font-body text-blush text-sm leading-relaxed pl-4">
            ALPA TO UPDATE Lorem ipsum dolor sit amet...
          </p>
        </motion.div>

        {/*COLUMN 2 - polaroid with the little computer tucked in the corner*/}
        <div className="relative flex items-center justify-center">
          <motion.img
            src={ks_card}
            alt="alpie in engineering"
            initial="hidden"
            animate="visible"
            variants={grow_in_item}
            whileHover={shimmy.whileHover}
            className="w-[90%]"
            style={{ rotate: 6 }}
          />
          <motion.img
            src={dark_comp}
            alt="little computer"
            initial="hidden"
            animate="visible"
            variants={grow_in_item}
            whileHover={shimmy.whileHover}
            className="absolute w-[45%] bottom-[6%] -left-[4%] z-10"
          />
        </div>

        {/*COLUMN 3 - About Me comes in frm the right, heading sits at the bottom*/}
        <motion.div initial="hidden" animate="visible" variants={pan_right} className="flex flex-col text-right">
          <p className="font-body text-blush text-sm leading-relaxed mb-4">ALPA TO UPDATE Lorem ipsum...</p>
          <p className="font-body text-blush text-sm leading-relaxed mb-4">ALPA TO UPDATE Lorem ipsum...</p>
          <h2 className="font-heading text-6xl text-blush mt-auto">about me</h2>
        </motion.div>
      </div>

      <p className="text-right font-body text-blush pb-6 pr-10">
        @alpie productions
      </p>
    </div>
  );
}
