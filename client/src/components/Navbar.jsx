import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar } from "../redux/slices/authSlice";
import UserAvatar from "./UserAvatar";
import NotificationPanel from "./NotificationPanel";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-white px-4 py-3 2xl:py-4 sticky z-10 top-0">
      <button
        onClick={() => dispatch(setOpenSidebar(true))}
        className="text-2xl text-gray-500 block md:hidden"
      >
        ☰
      </button>

      <div className="flex gap-2 items-center ml-auto">
        <UserAvatar />
        <NotificationPanel />
      </div>
    </div>
  );
};

export default Navbar;

