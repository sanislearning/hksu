import { useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Contactus = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className="w-full relative bg-steelblue h-[800px] overflow-hidden text-center text-xl text-base-white font-play">
      <div className="absolute top-[439px] left-[30px] rounded-8xs bg-base-white w-72 h-28" />
      <div className="absolute top-[581px] left-[34px] rounded-8xs bg-base-white w-[284px] h-8" />
      <div className="absolute top-[384px] left-[27px] rounded-8xs bg-base-white w-72 h-[37px]" />
      <div className="absolute top-[334px] left-[26px] rounded-8xs bg-base-white w-[286px] h-[35px]" />
      <div className="absolute top-[176px] left-[0px] w-[360px] h-[90px]">
        <div className="absolute top-[50px] left-[16.4px] flex items-center w-[328.2px] h-10">
          <span className="w-full">
            <p className="m-0">{`Please describe the problem, `}</p>
            <p className="m-0">attach file if needed.</p>
          </span>
        </div>
        <div className="absolute top-[0px] left-[16.4px] flex items-center justify-center w-[360px] h-[30px]">
          Welcome to help center 👋🏻
        </div>
      </div>
      <Button
        className="absolute top-[648px] left-[85px] cursor-pointer"
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 189, height: 55 }}
        onClick={onFrameButtonClick}
      >
        Submit
      </Button>
      <div className="absolute top-[91px] left-[54px] tracking-[0.05em] font-pridi flex items-center justify-center w-[230px] [text-shadow:1px_0_0_#606060,_0_1px_0_#606060,_-1px_0_0_#606060,_0_-1px_0_#606060]">
        Contact Us
      </div>
      <div className="absolute top-[27px] left-[12px] w-[337px] h-[30px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[31.4px] h-[30px] object-cover cursor-pointer"
          alt=""
          src="/menu12@2x.png"
          onClick={onMenuIconClick}
        />
        <img
          className="absolute top-[0px] left-[305.6px] w-[31.4px] h-[30px] object-cover"
          alt=""
          src="/alarm1@2x.png"
        />
      </div>
      <TextField
        className="[border:none] bg-[transparent] absolute top-[326px] left-[26px] font-play text-lg text-dimgray-200"
        color="primary"
        label="Contact mail"
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "42px" }, width: "285px" }}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[372px] left-[26px]"
        color="primary"
        label="Subject"
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "49px" }, width: "286px" }}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[441px] left-[33px]"
        color="primary"
        label="Message"
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "110px" }, width: "279px" }}
      />
      <div className="absolute top-[580px] left-[93.9px] text-lg text-dimgray-200 text-left flex items-center w-[181.2px] h-[30px]">
        Attach file
      </div>
      <input
        className="absolute top-[583px] left-[53.2px] w-[21.7px] h-6 overflow-hidden"
        required={true}
        readOnly={true}
        type="file"
      />
    </div>
  );
};

export default Contactus;
