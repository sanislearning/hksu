import { useMemo } from "react";

const HomeFillImage = ({
  homeFillIconWidth,
  homeFillIconHeight,
  homeFillIconPosition,
  homeFillIconTop,
  homeFillIconRight,
  homeFillIconBottom,
  homeFillIconLeft,
  homeFillIconMaxHeight,
}) => {
  const homeFillIconStyle = useMemo(() => {
    return {
      width: homeFillIconWidth,
      height: homeFillIconHeight,
      position: homeFillIconPosition,
      top: homeFillIconTop,
      right: homeFillIconRight,
      bottom: homeFillIconBottom,
      left: homeFillIconLeft,
      maxHeight: homeFillIconMaxHeight,
    };
  }, [
    homeFillIconWidth,
    homeFillIconHeight,
    homeFillIconPosition,
    homeFillIconTop,
    homeFillIconRight,
    homeFillIconBottom,
    homeFillIconLeft,
    homeFillIconMaxHeight,
  ]);

  return (
    <img
      className="w-[60px] max-w-full overflow-hidden h-[60px] object-cover"
      alt=""
      src="/home-fill@2x.png"
      style={homeFillIconStyle}
    />
  );
};

export default HomeFillImage;
