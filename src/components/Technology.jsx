import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiMysql, SiTypescript, SiJavascript, SiVuedotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    inital: { y:-10 },
    animate: {
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType: 'reverse',
        },
    },
});

const Technology = () => {
  return( 
  <div className="border-b border-neutral-800 pb-24">
    <motion.h2 
        transition={{duration:1.5}}
        initial={{opacity:0,y:-100}} 
        whileInView={{opacity:1, y:0}}
        className="my-20 text-center text-4xl">Technologies
    </motion.h2>
    <motion.div
        transition={{duration:1.5}}
        initial={{opacity:0,x:-100}} 
        whileInView={{opacity:1, x:0}}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
            variants={iconVariants(2.5)}
            initial = 'inital'
            animate = 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
            <div className="text-center mt-2 text-sm">React</div>
        </motion.div>
        <motion.div 
            variants={iconVariants(3)}
            initial = 'inital'
            animate = 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className="text-7xl"/>
            <div className="text-center mt-2 text-sm">Next.js</div>
        </motion.div>
        <motion.div 
            variants={iconVariants(5)}
            initial = 'inital'
            animate = 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500"/>
            <div className="text-center mt-2 text-sm">MongoDB</div>
        </motion.div>
        <motion.div 
            variants={iconVariants(6)}
            initial = 'inital'
            animate = 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500"/>
            <div className="text-center mt-2 text-sm">Node.js</div>
        </motion.div>
        <motion.div 
            variants={iconVariants(4)}
            initial = 'inital'
            animate = 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className="text-7xl text-sky-400"/>
            <div className="text-center mt-2 text-sm">PostgreSQL</div>
        </motion.div>
        <motion.div 
            variants={iconVariants(4.5)}
            initial = 'inital'
            animate = 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-blue-500"/>
            <div className="text-center mt-2 text-sm">MySQL</div>
        </motion.div>
        <motion.div 
            variants={iconVariants(3.5)}
            initial = 'inital'
            animate = 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTypescript className="text-7xl text-blue-400"/>
            <div className="text-center mt-2 text-sm">TypeScript</div>
        </motion.div>
        <motion.div 
            variants={iconVariants(2.8)}
            initial = 'inital'
            animate = 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiJavascript className="text-7xl text-yellow-400"/>
            <div className="text-center mt-2 text-sm">JavaScript</div>
        </motion.div>
        <motion.div 
            variants={iconVariants(3.2)}
            initial = 'inital'
            animate = 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiVuedotjs className="text-7xl text-green-400"/>
            <div className="text-center mt-2 text-sm">Vue.js</div>
        </motion.div>
    </motion.div>
  </div> 
  )
}

export default Technology