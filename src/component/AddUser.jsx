import { useState } from "react";

import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";

import {useNavigate} from 'react-router-dom'

import { addUser } from "./service/api";

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

const AddUser = () => {

    const [user, setUser] = useState(initialValues)
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="nama" />
            </FormControl>
            <FormControl>
                <InputLabel>Jalan</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="jalan" />
            </FormControl>
            <FormControl>
                <InputLabel>Provinsi</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="provinsi" />
            </FormControl>
            <FormControl>
                <InputLabel>Kota</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="kota" />
            </FormControl>
            <FormControl>
                <InputLabel>Kecamatan</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="kecamatan" />
            </FormControl>
            <FormControl>
                <InputLabel>Kelurahan</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="kelurahan" />
            </FormControl>
            <Button onClick={() => addUserDetails()} variant="contained">Add User</Button>
        </Container>
    )
}

export default AddUser;