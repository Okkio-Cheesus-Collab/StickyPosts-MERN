import React from 'react';
import Classes from './CardSection.module.css';

const CardSection = () => {
    return (
        <div className={Classes.cardSection + " p-4"}>
            <div className={Classes.cardHolder}>
                <p>a</p>
            </div>
        </div>
    );
}

export default CardSection;