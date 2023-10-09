import { useEffect, useState } from 'react'
import './card.css'
import TextField from '@mui/material/TextField';

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: number;
  endereco: string;

}

const Acard: React.FC = () => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];
        setUserData({
          name: {
            first: user.name.first,
            last: user.name.last,
          },
          email: user.email,
          phone: user.phone,
          endereco: user.endereco,
          
        });
      } catch (error) {
        console.error('Erro ao buscar dados de usuário:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className='container'>
      <img className='img' src="https://media.gettyimages.com/id/1287380881/pt/foto/beautiful-woman.jpg?s=612x612&w=gi&k=20&c=3oriyHBU-YcL5aHTPebBMvUT8d7XjKIRGqACt4BeND4="  alt="" />
      <div className='form-list'>
      <div className='form-data'>
        {userData ? (
          <div>
            <h2>Informações do Usuário</h2>
            <div>
              <TextField
                  id="name"
                  label="Nome-completo"
                  placeholder="digite seu nome"
                  variant="standard"
                  value={userData.name.first}
                />
            </div>
            <div>
              <TextField
                id="end"
                label="endereco"
                placeholder="digite seu endereço"
                variant="standard"
                value={userData.endereco}
              />
            </div>
            <div>
              <TextField
                id="fone"
                label="Telefone"
                placeholder="digite seu telefone"
                variant="standard"
                value={userData.phone}

              />
            </div>
            <div>
              <TextField
                id="mail"
                label="E-mail"
                placeholder="digite seu e-mail"
                type="e-mail"
                variant="standard"
                value={userData.email}

              />
            </div>
          </div>
        ) : (
          <p>Carregando dados do usuário...</p>
        )}
      </div>



        
      </div>
    </div>
  )
}

export default Acard;




