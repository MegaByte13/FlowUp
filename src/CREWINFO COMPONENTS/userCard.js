import React from "react";
import s from './userCard.module.css'
import avatar from '../ICONS/AVATARS/emptyAvatar.png'
import editIcon from '../ICONS/editSmaller.png'
import deleteIcon from '../ICONS/deleteSmaller.png'
import ModalWindow from "./modalWindow";
import { useControlLogic } from "./userControlLogic";
import { motion } from "framer-motion";

function UserCard(props){
    const {employees, isOpen, setIsOpen, addEmployee, deleteEmployee, editEmployee, editingEmployee, getStatus, getDaysUntilEnd}=useControlLogic();

    return(

        
        <div className={s.pageWrapper}>
            {isOpen && <ModalWindow 
            setIsOpen={setIsOpen}
            addEmployee={addEmployee}
            editingEmployee={editingEmployee}
            initialData={editingEmployee !== null ? employees[editingEmployee] : null}/>}
        <div className={s.pageHeaderWrapper}>

            <div className={s.searchInput}>
                <input type="text" name="search" placeholder="Find employee" required/>
            </div>

            <div className={s.middleText}>
                <div className={s.line}></div>
                <div className={s.text}>OR</div>
                <div className={s.line}></div>
            </div>
            <div className={s.addButton}>
                <motion.button onClick={()=>setIsOpen(true)}
                whileHover={{scale: 1.1, boxShadow: '0px 0px 10px 2px white' }}
                transition={{ duration: 0.4 }}
                    >ADD EMPLOYEE</motion.button>
            </div>
        </div>

        <div className={s.pageStatusWrapper}>
            <div className={s.statusRed}>
                <div className={s.redCircle}></div>
                <span>CONTRACT FINISHED</span>
            </div>
            <div className={s.statusYellow}>
                <div className={s.yellowCircle}></div>
                <span>CONTRACT FINISHED, BUT STILL ONBOARD</span>
            </div>

            <div className={s.statusGreen}>
                <div className={s.greenCircle}></div>
                <span>ON BOARD</span>
            </div>

            
        </div>
        

            {employees.map((employee, index)=>{
                const statusColor=getStatus(employee)
                const daysUntilEnd=getDaysUntilEnd(employee);

                return (
                    <div className={s.pageContentWrapper} key={index}>
                <div className={s.userCard}>
                <div className={s.userInfo}>
                    <div><img src={avatar} className={s.userPhoto} /></div>
                    <div className={s.line1}></div>
                    <div className={s.data1}>
                        <div>Name: <span>{employee.name}</span></div>
                        <div>Surname: <span>{employee.surname}</span></div>
                        <div>Rank: <span>{employee.rank}</span></div>
                    </div>
                    <div className={s.line1}></div>

                    <div className={s.data2}>
                        <div>Contract duration: <span className={s.days}>{employee.totalDays} days</span></div>
                        <div>Contract start: <span className={s.date}>{employee.startContract}</span></div>
                        <div>Contract end: <span className={s.date}>{employee.endContract}</span></div>
                    </div>
                    <div className={s.line1}></div>
                    <div className={s.iconCard}>
                        <a onClick={()=>deleteEmployee(index)}><motion.img src={deleteIcon}
                        whileHover={{scale: 1.4}}
                        transition={{ duration: 0.4 }}/></a>
                        <a onClick={()=>editEmployee(index)}><motion.img src={editIcon}
                        whileHover={{scale: 1.4 }}
                        transition={{ duration: 0.4 }}/></a>
                    </div>
                </div>

                <div className={s.userSeparatedLine}></div>

                <div className={s.userText}>
                <span className={s.userTextInfo}>
                    {daysUntilEnd === 0 && employee.onBoard 
                        ? "Contract ended, but still onboard!" 
                        : daysUntilEnd > 0 
                        ? "Plenty time left on your contract." 
                        : "Contract has ended!"}
                </span>
                    <span className={s.userTextDaysInfo}>
                        {typeof daysUntilEnd === "string" 
                            ? <span className={s.userTextDays}>{daysUntilEnd}</span> // "19 days at home"
                            : <span className={s.userTextDays}>{daysUntilEnd}</span>} days 
                        {typeof daysUntilEnd === "string" ? "" : " until the end"}
                    </span>
                </div>

                <div className={s.userStatus}>
                    <div className={s[`status${statusColor.charAt(0).toUpperCase()+statusColor.slice(1)}`]}>
                        <span>STATUS: </span>
                        <div className={s[`${statusColor}Circle`]}></div>
                    </div>
                </div>
                
                    </div>
                <div className={s.separatedLine}> </div>
             </div>
                )
})}
            
    </div>

    )
}

export default UserCard