import logo from "../images/logo.png";
import Form from "../components/Form";

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GoX } from "react-icons/go";

const pageLists = ["Home", "Polygon", "Circle", "Arrow", "Miscellaneous"];

function SideBar({ onChange, searchTerm, onChangePage, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  let ulWrapper = "";
  if (!isOpen) {
    ulWrapper = "md:flex hidden";
  }

  const onClickLi = (event) => {
    onChangePage(event.target.innerText);
    setIsOpen(!isOpen);
  };

  const sidebar =
    "flex flex-col justify-start p-10 gap-10 bg-gray-300 min-[800px]:w-1/4 min-[800px]:min-h-screen min-[800px]:fixed min-[800px]:left-0 min-[800px]:top-0 min-[800px]:right-0 max-sm:p-5"; //l-5 max-sm:pr-5";

  const brand = "flex items-center";

  const formWrapper =
    "flex items-center min-[800px]:flex-col  min-[800px]:items-start";

  const menuIcons = "text-3xl md:hidden max-sm:text-xl";

  const ul = "w-full flex flex-col gap-3 ";
  const li =
    "p-2 font-medium text-lg  hover:border-gray-400  rounded hover:shadow-md hover:shadow-gray-600 hover:cursor-pointer ";

  return (
    <div className={sidebar}>
      <div className='flex flex-col justify-center gap-10 max-md:flex-row max-md:justify-between max-[400px]:flex-col max-[400px]:justify-center max-[400px]:items-center max-[400px]:gap-4 '>
        <div className={brand}>
          <img
            src={logo}
            className='w-16 mr-5 max-sm:mr-2 max-sm:w-12'
            alt='logo'
          ></img>

          <h1 className='font-bold tracking-widest'>ClipiFy</h1>
        </div>
        <div className={formWrapper}>
          <Form onChange={onChange} searchTerm={searchTerm} />
          <div>
            {isOpen ? (
              <GoX className={menuIcons} onClick={handleClick} />
            ) : (
              <AiOutlineMenu className={menuIcons} onClick={handleClick} />
            )}
          </div>
        </div>
      </div>
      <div className={ulWrapper}>
        <ul className={ul}>
          {pageLists.map((page) => {
            const border =
              page === currentPage
                ? "border-gray-600 border-b-2"
                : "border-b-2";
            return (
              <li key={page} className={li + " " + border} onClick={onClickLi}>
                {page}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
