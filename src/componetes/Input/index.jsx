import './input.css'
const Inputs = (props) => {

    const onValue=(e)=>{
        props.aoAlterado(e.target.value)
    }

    return (
        <div className="input-wrapper">
            <label htmlFor="Nome">{props.label}</label>
            <input value={props.valor} onChange={onValue} required={props.required} type="text" placeholder={props.placeholder} />
        </div>              
    )
}

export default Inputs