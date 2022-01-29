import React from "react";
class Burger extends React.Component{

   
    render()
    {
        const  {image, name,desc, price, status}=this.props.details;
        const isAvailable=status==='available'
        return(
                <li className="menu-burger">
                    <div className="image-container">
                        <img src={image} alt={name} />
                    </div>
                    <div className="burger-details">
                        <h3> {name}
                        <span className="price"> {price} ₴ </span>
                        </h3>
                        <p>{desc}</p>
                        <button  className="buttonOrder" disabled={!isAvailable}>
                            { isAvailable? 'Замовити':'Тимчасово відсутній' }
                            </button>
                    </div>

                </li>
            )
        }
}
export default Burger;