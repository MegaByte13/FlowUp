import s from './inventory.module.css'
import { NavLink } from 'react-router-dom';

const InventoryItemsLink = (props) => {

    let path='/inventory/' + props.id;//Получаем путь из адресно строки + пропс HFO, ME, AE and etc.
    return(
        <NavLink className={s[props.id]} to={path}>{props.name}</NavLink>
    )
    
}

function InventoryPage(props){

    
    
    let itemsElements=props.items.map(i=>(<InventoryItemsLink name={i.name} id={i.id} />))

    return(
        <div>
            <h1 className={s.title}>Choose one option:</h1>
            <div className={s.container}>
                {itemsElements}
            </div>
        </div>
    )
}

export default InventoryPage