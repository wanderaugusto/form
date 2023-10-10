import { Suspense, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import './card.css'

type User = {
  name: {
    first: string
    last: string
  }
  email: string
  phone: number
  location: {
    street: {
      number: number
      name: string
    }
    city: string
    state: string
    country: string
    postcode: number
  }
  endereco: string
  picture: {
    large: string
  }
}

const Acard: React.FC = () => {
  const [userData, setUserData] = useState<User | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        const user: User = data.results[0]
        const endereco = `${user.location.street.name},${user.location.street.number}. ${user.location.city}/${user.location.state}-${user.location.country}. ${user.location.postcode}`
        user.endereco = endereco
        setUserData(user)
      } catch (error) {
        console.error('Erro ao buscar dados de usuário:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="container">
      <img className="img" src={userData?.picture.large} alt="Not Found" />
      <div className="form-list">
        <div className="form-data">
          <Suspense>
            {userData ? (
              <div>
                <h2>Informações do Usuário</h2>
                <div>
                  <TextField
                    id="name"
                    label="Nome Completo"
                    placeholder="digite seu nome"
                    variant="standard"
                    value={`${userData.name.first} ${userData.name.last}`}
                  />
                </div>
                <div>
                  <TextField
                    id="end"
                    label="Endereco"
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
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Acard
