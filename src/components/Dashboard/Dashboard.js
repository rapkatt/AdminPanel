import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <h2 className="pb-3">Home page</h2>
                <table class="table table-bordered">

                    <tbody>
                        <tr>
                            <th scope="row">Student №</th>
                            <td>160104026</td>

                        </tr>
                        <tr>
                            <th scope="row">Name,Surname</th>
                            <td>Bektemir Kudaiberdiev</td>

                        </tr>
                        <tr>
                            <th scope="row">Father</th>
                            <td>Azzamkul</td>

                        </tr>

                        <tr>
                            <th scope="row">Birth Date</th>
                            <td>12.03.1998</td>

                        </tr>
                        <tr>
                            <th scope="row">Advisor</th>
                            <td>Burul Shambetova</td>

                        </tr>
                        <tr>
                            <th scope="row">Status</th>
                            <td>Studying</td>

                        </tr>
                        <tr>
                            <th scope="row">Email</th>
                            <td>kudajberdievbektemir@gmail.com</td>

                        </tr>
                       </tbody>
                </table>

            </div>
        )
    }
}

export default Dashboard
