import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Property1Home from "../components/Property1Home";

const Home = () => {
  const navigate = useNavigate();

  const onTipsContainerClick = useCallback(() => {
    navigate("/tips");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/tips");
  }, [navigate]);

  const onNewsTipsClick = useCallback(() => {
    navigate("/tips");
  }, [navigate]);

  const onRePickupContainerClick = useCallback(() => {
    navigate("/terms-and-conditions");
  }, [navigate]);

  const onRequestARePickupClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  const onMissedPickupContainerClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  const onReportMissedPickupClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  const onMyComplaintsContainerClick = useCallback(() => {
    navigate("/complaint");
  }, [navigate]);

  const onMyComplaintsTextClick = useCallback(() => {
    navigate("/complaint");
  }, [navigate]);

  const onGroupImageClick = useCallback(() => {
    navigate("/complaint");
  }, [navigate]);

  const onMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

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
    <div className="w-full relative bg-base-white h-[800px] overflow-hidden text-center text-lg text-seagreen-400 font-plus-jakarta-sans">
      <div className="absolute top-[567px] left-[-313px] rounded-[50%] bg-greenyellow-200 w-[543px] h-[543px] opacity-[0.2]" />
      <div
        className="absolute top-[558px] left-[195px] w-[148px] h-[132px] cursor-pointer"
        onClick={onTipsContainerClick}
      >
        <div
          className="absolute top-[0px] left-[0px] rounded-3xs bg-base-white box-border w-[148px] h-[132px] cursor-pointer border-[1px] border-solid border-base-black"
          onClick={onRectangleClick}
        />
        <Button
          className="absolute top-[67px] left-[17px] cursor-pointer"
          disableElevation={true}
          color="primary"
          variant="text"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 121, height: 47 }}
          onClick={onNewsTipsClick}
        >{`News &
Tips`}</Button>
        <img
          className="absolute top-[2px] left-[53px] w-[45px] h-[60px] object-contain"
          alt=""
          src="/group-469316@2x.png"
        />
      </div>
      <div
        className="absolute top-[246px] left-[19px] w-[148px] h-[132px] cursor-pointer"
        onClick={onRePickupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-base-white box-border w-[148px] h-[132px] border-[1px] border-solid border-base-black" />
        <Button
          className="absolute top-[56px] left-[9px] cursor-pointer"
          disableElevation={true}
          color="primary"
          variant="text"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 131, height: 70 }}
          onClick={onRequestARePickupClick}
        >{`Request a 
Re-pickup`}</Button>
        <img
          className="absolute top-[16px] left-[48px] w-[50px] h-[50px] object-cover"
          alt=""
          src="/group-469323@2x.png"
        />
      </div>
      <div
        className="absolute top-[559px] left-[19px] w-[150px] h-[132px] cursor-pointer"
        onClick={onMissedPickupContainerClick}
      >
        <div
          className="absolute top-[0px] left-[0px] rounded-3xs bg-base-white box-border w-[148px] h-[132px] cursor-pointer border-[1px] border-solid border-base-black"
          onClick={onRectangle2Click}
        />
        <Button
          className="absolute top-[54px] left-[1px] cursor-pointer"
          disableElevation={true}
          color="primary"
          variant="text"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 144, height: 69 }}
          onClick={onReportMissedPickupClick}
        >
          Report missed pickup
        </Button>
        <img
          className="absolute top-[7px] left-[45px] w-[60px] h-[60px] object-contain"
          alt=""
          src="/group-469329@2x.png"
        />
      </div>
      <div
        className="absolute top-[409px] left-[117px] w-[131px] h-[118px] cursor-pointer"
        onClick={onMyComplaintsContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] w-[131px] h-[117px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-base-white box-border w-[131px] h-[117px] border-[1px] border-solid border-base-black" />
        </div>
        <div
          className="absolute top-[40px] left-[0px] font-medium flex items-center w-[131px] h-[78px] cursor-pointer"
          onClick={onMyComplaintsTextClick}
        >
          <span className="w-full">
            <p className="m-0">{`My `}</p>
            <p className="m-0">complaints</p>
          </span>
        </div>
        <img
          className="absolute top-[4px] left-[35px] w-[60px] h-[60px] object-cover cursor-pointer"
          alt=""
          src="/group-469328@2x.png"
          onClick={onGroupImageClick}
        />
      </div>
      <div className="absolute top-[995px] left-[-473px] w-[473px] h-[724px] text-left text-xs text-base-black font-inria-sans">
        <div className="absolute top-[0px] left-[0px] rounded-8xs w-[473px] h-[724px] overflow-hidden">
          <div className="absolute top-[576px] left-[20px] w-[428px] h-[119px]">
            <img
              className="absolute h-[67.23%] w-full top-[32.77%] right-[-0.23%] bottom-[0%] left-[0.23%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/subtract.svg"
            />
            <div className="absolute h-[58.82%] w-[16.36%] top-[3.36%] right-[5.37%] bottom-[37.82%] left-[78.27%] rounded-[50%] bg-gainsboro" />
            <img
              className="absolute h-[50.42%] w-[14.02%] top-[7.56%] right-[6.54%] bottom-[42.02%] left-[79.44%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/user-circle@2x.png"
            />
            <div className="absolute h-[51.26%] w-[9.35%] top-[42.02%] right-[78.5%] bottom-[6.72%] left-[12.15%]">
              <img
                className="absolute h-[65.57%] w-full top-[0%] right-[0%] bottom-[34.43%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/component-1variant4.svg"
              />
              <div className="absolute top-[77.05%] left-[20%]">Home</div>
            </div>
            <div className="absolute top-[74.79%] left-[82.48%] text-mini">
              Profile
            </div>
            <div className="absolute h-[51.26%] w-[10.98%] top-[42.02%] right-[26.4%] bottom-[6.72%] left-[62.62%]">
              <div className="absolute top-[77.05%] left-[4.26%]">Message</div>
              <img
                className="absolute h-[65.57%] w-[85.11%] top-[0%] right-[14.89%] bottom-[34.43%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/send@2x.png"
              />
            </div>
            <img
              className="absolute top-[50px] left-[131px] w-[47px] h-[43px] object-cover"
              alt=""
              src="/stack-of-coins1@2x.png"
            />
            <div className="absolute top-[79.83%] left-[33.41%]">Coin</div>
            <img
              className="absolute top-[50px] left-[205px] w-[39px] h-[37px] object-cover"
              alt=""
              src="/ringer-volume@2x.png"
            />
            <div className="absolute top-[79.83%] left-[50.23%]">Call</div>
          </div>
          <div className="absolute top-[437px] left-[20px] w-[428px] h-[119px]">
            <img
              className="absolute h-[67.23%] w-full top-[32.77%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/subtract1.svg"
            />
            <div className="absolute h-[58.82%] w-[16.36%] top-[4.2%] right-[21.5%] bottom-[36.97%] left-[62.15%] rounded-[50%] bg-gainsboro" />
            <img
              className="absolute h-[50.42%] w-[14.02%] top-[8.4%] right-[22.66%] bottom-[41.18%] left-[63.32%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/send-fill@2x.png"
            />
            <div className="absolute top-[81.51%] left-[14.02%]">Home</div>
            <div className="absolute top-[74.79%] left-[63.55%] text-mini">
              Message
            </div>
            <div className="absolute h-[51.26%] w-[9.35%] top-[42.02%] right-[8.41%] bottom-[6.72%] left-[82.24%]">
              <div className="absolute top-[77.05%] left-[12.5%]">Profile</div>
              <img
                className="absolute h-[65.57%] w-full top-[0%] right-[0%] bottom-[34.43%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/user-cicrle.svg"
              />
            </div>
            <img
              className="absolute h-[33.61%] w-[9.35%] top-[42.02%] right-[78.5%] bottom-[24.37%] left-[12.15%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/component-1variant4.svg"
            />
            <img
              className="absolute top-[46px] left-[137px] w-[47px] h-[43px] object-cover"
              alt=""
              src="/stack-of-coins1@2x.png"
            />
            <div className="absolute top-[78.15%] left-[34.81%]">Coin</div>
            <img
              className="absolute top-[49px] left-[214px] w-[33px] h-[35px] object-cover"
              alt=""
              src="/ringer-volume1@2x.png"
            />
            <div className="absolute top-[78.15%] left-[51.17%]">Call</div>
          </div>
          <div className="absolute top-[309px] left-[13px] w-[428px] h-[119px]">
            <img
              className="absolute h-[67.23%] w-full top-[32.77%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/subtract2.svg"
            />
            <div className="absolute h-[58.82%] w-[16.36%] top-[3.36%] right-[38.55%] bottom-[37.82%] left-[45.09%] rounded-[50%] bg-gainsboro" />
            <div className="absolute h-[51.26%] w-[10.51%] top-[42.02%] right-[23.13%] bottom-[6.72%] left-[66.36%]">
              <img
                className="absolute h-[65.57%] w-[88.89%] top-[0%] right-[11.11%] bottom-[34.43%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/send@2x.png"
              />
              <div className="absolute top-[77.05%] left-[0%]">Message</div>
            </div>
            <div className="absolute h-[51.26%] w-[9.35%] top-[42.02%] right-[8.41%] bottom-[6.72%] left-[82.24%]">
              <div className="absolute top-[77.05%] left-[12.5%]">Profile</div>
              <img
                className="absolute h-[65.57%] w-full top-[0%] right-[0%] bottom-[34.43%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/user-cicrle.svg"
              />
            </div>
            <div className="absolute h-[51.26%] w-[27.1%] top-[42.02%] right-[60.75%] bottom-[6.72%] left-[12.15%]">
              <div className="absolute top-[77.05%] left-[6.9%]">Home</div>
              <div className="absolute top-[73.77%] left-[80.17%]">Coin</div>
              <img
                className="absolute h-[65.57%] w-[34.48%] top-[0%] right-[65.52%] bottom-[34.43%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/component-1variant4.svg"
              />
            </div>
            <img
              className="absolute top-[49px] left-[135px] w-[47px] h-[43px] object-cover"
              alt=""
              src="/stack-of-coins1@2x.png"
            />
            <div className="absolute top-[81.51%] left-[51.64%]">Call</div>
          </div>
          <div className="absolute top-[153px] left-[12px] w-[428px] h-[119px]">
            <img
              className="absolute h-[67.23%] w-full top-[32.77%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/subtract3.svg"
            />
            <div className="absolute h-[58.82%] w-[16.36%] top-[3.36%] right-[54.67%] bottom-[37.82%] left-[28.97%] rounded-[50%] bg-gainsboro" />
            <img
              className="absolute h-[50.42%] w-[14.02%] top-[7.56%] right-[55.84%] bottom-[42.02%] left-[30.14%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/search-alt-fill@2x.png"
            />
            <div className="absolute h-[51.26%] w-[10.75%] top-[42.02%] right-[27.1%] bottom-[6.72%] left-[62.15%]">
              <img
                className="absolute h-[65.57%] w-[86.96%] top-[0%] right-[0%] bottom-[34.43%] left-[13.04%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/send@2x.png"
              />
              <div className="absolute top-[77.05%] left-[0%]">Message</div>
            </div>
            <div className="absolute h-[51.26%] w-[9.35%] top-[42.02%] right-[8.41%] bottom-[6.72%] left-[82.24%]">
              <div className="absolute top-[77.05%] left-[12.5%]">Profile</div>
              <img
                className="absolute h-[65.57%] w-full top-[0%] right-[0%] bottom-[34.43%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/user-cicrle.svg"
              />
            </div>
            <div className="absolute h-[51.26%] w-[9.35%] top-[42.02%] right-[78.5%] bottom-[6.72%] left-[12.15%]">
              <div className="absolute top-[77.05%] left-[20%]">Home</div>
              <img
                className="absolute h-[65.57%] w-full top-[0%] right-[0%] bottom-[34.43%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/component-1variant4.svg"
              />
            </div>
            <img
              className="absolute top-[12px] left-[134px] w-[50px] h-[46px] object-cover"
              alt=""
              src="/stack-of-coins11@2x.png"
            />
            <img
              className="absolute top-[54px] left-[205px] w-[33px] h-[35px] object-cover"
              alt=""
              src="/ringer-volume1@2x.png"
            />
            <div className="absolute top-[81.51%] left-[34.35%]">Coin</div>
            <div className="absolute top-[81.51%] left-[50.23%]">Call</div>
          </div>
          <Property1Home />
        </div>
        <img
          className="absolute top-[343.8px] left-[224.4px] w-[35.4px] h-[36.5px] object-cover"
          alt=""
          src="/ringer-volume2@2x.png"
        />
      </div>
      <div className="absolute top-[247px] left-[196px] w-[148px] h-[132px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-base-white box-border w-[148px] h-[132px] border-[1px] border-solid border-base-black" />
        <div className="absolute top-[63px] left-[0px] font-medium flex items-center w-[148px] h-[63px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">New</p>
            <p className="m-0">Announcement</p>
          </span>
        </div>
        <img
          className="absolute top-[18px] left-[54px] w-[46.7px] h-[45px] object-contain"
          alt=""
          src="/group-469315@2x.png"
        />
      </div>
      <img
        className="absolute top-[-295.5px] left-[98.5px] w-[543px] h-[543px] opacity-[0.2]"
        alt=""
        src="/ellipse-50.svg"
      />
      <div className="absolute top-[134px] left-[32px] w-[329px] h-[75.7px] text-mini text-gray-300 font-base-1-semibold">
        <img
          className="absolute top-[5px] left-[0px] rounded-[42px] w-[300px] h-[79px] object-cover"
          alt=""
          src="/rectangle-197@2x.png"
        />
        <div className="absolute top-[27.8px] left-[63.5px] w-[199px] h-[5.5px]">
          <div className="absolute top-[0px] left-[0px] tracking-[-0.24px] leading-[10.49px] inline-block w-[199px] h-[5.5px]">
            <p className="m-0">{`Pick up on Varikoli location `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0"> tomorrow</p>
          </div>
        </div>
        <img
          className="absolute top-[17px] left-[18px] w-[45px] h-[45px]"
          alt=""
          src="/tick.svg"
        />
      </div>
      <img
        className="absolute top-[50px] left-[15px] w-[33.4px] h-[30px] object-cover cursor-pointer"
        alt=""
        src="/menu1@2x.jpg"
        onClick={onMenuIconClick}
      />
      <img
        className="absolute top-[50px] left-[318.6px] w-[33.4px] h-[30px] object-cover"
        alt=""
        src="/alarm3@2x.png"
      />
      <footer className="absolute top-[745px] left-[-3px] w-[363px] h-[61px]">
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

export default Home;
