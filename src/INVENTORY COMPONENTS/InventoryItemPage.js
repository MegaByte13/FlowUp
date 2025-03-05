import React from "react";
import s from './inventoryItems.module.css';
import iconReturn from '../ICONS/return.png';
import iconDelete from '../ICONS/delete.png';
import iconEdit from '../ICONS/edit.png';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

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

        <div className={s.header}
        >
            <div className={s.searchArea}>
                <input type="text" id={s.itemName} placeholder="Write number..." value={searchQuery} onChange={onSearch} /><label htmlFor={s.itemName}></label>
            </div>

            <div className={s.title}>{title}</div>

            <div className={s.returnBack}><NavLink to="/inventory">Return to options<motion.img src={iconReturn} whileHover={{scale: 1.5}} transition={{duration: 0.3, ease: "easeInOut"}} /></NavLink></div>
        </div>

        <div id={s.contentWrapper}>
            <div id={s.listWrapper}>
                <div id={s.titleList}>
                    <div className={`${s.itemName} ${s.animate}`}>Item Name</div>
                    <div className={`${s.itemNumber} ${s.animate}`} style={{animationDelay: '0.3s'}}>Item Number</div>
                    <div className={`${s.description} ${s.animate}`} style={{animationDelay: '0.6s'}}>Description</div>
                    <div className={`${s.quantity} ${s.animate}`} style={{animationDelay: '0.9s'}}>Q-ty</div>
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
                            <div><motion.button whileHover={{scale: 1.2}} transition={{duration: 0.3, ease: "easeInOut"}}><img src={iconDelete} onClick={()=>onDelete(item.id)} alt="deleteItem"/></motion.button></div>
                            <div><motion.button whileHover={{scale: 1.2}} transition={{duration: 0.3, ease: "easeInOut"}}><img src={iconEdit} onClick={()=>onEditToogle(item.id)} alt="editItem"/>
                            </motion.button></div>
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
                    <div className={s.plus_num}><motion.button onClick={onPlus} whileHover={{scale: 1.2}} transition={{duration: 0.3, ease: "easeInOut"}}>+</motion.button></div>
                    <div className={s.current_quantity}>{quantity}</div>
                    <div className={s.minus_num}><motion.button onClick={onMinus} whileHover={{scale: 1.2}} transition={{duration: 0.3, ease: "easeInOut"}}>-</motion.button></div>
                </div>

                </div>

            <motion.div className={s.add_item_button}
            whileHover={{scale: 1.1, boxShadow: '0px 0px 10px 2px white'}} transition={{duration: 0.5, ease: 'easeInOut'}}
            ><button onClick={onAdd}>ADD ITEM</button></motion.div>
        </form>
        </div>
    </div>)
}

export default InventoryItemPage