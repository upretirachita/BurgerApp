import React,{Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner'
import axios from '../../../axiosOrder';

class ContactData extends Component{
    state = {
        name:'',
        email:'',
        address:{
            street:'',
            zipCode:'',
            country:''
        },
        loading:false
    }
    orderHandler = (event) => {
        event.preventDefault();
        //console.log("fromContacdata",this.props.ingredients);
        this.setState({loading:true})

         const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name:'Rachita Upreti',
                address:{
                    street:'Käkitie 8B 1',
                    zipCode:'01450',
                    city:'Vantaa'
                
               },
               email:'test@gmail.com',
               deliveryMethod:'Fastest'
            }
            }
            axios.post('/orders.json',order)
                .then(response=> {
                    this.setState({
                        loading:false
                        });
                    this.props.history.push('/');
                    })

                .catch(error=>{
                    this.setState({loading:false
                    });
             });
    }
    render(){
        let form = (
            <form>
                    <input className="Input" type="text" name="name" placeholder="Your Name"/>
                    <input className="Input" type="email" name="email" placeholder="Your Email"/>
                    <input className="Input" type="text" name="street" placeholder="Street"/>
                    <input className="Input" type="text" name="zipCode" placeholder="zipCode"/>
                    <input className="Input" type="text" name="city" placeholder="City"/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
        );
        if (this.state.loading){
            form = <Spinner />
        }
        return(
            <div className="ContactData">
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;