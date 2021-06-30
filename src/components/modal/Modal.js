import './modal.css';

export const Modal = ({ show, children, handleClose }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName} >
      <section className="modal-main">
        {children}
      </section>
    </div>
  );
};