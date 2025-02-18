import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba'

const Time = props => {

    const secondaryColorAlpha = '0.3'

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={{ backgroundImage: 'url(/imagens/bg_time.png', backgroundColor: hexToRgba(props.cor, secondaryColorAlpha) }}>
            <input onChange={e => props.mudarCor(e.target.value, props.id)} value={props.cor} type="color" className="input-cor" />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map((colaborador, i) => 
                    <Colaborador
                        corDeFundo={props.cor}
                        key={i}
                        id={colaborador.id}
                        favorito={colaborador.favorito}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        aoDeletar={props.aoDeletar}
                        aoFavoritar={props.aoFavoritar}
                     />)}
            </div>
        </section>
        : ''
    )
}

export default Time