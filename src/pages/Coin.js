import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Coin = () => {
  const navigate = useNavigate();

  const onCancelIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white h-[800px] overflow-hidden">
      <div className="absolute top-[352px] left-[93px] rounded-[50%] bg-greenyellow-100 w-[543px] h-[543px] opacity-[0.2]" />
      <div className="absolute top-[-120px] left-[-240px] rounded-[50%] bg-greenyellow-200 w-[543px] h-[543px] opacity-[0.2]" />
      <img
        className="absolute top-[-525px] left-[2366.7px] w-[554px] h-[546.7px] object-cover"
        alt=""
        src="/heap-of-coins@2x.png"
      />
      <img
        className="absolute top-[115px] left-[1351px] w-[574px] h-[547px] object-cover"
        alt=""
        src="/box-of-coins@2x.png"
      />
      <img
        className="absolute top-[32px] left-[2324px] w-[587px] h-[586px] overflow-hidden"
        alt=""
        src="/sack-of-coins.svg"
      />
      <img
        className="absolute top-[68px] left-[316px] w-[30px] h-[30px] object-cover cursor-pointer"
        alt=""
        src="/cancel@2x.png"
        onClick={onCancelIconClick}
      />
      <img
        className="absolute top-[135px] left-[113px] w-[150px] h-[150px] object-cover"
        alt=""
        src="/imageremovebgpreview-18-1@2x.png"
      />
      <img
        className="absolute top-[431px] left-[69px] w-52 h-[216px] overflow-hidden object-cover"
        alt=""
        src="/sack-of-coins1@2x.png"
      />
      <img
        className="absolute h-[3.74%] w-[14.14%] top-[39.13%] right-[76.69%] bottom-[57.14%] left-[9.17%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/vector2@2x.png"
      />
      <img
        className="absolute h-[3.74%] w-[14.14%] top-[37.25%] right-[8.64%] bottom-[59.01%] left-[77.22%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/vector2@2x.png"
      />
      <img
        className="absolute h-[3.74%] w-[14.14%] top-[49.13%] right-[73.08%] bottom-[47.14%] left-[12.78%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/vector2@2x.png"
      />
      <img
        className="absolute h-[3.74%] w-[14.14%] top-[56.13%] right-[5.03%] bottom-[40.14%] left-[80.83%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/vector2@2x.png"
      />
      <img
        className="absolute top-[299px] left-[67px] w-[249px] h-[106px] object-cover"
        alt=""
        src="/image-23@2x.png"
      />
    </div>
  );
};

export default Coin;
