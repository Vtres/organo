// import './App.css';
import './index.css'
import Banner from "./componetes/Banner";
import Form from './componetes/Form';
import { useState } from 'react';
import Time from './componetes/Time';
import Rodape from './componetes/Rodape';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const times = [
    {
      'nome': 'Front-End',
      'corPrimaria':'#82CFFA',
      'corSecundaria':'#E8F8FF'
    },
    {
      'nome': 'Devops',
      'corPrimaria':'#E06B69',
      'corSecundaria':'#FDE7E8'
    },
    {
      'nome': 'UX-Design',
      'corPrimaria':'#DB6EBF',
      'corSecundaria':'#FAE9F5'
    },
    {
      'nome': 'Testers',
      'corPrimaria':'#57C278',
      'corSecundaria':'#D9F7E9'
    },
    {
      'nome': 'Analistas',
      'corPrimaria':'#FF8A29',
      'corSecundaria':'#FFEEDF'
    },
    {
      'nome': 'Gestores',
      'corPrimaria':'#FFBA05',
      'corSecundaria':'#FFF5D9'
    },
    {
      'nome': 'CEO',
      'corPrimaria':'#9932d9',
      'corSecundaria':'#e6c2fc'
    }  
  ]
  const novoColaborador =(colaborador)=>{
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Form nomeDosTimes={times.map(time=> time.nome)} onColaborador={colaborador => novoColaborador(colaborador)}/>
      {times.map(time=>
        <Time 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador=>colaborador.time === time.nome)}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;
