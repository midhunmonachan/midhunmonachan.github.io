import React, { useState, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 300); // Match the duration of the CSS transition
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'} z-50`}>
      <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity duration-300 ease-in-out z-40"></div>
      <div className={`bg-white bg-opacity-10 p-8 rounded-lg shadow-lg max-w-4xl w-full h-2/3 relative border border-gray-300 border-opacity-30 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'scale-100' : 'scale-95'}`}>
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl">
          &times;
        </button>
        <div className="text-white text-center flex flex-col justify-center h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;