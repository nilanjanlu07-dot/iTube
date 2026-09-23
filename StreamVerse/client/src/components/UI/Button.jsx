import { motion } from "framer-motion";

function Button({

    children,

    onClick,

    type="button"

}){

    return(

        <motion.button

            whileHover={{
                scale:1.03
            }}

            whileTap={{
                scale:.98
            }}

            type={type}

            onClick={onClick}

            className="
            w-full
            py-3
            rounded-2xl
            font-semibold
            bg-red-600
            hover:bg-red-700
            transition
            shadow-lg
            shadow-red-600/30
            "

        >

            {children}

        </motion.button>

    )

}

export default Button;