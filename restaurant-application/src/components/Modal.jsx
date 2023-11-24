import "../styles/Modal.css";
const Modal = ({modalState, modalClose, productImage, productName, productPrice}) => {
    if (!modalState) return null;
    return (
        <div
            onClick={modalClose}
            className="modal-container"
        >
            <div
                className="modal-items"
            >
                <div className="menuItem-modal">
                    <div style={{ backgroundImage: `url(${productImage})` }}> </div>
                    <p> {productName} </p>
                    <p> ₹{productPrice} </p>
                </div>
            </div>
        </div>
    );
}

export default Modal;