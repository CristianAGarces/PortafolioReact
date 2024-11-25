import { IconType } from "react-icons";

interface CompAcercaProps {
  Icon: IconType;
  NameIcon: string;
}

const CompAcerca = ({ Icon, NameIcon }: CompAcercaProps) => {
  return (
    <div className="styleicons" title={NameIcon}>
      <Icon />
    </div>
  );
};

export default CompAcerca;
