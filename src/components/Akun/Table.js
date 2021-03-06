import React from 'react'
import { Table } from 'react-bootstrap'
import { dateFormat } from './dateFormat'

//------------------------------------------------------------------------------

const Tabel = ({ akuns, handleEdit, handleDelete }) => {

    return (

        <Table striped bordered hover>

            <thead>

                <tr>
                    <th>#</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Join_Date</th>
                    <th>Phone</th>
                    <th>Aksi</th>
                </tr>

            </thead>

            <tbody>

                {akuns.map((akun, index) => {

                    return (

                        <tr key={index}>

                            <td>{index + 1}</td>
                            <td>{akun.name}</td>
                            <td>{akun.email}</td>
                            <td>{akun.address}</td>
                            <td>{dateFormat(akun.join_date)}</td>
                            <td>{akun.phone}</td>

                            <td>

                                {((localStorage.getItem('accessToken'))) ?

                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(akun.id)}
                                    >
                                        Hapus

                                    </button>

                                    : <p>Unauthorized</p>}


                            </td>

                        </tr>
                    )

                })}

            </tbody>

        </Table>

    )
}

export default Tabel