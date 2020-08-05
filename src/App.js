import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      employees: []
    }
  }
  
  componentDidMount(){
    this.getEmpDetails();
  }

  getEmpDetails=()=>{
    Axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then(response =>{
      this.setState({employees:response.data.data})
      console.log(response.data.data)
    }).catch(error=>{
      console.log(error)
    })
  }

  render() { 
    return ( 
      <div>
        <h2>Employee details</h2>
        <table border="2">
          <thead>
            <tr>
              <th>EmpId</th>
              <th>EmpName</th>
              <th>Age</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
          {this.state.employees.map(function (item, key) {

            return (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.employee_name}</td>
                <td>{item.employee_salary}</td>
                <td>{item.employee_age}</td>
              </tr>
            )

          })
          }
        </tbody>
        </table>
      </div>
     );
  }
}
 
export default App;