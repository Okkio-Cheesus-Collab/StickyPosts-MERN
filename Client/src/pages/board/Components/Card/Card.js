import React from 'react';
import { MoreVertical } from "react-feather";
import Todo from '../Todo/Todo'
const Card = () => {

    return (

        <div className="border d-flex justify-content-between mx-0 my-2 bg-primary w-100 py-1 pr-3"
            style={{ height: "64px" }} >


            <Todo isDone={false} text={"To Do 1 - blah blah"} />

            <div className=" d-flex justify-content-end my-auto">
                <MoreVertical size={20} style={{ cursor: "pointer" }} />
            </div>
        </div >
    );
}

export default Card;