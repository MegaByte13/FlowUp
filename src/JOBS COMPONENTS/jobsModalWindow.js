import React from "react";
import s from './jobsModalWindow.module.css';
import delBtn from '../ICONS/deleteJobs.png';
import { motion } from "framer-motion";

function JobsModalWindow({ 
    closeModal, 
    addTask, 
    deleteTask, 
    editingTask, 
    updateTask,
    title, setTitle, 
    description, setDescription, 
    role, setRole, 
    status, setStatus 
}) {

    return (
        <div className={s.modalWindow}>
            <header className={s.modalHeader}>
                <div style={{ fontFamily: 'poppinsLight' }}>*all fields are required</div>
                <div style={{ fontFamily: 'poppinsRegular', fontSize: '2rem', textAlign: 'center' }}>TASK CARD</div>
                <button onClick={closeModal} style={{ color: '#D76A1B', fontSize: '1.5rem' }}>Close</button>
            </header>

            <div className={s.modalInput}>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>Description:</label>
                <textarea placeholder="Write description..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                <label>Role:</label>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="" disabled>Choose...</option>
                    <option value="Chief Engineer">Chief Engineer</option>
                    <option value="2-nd Engineer">2-nd Engineer</option>
                    <option value="3-rd Engineer">3-rd Engineer</option>
                    <option value="4-th Engineer">4-th Engineer</option>
                    <option value="Motorman">Motorman</option>
                    <option value="Engine Cadet">Engine Cadet</option>
                </select>
            </div>

            <footer className={s.modalFooter}>
                <div className={s.choice}>
                    <span style={{ fontSize: '1.8rem', color: 'white' }}>Mark as: </span>
                    <div className={s.checkboxWrapper}>
                        <label>
                            <input type="checkbox" value="done" checked={status === 'done'} onChange={() => setStatus(status === 'done' ? 'created' : 'done')} />
                            Done
                        </label>
                        <label>
                            <input type="checkbox" value="inProgress" checked={status === 'inProgress'} onChange={() => setStatus(status === 'inProgress' ? 'created' : 'inProgress')} />
                            In Progress
                        </label>
                    </div>
                </div>
                <button className={s.delBtn} onClick={deleteTask} disabled={!editingTask}>
                    <img src={delBtn} alt='Delete' />
                </button>
                <div className={s.save}>
                    <button className={s.saveBtn} onClick={editingTask ? updateTask : addTask}>SAVE!</button>
                </div>
            </footer>
        </div>
    );
}

export default JobsModalWindow;
