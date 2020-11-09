import React from 'react';
import Classes from './CardSection.module.css';

const CardSection = () => {
    return (
        <div className={Classes.cardSection}>
            <div className={Classes.cardHolder + " my-auto mx-4"}>
                <p>a</p>
            </div>
        </div>
    );
}

export default CardSection;