import Image from "next/image";
import LogInImg from "./Images/LogIn1.webp";
import SignUpImg from "./Images/SignUp1.svg";



export const LogIn1 = (props) => {
    return (
        <Image
            src={LogInImg}
            alt="gallery"
            className="block rounded-lg object-cover object-center"
        />
    );
};

export const SignUp1 = (props) => {
    return (
        <Image
            src={SignUpImg}
            alt="gallery"
            className="block rounded-lg object-cover object-center"
        />
    );
};
