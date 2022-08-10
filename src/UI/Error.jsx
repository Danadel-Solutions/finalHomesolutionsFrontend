import { Alert } from "react-bootstrap";

export default Error = ({children})=>{
 return(
  <Alert variant="danger">{children}</Alert>
 )
}