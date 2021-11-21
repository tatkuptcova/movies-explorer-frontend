/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default () => {
  const [modal, setModal] = React.useState(false);
  const [closable, setClosable] = React.useState(false);
  const [modalContent, setModalContent] = React.useState("");

  let handleModal = (content = false, closable) => {
    setModal(!modal);
    if (content) {
      console.log(modal);
      setClosable(closable);
      setModalContent(content);
    }
  };
  const closeModal = () => {
    setModal(false);
    setModalContent("");
  };

  return { modal, handleModal, modalContent, closable, closeModal };
};
