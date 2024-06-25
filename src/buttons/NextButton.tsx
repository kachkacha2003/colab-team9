import { Link } from "react-router-dom";

type TLocation = {
  location: string;
};

function NextButton({ location }: TLocation) {
  return (
    <Link
      to={location}
      className="absolute bottom-0 right-0 mb-[65px] flex justify-center items-center font-medium text-white bg-[#6B40E3] w-[151px] h-12 rounded mr-[53px]"
    >
      შემდეგი
    </Link>
  );
}

export default NextButton;
