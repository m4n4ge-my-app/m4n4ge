import BaseLayer from '../../../components/baseLayer/BaseLayer';
import GenericGrid from '../../../components/grids/GenericGrid';

const AddApp = () => {
  return (
    <BaseLayer type="add">
      <GenericGrid formLabel="Add Application Record" />
    </BaseLayer>
  );
};

export default AddApp;
