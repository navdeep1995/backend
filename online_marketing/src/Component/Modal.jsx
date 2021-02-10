// import React from "react";
// import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

// const ModalPage = (isOpenmodal) => {
//   console.log("props ", isOpenmodal);
//   var subtitle;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = "#f00";
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   return (
//     <div>
//       <Modal
//         isOpen={isOpenmodal}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
//         {/* <button onClick={closeModal}>close</button> */}
//         <div>Modal</div>
//         <form>
//           <input />
//           <button>tab navigation</button>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default ModalPage;
