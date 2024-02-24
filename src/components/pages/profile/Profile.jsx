import ProfileSidebar from "./profile-sidebar/ProfileSidebar";
import ProfileItem from "./profile-item/ProfileItem";
import Transactions from "./transactions/Transactions";
import styles from "./profile.module.scss";
function Profile() {
  return (
    <>
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <ProfileSidebar />
        </div>
        <div className={`col-md-9 col-sm-12 ${styles.div}`}>
          <ProfileItem />
          <Transactions />
        </div>
      </div>
    </>
  );
}
export default Profile;
