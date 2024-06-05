import BaseLayer from '../../../components/baseLayer/BaseLayer';
import GetAssistGrid from '../../../components/grids/GetAssistGrid';

const AddApp = () => {
  return (
    <BaseLayer type="add">
      <GetAssistGrid formLabel="Add Application Record" />
    </BaseLayer>
  );
};

export default AddApp;
