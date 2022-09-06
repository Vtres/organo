import { useState } from "react"
import Button from "../Button"
import Inputs from "../Input"
import ListDropDawn from "../ListDropdawn"
import './form.css'

const Form = (props) => {

    const [nome,setNome] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [time, setTime] = useState('')

    const save = (e) =>{
        e.preventDefault()
        props.onColaborador({nome, cargo,imagem, time})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="container">
            <form className="form-wrapper" onSubmit={save}>
                <h3>Preencha os dados para criar o card do colaborador</h3>
                <Inputs 
                    valor={nome}
                    aoAlterado={valor=>setNome(valor)}
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                />
                <Inputs 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu Cargo"
                    valor={cargo}
                    aoAlterado={valor=>setCargo(valor)} 
                />
                <Inputs 
                    required={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor=>setImagem(valor)}
                />
                <ListDropDawn 
                    required={true} 
                    label="Time" 
                    itens={props.nomeDosTimes} 
                    valor={time}
                    aoAlterado={valor=> setTime(valor)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form