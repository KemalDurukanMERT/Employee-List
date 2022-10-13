import {data} from '../data';
import Objects from '../Objects/objects';


const Lists = () => {
        return (
            <div className="list">
                {data.map((item) => <Objects {...item} key={item.id}/>)}
            </div>
    
        ) 
    }
    


export default Lists