import React from 'react';
import Card from './Card';
import './cardStyle.css';

const CardTemplate = () => {
    return (
        <div className="cards">
            <Card
                img="https://images.unsplash.com/photo-1565992441121-4367c2967103?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2tpfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Ski"
                description= "info......."
                firstLink="https://unsplash.com/photos/Pf6e3o0GL4M"
                secondLink=""
            />
            <Card
                img="https://images.unsplash.com/photo-1561381194-04bb60b81238?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHdoaXNreXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Water"
                description= "more info......"
                firstLink="https://images.unsplash.com/photo-1561381194-04bb60b81238?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHdoaXNreXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                secondLink=""
            />
            <Card
                img=""
                title="Israel"
                description="end of info....."
                firstLink=""
                secondLink=""
            />
        </div>
    )
}

export default CardTemplate;