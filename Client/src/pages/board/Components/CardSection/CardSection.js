import React from 'react';
import Classes from './CardSection.module.css';
import { Scrollbars } from 'react-custom-scrollbars';
import Card from "../Card/Card";
import { Droppable } from 'react-beautiful-dnd';
const CardSection = (props) => {
    return (
        <div className={Classes.cardSection}>
            <div className={Classes.cardHolder + " d-flex flex-column my-5 mx-4 p-3"}>
                <div className="h4 text-capitalize">{props.title}</div>
                <Scrollbars className="position-relative" autoHide>
                    <Droppable droppableId={props.columnId}>

                        {(provided, snapshot) => (
                            <div className="h-100 d-flex flex-column user-select-none"
                                {...provided.droppableProps}
                                ref={provided.innerRef}>

                                { props.tasks.map((task, index) => <Card key={task.id} task={task} index={index} />)}

                                {provided.placeholder}
                            </div>
                        )}

                    </Droppable>
                </Scrollbars>
            </div>
        </div>
    );
}

export default CardSection;