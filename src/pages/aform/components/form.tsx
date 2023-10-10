import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button, Stack } from '@mui/material'
import { useState } from 'react'

type userForm = {
  name: string
  city: string
  state: string
  email: string
  password: string
}

export default function FormPropsTextFields() {
  const [form, setForm] = useState<userForm>({
    name: '',
    city: '',
    state: '',
    email: '',
    password: '',
  })

  const handleInputChange = (
    input: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = input.target
    setForm({
      ...form,
      [id]: value,
    })
  }

  const handleSendServer = async () => {
    fetch('localhost:8080/api', {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...form }),
      cache: 'default',
    })
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="forms-list">
        <h2>Formulário Validado</h2>
        <div>
          <TextField
            id="name"
            label="Nome Completo"
            placeholder="digite seu nome"
            variant="standard"
            value={form.name}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div>
          <TextField
            id="city"
            label="Cidade"
            placeholder="digite sua cidade"
            variant="standard"
            value={form.city}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div>
          <TextField
            id="state"
            label="Estado"
            placeholder="digite seu estado"
            variant="standard"
            value={form.state}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div>
          <TextField
            id="email"
            label="E-mail"
            placeholder="digite seu e-mail"
            type="e-mail"
            variant="standard"
            value={form.email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div>
          <TextField
            id="password"
            label="Password"
            placeholder="digite sua senha"
            type="password"
            autoComplete="current-password"
            variant="standard"
            value={form.password}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="btn">
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button variant="contained" onClick={handleSendServer}>
              Enviar
            </Button>
          </Stack>
        </div>
      </div>
    </Box>
  )
}
