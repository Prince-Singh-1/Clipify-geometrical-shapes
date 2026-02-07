import Clip from "./Clip";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { GoX } from "react-icons/go";
import { MdOutlineCopyAll } from "react-icons/md";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

function Modal({ name, clipPath, onClose }) {
  const [copiedStatus, setCopiedStatus] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleCopy = () => {
    setCopiedStatus(true);
    setTimeout(() => {
      setCopiedStatus(false);
    }, 300);
  };

  const copiedMessageClass = "text-gray-800 ";
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className='absolute inset-0 bg-gray-300 opacity-80'
      ></div>
      <div className='absolute min-[320px]:inset-8 sm:inset-10 md:inset-20 md:p-5  bg-white ring ring-4 ring-inset ring-gray-400 '>
        <div className='min-[320px]:m-4 md:m-1'>
          <GoX onClick={onClose} className='h-8 w-8 cursor-pointer' />
        </div>
        <div className='flex  min-[320px]:flex-col min-[320px]:items-center min-[320px]:justify-center md:justify-around flex flex-col justify-center m-auto'>
          <div className='m-auto'>
            <Clip clipPath={clipPath} name={name} onClick={() => {}} />
          </div>

          <div className='flex justify-around items-center p-10  font-medium'>
            <div className='flex bg-white border border-4 drop-shadow-md rounded-full items-center p-1 text-lg'>
              <div className='p-2 max-[600px]:text-sm max-[600px]:p-4 text-center'>
                {clipPath}
              </div>
              <div className=''>
                <CopyToClipboard text={clipPath} onCopy={handleCopy}>
                  <MdOutlineCopyAll className='h-7 w-7 cursor-pointer' />
                </CopyToClipboard>
              </div>
            </div>
          </div>
          {copiedStatus && <div className={copiedMessageClass}>Copied!</div>}
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
