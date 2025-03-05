import React, { useEffect, useState } from "react"
import s from './modalWindow.module.css'

function ModalWindow({setIsOpen, addEmployee, editingEmployee, initialData}){
    const [name, setName]=useState('');
    const [surname, setSurname]=useState('');
    const [rank, setRank]=useState('');
    const [startContract, setStartContract]=useState('');
    const [endContract, setEndContract]=useState('');
    const [totalDays, setTotalDays]=useState('');
    const [onBoard, setOnBoard]=useState(true);

    useEffect(()=>{
        if(editingEmployee !== null && initialData){
            setName(initialData.name || '');
            setSurname(initialData.surname || '');
            setRank(initialData.rank || '');
            setStartContract(initialData.startContract || '');
            setEndContract(initialData.endContract || '');
            setTotalDays(initialData.totalDays || '');
            setOnBoard(initialData.onBoard ?? true);
        }
    }, [editingEmployee, initialData])

    const handleSubmit=()=>{
        if (!name || !surname || !rank || !startContract || !endContract || !totalDays) {
            alert("Заполните все поля!");
            return;
        }

        addEmployee({
            name,
            surname,
            rank,
            startContract: new Date(startContract).toISOString().split('T')[0],
            endContract: new Date(endContract).toISOString().split('T')[0],
            totalDays,
            onBoard
        });
        setIsOpen(false);
    }
    




    return(
        <div id={s.modalWindow}>
                
            <div className={s.modalWindowHeader}>
                <div className={s.leftMsg}>*all columns are required to fill!</div>
                <div className={s.modalWindowTitle}>{editingEmployee !==null ? 'EDIT USER CARD' : 'NEW USER CARD'}</div>
                <div className={s.closeModalWindowButton}><a onClick={()=>setIsOpen(false)}>Close</a></div>
            </div>

            <div id={s.modalWindowAreas}>
                <div className={s.modalWindowLeftAreas}>
                    <label htmlFor={s.name}>Name: </label>
                    <input type="text" value={name} id={s.name} onChange={(e)=>setName(e.target.value)} required />
                    <label htmlFor={s.surname}>Surname:</label>
                    <input type="text" value={surname} id={s.surname} onChange={(e)=>setSurname(e.target.value)} />
                    <label htmlFor={s.position}>Rank: </label>
                    <input type="text" value={rank} id={s.position} onChange={(e)=>setRank(e.target.value)} />
                </div>

                <div className={s.line}></div>

                <div className={s.modalWindowRightAreas}>
                    <div>
                        <label htmlFor={s.startContract}>Contract started: </label>
                        <input type="date" value={startContract} id={s.startContract} onChange={(e)=>setStartContract(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor={s.endContract}>Contract end: </label>
                        <input type="date" value={endContract} id={s.endContract} onChange={(e)=>setEndContract(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor={s.totalDays}>Total contract days: </label>
                        <input type="number" value={totalDays} id={s.totalDays} onChange={(e)=>setTotalDays(e.target.value)} />
                    </div>

                </div>
            </div>
            <div className={s.separatedLine}>

            </div>
            <div className={s.modalWindowButton}>
            
                <button onClick={handleSubmit}>{editingEmployee !==null ? 'SAVE CHANGES' : 'ADD MEMBER'}</button>
                <label>
                    <input type="checkbox" checked={onBoard} onChange={() => setOnBoard(!onBoard)} />
                    Employee is still onboard
                    </label>
            </div>
            
        </div>
    )
}
export default ModalWindow