import { Link } from "react-router-dom";

type TsetCount = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

function NextButton({ setCount }: TsetCount) {
  return (
    <button
      onClick={() => setCount(1)}
      className="absolute bottom-0 right-0 mb-[65px] flex justify-center items-center font-medium text-white bg-[#6B40E3] w-[151px] h-12 rounded mr-[53px] "
    >
      შემდეგი
    </button>
  );
}

export default NextButton;
