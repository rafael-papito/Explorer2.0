interface RepositoryItemProps {
    repository:{
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps){ //props o Reacrt coloca todos os argumentos dentro dessa propriedade chamada props
    return(
        <li>
            <strong>{props.repository?.name}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>Acessar repositório</a>
        </li>
    );
}