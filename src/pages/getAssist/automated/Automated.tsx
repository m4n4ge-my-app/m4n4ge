import BaseLayer from '../../../components/baseLayer/BaseLayer';
import GetAssistGrid from '../../../components/grids/GetAssistGrid';

const Automated = () => {
  return (
    <BaseLayer type="assist">
      <GetAssistGrid formLabel="Configure your helper" />
    </BaseLayer>
  );
};

export default Automated;
