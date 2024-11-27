import FaqCont from "../../molecules/Right/FaqCont";
import Image from "../../molecules/Left/Image";

const Card = () => {
  return (
    <div
      className="bg-white w-[920px] flex rounded-[23px] py-[60px] gap-[5%] MainCont mx-[40px]"
      style={{ boxShadow: "0px 50px 50px -20px rgba(53, 18, 122, 0.50)" }}
    >
      <Image />
      <FaqCont />
    </div>
  );
};

export default Card;
