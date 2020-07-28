import React from 'react'
import Footer from './Footer'
import Table from './Table/Table'

class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            term: "",
            search: "",
            requier: false
        
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
    
    render(){
        return(
        <main>
        <form className="searchAndInput">
            <input 
            type="text"
            name="term"
            placeholder="New Job Name"
            value={this.state.term}
            onChange={this.handleChange}
            />
            <button>Add</button>
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
            <Table {...this.state}/>
            <Footer/>
        </main>
        )
    }
}

export default Main