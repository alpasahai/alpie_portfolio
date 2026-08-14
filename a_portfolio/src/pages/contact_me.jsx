import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { succession_container, grow_in_item, pan_left } from "../utilities/animation";

//Project Line-up: name, lang, image, github link
const projects = [
  { name: "Project Name", lang: "React", image: "../design_elements/facecard.png", github: "https://www.google.com/maps" },
  { name: "Project Name", lang: "React", image: "../design_elements/facecard.png", github: "https://www.google.com/maps" },
  { name: "Project Name", lang: "React", image: "../design_elements/facecard.png", github: "https://www.google.com/maps" },
  { name: "Project Name", lang: "React", image: "../design_elements/facecard.png", github: "https://www.google.com/maps" },
  { name: "Project Name", lang: "React", image: "../design_elements/facecard.png", github: "https://www.google.com/maps" },
  { name: "Project Name", lang: "React", image: "../design_elements/facecard.png", github: "https://www.google.com/maps" },
  { name: "Project Name", lang: "React", image: "../design_elements/facecard.png", github: "https://www.google.com/maps" },
  { name: "Project Name", lang: "React", image: "../design_elements/facecard.png", github: "https://www.google.com/maps" },
  { name: "Project Name", lang: "React", image: "../design_elements/facecard.png", github: "https://www.google.com/maps" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-maroon">
      <Navbar />

      <div className="max-w-6xl mx-auto flex gap-10 px-10 py-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={pan_left}
          className="w-1/4"
        >
          <h2 className="font-heading text-5xl text-blush mb-4">contact<br />me</h2>
          <p className="font-body text-blush text-sm">Lorem ipsum dolor sit amet...</p>
        </motion.div>

      </div>
    </div>
  );
}