import React from 'react';
import cl from "classnames"
const Container = ({children,margin}) => {
    return (
        <div className={`container mt-${margin}`}>
            {children}
        </div>
    );
};

export default Container;