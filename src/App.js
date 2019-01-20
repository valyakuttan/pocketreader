import React, { Component } from 'react';
import logo from './logo.png';
import { Table } from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    async componentDidMount() {
        const url = 'https://ghibliapi.herokuapp.com/films';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            this.setState({ data: json });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { data } = this.state;
        const rows = data.map((row, index) => {
            return (
                <tr key={index}>
                  <td>{row.title}</td>
                  <td>{row.description.substring(0, 150)}</td>
                </tr>
            );
        });
        return (
            <div>
              <Table>
                <thead>
                  <tr key="-1">
                    <td>Title</td>
                    <td>Description</td>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
            </div>
        );
    }
}

export default App;
