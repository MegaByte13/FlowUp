import React from "react";
import s from './jobcards.module.css'
import JobsModalWindow from "./jobsModalWindow";
import { useJobsControl } from "./jobsControlLogic";
import { motion } from "framer-motion";

function JobCards(){
    const {isModalOpen, 
        openModal, 
        closeModal, 
        tasks, 
        addTask, 
        deleteTask,
        editingTask,
        updateTask,
        title, setTitle,
        description, setDescription,
        role, setRole,
        status, setStatus
    }=useJobsControl();


    return(
        <React.Fragment>
            <motion.button className={s.button} onClick={()=>openModal(null)}
                 whileHover={{
                    scale: 1.05,
                    boxShadow: '0px 0px 3px 3px rgba(255, 255, 255, 0.3)',
                }}
                transition={{duration: 0.3, ease: "easeInOut"}}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                >CREATE JOB TASK</motion.button>


        <div className={s.pageWrapper}>
            {isModalOpen && <JobsModalWindow 
                closeModal={closeModal} 
                addTask={addTask} 
                deleteTask={deleteTask}
                editingTask={editingTask}
                updateTask={updateTask}
                title={title} setTitle={setTitle}
                description={description} setDescription={setDescription}
                role={role} setRole={setRole}
                status={status} setStatus={setStatus}
                />}
            <div className={s.wrapper}>
                


                {["created", "inProgress", "done"].map(status => (
                        <div key={status} className={s[`${status}CardWrapper`]}>
                            <div className={s.titleCard}>
                                <div className={s.status}>{status.toUpperCase()}</div>
                                <hr className={s.titleDivider} />
                                <input className={s.searchBar} type="text" placeholder="Search..." />
                            </div>
                            <hr />
                            <div className={s.jobCards}>
                                {tasks.filter(task => task.status === status).map((task, index) => (
                                    <motion.div key={index} className={s.card} onClick={() => openModal(task)}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: '0px 0px 5px 5px rgba(255, 255, 255, 0.3)',
                                    }}
                                    transition={{duration: 0.7, ease: "easeInOut"}}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    

                                    >
                                        <h2 className={s.title} style={{ color: '#E7863F' }}>{task.title}</h2>
                                        <hr className={s.divider} style={{ width: '60%' }} />
                                        <p className={s.description}>{task.description}</p>
                                        <div className={s.footer}>
                                            <span className={s.role} style={{ color: '#D76A1B' }}>{task.role}</span> |
                                            <span className={s.date} style={{ color: '#A2CB26' }}> {task.date}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}

                
            </div>
        </div>
        </React.Fragment>
        
    )
}

export default JobCards