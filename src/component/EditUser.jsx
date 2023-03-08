import { useState, useEffect} from "react";

import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";

import {useNavigate, useParams} from 'react-router-dom'

import { getUser, editUser } from "./service/api";

const Container = styled(FormGroup)`
width: 50%;
margin: 5% auto 0 auto;
& > div{
    margin-top: 20px
}
`
const initialValues = {
    nama: '',
    jalan: '',
    provinsi: '',
    kota: '',
    kecamatan: '',
    kelurahan: ''
}

const EditUser = () => {

    const [user, setUser] = useState(initialValues)
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() =>{
        getUserData();
    }, [])

    const getUserData = async () => {
        let response = await getUser(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    const addUserDetails = async () => {
        await editUser(user, id);
       navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="nama" value={user.nama}/>
            </FormControl>
            <FormControl>
                <InputLabel>Jalan</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="jalan" value={user.jalan}/>
            </FormControl>
            <FormControl>
                <InputLabel>Provinsi</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="provinsi" value={user.provinsi} />
            </FormControl>
            <FormControl>
                <InputLabel>Kota</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="kota" value={user.kota} />
            </FormControl>
            <FormControl>
                <InputLabel>Kecamatan</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="kecamatan" value={user.kecamatan} />
            </FormControl>
            <FormControl>
                <InputLabel>Kelurahan</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="kelurahan" value={user.kelurahan} />
            </FormControl>
            <Button onClick={() => addUserDetails()} variant="contained">Edit User</Button>
        </Container>
    )
}

export default EditUser;