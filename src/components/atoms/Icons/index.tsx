import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";

interface IconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  size?: number;
  color?: string;
  icon: FC;
}

const Icon: FC<IconProps> = (props) => {
  const { size, color, icon, style: styleArg, ...svgProps } = props;
  let svgExtraProps: {
    width?: string;
    height?: string;
    style?: IconProps["style"];
  } = {};

  if (size !== undefined) {
    svgExtraProps.width = `${size}px`;
    svgExtraProps.height = `${size}px`;
  } else {
    // default
    svgExtraProps.width = "24px";
    svgExtraProps.height = "24px";
  }

  if (color !== undefined) {
    svgExtraProps.style = { color, ...styleArg };
  }
  const IconComp: FC = icon;
  return <IconComp {...svgProps} {...svgExtraProps} />;
};

export default Icon;
