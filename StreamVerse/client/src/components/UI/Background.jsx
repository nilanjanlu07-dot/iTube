import { motion } from "framer-motion";

function Background(){

    return(

        <div className="fixed inset-0 overflow-hidden -z-10">

            <motion.div

                animate={{
                    x:[0,120,0],
                    y:[0,-80,0]
                }}

                transition={{
                    repeat:Infinity,
                    duration:16
                }}

                className="
                absolute
                w-96
                h-96
                bg-red-600/20
                blur-[150px]
                rounded-full
                -top-24
                -left-24
                "

            />

            <motion.div

                animate={{
                    x:[0,-100,0],
                    y:[0,100,0]
                }}

                transition={{
                    repeat:Infinity,
                    duration:20
                }}

                className="
                absolute
                w-[500px]
                h-[500px]
                bg-blue-600/20
                blur-[170px]
                rounded-full
                bottom-0
                right-0
                "

            />

        </div>

    )

}

export default Background;