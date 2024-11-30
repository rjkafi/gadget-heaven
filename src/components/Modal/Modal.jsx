import React from "react";

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg flex flex-col space-y-3 justify-center items-center">
        <img className="w-10 h-10" src='https://i.ibb.co.com/1Mnp3bc/Group.png' alt="" />
        <h2 className="text-2xl font-semibold">Congrats!!</h2>
        <h3 className="text-xl font-semibold">{message}</h3>
        <button
          onClick={onClose}
          className="mt-4 bg-common w-full text-xl font-semibold text-white px-4 py-2 rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
