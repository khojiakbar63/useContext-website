import React from 'react';

const mainlayout = ({children}) => {
    return (
        <main>
            <section className='p-4'>
                <div className="container">
                   {children}
                </div>
            </section>
         </main>
    );
};

export default mainlayout;