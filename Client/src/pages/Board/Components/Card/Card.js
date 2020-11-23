import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { MoreVertical } from "react-feather";
import Todo from '../Todo/Todo';
import Classes from './Card.module.css';

const Card = (props) => {
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <div className={Classes.card + " d-flex justify-content-between mx-0 my-2 py-1 pr-3"}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Todo task={props.task} />
                    <div className=" d-flex justify-content-end my-auto">
                        <MoreVertical size={20} style={{ cursor: "pointer" }} />
                    </div>
                </div >
            )}
        </Draggable>

    );
}

export default Card;