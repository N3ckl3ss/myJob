import React from "react"

class Table extends React.Component{

    render(){
        const hasTerm = this.props.term === "" ? "" : 
        <tr>{this.props.term}</tr>
        return(
            <table>
            <th>
                {hasTerm}
            </th>
            </table>
        )
    }
}

export default Table