import {
  Table,
  Container,
  Icon,
  Button,
  ModalContent,
} from "semantic-ui-react";
import EyeIcon from "@material-ui/icons/Visibility";
import AddButton from "@material-ui/icons/Add";
import RemoveButton from "@material-ui/icons/Remove";
import DeleteButton from "@material-ui/icons/Delete";

import Cart from "@material-ui/icons/ShoppingCart";
import Close from "@material-ui/icons/Close";
import react, { useState, useEffect, useCallback } from "react";
import { createOrder, getUserOrderList, deleteOrder } from "../Action";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
const customStyles = {
  content: {
    width: 800,
    height: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const TablePage = (data) => {
  var subtitle;

  const dispatch = useDispatch();
  const [itemId, setItemId] = useState([]);
  const [userId, setUserId] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [currentVal, setCurrentVal] = useState();

  const LoggedInId = useSelector(
    (state) => state.Register.loginDetails.data.userId
  );
  function openModal() {
    setIsOpen(true);
    dispatch(getUserOrderList(LoggedInId));
  }
  function afterOpenModal() {
    subtitle.style.color = "black";
  }
  function closeModal() {
    setIsOpen(false);
  }
  const getorders = useSelector((state) => state.Order.getUserOrderList);

  // const addHandler = useCallback(
  //   (id) => {
  //     console.log(id);
  //     setItemId([...itemId, id]);
  //     console.log("callback  -", itemId);
  //   },
  //   [id]
  // );

  const addHandler = (id) => {
    setUserId(LoggedInId);
    console.log("id", id);

    setItemId([...itemId, id]);
    console.log("itemid", itemId);
  };

  const removeHandler = (id) => {
    let index = itemId.indexOf(id);
    var newList = itemId.splice(index, 1);
    setItemId([...itemId]);
  };

  const addToCartHandler = () => {
    setUserId(LoggedInId);
    dispatch(createOrder(itemId, userId));
  };

  //remove order from db
  const removeOrder = (orderId) => {
    console.log(orderId);

    dispatch(deleteOrder(orderId, LoggedInId));
  };

  // var currentItemValue = itemId[itemId.length - 1];

  // console.log("currentItemValue", currentVal);
  const fieldsName = data.fields;
  const fieldsValue = data.data.itemsList;

  return (
    <Container>
      <Table>
        <Table.Header>
          <Table.Row>
            {fieldsName.map(({ name }) => {
              return <Table.HeaderCell>{name}</Table.HeaderCell>;
            })}
            <Table.HeaderCell>Actions</Table.HeaderCell>
            <Table.HeaderCell>
              <Cart />
              {itemId.length}
            </Table.HeaderCell>
            <Table.HeaderCell>
              <EyeIcon onClick={openModal}>Details</EyeIcon>

              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
                <Container>
                  <Table>
                    <Table.Header>
                      <Table.HeaderCell>Order Id </Table.HeaderCell>
                      <Table.HeaderCell>Order Name</Table.HeaderCell>
                      <Table.HeaderCell>Quantity</Table.HeaderCell>
                      <Table.HeaderCell>Price</Table.HeaderCell>
                      <Table.HeaderCell>Remove</Table.HeaderCell>

                      <Table.Header colSpan={2}>
                        <Close onClick={closeModal}></Close>
                      </Table.Header>
                    </Table.Header>
                    <Table.Body>
                      {getorders.map((item) => (
                        <Table.Row>
                          <Table.Cell>{item.orderId}</Table.Cell>
                          <Table.Cell>{item.orderName}</Table.Cell>
                          <Table.Cell>{item.quantity}</Table.Cell>
                          <Table.Cell>{item.price}</Table.Cell>
                          <Table.Cell>
                            <DeleteButton
                              onClick={() => removeOrder(item.orderId)}
                            ></DeleteButton>
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                </Container>
              </Modal>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {fieldsValue.map((item) => (
            <Table.Row>
              <Table.Cell>{item.itemId}</Table.Cell>
              <Table.Cell>{item.itemName}</Table.Cell>
              <Table.Cell>{item.price}</Table.Cell>

              <Table.Cell>
                <AddButton
                  value={itemId}
                  onClick={() => {
                    addHandler(item.itemId);
                  }}
                />
                {count}
                <RemoveButton
                  value={itemId}
                  onClick={() => {
                    removeHandler(item.itemId);
                  }}
                />
              </Table.Cell>
            </Table.Row>
          ))}

          <Button
            onClick={addToCartHandler}
            // href="#outlined-buttons"
            value={itemId}
            color="primary"
          >
            <Cart />
            Add to cart
          </Button>
        </Table.Body>
      </Table>
    </Container>
  );
};

export default TablePage;
