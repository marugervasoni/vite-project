// CLASE 5-------------------------------------------------------------

// 

import './App.css'
import ChildComponent from './C4/mesa-trabajo-pg/Components/ChildComponent'

const App = () => {
  return (
    <div>
      {/* nombre como prop */}
      <ChildComponent nombre="Maria"/>
    </div>
  )
}

export default App
