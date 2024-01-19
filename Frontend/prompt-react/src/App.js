import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import Tables from './components/Tables'
import Table from './components/Table'

function App() {

  return (
    // <div className="App">
    //   <div class="mb-3">
    //     <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
    //     <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" ></textarea>
    //   </div>
    //   {/* <button type="button" className="btn btn-primary" onClick={this.ShowAlert}>Primary</button> */}
    // </div>
    <div>
      <Table />
      <Tables />
    </div>

  );
}




export default App;
