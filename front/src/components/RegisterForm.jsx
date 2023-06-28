import React, { useState } from 'react';

const RegisterForm = () => {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
// Perform registration logic here, such as sending data to a server
console.log('Registerform submitted');
console.log('First Name:', firstName);
console.log('Last Name:', lastName);
console.log('Email:', email);
console.log('Password:', password);
// Reset form fields
setFirstName('');
setLastName('');
setEmail('');
setPassword('');
};

return (
<form onSubmit={handleSubmit}>
<div>
<label htmlFor="firstName">First Name:</label>
<input
type="text"
id="firstName"
value={firstName}
onChange={(e) => setFirstName(e.target.value)}
required
/>
</div>
<div>
<label htmlFor="lastName">Last Name:</label>
<input
type="text"
id="lastName"
value={lastName}
onChange={(e) => setLastName(e.target.value)}
required
/>
</div>
<div>
<label htmlFor="email">Email:</label>
<input
type="email"
id="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
</div>
<div>
<label htmlFor="password">Password:</label>
<input
type="password"
id="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>
</div>
<button type="submit">Register</button>
</form>

);
};

export default RegisterForm;






























//import React from 'react'

//const RegisterForm = () => {
  //return (
    //<div> registracijos forma</div>
  //)
//}

//export default RegisterForm