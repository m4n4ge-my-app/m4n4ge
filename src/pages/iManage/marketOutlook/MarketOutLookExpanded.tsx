import BaseLayer from '../../../components/baseLayer/BaseLayer';
import GenericGrid from '../../../components/grids/GenericGrid';

const MarketOutLookExpanded = () => {
  return (
    <BaseLayer type="search">
      <GenericGrid formLabel="Job Market Outlook" type={undefined} />
    </BaseLayer>
  );
};
export default MarketOutLookExpanded;
