import { useCallback } from "react";
import { Button } from "@mui/material";
import StatusFocus from "../components/StatusFocus";
import { useNavigate } from "react-router-dom";

const Lgnmail = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/loginpswrd");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white h-[800px] overflow-hidden text-left text-[40px] text-base-black font-title-poppins-large">
      <div className="absolute top-[139px] left-[4px] w-[352px] overflow-hidden flex flex-col items-end justify-center">
        <div className="self-stretch relative leading-[50px] font-semibold">
          Enter your email
        </div>
      </div>
      <div className="absolute top-[810px] left-[-30px] w-[420px] overflow-hidden flex flex-col items-end justify-center">
        <div className="w-[390px] relative h-[34px] overflow-hidden shrink-0">
          <div className="absolute w-[calc(100%_-_241px)] right-[121px] bottom-[8px] left-[120px] h-[5px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-base-black" />
          </div>
        </div>
      </div>
      <div className="absolute top-[424px] left-[6px] w-[348px] overflow-hidden flex flex-col items-end justify-center text-sm font-body-medium">
        <div className="self-stretch relative h-[38px]">
          <div className="absolute h-full w-[42.1%] top-[0%] left-[33.62%] tracking-[0.25px] leading-[20px] inline-block">
            or continue with
          </div>
          <div className="absolute top-[14.5px] left-[-0.5px] box-border w-[109.9px] h-px border-t-[1px] border-solid border-gainsboro" />
          <div className="absolute top-[14.5px] left-[238.6px] box-border w-[109.9px] h-px border-t-[1px] border-solid border-gainsboro" />
        </div>
      </div>
      <div className="absolute top-[267px] left-[8px] w-[344px] overflow-hidden flex flex-col items-start justify-center">
        <StatusFocus
          label="Email"
          showCancelIcon={false}
          statusFocusWidth="342px"
          statusFocusPosition="relative"
          vaColor="#000"
          labelWidth="9.94%"
          labelRight="86.55%"
          labelLeft="3.51%"
          rectangleDivWidth="294.71%"
          rectangleDivRight="-188.24%"
          rectangleDivLeft="-6.47%"
        />
      </div>
      <Button
        className="absolute top-[341px] left-[8px] cursor-pointer"
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 344 }}
        onClick={onFrameClick}
      >
        SUBMIT
      </Button>
      <img
        className="absolute top-[486px] left-[20px] w-[318px] h-[60px] overflow-hidden"
        alt=""
        src="/frame2.svg"
      />
      <Button
        className="absolute top-[731px] left-[20px]"
        disableElevation={true}
        color="primary"
        variant="text"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 252 }}
      >
        Don’t have an account? Sign up
      </Button>
      <div className="absolute top-[-1741px] left-[2646px] rounded-3xs bg-dodgerblue box-border w-[189px] h-[55px] border-[1px] border-solid border-base-white" />
    </div>
  );
};

export default Lgnmail;
