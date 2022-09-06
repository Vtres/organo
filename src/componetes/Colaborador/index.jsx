import './Colaborador.css'

const Colaborador =({corDeFundo, nome, imagem, cargo})=>{
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <p>{cargo}</p>
            </div>
        </div>
    )
}

export default Colaborador