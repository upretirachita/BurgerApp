import React from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';





const OrderSummary = (props)=>{
    console.log("orderSummary",props)
     const ingredientsSummary = Object.keys(props.ingredients)
     .map(igkey=>{
         return (<li key={igkey}>
                <span style ={{textTransform:'capitalize'}}>{igkey}
                </span>:{props.ingredients[igkey]}
             </li>)
     })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout !!</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
}

export default OrderSummary ;