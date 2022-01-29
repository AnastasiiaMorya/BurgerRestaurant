import React from "react";
class AddBurgerForm extends React.Component{

    nameRef= React.createRef();
    priceRef= React.createRef();
    statusRef= React.createRef();
    descRef= React.createRef();
    imageRef= React.createRef();


  createBurger=(event)=> {
event.preventDefault();
const burger={
    name:this.nameRef.current.value,
    price:+(this.priceRef.current.value)||0,
    status:this.statusRef.current.value,
    desc:this.descRef.current.value,
    image:this.imageRef.current.value,


}
 this.props.addBurger(burger);
 event.currentTarger.reset();
    }
    render()
    {
        return(
<form  className="burger-edit" onSubmit={this.createBurger}>
    <input ref={this.nameRef} name='name' type="text" placeholder="Name" autoComplete="off"/>
    <input ref={this.priceRef} name='price' type="text" placeholder="Price" autoComplete="off"/>
    <select ref={this.statusRef} name="status" className="status">
        <option value="available">Є в наявності</option>
        <option value="unavailable">Видалити з меню</option>

    </select>
    
    <textarea ref={this.descRef} name='desc' type="text" placeholder="Desc"/>
    <input  ref={this.imageRef} name='image' type="text" placeholder="Image" autoComplete="off"/>



<button type="submit"> + Додати до меню</button>
</form>      
  )
    }
}
export default AddBurgerForm;