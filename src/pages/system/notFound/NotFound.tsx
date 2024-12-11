import BaseLayer from '../../../components/baseLayer/BaseLayer';
import NotFoundGrid from '../../../components/grids/NotFoundGrid';
import notFoundImage from '../../../components/baseLayer/baseLayerImages/404.png';

interface NotFoundProps {
  isPrivateRoute: boolean;
}

const NotFound = ({ isPrivateRoute }: NotFoundProps) => {
  return isPrivateRoute ? (
    // TODO: temporarily using resume background image for now, will replace it with appropriate image
    <BaseLayer type="resume">
      <NotFoundGrid />
    </BaseLayer>
  ) : (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        height: '100vh',
      }}
    >
      {/* TODO: further refine this page */}
      Not Found page: under development
      <img
        src={notFoundImage}
        alt="image"
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default NotFound;
