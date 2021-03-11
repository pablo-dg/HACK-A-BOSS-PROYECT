import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";

function MessagesMusician() {
  const [token, setToken] = useContext(AuthContext);
  const [musicianContracts, setMusicianContracts] = useState([]);
  const [selectedContract, setSelectedContract] = useState(0);
  const [venueEventName, setVenueEventName] = useState([]);
  const [message, setMessage] = useState("");
  const [contractResponse, setContractResponse] = useState("");
  const [messagesReloader, setMessagesReloader] = useState(1);
  const refreshMessages = () => setMessagesReloader(Math.random());

  useEffect(() => {
    const loadMusicianContracts = async () => {
      const response = await fetch(
        `http://localhost:3000/api/v1/musicians/contracts`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        const body = await response.json();
        setMusicianContracts(body);
      }
    };
    loadMusicianContracts();
  }, [token, messagesReloader]);

  const replyContract = async () => {
    const replyMessage = {
      idContrato: selectedContract,
      mensaje: message,
      respuestaSolicitud: contractResponse,
    };
    const response = await fetch(
      `http://localhost:3000/api/v1/musicians/contract-reply`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(replyMessage),
      }
    );
    if (response.status === 200) {
      refreshMessages();
    }
  };
  const jsxToReturn = musicianContracts[0] ? (
    <div>
      <ul>
        {musicianContracts.map((contract) => (
          <div>
            <li>
              {contract.contrato}
              {contract.fecha}
              {contract.id_local_evento}
              {contract.respuesta}
              {contract.nombre_local_evento}
            </li>
            <button onClick={(e) => setSelectedContract(contract.id_contrato)}>
              X
            </button>
          </div>
        ))}
      </ul>
      <form>
        <textarea onChange={(e) => setMessage(e.target.value)}></textarea>
        <select onChange={(e) => setContractResponse(e.target.value)}>
          <option value="Pendiente">Pendiente</option>
          <option value="Aceptada">Aceptada</option>
          <option value="Rechazada">Rechazada</option>
        </select>
      </form>
      <button onClick={replyContract}>Reply Contract</button>
    </div>
  ) : (
    <p>No tienes solicitudes de contratacion como solista</p>
  );

  return (
    <div>
      <h1>Solicitudes de contratación de solista</h1>
      {jsxToReturn}
    </div>
  );
}

export default MessagesMusician;
