import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Edit = (props) => {

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
        console.log(e.target.value);
        const { name, value } = e.target;
        setval((prevdata) => {
            return {
                ...prevdata,
                [name]: value
            }
        })
    }

    const {id}= useParams("");
    console.log(id);

    const getdata= async ()=>{
        const res = await fetch(`/getuser/${id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if(res.status === 404 || !data){
            console.log("error");
        }else{
            setval(data);
            console.log("get data");
        }
    }

    useEffect(()=>{
        getdata();
    },[])

    const updateuser = async (e) =>{
        e.preventDefault();

        const {name,email,work,add,mobile,desc,age} = input;

        const userres= await fetch(`/updateuser/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,work,add,mobile,desc,age
            })
        });

        const userdata = await userres.json();
        console.log(userdata);

        if(userres.status === 404 || !userdata){
            alert("fill the data correctly");
        }else{
            setval(userdata);
            alert("data updated successfully");
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
                            <input type="number" value={input.age} onChange={setdata} class="form-control" name="age" id="Ageid" />
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
                        <button type="submit" onClick={updateuser} class="btn btn-primary mt-3 p-2">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Edit
