import React, { useState } from 'react';

const Events = () => {
  // Estado para armazenar a data atual
  const [currentDate, setCurrentDate] = useState('');
  // Estado para armazenar a hora atual
  const [currentTime, setCurrentTime] = useState('');

  // Evento com função para mostrar a data atual
  const handleClick = (e) => {
    console.log(e);
    const now = new Date();
    const date = now.toLocaleDateString(); // Obtém a data no formato local
    setCurrentDate(date); // Atualiza o estado com a data
    alert('Data Atual: ' + date); // Mostra um alerta com a data atual
  };

  // Evento com função para mostrar a hora atual
  const callNames = () => {
    const now = new Date();
    const time = now.toLocaleTimeString(); // Obtém a hora no formato local
    setCurrentTime(time); // Atualiza o estado com a hora
    alert('Hora Atual: ' + time); // Mostra um alerta com a hora atual
  };

  return (
    <div>
      <button
        onClick={() =>
          alert('Mais um dia começando! Vamos firmes e fortes alcançar nossos objetivos!')
        }
      >
      Bom dia!
      </button>

      {/* Botão para exibir a data atual */}
      <div>
        <button onClick={handleClick}>Data Atual (Clique Para ver)</button>
        {currentDate && <p>Data Atual: {currentDate}</p>}
      </div>

      {/* Botão para exibir a hora atual */}
      <div>
        <button onClick={callNames}>Hora Atual (Clique para Atualizar)</button>
        {currentTime && <p>Hora Atual: {currentTime}</p>}
      </div>
    </div>
  );
};

export default Events;
