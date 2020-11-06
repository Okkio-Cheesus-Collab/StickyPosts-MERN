import React from 'react';
import CardSection from './Components/CardSection/CardSection';
import ScrollContainer from './Components/ScrollContainer';
import Sidebar from '../../ConstantComponents/SideBar/Sidebar';
const Board = (props) => {
    return (
        <ScrollContainer>
            <CardSection />
        </ScrollContainer>
    );
}

export default Board;