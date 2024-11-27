import mainPicture from "../../assets/mainPicture.svg";

const Image = () => {
  return (
    <div className="flex-1 flex items-center ImageCont relative w-full">
      <img
        src={mainPicture}
        alt="main picture"
        className=" absolute right-[110px] w-full h-[359px] Image"
      />
    </div>
  );
};

export default Image;
