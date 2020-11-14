import React, { useState, useEffect } from "react";
import CardSection from "./Components/CardSection/CardSection";
import { DragDropContext } from "react-beautiful-dnd";
import Sidebar from '../../ConstantComponents/SideBar/Sidebar'
import classes from './Board.module.css'
import background from '../../Assets/Background/background.jpg';

const testData = {
    tasks: {
        ["task-1"]: { id: "task-1", content: "Take Out the Trash", isDone: false },
        ["task-2"]: { id: "task-2", content: "Clean room", isDone: false },
        ["task-3"]: { id: "task-3", content: "Sweep floor", isDone: false },
        ["task-4"]: { id: "task-4", content: "organize living room", isDone: false }
    },
    columns: {
        ["Column-1"]: {
            id: "Column-1",
            title: "to do",
            taskIds: ["task-1", "task-2", "task-3", "task-4"]
        }
    },
    columnOrder: ["Column-1"]
}



const Board = (props) => {
    const [data, setData] = useState(testData);

    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    const addTask = (column, task) => {
        if (!data.columns[column.id]) {
            return;
        }

        setData((prevData) => {
            const newData = {
                tasks: { ...prevData.tasks, [task.id]: task },
                columns: {
                    ...prevData.columns,
                    [column.id]: { ...column, taskIds: [...column.taskIds, task.id] }
                },
                columnOrder: [...prevData.columnOrder]
            }
            return newData;
        });

        //Send to Db
    }

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }

        const column = data.columns[source.droppableId];
        const newTaskIds = [...column.taskIds];
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        setData((prevData) => (
            {
                ...prevData, columns: {
                    ...prevData.columns, [column.id]:
                        { ...column, taskIds: newTaskIds }
                }
            }
        ));
    }

    return (
        <div className={classes.boardWrapper} >
            <Sidebar />
            <div style={{
                width: "100%",
                height: "100%",
                overflowY: "hidden",
                zIndex: 6,
                backgroundImage: `url(${background})`,
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}>
                <DragDropContext
                    onDragEnd={onDragEnd}>
                    {data ?
                        data.columnOrder.map((columnId) => {
                            const column = data.columns[columnId];
                            const tasks = column.taskIds.map(taskId => data.tasks[taskId]);
                            return <CardSection
                                key={columnId}
                                column={column}
                                tasks={tasks}
                                addTask={addTask} />
                        }) : <p>Loading...</p>
                    }
                </DragDropContext>
            </div>
        </div>
    );

}

export default Board;