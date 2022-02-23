import Modal from "./modal";
import AddPlayerModalDetails from "./add-player-modal-details";
const AddPlayerModal = (props) => {
  return (
    <Modal title="Add new player" {...props}>
      <AddPlayerModalDetails {...props} />
    </Modal>
  );
};
export default AddPlayerModal;
