import React from 'react';
import { useNavigate } from 'react-router-dom';

const Accounts = ({ accounts }) => {
  const navigate = useNavigate();

  const handleNavigateToTarjetas = (cuentaId) => {
    navigate(`/tarjeta-interfaz/${cuentaId}`);
  };

  const accountsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  };

  const accountCardStyle = {
    background: 'white',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.5rem',
    height: '120px',
    cursor: 'pointer', // Esto hace que todo el contenedor sea clicable
  };

  const bankIconStyle = {
    width: '40px',
    height: '40px',
  };

  const accountInfoStyle = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '5px',
  };

  const accountNameStyle = {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    margin: 0,
  };

  const interestStyle = {
    fontSize: '1.1rem',
    color: '#555',
    margin: 0,
  };

  const saldoContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: '5px',
  };

  const saldoStyle = {
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#F57C00',
    margin: 0,
  };

  const saldoActualStyle = {
    fontSize: '1.2rem',
    color: '#555',
    margin: 0,
  };

  return (
    <div style={accountsContainerStyle}>
      {accounts.map((account) => (
        <div
          key={account.cuenta_id}
          style={accountCardStyle}
          onClick={() => handleNavigateToTarjetas(account.cuenta_id)} // Hace que todo el componente sea clicable
        >
          <img 
            src="/src/assets/bank-icon.png"
            alt="Banco"
            style={bankIconStyle}
          />
          <div style={accountInfoStyle}>
            <p style={accountNameStyle}>{account.nombre_cuenta}</p>
            <p style={interestStyle}>Interés: {account.interes}%</p>
          </div>
          <div style={saldoContainerStyle}>
            <p style={saldoStyle}>S/ {account.saldo}</p>
            <p style={saldoActualStyle}>Saldo actual</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accounts;