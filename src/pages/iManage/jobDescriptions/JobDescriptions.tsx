import BaseLayer from '../../../components/baseLayer/BaseLayer';
import IManageGrid from '../../../components/grids/IManageGrid';

const JobDescriptions = () => {
  return (
    <BaseLayer type="jobDescriptions">
      <IManageGrid
        formLabel="Add a Job Descriptions"
        listLabel="Job Descriptions"
      />
    </BaseLayer>
  );
};

export default JobDescriptions;
