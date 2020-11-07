import React from 'react';
import Classes from './CardSection.module.css';
import Card from '../Card/Card'
import { Scrollbars } from 'react-custom-scrollbars';

const CardSection = () => {
    return (
        <div className={Classes.cardSection}>
            <div className={Classes.cardHolder + " d-flex flex-column my-5 mx-4 p-3"}>
                <div className="h3">Title</div>
                <Scrollbars autoHide>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Scrollbars>

            </div>
        </div>

    );
}

export default CardSection;