import BaseLayer from '../../../components/baseLayer/BaseLayer';
import GenericGrid from '../../../components/grids/GenericGrid';

const Settings = () => {
  return (
    <BaseLayer type="settings">
      <GenericGrid formLabel="Application Settings" type={undefined} />
    </BaseLayer>
  );
};

export default Settings;
