import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const onNavItemContainerClick = useCallback(() => {
    window.location.href = "https://calendar.google.com/calendar/u/0/r";
  }, []);

  const onNavItemContainer1Click = useCallback(() => {
    navigate("/coin");
  }, [navigate]);

  const onLeftContainerClick = useCallback(() => {
    navigate("/coin");
  }, [navigate]);

  const onNavItemContainer4Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onProfileSettingsClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onNavItemContainer6Click = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  const onLeftContainer2Click = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  const onUserContainerClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onGroupFormClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onMenuIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="w-full relative bg-base-white h-[800px] overflow-hidden text-left text-mini text-color-dark-grey-v2 font-base-1-semibold">
      <div
        className="absolute top-[187px] left-[19px] rounded-lg bg-color-primary-blue w-[327px] flex flex-row items-center justify-start p-3 box-border gap-[12px] cursor-pointer text-base-white"
        onClick={onNavItemContainerClick}
      >
        <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
          <div className="w-6 relative h-6">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/calendar@2x.png"
            />
          </div>
          <div className="flex-1 relative tracking-[-0.01em] leading-[24px] font-semibold">
            Calendar
          </div>
        </div>
        <div className="w-5 relative rounded bg-color-accent-03 h-5 text-center text-3xs text-base-black">
          <div className="absolute top-[4px] left-[6.7px] tracking-[-0.01em] font-semibold">
            2
          </div>
        </div>
      </div>
      <div
        className="absolute top-[243px] left-[19px] rounded-lg w-[327px] flex flex-row items-center justify-start p-3 box-border gap-[12px] cursor-pointer"
        onClick={onNavItemContainer1Click}
      >
        <div className="flex-1 flex flex-row items-center justify-start">
          <div
            className="flex-1 flex flex-row items-center justify-start gap-[6px] cursor-pointer"
            onClick={onLeftContainerClick}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/icon-outline@2x.png"
            />
            <div className="flex-1 relative tracking-[-0.01em] leading-[24px] font-semibold">
              Rewards
            </div>
          </div>
        </div>
        <div className="w-5 relative rounded bg-color-accent-07 h-5 text-center text-3xs text-base-black">
          <div className="absolute top-[4px] left-[6.7px] tracking-[-0.01em] font-semibold">
            2
          </div>
        </div>
      </div>
      <div className="absolute top-[299px] left-[19px] rounded-lg w-[327px] h-12 flex flex-row items-center justify-start p-3 box-border">
        <div className="w-5 relative rounded bg-secondary-01 h-5 hidden" />
      </div>
      <div className="absolute top-[355px] left-[19px] rounded-lg w-[327px] flex flex-row items-center justify-start p-3 box-border gap-[12px]">
        <div className="flex flex-row items-center justify-start gap-[6px]">
          <img
            className="w-6 relative h-6 object-cover"
            alt=""
            src="/iconmenu-icon@2x.png"
          />
          <div className="w-[273px] relative tracking-[-0.01em] leading-[24px] font-semibold inline-block shrink-0">
            Payments Methods
          </div>
        </div>
        <div className="w-5 relative rounded bg-secondary-01 h-5 hidden" />
      </div>
      <div
        className="absolute top-[411px] left-[19px] rounded-lg w-[327px] flex flex-row items-center justify-start p-3 box-border gap-[12px] cursor-pointer"
        onClick={onNavItemContainer4Click}
      >
        <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
          <img
            className="w-6 relative h-6 object-cover"
            alt=""
            src="/iconmenu-icon1@2x.png"
          />
          <div
            className="flex-1 relative tracking-[-0.01em] leading-[24px] font-semibold cursor-pointer"
            onClick={onProfileSettingsClick}
          >{`Profile & Settings`}</div>
        </div>
        <div className="w-5 relative rounded bg-color-accent-04 h-5 text-center text-3xs text-base-black">
          <div className="absolute top-[4px] left-[6.7px] tracking-[-0.01em] font-semibold">
            2
          </div>
        </div>
      </div>
      <div className="absolute top-[467px] left-[19px] rounded-lg w-[327px] flex flex-row items-center justify-start p-3 box-border gap-[12px]">
        <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
          <div className="w-6 relative h-6">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/icon@2x.png"
            />
          </div>
          <div className="flex-1 relative tracking-[-0.01em] leading-[24px] font-semibold">
            Refer a Friend
          </div>
        </div>
        <div className="w-5 relative rounded bg-color-accent-04 h-5 hidden" />
      </div>
      <div
        className="absolute top-[299px] left-[20px] rounded-lg w-[327px] flex flex-row items-center justify-start p-3 box-border gap-[12px] cursor-pointer"
        onClick={onNavItemContainer6Click}
      >
        <div
          className="flex-1 flex flex-row items-center justify-start gap-[6px] cursor-pointer"
          onClick={onLeftContainer2Click}
        >
          <img
            className="w-6 relative h-6 object-cover"
            alt=""
            src="/iconmenu-icon2@2x.png"
          />
          <div className="flex-1 relative tracking-[-0.01em] leading-[24px] font-semibold">
            Support
          </div>
        </div>
        <div className="w-5 relative rounded bg-color-accent-04 h-5 hidden" />
      </div>
      <div
        className="absolute top-[70px] left-[32px] w-[255px] flex flex-row items-center justify-start gap-[12px] cursor-pointer text-color-light-body-text"
        onClick={onUserContainerClick}
      >
        <img
          className="w-12 relative rounded-[48px] h-12 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/avatar1@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch relative tracking-[-0.01em] leading-[24px] font-semibold">
            Varun
          </div>
          <div className="self-stretch relative text-xs tracking-[-0.01em] leading-[12px] font-medium text-color-dark-grey-v2">
            varun.haridas321@gmail.com
          </div>
        </div>
      </div>
      <form
        className="m-0 absolute top-[85px] left-[299px] w-6 h-6 cursor-pointer"
        onClick={onGroupFormClick}
      >
        <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-end">
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <div className="w-6 relative rounded-md bg-secondary-01 h-6 overflow-hidden shrink-0 hidden">
              <div className="absolute w-full top-[0px] left-[0px] text-mini tracking-[-0.01em] leading-[24px] font-semibold font-base-1-semibold text-neutral-07 text-center inline-block">
                8
              </div>
            </div>
            <div className="w-6 relative h-6 overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-3xl overflow-hidden flex flex-row items-center justify-center p-2 border-[2px] border-solid border-neutral-03">
                <img className="w-2 relative h-2" alt="" src="/add-icon.svg" />
              </div>
            </div>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/ui-iconclosefilled.svg"
            />
          </div>
        </div>
      </form>
      <div className="absolute top-[678px] left-[16px] w-[327px] flex flex-col items-start justify-start">
        <div className="self-stretch relative rounded-sm bg-color-dark-grey h-0.5 overflow-hidden shrink-0 opacity-[0.2]" />
        <div className="self-stretch rounded-lg flex flex-row items-center justify-start p-3 gap-[12px]">
          <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/ui-iconhelplight.svg"
            />
            <div className="flex-1 relative tracking-[-0.01em] leading-[24px] font-semibold">
              Colour Scheme
            </div>
          </div>
          <div className="w-5 relative rounded bg-color-accent-04 h-5 hidden" />
        </div>
      </div>
      <div className="absolute top-[740px] left-[20px] rounded-13xl bg-base-white shadow-[0px_-1px_1px_rgba(0,_0,_0,_0.04)_inset,_0px_2px_0px_rgba(255,_255,_255,_0.25)_inset,_0px_4px_8px_-4px_rgba(0,_0,_0,_0.25)] w-[121.5px] overflow-hidden flex flex-row items-center justify-center py-1 pr-4 pl-2 box-border gap-[8px]">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/ui-iconsunfilled.svg"
        />
        <div className="relative tracking-[-0.01em] leading-[24px] font-semibold">
          Light
        </div>
      </div>
      <div className="absolute top-[740px] left-[145.5px] rounded-13xl w-[121.5px] flex flex-row items-center justify-center py-1 pr-4 pl-2 box-border gap-[8px]">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/ui-iconmoonlight.svg"
        />
        <div className="relative tracking-[-0.01em] leading-[24px] font-semibold">
          Dark
        </div>
      </div>
      <img
        className="absolute top-[13px] left-[11px] w-[30px] h-[30px] object-cover cursor-pointer"
        alt=""
        src="/menu11@2x.png"
        onClick={onMenuIconClick}
      />
    </div>
  );
};

export default Menu;
