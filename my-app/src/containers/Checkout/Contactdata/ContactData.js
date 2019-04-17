import React,{Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner'
import axios from '../../../axiosOrder';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component{
    state = {
        orderForm: {
                name:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Your Name'
                    },
                    value:''
                    },
                street:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Street'
                    },
                    value:''
                    },
                zipCode:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'zipCode'
                    },
                    value:''
                    },
                city:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'City'
                    },
                    value:''
                    },
                email:{
                    elementType:'input',
                    elementConfig:{
                        type:'email',
                        placeholder:'Your Email'
                    },
                    value:''
                    },
                deliveryMethod:{
                    elementType:'select',
                    elementConfig:{
                        options: [
                            {value:'fastest', displayValue:'Fastest'},
                            {value:'cheapest', displayValue:'Cheapest'}
                        ]
                    },
                    value:''
                    }
        },
        loading:false
    }
    orderHandler = (event) => {
        event.preventDefault();
        //console.log("fromContacdata",this.props.ingredients);
        this.setState({loading:true});
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value ;
        }

         const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData 
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
    handleChange = (e , inputIdentifier) => {
        console.log("input from contact",e.target.value);
        const updateOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
           ...updateOrderForm[inputIdentifier]
        };
        updatedFormElement.value = e.target.value;
        updateOrderForm[inputIdentifier] = updatedFormElement ;
        this.setState({
            orderForm:updateOrderForm
        });
    }
    render(){
        const formElementArray = [];
        for (let key in this.state.orderForm){
            formElementArray.push({
                id:key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit = {this.orderHandler}>
                    {formElementArray.map(formElement =>(
                        <Input 
                        key = {formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig} 
                        value = {formElement.config.value} 
                        handleChange = {(e) => this.handleChange(e,formElement.id)}/>
                    ))}
                   <Button btnType="Success" >ORDER</Button>
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