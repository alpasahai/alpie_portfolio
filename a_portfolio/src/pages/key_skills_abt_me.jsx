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
      <div className="flex-1 w-full max-w-7xl mx-auto grid grid-cols-[1.2fr_1.1fr_1.2fr] gap-10 px-12 py-6">

        {/*COLUMN 1 - Key Skills come in frm the left*/}
        <motion.div initial="hidden" animate="visible" variants={pan_left} className="flex flex-col">
          <h2 className="font-heading text-6xl text-blush mb-6">key skills</h2>

          <h3 className="font-nav text-rose text-xl mb-1">• programming</h3>
          <p className="font-body text-blush text-[13px] leading-normal mb-5 pl-4">
            My programming journey runs all the way from the hardware up to the user. I'm most at home in C and C++, where I've built a real-time operating system, a device driver, an embedded ultrasonic radar and an object-oriented encryption program. On the software side, I work with JavaScript, TypeScript, Python, PHP and SQL, creating everything from a full-stack chat application and mobile apps to a Māori dictionary and a team robotics project. This portfolio is built with React, Vite, Tailwind CSS and Framer Motion, designed from my own sketches in Figma. I use Git and GitHub for every project and love understanding how things work under the hood, from how a system schedules its tasks to how a user feels when they click a button.
          </p>

          <h3 className="font-nav text-rose text-xl mb-1">• soft skills</h3>
          <p className="font-body text-blush text-[13px] leading-normal pl-4">
            Leadership and community are at the heart of who I am. As the ex-Vice President of Women in Engineering (WiE) and a Senior Mentor for Women in Science and Engineering (WiSE) at Griffith, I've helped lead and organise large-scale events like the annual Engineering Gala and industry networking nights, which takes communication, organisation and a lot of teamwork. Through team projects and hackathons, I've learnt how to collaborate under pressure, share ideas openly and bring out the best in the people around me. Cultural dance, yoga and Muay Thai have taught me resilience, discipline and adaptability, and growing up in Fiji has given me an open mind and a love for connecting with people from all walks of life. I'm passionate about mentoring others and supporting diversity in STEM.
          </p>
        </motion.div>

        {/*COLUMN 2 - polaroid with the little computer stuck to its corner*/}
        <div className="flex items-center justify-center">
          {/*this wrapper hugs the polaroid, so the computer is positioned relative to IT*/}
          <div className="relative w-full">
            <motion.img
              src={ks_card}
              alt="alpie in engineering"
              initial="hidden"
              animate="visible"
              variants={grow_in_item}
              whileHover={shimmy.whileHover}
              className="w-full"
              style={{ rotate: 6 }}
            />
            <motion.img
              src={dark_comp}
              alt="little computer"
              initial="hidden"
              animate="visible"
              variants={grow_in_item}
              whileHover={shimmy.whileHover}
              className="absolute w-[50%] -bottom-[14%] -left-[6%] z-10"
            />
          </div>
        </div>

        {/*COLUMN 3 - About Me comes in frm the right, heading sits at the bottom*/}
        <motion.div initial="hidden" animate="visible" variants={pan_right} className="flex flex-col text-right">
          <p className="font-body text-blush text-[13px] leading-normal mb-4">
            Hi, I'm Alpa Sahai (but you can call me Alpie)! I'm a Software Engineering (Honours) student at Griffith University, passionate about innovation, problem-solving and using technology to make a meaningful impact.
          </p>
          <p className="font-body text-blush text-[13px] leading-normal mb-4">
            As a recipient of the ATSE Elevate: Boosting Women in STEM Scholarship, I've been lucky enough to connect with inspiring women leaders in STEM. My interests lie in software development and computer systems, especially in aviation technology, quantum computing and sustainability-focused innovation, where I hope to help build efficient and effective solutions to global challenges. I love working where hardware, software and people meet.
          </p>
          <p className="font-body text-blush text-[13px] leading-normal mb-4">
            Outside of uni, you'll find me at cultural dance, yoga or Muay Thai, or drawing (every doodle on my main page is mine!). As a young woman from Fiji, I love exploring my own culture and learning about others, and those experiences have shaped me into someone resilient, adaptable and open-minded. I'm passionate about supporting diversity in STEM and building a future where technology benefits our society and our surroundings.
          </p>
          <p className="font-body text-blush text-[13px] leading-normal mb-4">
            I'm always keen to connect with industry professionals, mentors and peers who share a passion for innovation, collaboration and positive change, so feel free to reach out!
          </p>
          <h2 className="font-heading text-6xl text-blush mt-auto">about me</h2>
        </motion.div>
      </div>

      <p className="text-right font-body text-blush pb-6 pr-10">
        @alpie productions
      </p>
    </div>
  );
}
