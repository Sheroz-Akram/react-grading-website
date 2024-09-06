import logo from "../Assets/Images/ucp-logo.png";

function Header() {
  return (
    <>
      <div className="flex flex-col items-center gap-2 p-4">
        <img src={logo} className="w-40" alt="UCP Logo" srcset="" />
        <h1 className="font-bold text-2xl text-gray-900 dark:text-white">UCP Grading Calculator</h1>
      </div>
    </>
  );
}

export default Header;
