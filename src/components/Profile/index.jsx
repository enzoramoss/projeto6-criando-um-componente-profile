import './styles.css'

export default function Profile({ nome, idade, profissao, foto}) {
    return (
        <div className="profile-container">
            <h2>Nome: {nome}</h2>
            <p>Idade: <br /> {idade} anos </p>
            <p>Profissão: <br /> {profissao}</p>
            <img src={foto} />
        </div>
    )
}