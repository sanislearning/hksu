import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Notofications = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onStackOfCoinsClick = useCallback(() => {
    navigate("/coin");
  }, [navigate]);

  const onImageRemovebgPreview401Click = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white h-[800px] overflow-hidden text-center text-3xs text-base-white font-outfit">
      <div className="absolute top-[-311px] left-[-202px] rounded-[50%] bg-greenyellow-200 w-[543px] h-[543px] opacity-[0.2]" />
      <div className="absolute top-[-311px] left-[46px] rounded-[50%] bg-greenyellow-200 w-[543px] h-[543px] opacity-[0.2]" />
      <div className="absolute top-[92.6px] left-[19px] w-[27.8px] h-[35.4px] opacity-[0.65] mix-blend-normal">
        <img
          className="absolute top-[0px] left-[3.4px] w-[21px] h-[19.9px]"
          alt=""
          src="/arrowleft.svg"
        />
        <div className="absolute top-[4.4px] left-[0px] w-[27.8px] h-[31px]" />
      </div>
      <div className="absolute top-[91px] left-[70px] text-xl font-poller-one text-base-black text-left inline-block w-[305px] h-[23px]">
        Notifications received
      </div>
      <img
        className="absolute top-[182px] left-[18px] rounded-41xl w-[60px] h-[60px] object-cover"
        alt=""
        src="/untitled-2@2x.png"
      />
      <div className="absolute top-[204px] left-[332px] w-[17.6px] h-[19px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tomato w-[17.6px] h-[19px]" />
        <b className="absolute top-[2px] left-[6.5px] inline-block w-[5.6px]">
          2
        </b>
      </div>
      <div className="absolute top-[425px] left-[332px] w-[17.6px] h-[19px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tomato w-[17.6px] h-[19px]" />
        <b className="absolute top-[2px] left-[6.5px] inline-block w-[5.6px]">
          2
        </b>
      </div>
      <div className="absolute top-[536px] left-[332.2px] rounded-[50%] bg-tomato w-[17.6px] h-[19px]" />
      <div className="absolute top-[309px] left-[332.2px] w-[17.6px] h-[19px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tomato w-[17.6px] h-[19px]" />
        <b className="absolute top-[2px] left-[6.5px] inline-block w-[5.6px]">
          2
        </b>
      </div>
      <b className="absolute top-[538px] left-[338.7px] inline-block w-[5.6px]">
        2
      </b>
      <div className="absolute top-[176px] left-[-54px] w-[468px] h-[70px] text-left text-xs text-dimgray-100">
        <div className="absolute top-[46.4px] left-[147px] font-medium inline-block w-16 h-2">
          2m ago.
        </div>
        <div className="absolute top-[0px] left-[0px] text-base leading-[37px] font-medium font-plus-jakarta-sans text-gray-400 whitespace-pre-wrap text-center flex items-center justify-center w-[468px] h-[70px]">
          {" "}
          Message received from Remya
        </div>
      </div>
      <div className="absolute top-[292px] left-[-88px] w-[560px] h-[402px] text-left text-xs text-dimgray-100">
        <img
          className="absolute top-[117px] left-[103px] rounded-41xl w-[60px] h-[60px] object-cover"
          alt=""
          src="/untitled-2@2x.png"
        />
        <img
          className="absolute top-[0px] left-[103px] w-[60px] h-[60px] object-cover"
          alt=""
          src="/untitled-3@2x.png"
        />
        <img
          className="absolute top-[234px] left-[103px] rounded-41xl w-[60px] h-[60px] object-cover"
          alt=""
          src="/untitled-2@2x.png"
        />
        <img
          className="absolute top-[342px] left-[103px] w-[60px] h-[60px] object-cover"
          alt=""
          src="/untitled-6@2x.png"
        />
        <div className="absolute top-[154px] left-[189px] font-medium inline-block w-[95px]">
          15/04/2024
        </div>
        <div className="absolute top-[386px] left-[189px] font-medium inline-block w-[95px]">
          22/05/2024
        </div>
        <div className="absolute top-[3px] left-[0px] w-[560px] h-[49px]">
          <div className="absolute top-[37px] left-[184px] font-medium inline-block w-[95px] h-3">
            22/03/2024
          </div>
          <div className="absolute top-[0px] left-[0px] text-base leading-[37px] font-medium font-plus-jakarta-sans text-gray-400 text-center flex items-center justify-center w-[560px] h-[45px]">
            Request received from Mili
          </div>
        </div>
        <div className="absolute top-[120px] left-[120px] text-base leading-[37px] font-medium font-plus-jakarta-sans text-gray-400 text-center flex items-center justify-center w-[345px] h-10">
          Message received from Vaish
        </div>
        <div className="absolute top-[267px] left-[187px] font-medium inline-block w-[95px]">
          22/04/2024
        </div>
      </div>
      <img
        className="absolute top-[-360.5px] left-[807px] w-[543px] h-[543px] opacity-[0.2]"
        alt=""
        src="/ellipse-23.svg"
      />
      <img
        className="absolute top-[calc(50%_-_382px)] left-[calc(50%_-_166px)] w-[28.4px] h-[11.1px]"
        alt=""
        src="/941.svg"
      />
      <div className="absolute top-[654px] left-[333px] w-[17.6px] h-[19px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tomato w-[17.6px] h-[19px]" />
        <b className="absolute top-[2px] left-[6.5px] inline-block w-[5.6px]">
          2
        </b>
      </div>
      <div className="absolute top-[525px] left-[52px] text-base leading-[37px] font-medium font-plus-jakarta-sans text-gray-400 flex items-center justify-center w-[311px] h-[37px]">
        Complaint received from santh
      </div>
      <div className="absolute top-[628px] left-[46px] text-base leading-[37px] font-medium font-plus-jakarta-sans text-gray-400 flex items-center justify-center w-[325px] h-[71px]">
        pickup notification from Binaya
      </div>
      <footer className="absolute top-[740px] left-[-3px] w-[363px] h-[61px]">
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
            className="absolute h-[53.93%] w-[8.65%] top-[21.15%] right-[82.78%] bottom-[24.92%] left-[8.57%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/-icon-home-simple-door@2x.png"
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

export default Notofications;
