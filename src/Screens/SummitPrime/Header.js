import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changePage } from "../../Redux/Actions/Actions";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <Row className="justify-content-center align-items-center text-center header">
      <Col>
        <h3
          className="h3Header"
          onClick={() => dispatch(changePage("meusOrcamentos"))}
        >
          Consultar Listas Da Plataforma Catálogo
        </h3>
      </Col>
      <Col>
        <h3 className="h3Header" onClick={() => dispatch(changePage("home"))}>
          Orcamento Atual
        </h3>
      </Col>
      {/* <Col>
                <h3 className='h3Header' onClick={()=>dispatch(changePage('meusDocumentos'))}>Meus Documentos</h3>
            </Col> */}
    </Row>
  );
};
