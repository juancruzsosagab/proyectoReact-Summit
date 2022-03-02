import { Toast, ToastContainer } from "react-bootstrap";

const ToastCustom = ( {setShow, show, text} ) => {

  return (
    <ToastContainer className="p-3" position="middle-center">
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Fintech Solutions</strong>
          <small>Now</small>
        </Toast.Header>
        <Toast.Body>{text}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastCustom;
