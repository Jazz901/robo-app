import React from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'; 
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField, requestRobots } from '../actions'


// to what state I have to listen to 
// states from the reducer
const mapStateToProps = state =>{
    return{
        searchField: state.searchRobots.searchField, 
        robots: state.requestRobots.robots, 
        isPending: state.requestRobots.isPending, 
        error: state.requestRobots.error
    }
}

// dispatch == what triggers the action 
const mapDispatchToProps = (dispatch) => {
    // setSearchField is from actions.js
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)), 
        onRequestRobots: () => dispatch(requestRobots())
    }
}


class App extends React.Component {

    //for class component -> do not need it -> currently using redux
    /*constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }*/

    
// for functional component
//const [robots, setRobots] = useState([]); 
//const [searchfield, setSearchField] = useState('');
/*const fetchRobots = async() => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    setRobots(data)
}*/

    // for class component
    componentDidMount(){
        /*fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(users => this.setState({robots: users})); */  
        this.props.onRequestRobots()      
    }

    // for functional component
    /*useEffect(() => {
        //fetchRobots()
        onRequestRobots()
    }, [])*/
     
    

  // for functional component
 /*const onSearchChange = (event) => {
     setSearchField(event.target.value)
 }*/
 /*const filteredRobots = robots.filter(robot =>{
     return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

 return(
     <div>
         {
             isPending ? <h1>Loading</h1> :
              <div className="tc">
                 <h1 className="f1">Robo Friends</h1>
                 <SearchBox searchChange={onSearchChange} />
                 <Scroll>
                     <CardList robots={ filteredRobots }/>
                 </Scroll>
              </div>
         }
     </div>
 ); */ 
    // for class component
    render() {
        const {searchField, onSearchChange, isPending, robots} = this.props
        const filteredRobots = robots.filter(robot =>{
           return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(isPending){
            return <h1>Loading</h1>
        } else{
            return(
                <div className="tc">
                    <h1 className="f1">Robo Friends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <CardList robots={ filteredRobots }/>
                    </Scroll>
                </div>
                
            ); 

        }
       

    }
   
}   
//(higher order function) connect(mapStateToProps, mapDispatchToProps) -> to what state and action I should listen to
export default connect(mapStateToProps, mapDispatchToProps)(App); 