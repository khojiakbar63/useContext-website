import React from 'react';

const footer = () => {
    return (
        <footer>
            <div className="container">
                <h1>{new Date().getFullYear()}</h1>
            </div>
         </footer>
    );
};

export default footer;