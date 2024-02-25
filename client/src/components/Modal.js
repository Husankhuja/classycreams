function Modal ({ closeModal, children, title }) {
    return (
        <>
            <div className="modal">
            <div className="modal_content">
                <div className="modal_header">
                    <h3>{title}</h3>
                    <span className="close" onClick={closeModal}>&times;</span>
                </div>
                <div className="modal_body">
                    {children}
                </div>
            </div>
            </div>
            <div className="modal_overlay" onClick={closeModal}>

            </div>
        </>
    );
}

export default Modal;