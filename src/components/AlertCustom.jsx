import { Alert } from "react-bootstrap";

const styles = {
  alert: {
    marginTop: "10px",
  },
};

const AlertCustom = ({ variant, text }) => {
  return (
    <Alert variant={variant} style={styles.alert}>
      {text}
    </Alert>
  );
};

export default AlertCustom;
