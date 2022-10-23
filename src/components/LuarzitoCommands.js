import Table from 'react-bootstrap/Table';

const commands = {
    games: [
        {
            name: 'dsf',
            desc: 'Um desafio aleatório de verdade ou desafio.',
            options: 'Nível (-18/+18)',
        },
        {
            name: 'vdd',
            desc: 'Uma pergunta aleatória de verdade e desafio.',
            options: 'Nível (-18/+18)',
        },
    ],
    infos: [
        {
            name: 'ajuda',
            desc: 'Alguma dúvida sobre mim? Use esse comando!.',
            options: '',
        },
        {
            name: 'info',
            desc: 'Veja informações do servidor e usuário!',
            options: 'user, user_id, server',
        },
        {
            name: 'ping',
            desc: 'Gera uma imagem dinâmica sobre o sistema',
            options: '',
        },
    ],
    reports: [
        {
            name: 'sugestao',
            desc: 'Tem alguma ideia incrível ou sugestão para agregar a mim? Envie para agora!',
            options: 'ideia',
        },
    ],
    search: [
        {
            name: 'is',
            desc: 'Image Search - Pesquise Imagens pelo nome',
            options: 'query',
        },
        {
            name: 'pir',
            desc: 'Pesquisa de Imagem Reversa, pesquise o conteúdo de uma imagem pelo link!',
            options: 'link',
        },
    ],
    users: [
        {
            name: 'avatar',
            desc: 'Veja seu avatar ou o de alguém.',
            options: 'usuario',
        },
        {
            name: 'couple',
            desc: 'Veja fotos lado a lado, é ótimo para ver se a metadinha ficou realmente perfeita.',
            options: 'fotoesquerda (usuário), fotodireita (usuário)',
        },
        {
            name: 'ideia',
            desc: 'Está com algo em mente e deseja abrir uma votação? Use esse comando!',
            options: 'ideia, destino (canal)',
        },
    ],
}

const LuarzitoCommands = () => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <td colSpan={3}>Jogos</td>
                </tr>
                <tr>
                    <th>Comando</th>
                    <th>Descrição</th>
                    <th>Parâmetros</th>
                </tr>
            </thead>
            <tbody>
                {commands.games.map(i => {
                    return (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.desc}</td>
                            <td>{i.options}</td>
                        </tr>
                    )
                })}
                <tr>
                    <td colSpan={3}>Informativos</td>
                </tr>
                {commands.infos.map(i => {
                    return (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.desc}</td>
                            <td>{i.options}</td>
                        </tr>
                    )
                })}
                <tr>
                    <td colSpan={3}>Reports</td>
                </tr>
                {commands.reports.map(i => {
                    return (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.desc}</td>
                            <td>{i.options}</td>
                        </tr>
                    )
                })}
                <tr>
                    <td colSpan={3}>Pesquisas</td>
                </tr>
                {commands.search.map(i => {
                    return (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.desc}</td>
                            <td>{i.options}</td>
                        </tr>
                    )
                })}
                <tr>
                    <td colSpan={3}>Usuários</td>
                </tr>
                {commands.users.map(i => {
                    return (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.desc}</td>
                            <td>{i.options}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default LuarzitoCommands;