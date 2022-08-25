import React from "react";
import { useState } from "react";

const App = () => {

    // const [name, setName] = useState();
    // const [fullName, setFullName] = useState();
    // const[lastname,setLastName]=useState();

    // const[lastNamenew,setlastNamenew]=useState();


    // const inputEventTwo=(event)=>{
    //     setLastName(event.target.value);
    // }

    // const onSubmit = (event) => {
    //     event.preventDefault();
    //     setFullName(name);
    //     setlastNamenew(lastname);
    // }

    const [fullName, setFullName] = useState({
        fname: " ",
        lname: " ",
        email: " ",
        phone: " ",
    });


    const inputEvent = (event) => {
        console.log(event.target.value);
        // setName(event.target.value);

        console.log(event.target.name);

        // const value= event.target.value;
        // const name= event.target.name;
        //2 2 baar likhne ki jagah ye ek baaar nicje hi likh diya

        const { value, name } = event.target;

        setFullName((preValue) => {
            console.log(preValue);

            return {
                ...preValue,
                [name]: value,
            }



            // if(name==="fName"){
            //     return{
            //         fname:value,
            //         lname:preValue.lname,
            //         email:preValue.email,
            //         phone:preValue.phone,
            //     };
            // }
            // else if(name==="lName"){
            //     return{
            //         fname: preValue.fname,
            //         lname:value,
            //         email:preValue.email,
            //         phone:preValue.phone,
            //     };
            // }
            // else if(name==="email"){
            //     return{
            //         fname: preValue.fname,
            //         lname:preValue.lname,
            //         email:value,
            //         phone:preValue.phone,
            //     };
            // }
            // else if(name==="phone"){
            //     return{
            //         fname: preValue.fname,
            //         lname:preValue.lname,
            //         email:preValue.email,
            //         phone:value,
            //     };
            // }
        })
    };

    const onSubmit = (event) => {
        event.preventDefault();
        alert('form submitted');
    };


    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmit}>
                    <div>
                        <h1>  Hello {fullName.fname} {fullName.lname}</h1>
                        <p>{fullName.email} {fullName.phone}</p>
                        <input type="text" placeholder="Enter Name" /*name="fName"*/ name="fname" onChange={inputEvent} value={fullName.fname} />
                        <br />
                        <input type="text" placeholder="Enter Last Name"  /*name="lName"*/ name="lname" onChange={inputEvent} value={fullName.lname} />

                        <input type="email" placeholder="Enter Email" name="email" onChange={inputEvent} value={fullName.email} />

                        <input type="number" placeholder="Enter Phone Number" name="phone" onChange={inputEvent} value={fullName.phone} />
                        <button type="submit">Click me</button>

                    </div>
                </form>
            </div>

        </>
    );
};

export default App;