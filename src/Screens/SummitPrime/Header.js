import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../Redux/Actions/Actions";
import { GetOrcamentos } from "../../Redux/Actions/GetOrcamentos";

export const Header = () => {
  const dispatch = useDispatch();
  const informacoes = useSelector((state) => state.informacoes);
  return (
    <Row className="justify-content-center align-items-center text-center header">
      <Col>
        <h3
          className="h3Header"
          onClick={() => dispatch(GetOrcamentos("vnda", informacoes.cnpj))}
        >
          Consultar Listas Da Plataforma Catálogo
        </h3>
      </Col>
      <Col className="h-100">
        <Image
          onClick={() => dispatch(changePage("home"))}
          className="h-100 imageHeader"
          src="./logoSummit.png"
        />
      </Col>
      {/* <Col>
        <h3 className="h3Header" onClick={() => dispatch(changePage("home"))}>
          Orcamento Atual
        </h3>
      </Col> */}
      <Col>
        <h3
          className="h3Header"
          onClick={() => {
            dispatch(GetOrcamentos("salvos", informacoes.cnpj));
          }}
        >
          Orçamentos Salvos
        </h3>
      </Col>
      {/* <Col>
                <h3 className='h3Header' onClick={()=>dispatch(changePage('meusDocumentos'))}>Meus Documentos</h3>
            </Col> */}
    </Row>
  );
};
