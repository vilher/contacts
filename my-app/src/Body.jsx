import React from 'react';
import Card from './Card'
import contacts from './contacts';

function createCard(prop){
    return (<Card 
        key={prop.id}
        imgName={prop.imgUrl}
        name={prop.name}
        phone={prop.phone}
        email={prop.email}
    />);
}

function Body(){
    console.log(contacts);
    return (<div className='body'>
            {contacts.map(createCard)}
        
    </div>);
};

export default Body;