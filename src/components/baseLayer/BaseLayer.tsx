import './baselayer.scss';

interface Props {
  children: React.ReactNode;
}

const BaseLayer = ({ children }: Props) => {
  return (
    <div className="pageContainer">
      <div className="left">{children}</div>
      <div className="right"></div>
    </div>
  );
};

export default BaseLayer;
