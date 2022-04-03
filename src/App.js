import React, {useState} from 'react'

import MindNode from 'react-nodemap'
import sample from "./sample.json";

import 'react-nodemap/dist/index.css'

function App(){
  const [data, setData] = useState(sample)

  return (
    <div>
      <MindNode 
        value={data} 
        onDataChange={(value) => setData(value)} 
        fields="keepAll" 
      />
    </div>
  )
}

export default App
