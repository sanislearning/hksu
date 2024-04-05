import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const onAvatarImageClick = useCallback(() => {
    navigate("/details");
  }, [navigate]);

  const onLinemedianotification3LineIconClick = useCallback(() => {
    navigate("/notofications");
  }, [navigate]);

  const onComponent11ContainerClick = useCallback(() => {
    navigate("/details");
  }, [navigate]);

  const onComponent12ContainerClick = useCallback(() => {
    navigate("/details");
  }, [navigate]);

  const onComponent13ContainerClick = useCallback(() => {
    navigate("/details1");
  }, [navigate]);

  const onComponent11Container2Click = useCallback(() => {
    navigate("/details");
  }, [navigate]);

  const onComponent12Container2Click = useCallback(() => {
    navigate("/details");
  }, [navigate]);

  const onComponent11Container3Click = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  const onComponent12Container3Click = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  const onEditProfileInformationClick = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  const onComponent13Container2Click = useCallback(() => {
    navigate("/terms-and-conditions");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white h-[800px] overflow-hidden text-left text-sm text-base-black font-body-medium">
      <img
        className="absolute top-[-4px] left-[-15px] w-[390px] h-[271px]"
        alt=""
        src="/rectangle-49.svg"
      />
      <img
        className="absolute top-[137px] left-[123px] w-[127px] h-[130px] object-cover cursor-pointer"
        alt=""
        src="/avatar@2x.png"
        onClick={onAvatarImageClick}
      />
      <div className="absolute top-[272px] left-[95px] text-3xl leading-[28px] font-semibold font-title-poppins-large text-center inline-block w-[194px]">
        varun
      </div>
      <div className="absolute w-[81.94%] top-[37.63%] left-[11.67%] tracking-[0.25px] leading-[20px] text-center inline-block">
        varun.haridas321@gmail.com | +9495917116
      </div>
      <div className="absolute top-[25px] left-[21px] w-[318px] h-[26px]">
        <img
          className="absolute top-[2px] left-[255px] w-6 h-6 overflow-hidden"
          alt=""
          src="/fillsystemhistoryfill.svg"
        />
        <img
          className="absolute top-[2px] left-[294px] w-6 h-6 overflow-hidden"
          alt=""
          src="/fillsystemmore2fill.svg"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[25px] h-[25px] overflow-hidden cursor-pointer"
          alt=""
          src="/linemedianotification3line.svg"
          onClick={onLinemedianotification3LineIconClick}
        />
      </div>
      <div className="absolute top-[362px] left-[9px] w-[342px] h-[121px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-base-white shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[342px] h-[121px]" />
        <div
          className="absolute top-[14px] left-[16px] w-[277px] h-6 cursor-pointer"
          onClick={onComponent11ContainerClick}
        >
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/linebusinessprofileline.svg"
          />
          <div className="absolute top-[8.33%] left-[37px] tracking-[0.25px] leading-[20px] inline-block w-60">
            Edit profile information
          </div>
          <div className="absolute w-[86.64%] top-[8.33%] left-[22.38%] tracking-[0.25px] leading-[20px] text-light-primary text-right hidden">
            English
          </div>
        </div>
        <div
          className="absolute top-[49px] left-[16px] w-[277px] h-6 cursor-pointer"
          onClick={onComponent12ContainerClick}
        >
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/linemedianotification3line1.svg"
          />
          <div className="absolute top-[8.33%] left-[37px] tracking-[0.25px] leading-[20px] inline-block w-60">
            Notifications
          </div>
          <div className="absolute w-[86.64%] top-[8.33%] left-[22.38%] tracking-[0.25px] leading-[20px] text-light-primary text-right inline-block">
            ON
          </div>
        </div>
        <div
          className="absolute top-[86px] left-[16px] w-[277px] h-6 cursor-pointer"
          onClick={onComponent13ContainerClick}
        >
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/lineeditortranslate2.svg"
          />
          <div className="absolute top-[8.33%] left-[37px] tracking-[0.25px] leading-[20px] inline-block w-60">
            Language
          </div>
          <div className="absolute w-[86.64%] top-[8.33%] left-[22.38%] tracking-[0.25px] leading-[20px] text-light-primary text-right inline-block">
            English
          </div>
        </div>
      </div>
      <div className="absolute top-[507px] left-[9px] rounded-lg bg-base-white shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[342px] h-[86px] flex flex-col items-start justify-end pt-3.5 pb-[13px] pr-[49px] pl-4 box-border gap-[11px]">
        <div
          className="w-[277px] relative h-6 cursor-pointer"
          onClick={onComponent11Container2Click}
        >
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/linebusinessprojector2line.svg"
          />
          <div className="absolute top-[8.33%] left-[37px] tracking-[0.25px] leading-[20px] inline-block w-60">
            Security
          </div>
          <div className="absolute w-[86.64%] top-[8.33%] left-[22.38%] tracking-[0.25px] leading-[20px] text-light-primary text-right hidden">
            English
          </div>
        </div>
        <div
          className="w-[277px] relative h-6 cursor-pointer"
          onClick={onComponent12Container2Click}
        >
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/linehealthmentalhealthline.svg"
          />
          <div className="absolute top-[8.33%] left-[37px] tracking-[0.25px] leading-[20px] inline-block w-60">
            Theme
          </div>
          <div className="absolute w-[86.64%] top-[8.33%] left-[22.38%] tracking-[0.25px] leading-[20px] text-light-primary text-right inline-block">
            Light mode
          </div>
        </div>
      </div>
      <div className="absolute top-[617px] left-[9px] rounded-lg bg-base-white shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[342px] h-[121px] flex flex-col items-start justify-end pt-3.5 pb-[11px] pr-[49px] pl-4 box-border gap-[14px]">
        <div className="w-[277px] h-[58px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[10px]">
          <div
            className="w-[277px] relative h-6 cursor-pointer"
            onClick={onComponent11Container3Click}
          >
            <img
              className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
              alt=""
              src="/lineusercontactsline.svg"
            />
            <div className="absolute top-[8.33%] left-[37px] tracking-[0.25px] leading-[20px] inline-block w-60">{`Help & Support`}</div>
            <div className="absolute w-[86.64%] top-[8.33%] left-[22.38%] tracking-[0.25px] leading-[20px] text-light-primary text-right hidden">
              English
            </div>
          </div>
          <div
            className="w-[277px] relative h-6 cursor-pointer"
            onClick={onComponent12Container3Click}
          >
            <img
              className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
              alt=""
              src="/linecommunicationchatquoteline.svg"
            />
            <div
              className="absolute top-[8.33%] left-[37px] tracking-[0.25px] leading-[20px] inline-block w-60 cursor-pointer"
              onClick={onEditProfileInformationClick}
            >
              Contact us
            </div>
            <div className="absolute w-[86.64%] top-[8.33%] left-[22.38%] tracking-[0.25px] leading-[20px] text-light-primary text-right hidden">
              ON
            </div>
          </div>
        </div>
        <div
          className="w-[277px] relative h-6 cursor-pointer"
          onClick={onComponent13Container2Click}
        >
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/linesystemlock2line.svg"
          />
          <div className="absolute top-[8.33%] left-[37px] tracking-[0.25px] leading-[20px] inline-block w-60">
            Privacy policy
          </div>
          <div className="absolute w-[86.64%] top-[8.33%] left-[22.38%] tracking-[0.25px] leading-[20px] text-light-primary text-right hidden">
            English
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
