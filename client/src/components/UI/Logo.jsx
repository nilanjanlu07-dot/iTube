import logo from "../../assets/logo.png";

function Logo(){

    return(

        <div className="flex justify-center">

            <img

                src={logo}

                alt="iTube"

                className="w-48 object-contain"

            />

        </div>

    )

}

export default Logo;