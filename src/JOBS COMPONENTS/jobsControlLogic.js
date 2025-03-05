import { useState, useEffect } from "react";

export function useJobsControl() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("created");

    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description);
            setRole(editingTask.role);
            setStatus(editingTask.status);
        } else {
            setTitle("");
            setDescription("");
            setRole("");
            setStatus("created");
        }
    }, [editingTask]);

    const openModal = (task = null) => {
        console.log("Opening modal, editing task:", task);
        setEditingTask(task || null);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setEditingTask(null);
        setIsModalOpen(false);
    };

    const addTask = () => {
        const newTask = {
            title,
            description,
            role,
            status,
            date: new Date().toLocaleDateString(),
        };

        console.log("Adding new task:", newTask);

        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        closeModal();
    };

    const updateTask = () => {
        if (!editingTask) return;

        const updatedTask = {
            ...editingTask,
            title,
            description,
            role,
            status,
        };

        console.log("Updating task:", editingTask, "to", updatedTask);

        const updatedTasks = tasks.map(task =>
            task.title === editingTask.title && task.date === editingTask.date ? updatedTask : task
        );
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        closeModal();
    };

    const deleteTask = () => {
        if (!editingTask) return;

        console.log("Deleting task:", editingTask);

        const updatedTasks = tasks.filter(task => task !== editingTask);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        closeModal();
    };

    return {
        isModalOpen,
        openModal,
        closeModal,
        tasks,
        addTask,
        deleteTask,
        editingTask,
        updateTask,
        title,
        setTitle,
        description,
        setDescription,
        role,
        setRole,
        status,
        setStatus,
    };
}
