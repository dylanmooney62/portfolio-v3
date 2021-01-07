import React from "react";
import tw, { styled } from "twin.macro";
import { ToastContainer, Slide } from "react-toastify";

const Notification = () => {
  return (
    <StyledNotification
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Slide}
    />
  );
};

export default Notification;

const StyledNotification = styled(ToastContainer)`
  .Toastify__toast {
    ${tw`rounded-md py-2 px-3`}
  }

  .Toastify__toast--success {
    ${tw`bg-green-600`}
  }

  .Toastify__toast--error {
    ${tw`bg-red-600`}
  }
`;
