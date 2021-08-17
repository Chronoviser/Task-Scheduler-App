import { useState } from "react";

function Input({ addTask }) {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    function onSubmit(e) {
        e.preventDefault();

        if (!text) {
            alert('Empty Task');
            return;
        }

        if (!day) {
            alert('Empty Day & Time');
            return;
        }

        addTask({
            text: text,
            day: day,
            reminder: reminder
        });

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    placeholder="Add Task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input
                    type="text"
                    placeholder="Add Day and Time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input
                type="submit"
                value="Save"
                className='btn btn-block'
            />
        </form>
    );
}

export default Input;