import logo from './logo.svg'
// import './App.css'
// import CustomDatepicker from './CustomDatepicker'
import CustomSelect from './CustomSelect'
import CustomFormControl from './CustomFormControl'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomSelect />
        <CustomFormControl>
          <CustomSelect />{' '}
        </CustomFormControl>
      </header>
    </div>
  )
}

export default App
