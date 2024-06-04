import './baselayer.scss';
import resume from './baseLayerImages/resume.png';

interface Props {
  children: React.ReactNode;
}

const BaseLayer = ({ children }: Props) => {
  document.documentElement.style.setProperty(
    '--background-image-url',
    `url(${resume})`
  );
  return (
    <div className="pageContainer">
      <div className="left">{children}</div>
      <div className="right"></div>
    </div>
  );
};

export default BaseLayer;
