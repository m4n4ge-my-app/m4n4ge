import { useSelector } from 'react-redux';
import BaseLayer from '../../../components/baseLayer/BaseLayer';
import GenericGrid from '../../../components/grids/GenericGrid';
import { RootState } from '../../../state/store';

const AddEditApp = () => {
  const focusedApplication = useSelector(
    (state: RootState) => state.applications.focusedApplication
  );
  const formLabel = `${focusedApplication ? 'Edit' : 'Add'} Application Record`;

  return (
    <BaseLayer type="add">
      <GenericGrid formLabel={formLabel} type="add" />
    </BaseLayer>
  );
};

export default AddEditApp;
