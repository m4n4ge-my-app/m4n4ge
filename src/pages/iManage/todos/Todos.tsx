import BaseLayer from '../../../components/baseLayer/BaseLayer';
import IManageGrid from '../../../components/grids/IManageGrid';

const Todos = () => {
  return (
    <BaseLayer type="todos">
      <IManageGrid formLabel="Todo" listLabel="Todos" />
    </BaseLayer>
  );
};

export default Todos;
