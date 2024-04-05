import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrontPage = () => {
  const navigate = useNavigate();

  const onFrontPageContainerClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div
      className="w-full relative bg-base-white h-[800px] overflow-hidden cursor-pointer"
      onClick={onFrontPageContainerClick}
    >
      <div className="absolute top-[734px] left-[23px] w-[314px] overflow-hidden flex flex-col items-end justify-center">
        <img
          className="w-14 relative h-12 object-cover"
          alt=""
          src="/kudumbashreelogobeb6b133e8seeklogo-1@2x.png"
        />
      </div>
      <div className="absolute top-[-335px] left-[0px] w-[360px] h-[1470px] overflow-hidden flex flex-col items-center justify-end py-[353px] px-0 box-border bg-[url('/public/frame@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <img
          className="w-[77px] h-[53px] object-cover mr-[283px]"
          alt=""
          src="/harithakarmasena-logoremovebgpreview-1@2x.png"
        />
      </div>
    </div>
  );
};

export default FrontPage;
