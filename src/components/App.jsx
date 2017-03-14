import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

// class App extends React.Component {
//
// }
const App = ({params}) => {
    return (
        <div>
            <div className="container">
                <FormGroup bsSize="large">
                    <ControlLabel bsClass="control-label_title">
                        TODO List!
                    </ControlLabel>
                    <AddTodo />

                    <VisibleTodoList
                        filter={params.filter || 'all'}
                    />
                </FormGroup>
            </div>
            <Footer />
        </div>
    );
};

export default App;