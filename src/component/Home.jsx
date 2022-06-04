import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { adddata, deldata, updateData } from "./Context/ContextProvider";

const Home = () => {

    const [userData, setUserData] = useState([]);
    console.log(userData);

    const { udata, setUdata } = useContext(adddata);
    const { updata, setUPdata } = useContext(updateData);
    const { dltdata, setDLTdata } = useContext(deldata);

    const getdata = async (e) => {
        try {
            const res = await fetch("/getdata", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            console.log(`response in chrome ${res}`);

            const data = await res.json();
            console.log(data);

            if (res.status === 404 || !data) {
                console.error(res.status);
            } else {
                setUserData(data);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {
        const res2 = await fetch(`/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);
        if (res2.status === 404 || !deletedata) {
            console.log("error in delete");
        } else {
            console.log("user deleted successfully");
            setDLTdata(deletedata);
            getdata();
        }
    }

    return (
        <>
            {
                udata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{udata.name}</strong>  added succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }
            {
                updata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{updata.name}</strong>  updated succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }
            {
                dltdata ?
                    <>
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{dltdata.name}</strong>  deleted succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }


            <div className="mt-5 container">
                <div className="add_btn mt-2">
                    <NavLink to="/Register"><button className="btn btn-primary mb-2">+Add Data</button></NavLink>

                    <table class="table">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Work</th>
                                <th scope="col">Number</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.name}</td>
                                                <td>{element.email}</td>
                                                <td>{element.work}</td>
                                                <td>{element.mobile}</td>
                                                <td className="d-flex justify-text-between justify-content-between">
                                                    <NavLink to={`view/${element._id}`}><button className="btn btn-success"><i class="icon-eye-open"></i>Update</button></NavLink>
                                                    <NavLink to={`Edit/${element._id}`}><button className="btn btn-primary"><i class="icon-edit"></i>Edit</button></NavLink>
                                                    <button className="btn btn-danger"><i class="icon-trash" onClick={() => deleteuser(element._id)} ></i>Delete</button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}


export default Home;