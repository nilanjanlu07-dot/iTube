import { motion } from "framer-motion";

function GlassCard({children}){

    return(

        <motion.div

            initial={{
                opacity:0,
                y:30
            }}

            animate={{
                opacity:1,
                y:0
            }}

            transition={{
                duration:.5
            }}

            className="
            w-full
            max-w-md
            rounded-3xl
            backdrop-blur-xl
            bg-white/5
            border
            border-white/10
            shadow-2xl
            p-8
            "

        >

            {children}

        </motion.div>

    )

}

export default GlassCard;