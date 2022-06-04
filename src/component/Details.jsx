import React, { useContext, useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import profile from './images/profile.png'
import ModeEditSharpIcon from '@mui/icons-material/ModeEditSharp';
import BadgeIcon from '@mui/icons-material/Badge';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useParams, NavLink } from 'react-router-dom';

const Details = () => {

  const [getuserdata, setUserData] = useState([]);
  console.log(getuserdata);

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {
    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setUserData(data);
      console.log("get data");
    }
  }

  useEffect(() => {
    getdata();
  }, [])


  return (
    <div className='container'>
      <Card sx={{ minWidth: 275 }} className="bg bg-dark">
        <CardContent>
          <div className="row text-light">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img src={profile} style={{ width: 50 }} alt="profile" />
              <h3 className="mt-3"><BadgeIcon />Name:<span >{getuserdata.name} </span></h3>
              <h3 className="mt-3"><ArrowForwardIosIcon />Age: <span >{getuserdata.age}</span></h3>
              <p className="mt-3"><MailOutlineIcon />Email: <span>{getuserdata.email} </span></p>
              <p className="mt-3"><WorkIcon />Occuption: <span>{getuserdata.work}</span></p>
            </div>
            <div className="right_view  col-lg-6 col-md-6 col-12">

              <p className="mt-5"><PhoneAndroidIcon />mobile: <span>{getuserdata.mobile} </span></p>
              <p className="mt-3"><EditLocationAltIcon />location: <span> {getuserdata.add}</span></p>
              <p className="mt-3">Description: <span>{getuserdata.desc}</span></p>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <NavLink to={`/edit/${getuserdata._id}`}> <Button className='bg bg-warning' size="small"><ModeEditSharpIcon />Edit</Button></NavLink>
        </CardActions>
      </Card>
    </div>
  )
}

export default Details