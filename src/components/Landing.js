import React from "react";
import restaurants from '../sample-restaurants';

class Landing extends React.Component{
    constructor(props)
    {
        super(props);
        
       this.state={
            display:false,
            title:'',
            url:''
        };
        this.displayList=this.displayList.bind(this);
        this.getTitle=this.getTitle.bind(this);
        this.goToRestauran=this.goToRestauran.bind(this);


    }
   
    displayList()
    {
        const {display}=this.state;
        this.setState({display: !display})
    }
    getTitle(restauran)
    {
        const{title, url}=restauran;
        this.setState({title:title, url:url, display:false})

    }
    goToRestauran(){
        const {url}= this.state;
        this.props.history.push(`/restaurant/${url}`)

    }
    render()
    {
        return(
        <div className="restaurant_select">
            <div className="restaurant_select_top">
                <div  onClick={this.displayList} className="restaurant_select_top-header font-effect-outline">
                    {this.state.title?this.state.title:"Обери ресторан"}</div>
                <div className="arrow_picker"></div>
                <div className="arrow_picker-up"></div>
                <div className="arrow_picker-down"></div>

                </div>
               
               {this.state.display ? (<div className="restaurant_select_bottom">
                    <ul>
                        {restaurants.map((restauran)=>{
                           return <li onClick={()=>this.getTitle(restauran)} key={restauran.id}>{restauran.title}</li>
                        })}
                    </ul>
                </div>):null}
                {this.state.title&&!this.state.display?<button onClick={this.goToRestauran}>Перейти до ресторану</button>:null}
            </div>
        );
    }
}
export default Landing;