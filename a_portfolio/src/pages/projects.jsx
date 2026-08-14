import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { succession_container, grow_in_item, pan_left } from "../utilities/animations";

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

export default function ProjectsPage() {
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
          <h2 className="font-heading text-5xl text-blush mb-4">the<br />projects</h2>
          <p className="font-body text-blush text-sm">Lorem ipsum dolor sit amet...</p>
        </motion.div>

        <motion.div
          variants={succession_container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-6 flex-1"
        >
        {/*Mapping system for the project line up*/}
          {projects.map((project) => (
            <motion.a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={grow_in_item}
              whileHover={{ scale: 1.05 }} //Making the link look clickable
              className="block"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-32 object-cover border-2 border-rose"
              />
              <p className="font-body text-blush text-center text-sm mt-2">
                {project.name}<br />{project.lang}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
