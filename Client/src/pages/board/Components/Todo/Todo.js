import React, { useEffect, useState } from 'react';
import Checkbox from '../Card/Checkbox';
import Classes from './Todo.module.css';

const Todo = (props) => {
    const [done, setDone] = useState(props.task.isDone);

    useEffect(() => {
        //updating card mutation
    }, [done]);

    return (
        <div className="col-11 d-flex align-middle">
            <Checkbox className="my-auto float-left"
                checked={done}
                onChange={() => {
                    setDone((prevDone) => {
                        return !prevDone;
                    })
                }} />
            <p className={"my-auto ml-2 mw-75"}
                style={{
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden"
                }}>
                <span className={done ? Classes.strike : ""}>{props.task.content}</span>
            </p>
        </div>
    );
}

export default Todo;