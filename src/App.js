import React from 'react'
import ShowName from './showName'


function App() {

  const [fName, setFirstName] = React.useState('')
  const [lName, updateLastName] = React.useState('')
  const [age, setAge] = React.useState()

  const handleUpdateFirstName = (e) => {
      setFirstName(e.target.value)    
  }

  const HandleUpdateLastName = (e) => {
    updateLastName(e.target.value)
  }

  const handleUpdateAge = (e) => {
    setAge(e.target.value)
  }

  const handleSubmit = () => {
    if(age < 25 || age > 100){
      alert('Please enter Valid Age')
    }
  }

  return (
    <div >
      <p>First Name:<input required type="text" value={fName} onChange={handleUpdateFirstName} /></p>
      <p>Last Name:<input type="text" value={lName} onChange={HandleUpdateLastName} /></p>
      Age: <input type="text" value={age} onChange={handleUpdateAge} />
      <select>
        <option>1</option>
        <option>2</option>
      </select>

      {/* <p>{`Your name is: ${fName} ${lName}`}</p> */}

      <button onClick={handleSubmit}>Submit</button>

      <ShowName fName={fName} lName={lName}/>
     
    </div>
  );
}

export default App;
