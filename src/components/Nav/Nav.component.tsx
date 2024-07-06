import Link from "next/link";
import { FaSearch, FaHome, FaUser } from "react-icons/fa";
import SigninButton from "../SigninButton/SigninButton.component";

const Nav = () => {
  return (
    <>
      <nav className="fixed bottom-[10px] left-1/2 transform -translate-x-1/2 z-[999] bg-red-500 w-4/5 h-[80px] bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <div className="flex justify-center items-center">
          <div className="flex-1 h-[80px] flex justify-center items-center">
            <Link
              href={"/"}
              className="block flex flex-col gap-[4px] justify-center items-center"
            >
              <FaHome className="text-[28px]" />
              <p className="text-[14px]">首頁</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
