import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { MoreVertical } from "react-feather";
import Todo from '../Todo/Todo';

const Card = (props) => {
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <div className="border d-flex justify-content-between mx-0 my-2 bg-primary w-100 py-1 pr-3"
                    style={{ height: "64px", backgroundColor: snapshot.isDragging ? "red" : "white" }}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>
                    <Todo task={props.task} />

                    <div className=" d-flex justify-content-end my-auto">
                        <MoreVertical size={20} style={{ cursor: "pointer" }} />
                    </div>
                </div >
            )

            }

        </Draggable>

    );
}

export default Card;