import React from 'react'
import Footer from './Footer'
import Table from './Table/Table'

class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            term: "",
            search: "",
            requier: false,
            tableContent: [{
                id:"",
                name:"",
                requiers: false
            }]
               
           
        }
    }

    handleChange =(event) =>{
        const { name,value, type, checked} =event.target 
        type === "checkbox" ? this.setState({
                  [name]: checked   
          }) 
        :
        this.setState({
            [name]: value
          })

    }
    handelClikc =(event)=>{
        this.setState({
            tableContent:{
                name : this.state.term,
                requires: this.state.requier
            }
        })
        console.log(this.state.tableContent)        
    }

    handleSubmit = (event) =>{
        event.preventDefault()

    }
    render(){
        return(
        <main>
        <form className="searchAndInput" onSubmit={this.handleSubmit}>
            <input 
            type="text"
            name="term"
            placeholder="New Job Name"
            value={this.state.term}
            onChange={this.handleChange}
            />
            <button onClick={this.handelClikc}>Add</button>
        <br/>
            <input 
            type="text"
            name="search"
            placeholder="Search"
            value={this.state.search}
            onChange={this.handleChange}
            />
            <button>Search</button>
        <br/>
            <label>
                <input 
                name="requier"
                type="checkbox"
                value={this.state.requier}
                onChange={this.handleChange}
                />
                    Requiers test project
            </label>
        </form>
            <Table {...this.state.tableContent}/>
            <Footer/>
        </main>
        )
    }
}

export default Main