import active from "../image/activesection.svg" 

function Item(props){
    const user = props.user
    //Правильно! Здесь не нужно указывать ключ:
    return (<li><i class={user.icon}/><a href = {user.href}>{user.string}<img src = {active} alt ="!"/></a></li>)
}

export default function List(props){  
    const users = props.users;
    const items = users.map((user) => {
    //Правильно! Здесь должен быть указан ключ:
    return <Item key={`${user.id}`} user={user}/>;
    });
    return (<ul>{items}</ul>);
}