import Clip from "../components/Clip";
import { useState } from "react";
import Modal from "../components/Modal";

function Main({ data, searchTerm }) {
  const [showModal, setShowModal] = useState(false);
  const [clipData, setClipData] = useState({});

  const handleClick = ({ name, clipPath }) => {
    setShowModal(true);
    setClipData({
      name,
      clipPath,
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const renderedClips = data.map((each, index) => {
    return (
      <Clip
        key={index}
        {...each}
        onClick={handleClick}
        searchTerm={searchTerm}
      />
    );
  });

  const mainClass = "main min-h-screen  bg-gray-200 p-5"; //  overflow-y-auto ";

  return (
    <div className={mainClass}>
      {showModal ? (
        <Modal {...clipData} onClose={handleClose} />
      ) : (
        <div className='flex justify-center items-center   min-[800px]:min-h-screen p-1'>
          {renderedClips.length > 0 ? (
            <div className='flex  flex-wrap items-center justify-center gap-4'>
              {renderedClips}
            </div>
          ) : (
            <div className='m-11'>
              {" "}
              <p className='font-semi-bold text-2xl text-red-600'>
                No Match found!
              </p>{" "}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Main;
