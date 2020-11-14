import React from 'react';
import Classes from './CardSection.module.css';
import { Scrollbars } from 'react-custom-scrollbars';
import Card from "../Card/Card";
import { Droppable } from 'react-beautiful-dnd';
import { ArrowUp } from 'react-feather';
import { v4 as uuidv4 } from 'uuid';

const CardSection = (props) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
        const taskContent = event.target.task.value;
        if (taskContent === "") return;

        props.addTask(props.column, { id: uuidv4(), content: taskContent, isDone: false });
        console.log(taskContent);
    }

    return (
        <div className={Classes.cardSection}>
            <div className={Classes.cardHolder + " d-flex flex-column my-5 mx-4"}>
                <div className="h4 text-capitalize px-3 pt-4">{props.column.title}</div>
                <div className="d-flex flex-row flex-fill">
                    <Scrollbars className="position-relative" autoHide>
                        <Droppable droppableId={props.column.id}>

                            {(provided, snapshot) => (
                                <div className="h-100 d-flex flex-column user-select-none px-3"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}>

                                    { props.tasks.map((task, index) => <Card key={task.id} task={task} index={index} />)}

                                    {provided.placeholder}
                                </div>
                            )}

                        </Droppable>
                    </Scrollbars>
                </div>

                <div className={Classes.addTaskbar + " d-flex align-items-center w-100"}
                    style={{ height: "70px" }}>
                    <form className="d-flex flex-fill px-3"
                        onSubmit={onFormSubmit}>
                        <input
                            className={Classes.addInput + " flex-fill pl-3"}
                            name="task"
                            placeholder="Enter Todo"
                            type="text"
                        />
                        <button type="submit" className={Classes.addSubmit + " ml-2"}>
                            <ArrowUp size={23} />
                        </button>
                    </form>
                </div>


            </div>
        </div >
    );
}

export default CardSection;