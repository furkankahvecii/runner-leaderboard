import React, { Fragment } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Table from './components/Table';
import './App.css';


class App extends React.Component{
    constructor(props) {
        super(props) 
        
        this.state = {
            data : [],
            columns : [],
            direction : { // Provide sorting functionality based on average pace, distance, total time
                "average_pace": 'asc',
                "distance" : 'asc',
                'total_time' : 'asc',
            }
        }

        this.sortBy = this.sortBy.bind(this)
    }

    sortBy(key) {
        if(Object.keys(this.state.direction).some(each => {return each === key})){
            this.setState({
                data : this.state.data.sort((a,b) => 
                    this.state.direction[key] === "asc" ? a[key] - b[key] : b[key] - a[key]
                ),
                direction : {
                    ...this.state.direction,  [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
                }
            })
        } else {
            alert(`${key} cannot be sorted`)
        }
    }

    componentDidMount() { 
        axios.post(`http://localhost:4000/csvFileData`, { fileNames : ["users.csv" , "pace.csv"], token : "d174ee88-0cf3-41d2-b18f-1fd5f0b37919"})
        .then(res => {
          this.setState({ data : res.data.responseData, columns : res.data.columns});
          this.sortBy("average_pace"); // List all the runners based on their average pace as default.
        })
    }

    render() {
        return (
            <Fragment>
              <Header title="Herogi Interview &amp; Runner Leaderboard Table Component" />
              <Table 
                tableData={this.state.data}
                headingColumns={this.state.columns} // Provide sorting functionality based on average pace, distance, total time
                title="Users Pace Table"
                sortBy = {this.sortBy}
              />
            </Fragment>
          );
    }
}  

export default App