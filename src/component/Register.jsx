import React, { useState } from 'react'

const Register = () => {

    const [input, setval] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: ""
    })

    const setdata = (e) => {
        const { name, value } = e.target;
        setval((prevdata) => {
            return {
                ...prevdata,
                [name]: value
            }
        })
    }


    const addinpdata = async (e) => {
        e.preventDefault();
        console.log(e);

        const { name, email, age, mobile, work, add, desc } = input;
        console.log(`in chrome ip ${input}`);
        try {
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, work, add, mobile, desc, age
                })
            });

            console.log(`response in chrome ${res}`);

            const data = await res.json();
            console.log(data);
    
            if (res.status === 404 || !data) {
                alert("error");
                console.error(res.status);
            } else {
                alert("data added");
                console.log("data added");
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="container">
                <form>
                    <div className="row col-lg-12 container d-flex">
                        <div class="mb-3 col-lg-6">
                            <label for="Nameid" class="form-label">Name</label>
                            <input type="text" value={input.name} onChange={setdata} class="form-control" name="name" id="Nameid" />
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="Emailid" class="form-label">Email</label>
                            <input type="email" value={input.email} onChange={setdata} class="form-control" name="email" id="Emailid" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="Ageid" class="form-label">Age</label>
                            <input type="text" value={input.age} onChange={setdata} class="form-control" name="age" id="Ageid" />
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="Mobileid" class="form-label">Mobile</label>
                            <input type="number" value={input.mobile} onChange={setdata} class="form-control" name="mobile" id="Mobileid" />
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="Workid" class="form-label">Work</label>
                            <input type="text" value={input.work} onChange={setdata} class="form-control" name="work" id="Workid" />
                        </div>
                        <div class="mb-3 col-lg-6">
                            <label for="Adressid" class="form-label">Adress</label>
                            <input type="text" value={input.add} onChange={setdata} class="form-control" name="add" id="Adressid" />
                        </div>
                        <div class="mb-3col-lg-6">
                            <label for="Descriptionid" class="form-label">Description</label>
                            <textarea type="text" value={input.desc} onChange={setdata} class="form-control" name="desc" id="Descriptionid" cols="30" row="5" />
                        </div>
                        <button type="submit" class="btn btn-primary mt-3 p-2" onClick={addinpdata} >Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register
