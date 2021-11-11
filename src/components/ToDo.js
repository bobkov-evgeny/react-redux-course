import React from "react";
import {del} from "../store";
import {connect} from "react-redux";

const ToDo = ({ item, deleteToDo }) => {
    return (
            <li>{item.text}<button onClick={deleteToDo}>delete</button></li>
    )
}


function mapDispatchToProps(dispatch, ownProps) {
    console.log(ownProps, 'sssss')
    return {
        deleteToDo: () => dispatch(del(ownProps.item.id))
    };
}

export default connect(null, mapDispatchToProps)(ToDo);