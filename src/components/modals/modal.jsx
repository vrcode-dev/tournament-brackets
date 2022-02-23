import "./modal.less";
const Modal = (props) => {
  const onClose = (e) => {
    props.onClose && props.onClose(e);
  };

  if (!props.show) {
    return null;
  }
  return (
    <div className="modal-wrapper">
      <div className="modal" id="modal">
        {props.title && <h2>{props.title}</h2>}
        <div className="modal__content">{props.children}</div>
        <div className="modal__actions">
          <button className="modal__action--toggle-button" onClick={onClose}>
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
