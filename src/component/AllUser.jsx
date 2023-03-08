import { useEffect,useState } from "react";

import { Table, TableBody ,TableCell, TableHead, TableRow, styled, Button,Edit } from "@mui/material";
import { getUsers,deleteUser } from "./service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
width: 90%;
margin: 50px auto 0 auto;
`;

const Thead = styled(TableRow)`
    background: #000;
    & > th {
        color: #fff;
        font-size: 20px
    }
`;

const Tbody = styled(TableRow)`
& > td {
    font-size: 20px
    }
` ;


const AllUser = () => {

    const [users,setUsers] = useState([]);
  

    useEffect(() => {
            getUsersDetails(); 

    }, [])
            const getUsersDetails = async () => {
                let response = await getUsers();
                console.log(response);
                setUsers(response.data);
            }

    const deleteUserData = async (id) => {
        await deleteUser (id);
        getUsersDetails();
    }
    return (
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>ID</TableCell>
                    <TableCell>Nama</TableCell>
                    <TableCell>Jalan</TableCell>
                    <TableCell>Provinsi</TableCell>
                    <TableCell>Kota</TableCell>
                    <TableCell>Kecamatan</TableCell>
                    <TableCell>Kelurahan</TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                    <Tbody>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.nama}</TableCell>
                        <TableCell>{user.jalan}</TableCell>
                        <TableCell>{user.provinsi}</TableCell>
                        <TableCell>{user.kota}</TableCell>
                        <TableCell>{user.kecamatan}</TableCell>
                        <TableCell>{user.kelurahan}</TableCell>
                        <TableCell>
                        <Button  variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button>
                        <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${user.id}`}>Edit</Button> 
                        </TableCell>
                    </Tbody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUser;

