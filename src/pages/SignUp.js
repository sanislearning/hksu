import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ColorDefaultSizeMediumMo from "../components/ColorDefaultSizeMediumMo";

const SignUp = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/details1");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white h-[800px] overflow-hidden text-left text-base text-base-black font-body-medium">
      <div className="absolute top-[0px] left-[-383px] w-[1126px] overflow-hidden flex flex-col items-end justify-center">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[800px] shrink-0 object-cover"
          alt=""
          src="/image-17@2x.png"
        />
      </div>
      <div className="absolute top-[0px] left-[-30px] w-[420px] overflow-hidden flex flex-col items-end justify-center">
        <div className="w-[411px] h-[844px] flex flex-col items-end justify-end">
          <div className="w-[390px] relative h-[34px] overflow-hidden shrink-0">
            <div className="absolute w-[calc(100%_-_241px)] right-[121px] bottom-[8px] left-[120px] h-[5px]">
              <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-base-black" />
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[25px] left-[11px] w-[312px] h-6 overflow-hidden object-cover"
        alt=""
        src="/frame1@2x.png"
      />
      <div className="absolute top-[239px] left-[8px] w-[342px] h-20">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-light-ex-1" />
        <img
          className="absolute h-3/5 w-[14.04%] top-[20%] right-[76.61%] bottom-[20%] left-[9.36%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/facebook.svg"
        />
        <div className="absolute top-[35%] left-[28.07%] tracking-[0.5px] leading-[24px]">
          Continue with Facebook
        </div>
      </div>
      <div className="absolute top-[335px] left-[8px] w-[342px] h-20">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-light-ex-2" />
        <div className="absolute h-3/5 w-[14.04%] top-[20%] right-[76.61%] bottom-[20%] left-[9.36%]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/group-4@2x.png"
          />
        </div>
        <div className="absolute top-[35%] left-[28.07%] tracking-[0.5px] leading-[24px]">
          Continue with Google
        </div>
      </div>
      <div className="absolute top-[431px] left-[8px] w-[342px] h-20">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-light-ex-3" />
        <img
          className="absolute h-3/5 w-[14.04%] top-[20%] right-[76.61%] bottom-[20%] left-[9.36%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/filllogosapplefill@2x.png"
        />
        <div className="absolute top-[35%] left-[28.07%] tracking-[0.5px] leading-[24px]">
          Continue with Apple
        </div>
      </div>
      <div className="absolute top-[552px] left-[-6px] w-[372px] overflow-hidden flex flex-col items-start justify-center text-sm">
        <div className="w-[263px] relative h-10">
          <div className="absolute h-full w-[63.12%] top-[0%] left-[67.68%] tracking-[0.25px] leading-[20px] inline-block">
            or
          </div>
          <div className="absolute top-[22.5px] left-[-0.5px] box-border w-[90.9px] h-px border-t-[1px] border-solid border-gainsboro" />
          <div className="absolute top-[22.5px] left-[116.6px] box-border w-[90.9px] h-px border-t-[1px] border-solid border-gainsboro" />
        </div>
      </div>
      <div className="absolute top-[655px] left-[68px] w-[216px] overflow-hidden flex flex-col items-start justify-center text-sm">
        <div className="w-[213px] relative tracking-[0.25px] leading-[20px] inline-block h-[38px] shrink-0">
          <span>{`Don’t have an account? `}</span>
          <span className="text-light-primary">{`Sign Up `}</span>
        </div>
      </div>
      <ColorDefaultSizeMediumMo
        bUTTON="Sign IN WITH password"
        colorDefaultSizeMediumMoPosition="absolute"
        colorDefaultSizeMediumMoTop="610px"
        colorDefaultSizeMediumMoLeft="43px"
        colorDefaultSizeMediumMoWidth="245px"
        colorDefaultSizeMediumMoBorderRadius="8px"
        colorDefaultSizeMediumMoBackgroundColor="#1573fe"
        colorDefaultSizeMediumMoDisplay="flex"
        colorDefaultSizeMediumMoFlexDirection="row"
        colorDefaultSizeMediumMoPadding="12.5px 16px"
        onButtonClick={onButtonContainerClick}
      />
    </div>
  );
};

export default SignUp;
