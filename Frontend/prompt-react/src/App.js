import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import Tables from './components/Tables'
import Table from './components/Table'
import api from './api/api'
import React, { Component , useState, useRef} from 'react';
function App() {

  const [tables,setTables] = useState([]);
  const [isShow,setShow] = useState(false);

  // useEffect(() =>{
  //     fetchTables();
  // });

  const fetchTables = async () =>{
      // const tables_r = [["Name","Title","Status","Position","Action"],["Name","Title","Status","Position","Action"],["Name","Title","Status","Position","Action"]];
      // setTables(tables_r)
      console.log(ref.current.value);
      const prompt = ref.current.value;

      const response = await api.get('/ranks?prompt='+prompt);
      console.log(response.data);
      setTables(response.data)
      setShow(true)
  }

  // const renderTable = () =>{
  //   fetchTables()
  //   return 
  // }

  const ref = useRef(null);
  return (
    // <div className="App">
    //   <div class="mb-3">
    //     <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
    //     <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" ></textarea>
    //   </div>
      // {/* <button type="button" className="btn btn-primary" onClick={this.ShowAlert}>Primary</button> */}
    // </div>
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Input Prompt</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="7"  ref={ref}/>
      </div>
      <button type="button" className="btn btn-primary" onClick={fetchTables}>Rank Prompt</button> 
      {isShow && <Tables tables= {tables}/>}
    </div>

  );
}




export default App;
