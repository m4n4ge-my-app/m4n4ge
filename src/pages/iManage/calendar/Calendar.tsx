import BaseLayer from '../../../components/baseLayer/BaseLayer';
import IManageGrid from '../../../components/grids/IManageGrid';

const Calendar = () => {
  return (
    <BaseLayer type="calendar">
      <IManageGrid formLabel="Add Event" listLabel="Calendar" />
    </BaseLayer>
  );
};

export default Calendar;
