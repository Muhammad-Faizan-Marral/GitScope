
import AppLogo from "../ui/icons/ AppLogo";
import SettingsIcon from "../ui/icons/SettingsIcon";
import ProfileIcon from "../ui/icons/ProfileIcon";
import SearchBar from "../ui/SearchBar";
// import { ToastContainer,Bounce, toast } from "react-toastify";
const Header = () => {

  // const notify = () =>
  //   toast("Input Feild Required!", {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: false,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //     transition: Bounce,
  //   });
    
  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   if (inputValue == "") {
  //     notify()
  //     console.log("empty input");
  //   } else {
  //     console.log("User input:", inputValue);
  //     setInputValue("");
  //     const res = await fetch(`/api/github/repos?username=${inputValue}`);
  //     const data = await res.json();
  //     console.log(data);
  //   }
  // };

  return (
    <div className="border-b-2 border-gray-500 p-6 flex items-center justify-between">
      
      <AppLogo />
      {/* <ToastContainer /> */}

      <div className="hidden md:flex items-center justify-center gap-7 mr-3">
        {/* Input-Search */}
        {/* <div className="relative w-full max-w-sm">
          <form onSubmit={handleSubmit}>
            <svg
              onClick={handleSubmit}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2} // notice number without quotes
                d="M21 21l-4.35-4.35m0 0A7 7 0 104.65 4.65a7 7 0 0012 12z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search user...."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full bg-transparent border border-gray-500 rounded-lg py-2 pl-14 pr-8 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-300"
            />
          </form>
        </div> */}
        <SearchBar/>
        <SettingsIcon />
        <ProfileIcon />
      </div>
    </div>
  );
};

export default Header;
