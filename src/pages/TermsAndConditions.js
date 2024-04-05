import { useCallback } from "react";
import { Checkbox, FormControlLabel, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/report");
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
    <div className="w-full relative bg-base-white h-[1385px] overflow-hidden text-center text-base text-seagreen-500 font-plus-jakarta-sans">
      <div className="absolute top-[154px] left-[17px] font-medium text-left flex items-center w-[316px]">
        <span className="w-full">
          <p className="m-0">&nbsp;</p>
          <p className="m-0"></p>
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li className="mb-0 whitespace-pre-wrap">
              Users are required to pay a fee of Rs 50 per household through the
              app for waste collection services.
            </li>
          </ul>
          <p className="m-0 whitespace-pre-wrap"></p>
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li className="mb-0">
              The fee entitles households to regular waste collection services
              provided by the government within designated areas of Kerala.
            </li>
          </ul>
          <p className="m-0"></p>
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li className="mb-0">
              The payment is non-refundable, irrespective of the frequency of
              use or any change in residence status.
            </li>
          </ul>
          <p className="m-0"></p>
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li className="mb-0">
              {" "}
              The government ensures accountability in waste collection
              services, with transparent reporting mechanisms accessible through
              the app.
            </li>
          </ul>
          <p className="m-0"></p>
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li className="mb-0">
              Users must comply with waste segregation guidelines provided by
              the government for efficient collection and disposal.
            </li>
          </ul>
          <p className="m-0"></p>
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li className="mb-0">
              Personal information collected during registration and payment
              processes will be handled in accordance with applicable privacy
              laws.
            </li>
          </ul>
          <p className="m-0"></p>
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li className="mb-0">
              {" "}
              Users will receive timely updates regarding service schedules,
              changes in fees, or any modifications to terms and conditions
              through the app.
            </li>
          </ul>
          <p className="m-0"></p>
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li className="mb-0">
              {" "}
              Users are encouraged to cooperate with waste collection personnel
              for smooth and effective waste management operations.
            </li>
          </ul>
          <p className="m-0"></p>
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li className="mb-0">
              Users must adhere to all relevant laws and regulations governing
              waste disposal and management in Kerala.
            </li>
          </ul>
          <p className="m-0"></p>
          <ul className="m-0 font-inherit text-inherit pl-[21px] whitespace-pre-wrap">
            <li>
              {" "}
              Any disputes arising from the use of the app or waste collection
              services will be resolved through mutually agreed-upon procedures
              outlined by the government.
            </li>
          </ul>
        </span>
      </div>
      <b className="absolute top-[76px] left-[44px] text-13xl flex text-seagreen-200 items-center justify-center w-[262px] h-[73px]">{`Terms & Conditions`}</b>
      <FormControlLabel
        className="absolute top-[1184px] left-[51px]"
        label=""
        control={<Checkbox color="primary" defaultChecked />}
      />
      <div className="absolute top-[1195px] left-[80px] font-medium text-gray-400 flex items-center justify-center w-[260px]">{`I agree to all Terms & Conditions`}</div>
      <Button
        className="absolute top-[1243px] left-[85px] cursor-pointer"
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 189, height: 55 }}
        onClick={onGroupButtonClick}
      >
        Submit
      </Button>
      <img
        className="absolute top-[-7px] left-[135px] w-[90px] h-[90px] object-cover"
        alt=""
        src="/alarm@2x.png"
      />
      <img
        className="absolute top-[24px] left-[306px] w-[30.1px] h-[29px] object-contain"
        alt=""
        src="/group-469317@2x.png"
      />
      <img
        className="absolute top-[-7px] left-[243px] w-[90px] h-[90px] object-cover"
        alt=""
        src="/alarm@2x.png"
      />
      <img
        className="absolute top-[45px] left-[276px] w-[30.1px] h-[29px] object-contain"
        alt=""
        src="/group-469317@2x.png"
      />
      <img
        className="absolute top-[-186px] left-[360px] w-[30.1px] h-[29px] object-contain"
        alt=""
        src="/group-469318@2x.png"
      />
      <img
        className="absolute top-[24px] left-[14px] w-[30px] h-[30px] object-cover"
        alt=""
        src="/menu@2x.png"
      />
      <div className="absolute top-[-352px] left-[-92px] rounded-[50%] bg-greenyellow-200 w-[543px] h-[543px] opacity-[0.2]" />
      <footer className="absolute top-[1324px] left-[-3px] w-[363px] h-[61px]">
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

export default TermsAndConditions;
