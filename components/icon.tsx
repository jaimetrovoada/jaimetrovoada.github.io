import * as Icons from "react-feather";

export type IconName = keyof typeof Icons;

export type IconProps = {
  name: IconName;
} & Icons.IconProps;

const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
  const IconComponent = Icons[name] ? Icons[name] : Icons["Link"];

  return <IconComponent {...rest} />;
};

export default Icon;
