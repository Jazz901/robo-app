import React, {useState, useEffect} from 'react'
import CardList from '../components/CardList'; 
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';




const App = () => {

    //for class component
    /*constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }*/

    const [robots, setRobots] = useState([]); 
    const [searchfield, setSearchField] = useState('');

    const fetchRobots = async() => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        setRobots(data)
    }

    // for class component
    /*componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(users => this.setState({robots: users}));          
    }*/

    useEffect(() => {
        fetchRobots()
    }, [])
     
    

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
     })

    return(
        <div>
            {
                robots.length === 0 ? <h1>Loading</h1> :
                 <div className="tc">
                    <h1 className="f1">Robo Friends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <CardList robots={ filteredRobots }/>
                    </Scroll>
                 </div>
            }
        </div>
    ); 

    // for class component
    /*render() {
        const { robots, searchfield} = this.state; 
        const filteredRobots = robots.filter(robot =>{
           return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if(!robots.length){
            return <h1>Loading</h1>
        } else{
            return(
                <div className="tc">
                    <h1 className="f1">Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={ filteredRobots }/>
                    </Scroll>
                </div>
                
            ); 

        }
       

    }*/
   
}   

export default App; 