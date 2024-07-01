import { useState } from 'react'
import Banner from './componentes/Banner/'
import Formulario from './componentes/Formulario'
import Time from './componentes/Time'
import Rodape from './componentes/Rodape'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'Dev Ops',
      cor: '#E06869',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#D86E8F',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    },
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    // debugger
    setColaboradores([...colaboradores, colaborador])
  }

  const deletarColaborador = () => {
    console.log("<<< Deletando colaborador >>>");
  }

  const mudarCorDoTime = (cor, id) => {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor
      }
      return time
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time
        mudarCor={mudarCorDoTime}
        key={time.nome}
        id={time.id}
        nome={time.nome}
        cor={time.cor}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
         />)}
      <Rodape />
    </div>
  );
}

export default App;
