import { useMemo } from "react";

const ColorDefaultSizeMediumMo = ({
  bUTTON,
  colorDefaultSizeMediumMoPosition,
  colorDefaultSizeMediumMoTop,
  colorDefaultSizeMediumMoLeft,
  colorDefaultSizeMediumMoWidth,
  colorDefaultSizeMediumMoBorderRadius,
  colorDefaultSizeMediumMoBackgroundColor,
  colorDefaultSizeMediumMoDisplay,
  colorDefaultSizeMediumMoFlexDirection,
  colorDefaultSizeMediumMoPadding,
  onButtonClick,
}) => {
  const colorDefaultSizeMediumMoStyle = useMemo(() => {
    return {
      position: colorDefaultSizeMediumMoPosition,
      top: colorDefaultSizeMediumMoTop,
      left: colorDefaultSizeMediumMoLeft,
      width: colorDefaultSizeMediumMoWidth,
      borderRadius: colorDefaultSizeMediumMoBorderRadius,
      backgroundColor: colorDefaultSizeMediumMoBackgroundColor,
      display: colorDefaultSizeMediumMoDisplay,
      flexDirection: colorDefaultSizeMediumMoFlexDirection,
      padding: colorDefaultSizeMediumMoPadding,
    };
  }, [
    colorDefaultSizeMediumMoPosition,
    colorDefaultSizeMediumMoTop,
    colorDefaultSizeMediumMoLeft,
    colorDefaultSizeMediumMoWidth,
    colorDefaultSizeMediumMoBorderRadius,
    colorDefaultSizeMediumMoBackgroundColor,
    colorDefaultSizeMediumMoDisplay,
    colorDefaultSizeMediumMoFlexDirection,
    colorDefaultSizeMediumMoPadding,
  ]);

  return (
    <div
      className="rounded-lg bg-light-primary flex flex-row items-center justify-center py-[12.5px] px-4 text-center text-base text-base-white font-body-medium"
      style={colorDefaultSizeMediumMoStyle}
      onClick={onButtonClick}
    >
      <div className="relative uppercase font-medium">{bUTTON}</div>
    </div>
  );
};

export default ColorDefaultSizeMediumMo;
