import { FaTimes } from 'react-icons/fa';

function Task({ task, deleteTask, toggleReminder }) {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}>
            <h3 >
                {task.text}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => deleteTask(task.id)}
                />
            </h3>
            <p onClick={() => toggleReminder(task.id)}>{task.day}</p>
        </div>
    );
}

export default Task;