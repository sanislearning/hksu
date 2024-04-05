import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Report = () => {
  const navigate = useNavigate();

  const onMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onIconHomeSimpleDoorClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onStackOfCoinsClick = useCallback(() => {
    navigate("/coin");
  }, [navigate]);

  const onImageRemovebgPreview401Click = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white h-[800px] overflow-hidden text-center text-13xl text-seagreen-100 font-plus-jakarta-sans">
      <div className="absolute top-[149px] left-[19px] w-[322px] overflow-hidden flex flex-col items-end justify-center">
        <div className="self-stretch relative font-medium">
          Report a Missed Pickup
        </div>
      </div>
      <div className="absolute top-[271px] left-[35px] w-[304px] overflow-hidden flex flex-col items-end justify-center">
        <TextField
          className="[border:none] bg-[transparent] self-stretch relative font-plus-jakarta-sans font-medium text-xs text-seagreen-200"
          color="primary"
          label="Explain the isssue here"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "84px" } }}
        />
      </div>
      <div className="absolute top-[393px] left-[74px] w-[212px] overflow-hidden flex flex-col items-end justify-center text-mini text-seagreen-200">
        <div className="self-stretch relative h-[180px]">
          <div className="absolute top-[107px] left-[-4px] font-medium flex items-center justify-center w-[210px] h-[73px]">
            Add a photo here
          </div>
          <div className="absolute top-[0px] left-[35px] rounded-[50%] bg-seagreen-300 w-[130px] h-[130px]" />
          <img
            className="absolute top-[39px] left-[71px] w-[60px] h-[60px] object-cover"
            alt=""
            src="/imageremovebgpreview-14-1@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[70px] left-[16px] w-[332px] flex flex-row items-center justify-between">
        <img
          className="w-[30px] relative h-[30px] object-cover cursor-pointer"
          alt=""
          src="/menu11@2x.png"
          onClick={onMenuIconClick}
        />
        <img
          className="w-[30px] relative h-[30px] object-cover"
          alt=""
          src="/alarm11@2x.png"
        />
      </div>
      <Button
        className="absolute top-[659px] left-[84px]"
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 182, height: 55 }}
      >
        Payment
      </Button>
      <a
        className="[text-decoration:none] absolute top-[580px] left-[84px] w-[182px] h-[55px] text-3xl text-base-white"
        href="https://www.google.com/maps/@12.0506892,75.6557201,15z?entry=ttu"
      >
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-cornflowerblue w-[182px] h-[55px]" />
        <div className="absolute top-[7px] left-[12px] font-medium flex items-center justify-center w-[156px] h-9">
          Add Location
        </div>
      </a>
      <img
        className="absolute top-[739.2px] left-[121px] w-[41px] h-[43.7px] object-contain"
        alt=""
        src="/group-252@2x.png"
      />
      <div className="absolute top-[730px] left-[-19px] rounded-6xl bg-base-white w-[382px] h-[70.1px]" />
      <footer className="absolute top-[737px] left-[-4px] w-[363px] h-[61px]">
        <img
          className="absolute top-[8px] left-[131.9px] w-[38.6px] h-[38px] object-contain"
          alt=""
          src="/group-25@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] w-[363px] h-[61px]">
          <div className="absolute top-[0px] left-[0px] rounded-6xl bg-base-white w-[363px] h-[61px]" />
          <img
            className="absolute h-[58.85%] w-[7.96%] top-[20.98%] right-[12.42%] bottom-[20.16%] left-[79.61%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
            alt=""
            src="/vector@2x.png"
            onClick={onVectorIconClick}
          />
          <img
            className="absolute h-[53.93%] w-[8.65%] top-[21.15%] right-[82.78%] bottom-[24.92%] left-[8.57%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
            alt=""
            src="/-icon-home-simple-door@2x.png"
            onClick={onIconHomeSimpleDoorClick}
          />
          <img
            className="absolute top-[10px] left-[185.7px] w-[61.3px] h-[42px] object-cover cursor-pointer"
            alt=""
            src="/stack-of-coins2@2x.png"
            onClick={onStackOfCoinsClick}
          />
          <img
            className="absolute top-[12px] left-[109.7px] w-[39.6px] h-[42px] object-cover cursor-pointer"
            alt=""
            src="/imageremovebgpreview-40-1@2x.png"
            onClick={onImageRemovebgPreview401Click}
          />
        </div>
      </footer>
    </div>
  );
};

export default Report;
