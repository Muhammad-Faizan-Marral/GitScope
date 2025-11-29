import AppLogo from "../ui/icons/ AppLogo";
import SettingsIcon from "../ui/icons/SettingsIcon";
import ProfileIcon from "../ui/icons/ProfileIcon";
import SearchBar from "../ui/SearchBar";

const Header = () => {
  return (
    <div className="border-b-2 border-gray-500 p-6 flex items-center justify-between">
      <AppLogo />
      <div className="hidden md:flex items-center justify-center gap-7 mr-3">
        <SearchBar />
        <SettingsIcon />
        <ProfileIcon />
      </div>
    </div>
  );
};

export default Header;
