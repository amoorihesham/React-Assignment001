import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Modal from "react-modal";

const PortfolioCard = ({ imageUrl }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      position: "absolute",
      maxWidth: "750px",
      backgroundColor: "white",
    },
  };
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="col-md-6 col-xl-4 col-xxl-4">
      <div className="card overflow-hidden" onClick={openModal}>
        <img src={imageUrl} alt="Example Img" className="w-100" />
        <div className="hoverState d-flex align-items-center justify-content-center w-100 h-100">
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="d-flex align-items-center justify-content-center p-3 position-relative"
        style={customStyles}
      >
        <img src={imageUrl} alt="Work Thumbnail" className="w-100" />
      </Modal>
    </div>
  );
};

export default PortfolioCard;
