import React, { useState } from 'react';

export default function Car() {
  //Estado en el que vehiclo apagado
  const [power, setPower] = useState(false);
  //Funcion que cambia el letrero Encendido/Apagado
  const checkPower = () => {
    if (power) {
      return <span style={{ color: 'green' }}>Encendido</span>;
    }
    return <span style={{ color: 'red' }}>Apagado</span>;
  };
  //Estado que controla el km del vehiculo
  const [countKm, setCountKm] = useState(0);
  //Funcionalidad de el boton aumentar
  const aumentarKm = () => {
    if (power) {
      setCountKm(countKm + 1);
    } else {
      alert('El Vehiculo se encuentra Apagado');
    }
  };
  //Funcionalidad de el boton disminuir
  const disminuirKm = () => {
    if (power) {
      setCountKm(countKm - 1);
    } else {
      alert('El Vehiculo se encuentra Apagado');
    }
  };

  return (
    <div>
      <h2>Nuestro Coche esta: {checkPower()} </h2>
      <h2>Kilometros Recorridos: {countKm} Km </h2>
      <button
        onClick={() => {
          aumentarKm();
        }}
      >
        Acelerar
      </button>
      <br />
      <button
        onClick={() => {
          disminuirKm();
        }}
      >
        Desacelerar
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setPower(!power);
        }}
      >
        Encender / Apagar
      </button>
    </div>
  );
}
