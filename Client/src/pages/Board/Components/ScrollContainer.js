import React from 'react';
const ScrollContainer = (props) => {
    return (
        <div style={{
            height: "100%",
            width: "100%",
            overflowX: "scroll"
        }}>
            {props.children}
        </div>
    );
}

export default ScrollContainer;