import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "../components/header-component.js/header-component";
import PersonalInformationComponent from "../components/my-account-field-info-component/my-account-field-info-component";
import MyFarmsComponent from "../components/my-farms-component/my-farms-component";

const FarmerAccount = () => {
  const farms = [{ title: "farm 1" }, { title: "farm 2" }, { title: "farm 3" }];
  const user = {
    firstName: "John",
    lastName: "Farmer",
    street: "MLK blvd",
    state: "FL",
    zip: "32825",
  };

  return (
    <>
      <HeaderComponent mainHeader="My Account" />
      <div className="container">
        <div className="row g-0 mx-3">
          <PersonalInformationComponent user={user} />
          <MyFarmsComponent farms={farms} />
        </div>
      </div>
    </>
  );
};

export default FarmerAccount;
