import { useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Complaint = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

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
    <div className="w-full relative bg-base-white h-[800px] overflow-hidden text-center text-3xs text-seagreen-200 font-plus-jakarta-sans">
      <div className="absolute top-[93px] left-[18px] text-13xl font-medium text-seagreen-100 flex items-center justify-center w-[323px] h-[73px]">
        My Complaints
      </div>
      <img
        className="absolute top-[185px] left-[21px] rounded-[15px] w-[304px] h-[57px]"
        alt=""
        src="/rectangle-48.svg"
      />
      <TextField
        className="absolute top-[185px] left-[21px]"
        color="primary"
        label="Share your isssue here ......"
        sx={{ width: 304 }}
        variant="outlined"
        multiline
      />
      <div className="absolute top-[406px] left-[71px] font-medium flex items-center justify-center w-[210px] h-[73px]">
        Add a photo here
      </div>
      <div className="absolute top-[572px] left-[69px] font-medium flex items-center justify-center w-[210px] h-[73px]">
        Add a video here
      </div>
      <div className="absolute top-[466px] left-[108px] rounded-[50%] bg-seagreen-300 w-[130px] h-[130px]" />
      <div className="absolute top-[300px] left-[108px] w-[130px] h-[130px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-seagreen-300 w-[130px] h-[130px]" />
        <img
          className="absolute top-[41px] left-[36px] w-[60px] h-[60px] object-cover"
          alt=""
          src="/imageremovebgpreview-14-1@2x.png"
        />
      </div>
      <Button
        className="absolute top-[646px] left-[85px] cursor-pointer"
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 189, height: 55 }}
        onClick={onGroupButtonClick}
      >
        Complaint
      </Button>
      <img
        className="absolute top-[504px] left-[141px] w-[65px] h-[65px] object-cover"
        alt=""
        src="/imageremovebgpreview-38-2@2x.png"
      />
      <div className="absolute top-[61px] left-[21px] w-[322px] h-[30px]">
        <img
          className="absolute top-[0px] left-[0px] w-[30px] h-[30px] object-cover cursor-pointer"
          alt=""
          src="/menu11@2x.png"
          onClick={onMenuIconClick}
        />
        <img
          className="absolute top-[0px] left-[292px] w-[30px] h-[30px] object-cover"
          alt=""
          src="/alarm11@2x.png"
        />
      </div>
      <img
        className="absolute top-[739.2px] left-[131px] w-[41px] h-[43.7px] object-contain"
        alt=""
        src="/group-252@2x.png"
      />
      <footer className="absolute top-[735px] left-[0px] w-[363px] h-[61px]">
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

export default Complaint;
