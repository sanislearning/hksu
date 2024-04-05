import { useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();

  const onFrame2Click = useCallback(() => {
    navigate("/details1");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white h-[800px] overflow-hidden text-left text-[36px] text-base-black font-title-poppins-large">
      <div className="absolute top-[825px] left-[-33px] w-[426px] overflow-hidden flex flex-col items-end justify-center">
        <div className="w-[390px] relative h-[34px] overflow-hidden shrink-0">
          <div className="absolute w-[calc(100%_-_241px)] right-[121px] bottom-[8px] left-[120px] h-[5px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-base-black" />
          </div>
        </div>
      </div>
      <div className="absolute top-[113px] left-[31px] w-[313px] overflow-hidden flex flex-col items-end justify-center">
        <div className="self-stretch relative leading-[50px] font-semibold">
          Fill your profile
        </div>
      </div>
      <div className="absolute top-[203.8px] left-[15.5px] w-[328.9px] h-[18.6px] overflow-hidden" />
      <div className="absolute h-[2.33%] w-[86.36%] top-[20.13%] left-[8.61%] text-sm tracking-[0.25px] leading-[20px] font-body-medium inline-block">
        Don’t worry, you can always change it later
      </div>
      <img
        className="absolute top-[26px] left-[14px] w-[306px] h-6 overflow-hidden"
        alt=""
        src="/frame4.svg"
      />
      <Button
        className="absolute top-[730px] left-[101px] cursor-pointer"
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 158 }}
        onClick={onFrame2Click}
      >
        submit
      </Button>
      <img
        className="absolute top-[254px] left-[113px] w-[134px] h-[130px] overflow-hidden object-cover"
        alt=""
        src="/frame5@2x.png"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[422px] left-[14px] font-body-medium text-sm text-darkgray"
        color="primary"
        label="Full name"
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "50px" }, width: "342px" }}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[496px] left-[12px] font-body-medium text-sm text-darkgray"
        color="primary"
        label="Address"
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "50px" }, width: "342px" }}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[570px] left-[13px] font-body-medium text-sm text-darkgray"
        color="primary"
        label="Email"
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "50px" }, width: "342px" }}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[644px] left-[6px] font-body-medium text-sm text-darkgray"
        color="primary"
        label="Phone number"
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "50px" }, width: "348px" }}
      />
    </div>
  );
};

export default Details;
