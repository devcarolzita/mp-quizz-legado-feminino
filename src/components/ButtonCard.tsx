import { useNavigate } from "react-router-dom"
import { ButtonPropsType } from "../types/types";

const ButtonCard = ({textLink, navigateLink = "/", nextQuestion}: ButtonPropsType) => {
  const navigate = useNavigate();
  return (
    <button className="bg-purple-300 p-3 font-bold text-black cursor-pointer w-full transition duration-500 hover:scale-115 rounded flex items-center justify-center gap-2" onClick={() => {
    navigate(navigateLink);
    nextQuestion?.();
    }
    } > {textLink} <img src="./public/assets/seta.png" /> </button>
  )
}

export default ButtonCard