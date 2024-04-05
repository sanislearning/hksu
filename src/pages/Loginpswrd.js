import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ColorDefaultSizeMediumMo from "../components/ColorDefaultSizeMediumMo";

const Loginpswrd = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/details1");
  }, [navigate]);

  const onSignUpTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white h-[800px] overflow-hidden text-left text-sm text-base-black font-title-poppins-large">
      <img
        className="absolute top-[537px] left-[-92px] w-[544px] h-6 overflow-hidden"
        alt=""
        src="/frame3.svg"
      />
      <div className="absolute top-[810px] left-[-30px] w-[420px] overflow-hidden flex flex-col items-end justify-center">
        <div className="w-[390px] relative h-[34px] overflow-hidden shrink-0">
          <div className="absolute w-[calc(100%_-_241px)] right-[121px] bottom-[8px] left-[120px] h-[5px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-base-black" />
          </div>
        </div>
      </div>
      <TextField
        className="[border:none] bg-[transparent] absolute top-[367px] left-[7px] font-body-medium text-sm text-gray-200"
        color="primary"
        label="Password"
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "50px" }, width: "346px" }}
      />
      <div
        className="absolute top-[726px] left-[240px] tracking-[0.25px] leading-[20px] font-body-medium text-light-primary cursor-pointer"
        onClick={onSignUpTextClick}
      >
        Sign up
      </div>
      <div className="absolute top-[273px] left-[8px] w-[344px] overflow-hidden flex flex-col items-start justify-center text-center text-3xl">
        <div className="self-stretch relative leading-[28px] font-semibold">
          Varun
        </div>
      </div>
      <ColorDefaultSizeMediumMo
        colorDefaultSizeMediumMoPosition="absolute"
        colorDefaultSizeMediumMoTop="441px"
        colorDefaultSizeMediumMoLeft="9px"
        colorDefaultSizeMediumMoWidth="unset"
        colorDefaultSizeMediumMoBorderRadius="unset"
        colorDefaultSizeMediumMoBackgroundColor="unset"
        colorDefaultSizeMediumMoDisplay="unset"
        colorDefaultSizeMediumMoFlexDirection="unset"
        colorDefaultSizeMediumMoPadding="unset"
        onButtonClick={onButtonClick}
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[31px] left-[16px] w-6 h-6">
        <img
          className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
          alt=""
          src="/linesystemarrowleftline.svg"
        />
      </button>
      <img
        className="absolute top-[129px] left-[109px] w-[120px] h-[120px] object-cover"
        alt=""
        src="/component-1@2x.png"
      />
      <div className="absolute top-[726.1px] left-[30.7px] w-[185.5px] h-[37.9px] text-23xl">
        <div className="absolute top-[583.1px] left-[63.7px] leading-[50px] font-semibold hidden w-[342px]">
          Enter your password
        </div>
        <div className="absolute h-[100.26%] w-[81.94%] top-[-0.26%] left-[28.19%] text-sm tracking-[0.25px] leading-[20px] font-body-medium inline-block">{`Don’t have an account? `}</div>
      </div>
    </div>
  );
};

export default Loginpswrd;
