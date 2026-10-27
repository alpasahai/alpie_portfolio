import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { succession_container, grow_in_item, pan_left } from "../utilities/animation";

//importing all the images for the prokects
import atlas from "../design_elements/project_elements/atlas.png";
import devicedriver from "../design_elements/project_elements/devicedriver.png";
import diamondencryption from "../design_elements/project_elements/diamondencryption.png";
import fabulari from "../design_elements/project_elements/fabulari.png";
import fakestore from "../design_elements/project_elements/fakestore.png";
import galactica from "../design_elements/project_elements/galactica.png";
import gukeepem from "../design_elements/project_elements/gukeepem.png";
import octopods from "../design_elements/project_elements/octopods.png";
import radar from "../design_elements/project_elements/radar.png";
import rtos from "../design_elements/project_elements/rtos.png";
import tekowhai from "../design_elements/project_elements/tekowhai.png";
import todolist from "../design_elements/project_elements/todolist.png";


//Project Line-up: name, lang, image, github link
const projects = [
  { name: "Fabulari: Chat Application", lang: "TypeScript & JavaScript", image: fabulari, github: "https://github.com/alpasahai/full_stack_dev_fabulari_chat.git" },
  { name: "Real-time Operating System", lang: "C", image: rtos, github: "https://github.com/alpasahai/advanced_comp_sys_RTOS.git" },
  { name: "Device Driver", lang: "C", image: devicedriver, github: "https://github.com/alpasahai/advanced_comp_sys_Device_Driver.git" },
  { name: "Ultrasonic Radar", lang: "C", image: radar, github: "https://github.com/alpasahai/embedded_systems_ultrasonic_radar_2025.git" },
  { name: "To Do List Application", lang: "JavaScript", image: todolist, github: "https://github.com/alpasahai/mobile_app_development_assignment_1.git" },
  { name: "Fake Store Application", lang: "JavaScript", image: fakestore, github: "https://github.com/alpasahai/mobile_app_development_assignment_2.git" },
  { name: "Te Kowhai Dictionary", lang: "PHP & SQL Databases", image: tekowhai, github: "https://github.com/alpasahai/te_kowhai_maori_dictionary.git" },
  { name: "ATLAS (Team Project)", lang: "Python", image: atlas, github: "https://github.com/alpasahai/programming_robotics_project.git" },
  { name: "Diamond Encryption", lang: "C++", image: diamondencryption, github: "https://github.com/alpasahai/object_oriented_programming_encryption.git" },
  { name: "GU Keep 'Em", lang: "C", image: gukeepem, github: "https://github.com/alpasahai/engineering_c_GU_Keep_Em.git" },
  { name: "Battles of Galactica", lang: "p5.js", image: galactica, github: "https://github.com/alpasahai/creative_coding_battles_of_galactica.git" },
  { name: "Octopods: WFEO Hackathon (Team Project)", lang: "Hackathon", image: octopods, github: "https://lnkd.in/p/gweatFPT" },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-maroon">
      <Navbar />

      <div className="max-w-7.5xl mx-auto flex gap-10 px-10 py-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={pan_left}
          className="w-1/4"
        >
          <h1 className="font-heading text-rose text-8xl leading-[0.9] text-left">the<br />projects</h1>
          <br></br>
          <br></br>
          <p className="font-body text-blush text-sm leading-relaxed">
            Welcome to my little project wall! These are the projects I've built across my degree, from low-level systems in C, like a real-time operating system and a device driver, to full-stack and mobile apps in JavaScript and TypeScript. You'll also find team projects like ATLAS and our WFEO hackathon entry, where collaboration mattered as much as the code. Each project taught me something new, whether that was debugging hardware, designing for real users or working as part of a team. Click on any polaroid to head straight to its GitHub and see how it all works under the hood. This wall is always growing, so keep an eye out for any new additions!!
          </p>
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
                className="w-full h-80 object-cover border-2 border-rose"
              />
              <p className="font-body text-blush text-center text-sm mt-2">
                {project.name}<br />{project.lang}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <p className="text-right font-body text-blush pb-6 pr-10">
        @alpie productions
      </p>
    </div>
  );
}
