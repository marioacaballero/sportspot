import Home from "../screens/home/Home";
import LoadingScreen from "../screens/home/LoadingScreen";
import Notifications from "../screens/home/components/popup-premium/Notifications";
import SubscriptionPlans from "../screens/home/components/popup-premium/SubscriptionPlans";
import Profile from "../screens/profile/Profile";
import ManageAccount from "../screens/profile/components/manageAccount/ManageAccount";
import AddCard from "../screens/profile/components/manageAccount/components/AddCard";
import EditProfile from "../screens/profile/components/manageAccount/components/EditProfile";
import PaymentDetails from "../screens/profile/components/manageAccount/components/PaymentDetails";
import Security from "../screens/profile/components/manageAccount/components/Security";
import Login from "../screens/signup/Login";
import SignIn from "../screens/signup/SignIn";
import Signup from "../screens/signup/SignUp";

export const routes = [
  {
    path: "LoadingScreen",
    component: LoadingScreen,
    header: false,
  },
  {
    path: "SignIn",
    component: SignIn,
    header: false,
  },
  {
    path: "Login",
    component: Login,
    header: false,
  },
  {
    path: "SignUp",
    component: Signup,
    header: false,
  },
  {
    path: "Home",
    component: Home,
    header: false,
  },

  {
    path: "Profile",
    component: Profile,
    header: true,
  },
  {
    path: "ManageAccount",
    component: ManageAccount,
    header: true,
  },
  {
    path: "Edit",
    component: EditProfile,
    header: true,
  },
  {
    path: "Security",
    component: Security,
    header: true,
  },
  {
    path: "Payment",
    component: PaymentDetails,
    header: true,
  },
  {
    path: "AddCard",
    component: AddCard,
    header: true,
  },
  {
    path: "Suscriptions",
    component: SubscriptionPlans,
    header: true,
  },
  {
    path: "Notifications",
    component: Notifications,
    header: true,
  },
];
