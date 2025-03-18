import { useState } from 'react'
import { useEffect } from "react";

const SelectedContact = ({selectedContactId, setSelectedContactId}) => {

    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContactDetails() {
          try {
            const response = await fetch(
              `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
            );
            const result = await response.json();
            setContact(result);
          } catch (error) {
            console.error(error);
          }
        }
    
        if (selectedContactId) {
          fetchContactDetails();
        }
    }, [selectedContactId]);
    
    if (!contact) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Contact Details</h2>
            <p>
                <strong>Name:</strong> {contact.name}
            </p>
            <p>
                <strong>Username:</strong> {contact.username}
            </p>
            <p>
                <strong>Address:</strong> 
                <br /> 
                {contact.address.street} 
                <br />
                {contact.address.suite} 
                <br />
                {contact.address.city} 
                <br />
                {contact.address.zipcode} 
                <br />
                {contact.address.geo.lat} 
                <br />
                {contact.address.geo.lng} 
                <br />
            </p>
            <p>
                <strong>Email:</strong> {contact.email}
            </p>
            <p>
                <strong>Phone:</strong> {contact.phone}
            </p>
            <p>
                <strong>Website:</strong> {contact.website}
            </p>
            <p>
                <strong>Company:</strong>
                <br /> 
                {contact.company.name}
                <br /> 
                {contact.company.catchPhrase}
                <br /> 
                {contact.company.bs}
                <br /> 
            </p>
            <button onClick={() => setSelectedContactId(null)}>Back to List</button>
    </div>
    );
};

export default SelectedContact;