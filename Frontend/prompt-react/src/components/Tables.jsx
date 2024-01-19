import React, { Component } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
class Tables extends Component {
    tables = [["Name","Title","Status","Position","Action"],["Name","Title","Status","Position","Action"],["Name","Title","Status","Position","Action"]];

    render() { 
        return (
            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Position</th>
                    <th scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {this.tables.map(table =>(
                        <tr>
                            <td>
                                <div className='d-flex align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                    alt=''
                                    style={{ width: '45px', height: '45px' }}
                                    className='rounded-circle'
                                />
                                <div className='ms-3'>
                                    <p className='fw-bold mb-1'>{table[0]}</p>
                                    <p className='text-muted mb-0'>{table[0]}</p>
                                </div>
                                </div>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>{table[1]}</p>
                                <p className='text-muted mb-0'>{table[1]}</p>
                            </td>
                            <td>
                                <MDBBadge color='success' pill>
                                {table[2]}
                                </MDBBadge>
                            </td>
                            <td>{table[3]}</td>
                            <td>
                                <MDBBtn color='link' rounded size='sm' >
                                {table[4]}
                                </MDBBtn>
                            </td>
                        </tr>
                    ))}
                   
                
                </MDBTableBody>
            </MDBTable>
        );
    }
}
 
export default Tables;