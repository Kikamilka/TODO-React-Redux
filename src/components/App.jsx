import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import {PageHeader} from 'react-bootstrap';

const App = ({params}) => {
    return (
        <div>
            <div className="container">
                <PageHeader>
                    TODO List!
                </PageHeader>
                <AddTodo />
            </div>
            <VisibleTodoList
                filter={params.filter || 'all'}
            />
            <Footer />
        </div>
    );
};

export default App;