import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="slds">
    <Header />
    <div className="slds-p-around--large">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </div>
)

export default App
