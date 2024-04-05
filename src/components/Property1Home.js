import HomeFillImage from "./HomeFillImage";

const Property1Home = () => {
  return (
    <div className="absolute top-[20px] left-[20px] w-[428px] h-[119px] text-left text-xs text-base-black font-inria-sans">
      <img
        className="absolute h-[67.23%] w-full top-[32.77%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/subtract4.svg"
      />
      <div className="absolute h-[58.82%] w-[16.36%] top-[1.68%] right-[73.6%] bottom-[39.5%] left-[10.05%] rounded-[50%] bg-gainsboro" />
      <HomeFillImage
        homeFillIconWidth="14.02%"
        homeFillIconHeight="50.42%"
        homeFillIconPosition="absolute"
        homeFillIconTop="1.68%"
        homeFillIconRight="74.77%"
        homeFillIconBottom="47.9%"
        homeFillIconLeft="11.21%"
        homeFillIconMaxHeight="100%"
      />
      <div className="absolute top-[78.99%] left-[13.55%] text-mini">Home</div>
      <div className="absolute h-[51.26%] w-[9.35%] top-[42.02%] right-[7.94%] bottom-[6.72%] left-[82.71%]">
        <div className="absolute top-[77.05%] left-[12.5%]">Profile</div>
        <img
          className="absolute h-[65.57%] w-full top-[0%] right-[0%] bottom-[34.43%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/user-cicrle.svg"
        />
      </div>
      <img
        className="absolute top-[46px] left-[126px] w-[50px] h-[46px] object-cover"
        alt=""
        src="/stack-of-coins11@2x.png"
      />
      <img
        className="absolute top-[54px] left-[197px] w-[33px] h-[35px] object-cover"
        alt=""
        src="/ringer-volume1@2x.png"
      />
      <div className="absolute top-[81.51%] left-[32.48%]">Coin</div>
      <div className="absolute top-[81.51%] left-[49.3%]">Call</div>
      <div className="absolute h-[51.26%] w-[11.21%] top-[42.02%] right-[27.34%] bottom-[6.72%] left-[61.45%]">
        <div className="absolute top-[77.05%] left-[0%]">Message</div>
        <img
          className="absolute h-[65.57%] w-[83.33%] top-[0%] right-[0%] bottom-[34.43%] left-[16.67%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/send@2x.png"
        />
      </div>
    </div>
  );
};

export default Property1Home;
