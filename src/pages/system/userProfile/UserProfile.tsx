import BaseLayer from '../../../components/baseLayer/BaseLayer';
import GenericGrid from '../../../components/grids/GenericGrid';

const UserProfile = () => {
  return (
    <BaseLayer type="profile">
      <GenericGrid formLabel="User Profile" type={undefined} />
    </BaseLayer>
  );
};

export default UserProfile;
