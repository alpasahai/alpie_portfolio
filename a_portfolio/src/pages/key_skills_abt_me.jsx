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
      <div className="flex-1 w-full max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1.1fr_1.2fr] gap-10 px-6 md:px-12 py-6">

        {/*COLUMN 1 - Key Skills come in frm the left*/}
        <motion.div initial="hidden" animate="visible" variants={pan_left} className="flex flex-col">
          <h1 className="font-heading text-rose text-6xl md:text-8xl leading-[1.1] md:leading-[1.1] text-left">key skills</h1> 
          <br></br>

          <h3 className="font-nav text-rose text-xl mb-1">• programming</h3>
          <p className="font-body text-blush text-[13px] leading-normal mb-5 pl-4">
            With programming, I have gained an interest in the embedded software side of the world. To explore that, I've built a real-time operating system, a device driver and an embedded ultrasonic radar, all in the C language. On the software side, I work with JavaScript, TypeScript, Python, dabbling in PHP, creating everything from a full-stack chat application and mobile apps to a Māori dictionary and a team robotics project. This portfolio is built with React, Vite, Tailwind CSS and Framer Motion, designed from my own sketches in Figma. I use Git and GitHub for the majority of my projects (version control is ESSENTIAL) and love understanding how things work under the hood, from how a system schedules its tasks to how a user feels when they click a button.
          </p>

          <h3 className="font-nav text-rose text-xl mb-1">• soft skills</h3>
          <p className="font-body text-blush text-[13px] leading-normal pl-4">
            Leadership, teamwork and communication make up a lot of “Alpa Sahai”. As the ex-Vice President of Women in Engineering (WiE) and a Senior Mentor for Women in Science and Engineering (WiSE) at Griffith, I've helped lead and organise large-scale events like the annual Engineering Gala and industry networking nights, which take communication, organisation and a lot of teamwork. Through team projects and hackathons, I've learnt how to collaborate under pressure, share ideas openly and bring out the best in the people around me. Cultural dance, yoga and Muay Thai have taught me resilience, discipline and adaptability, and growing up in Fiji and New Zealand has given me an open mind and a love for connecting with people from all walks of life. I'm passionate about mentoring others and supporting diversity in STEM.
          </p>
        </motion.div>

        {/*COLUMN 2 - polaroid with the little computer stuck to its corner*/}
        <div className="flex items-center justify-center px-6 mb-16 md:px-0 md:mb-0">
          {/*this wrapper hugs the polaroid, so the computer is positioned relative to IT*/}
          <div className="relative w-full">
            <motion.img
              src={ks_card}
              alt="alpie in engineering"
              initial="hidden"
              animate="visible"
              variants={grow_in_item}
              whileHover={shimmy.whileHover}
              whileTap={shimmy.whileHover}
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
              whileTap={shimmy.whileHover}
              className="absolute w-[70%] -bottom-[25%] -left-[6%] z-10"
            />
          </div>
        </div>

        {/*COLUMN 3 - About Me comes in frm the right, heading sits at the bottom*/}
        <motion.div initial="hidden" animate="visible" variants={pan_right} className="md:mt-20 flex flex-col text-left md:text-right">
          <p className="font-body text-blush text-[13px] leading-normal mb-4">
            Hey, I'm Alpa Sahai (or Alpie as the “brand” goes) and I'm a Software Engineering (Honours) student at Griffith University, passionate about innovation, problem-solving and using technology to make a meaningful impact.
          </p>
          <p className="font-body text-blush text-[13px] leading-normal mb-4">
            As a recipient of the ATSE Elevate: Boosting Women in STEM Scholarship, I've been lucky enough to connect with inspiring women leaders in STEM. My interests lie in embedded software and computer systems, especially in aviation technology and sustainability-focused innovation, where I hope to help build efficient and effective solutions to global challenges. I love working where hardware, software and people meet.
          </p>
          <p className="font-body text-blush text-[13px] leading-normal mb-4">
            Outside of uni, you will almost always catch me yapping or doing some form of activity, whether that be dance, kickboxing, drawing, reading, or simply socialising with my friends! As a young woman born in Fiji and raised in New Zealand, I love exploring my own culture and learning about others, and those experiences have shaped me into someone resilient, adaptable and open-minded. I'm passionate about supporting diversity in STEM and building a future where technology benefits our society and our surroundings.
          </p>
          <p className="font-body text-blush text-[13px] leading-normal mb-4">
            I'm always keen to connect with industry professionals, mentors and peers who share a passion for innovation, collaboration and positive change, so feel free to reach out!
          </p>
          <br></br>
          <br></br>
          <h1 className="order-first md:order-none mb-4 md:mb-0 font-heading text-rose text-6xl md:text-8xl leading-[1.1] md:leading-[1.1] text-left md:text-right">about me</h1>
        </motion.div>
      </div>

      <p className="text-right font-body text-blush pb-6 pr-10">
        @alpie productions
      </p>
    </div>
  );
}
