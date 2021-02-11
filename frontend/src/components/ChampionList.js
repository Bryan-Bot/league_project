import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';

function ChampionList(){

    const [champions, setChampions] = useState([])


    useEffect(() => {
        fetch('http://localhost:3000/champions')
            .then(response => response.json())
            .then(data => setChampions(data));
    }, [])

    

    const champ = champions.map((key)=>
        <div className="col-3" key={key.id}>
            <img src={key.image} alt={key.name} height='100px' />
            <br />
            <p>{key.name}</p>
            <i class="far fa-bookmark"></i>
        </div>)

    return(
        <div className="container-fluid">
            <div class="row flex-row flex-nowrap">
                {champ}
            </div>
        </div>
    )
}
 
export default ChampionList