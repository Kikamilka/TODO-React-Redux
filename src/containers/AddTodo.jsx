import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/actions';
import {Grid, Col, Button} from 'react-bootstrap';

let AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(input.value));
                    input.value = ''
                }}>
                <Grid>
                    <Col xs={4} md={4}>
                        <input
                            style={{'width': '100%', 'fontSize': '16px'}}
                            ref={node => {
                                input = node
                            }}/>
                    </Col>
                    <Col xs={2} md={2}>
                        <Button
                            type="submit">
                            Add Todo
                        </Button>
                    </Col>
                </Grid>
            </form>
        </div>
    )
};
AddTodo = connect()(AddTodo);

export default AddTodo;