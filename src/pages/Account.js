import { useCallback } from "react";
import { Checkbox, FormControlLabel, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ColorDefaultSizeMediumMo from "../components/ColorDefaultSizeMediumMo";

const Account = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/details");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white h-[800px] overflow-hidden text-left text-base text-base-black font-title-poppins-large">
      <div className="absolute top-[810px] left-[0px] w-[390px] h-[34px]">
        <div className="absolute top-[0px] left-[0px] w-[390px] h-[34px] overflow-hidden">
          <div className="absolute w-[calc(100%_-_241px)] right-[121px] bottom-[8px] left-[120px] h-[5px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-base-black" />
          </div>
        </div>
      </div>
      <div className="absolute top-[143px] left-[12px] w-[336px] h-[296px]">
        <div className="absolute top-[0px] left-[3.7px] text-23xl leading-[50px] font-semibold inline-block w-[332.3px]">
          Proof of Residency
        </div>
        <div className="absolute top-[176px] left-[0px] w-[332.3px] h-[72px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-aliceblue" />
          <div className="absolute top-[24px] left-[72px] w-[249px] h-6">
            <div className="absolute top-[0px] left-[0px] tracking-[0.1px] leading-[24px] font-semibold inline-block w-[249px]">
              INDIA
            </div>
            <div className="absolute top-[0px] left-[192px] tracking-[0.5px] leading-[24px] font-body-medium text-light-color-4 text-right">
              Change
            </div>
          </div>
          <img
            className="absolute top-[24px] left-[13px] w-[37px] h-[25px] object-cover"
            alt=""
            src="/image-14@2x.png"
          />
        </div>
        <div className="absolute top-[136px] left-[6.7px] tracking-[0.1px] leading-[24px] font-semibold inline-block w-[241.9px]">
          Nationality
        </div>
        <div className="absolute top-[272px] left-[9.7px] tracking-[0.1px] leading-[24px] font-semibold inline-block w-[241.9px]">
          Verification method
        </div>
      </div>
      <div className="absolute top-[451px] left-[12px] w-[342px] h-[72px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-aliceblue" />
        <FormControlLabel
          className="absolute top-[22px] left-[54px]"
          label="National Identity Card"
          control={<Checkbox color="primary" />}
        />
      </div>
      <div className="absolute top-[534px] left-[9px] w-[342px] h-[72px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-aliceblue" />
        <FormControlLabel
          className="absolute top-[22px] left-[57px]"
          label="Passport"
          control={<Checkbox color="primary" />}
        />
      </div>
      <div className="absolute top-[618px] left-[12px] w-[342px] h-[72px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-aliceblue" />
        <FormControlLabel
          className="absolute top-[22px] left-[54px]"
          label="Driver License"
          control={<Checkbox color="primary" />}
        />
      </div>
      <ColorDefaultSizeMediumMo
        colorDefaultSizeMediumMoPosition="absolute"
        colorDefaultSizeMediumMoTop="728px"
        colorDefaultSizeMediumMoLeft="97px"
        colorDefaultSizeMediumMoWidth="unset"
        colorDefaultSizeMediumMoBorderRadius="unset"
        colorDefaultSizeMediumMoBackgroundColor="unset"
        colorDefaultSizeMediumMoDisplay="unset"
        colorDefaultSizeMediumMoFlexDirection="unset"
        colorDefaultSizeMediumMoPadding="unset"
        onButtonClick={onButtonClick}
      />
      <img
        className="absolute top-[69px] left-[24px] w-6 h-6"
        alt=""
        src="/linesystemarrowleftline.svg"
      />
    </div>
  );
};

export default Account;
