import picture from "../../assets/picture.svg";

const Image = () => {
  return (
    <div className="flex-1 flex justify-center ImageCont">
      <img src={picture} alt="" className="Image" />
    </div>
  );
};

export default Image;
