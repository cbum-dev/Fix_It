import React, { useEffect, useState } from 'react';

const AboutOrg = () => {
    const [bio, setBio] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/appwrite')
            .then(response => response.json())
            .then(data => setBio(data.bio))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>About Organization</h1>
            <p>{bio}</p>
        </div>
    );
};

export default AboutOrg;
