import React from 'react'
import { Table } from 'reactstrap'
import {formFields} from "../../fake-data/index"
export default class FormTable extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
          {formFields.map((field, index) => (
            <th key={index}>{field.label}</th>
          ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}
