import React , {Component} from "react";
import items from './data';
const RoomContext = React.createContext();

// <RoomContext.provider value ={'hello'}

export default  class RoomProvider extends Component {
    state = {
        rooms : [],
        sortedRooms : [],
        featuredRooms : [],
        loading : true
    };

    // get Data 

    componentDidMount() {
        let  rooms = this.formaData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms : rooms,
            loading : false   
        })
    }
    formaData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let   room = {...item.fields,images};
            return room;
        });
    }
    render(){
        return(
            <RoomContext.Provider value={{ ...this.state } }>
    
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;
export {RoomProvider , RoomContext,RoomConsumer};