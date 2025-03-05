import React from "react";
import s from './inventoryItems.module.css';
import iconReturn from '../ICONS/return.png';
import iconDelete from '../ICONS/delete.png';
import iconEdit from '../ICONS/edit.png';
import { NavLink } from "react-router-dom";


function InventoryItemPage({
    title, 
    filteredItems, 
    quantity, 
    onPlus, 
    onMinus, 
    onAdd, 
    onDelete, 
    onInputChange, 
    onEditToogle, 
    editingId, 
    formData, 
    searchQuery, 
    onSearch
    }){

    return(<div style={{fontFamily: 'poppins'}}>

        <div className={s.header}>

        <div className={s.searchArea}>
            <input type="text" id={s.itemName} placeholder="Write number..." value={searchQuery} onChange={onSearch} /><label htmlFor={s.itemName}></label>
        </div>

        <div className={s.title}>{title}</div>

        <div className={s.returnBack}><NavLink to="/inventory">Return to options<img src={iconReturn} /></NavLink></div>
        </div>

        <div id={s.contentWrapper}>
            <div id={s.listWrapper}>
                <div id={s.titleList}>
                    <div className={s.itemName}>Item Name</div>
                    <div className={s.itemNumber}>Item Number</div>
                    <div className={s.description}>Description</div>
                    <div className={s.quantity}>Q-ty</div>
                </div>
                
                {filteredItems.map(item =>(
                    <div>
                    <div key={item.id} className={s.item}>
                        <div>
                            {editingId === item.id ? (
                                <input type="text" name="name" value={item.name} onChange={(e)=>onInputChange(e, item.id)} />
                            ) : (item.name)}
                        </div>
                        <div>{editingId === item.id ? (
                                <input type="text" name="number" value={item.number} onChange={(e)=>onInputChange(e, item.id)} />
                            ) : (item.number)}</div>
                        <div>{editingId === item.id ? (
                                <input type="text" name="description" value={item.description} onChange={(e)=>onInputChange(e, item.id)} />
                            ) : (item.description)}</div>
                        <div>{editingId === item.id ? (
                                <input type="text" name="quantity" value={item.quantity} onChange={(e)=>onInputChange(e, item.id)} />
                            ) : (item.quantity)}</div>
                        
                        <div className={s.buttons}>
                            <div><button><img src={iconDelete} onClick={()=>onDelete(item.id)}/></button></div>
                            <div><button><img src={iconEdit} onClick={()=>onEditToogle(item.id)}/>
                            </button></div>
                        </div>
                    
                    </div>
                    <div className={s.separatedLine}></div>
                </div>
                ))}
            
            </div>

            <div id={s.line}></div>

            <form className={s.add_item_form}>

            <div>
                <label htmlFor="item_name">Item Name</label><br />
                <input 
                type="text" 
                name="name" 
                id="item_name" 
                value={formData ? formData.name : ''}
                onChange={(e)=>onInputChange(e, null)}
                required />
            </div>

            <div>
                <label htmlFor="item_number">Item number</label><br />
                <input 
                type="text" 
                name="number" 
                id="item_number" 
                value={formData ? formData.number : ''}
                onChange={(e)=>onInputChange(e, null)}
                required />
            </div>

            <div>
                <label htmlFor="item_description">Description</label><br />
                <textarea 
                name="description" 
                id="item_description" 
                maxlength="500"
                value={formData ? formData.description : ''}
                onChange={(e)=>onInputChange(e, null)}
                ></textarea>
            </div>

                <div id="switchWrapper">
                    <div>Quantity</div>
                <div className={s.switch}>
                    <div className={s.plus_num}><button onClick={onPlus}>+</button></div>
                    <div className={s.current_quantity}>{quantity}</div>
                    <div className={s.minus_num}><button onClick={onMinus}>-</button></div>
                </div>

                </div>

            <div className={s.add_item_button}><button onClick={onAdd}>ADD ITEM</button></div>
        </form>
        </div>
    </div>)
}

export default InventoryItemPage