import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button,  Stack } from '@mui/material';

export default function FormPropsTextFields() {
  
  
  const [form, setForm] = React.useState({
    nome: '', 
    city: '',
    state: '',
    mail: '',
    senha: '',
  });

  const forms = {...form}

  //const handleInputChange = (buscar) => {
    //const { id, value } = buscar.target;
    //setForm({
     // ...form,
      //[id]: value,
    //});
 // };


  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='forms-list'>

        <h2>Formulário Validado</h2>
        <div>
          <TextField
              id="name"
              label="Nome Completo"
              placeholder="digite seu nome"
              variant="standard"
              value={forms.nome}
            />
        </div>
        <div>
          <TextField
            id="city"
            label="Cidade"
            placeholder="digite sua cidade"
            variant="standard"

          />
        </div>
        <div>
          <TextField
            id="state"
            label="Estado"
            placeholder="digite seu estado"
            variant="standard"

          />
        </div>
        <div>
          <TextField
            id="mail"
            label="E-mail"
            placeholder="digite seu e-mail"
            type="e-mail"
            variant="standard"

          />
        </div>
        <div>
          <TextField
            id="senha"
            label="Password"
            placeholder="digite sua senha"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </div>
        <div className='btn'>
          <Stack spacing={2} direction="row" justifyContent='center'>
            <Button variant="contained">Enviar</Button>
          </Stack>
        </div>
      </div>
    </Box>
  );
}