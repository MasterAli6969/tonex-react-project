import ProfileSidebar from "./profile-sidebar/ProfileSidebar";
import ProfileItem from "./profile-item/ProfileItem";
import Transactions from "./transactions/Transactions";
import LoyaltyProgram from "./loyalty-program/LoyaltyProgram";
import MyWallets from "./my-wallets/MyWallets";
import NavBar from "../../common/nav-bar/NavBar";
import CryptoneXNavLogo from "../../../assets/img/CryptoneXNavLogo.png";
import styles from "./profile.module.scss";
function Profile() {
  return (
    <>
      <NavBar logo={CryptoneXNavLogo} />
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <ProfileSidebar />
        </div>
        <div className={`col-md-9 col-sm-12 ${styles.div}`}>
          <ProfileItem />
          <Transactions />
          <LoyaltyProgram />
          <MyWallets />
        </div>
      </div>
    </>
  );
}
export default Profile;
