import { useMemo } from "react";

const StatusFocus = ({
  va,
  label,
  showCancelIcon,
  statusFocusWidth,
  statusFocusPosition,
  vaColor,
  labelWidth,
  labelRight,
  labelLeft,
  rectangleDivWidth,
  rectangleDivRight,
  rectangleDivLeft,
}) => {
  const statusFocusStyle = useMemo(() => {
    return {
      width: statusFocusWidth,
      position: statusFocusPosition,
    };
  }, [statusFocusWidth, statusFocusPosition]);

  const vaStyle = useMemo(() => {
    return {
      color: vaColor,
    };
  }, [vaColor]);

  const labelStyle = useMemo(() => {
    return {
      width: labelWidth,
      right: labelRight,
      left: labelLeft,
    };
  }, [labelWidth, labelRight, labelLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      width: rectangleDivWidth,
      right: rectangleDivRight,
      left: rectangleDivLeft,
    };
  }, [rectangleDivWidth, rectangleDivRight, rectangleDivLeft]);

  return (
    <div
      className="w-[280px] h-[50px] text-left text-sm text-gray-200 font-body-medium"
      style={statusFocusStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-aliceblue box-border border-[2px] border-solid border-light-primary" />
      <div className="absolute w-full top-[24px] right-[0px] left-[0px] flex flex-row items-center justify-center py-0 px-4 box-border gap-[8px]">
        <div
          className="flex-1 relative tracking-[0.25px] leading-[18px]"
          style={vaStyle}
        >
          {va}
        </div>
        {showCancelIcon && (
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0"
            alt=""
            src="/cancel1.svg"
          />
        )}
      </div>
      <div
        className="absolute h-[46%] w-[12.14%] top-[4%] right-[83.57%] bottom-[50%] left-[4.29%] text-3xs text-gray-100"
        style={labelStyle}
      >
        <div
          className="absolute h-[65.22%] w-[241.18%] top-[-8.7%] right-[-129.41%] bottom-[43.48%] left-[-11.76%] bg-base-white hidden"
          style={rectangleDivStyle}
        />
        <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start pt-1.5 px-1 pb-px">
          <div className="relative tracking-[0.25px] leading-[16px]">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusFocus;
