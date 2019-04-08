import React,{Component} from 'react';
import Aux from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICE ={
    salad:0.5,
    bacon:1,
    cheese:0.4,
    meat:1.6
}

class BurgerBuilder  extends Component{
    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0
        },
        totalPrice : 5,
        purchasable:false
        }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
        .map(igkey=>{
            return ingredients[igkey];
        })
        .reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({
            purchasable:sum>0
        });
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAdded = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdded ;
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients)
    }
    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return 
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceReduced = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduced ;
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients)
    }
render (){  
    const disableInfo = {
        ...this.state.ingredients
    };
    for ( let key in disableInfo){
        disableInfo[key] = disableInfo[key] <= 0
    }
//{salad:true, meat:false /true and so on}
    return (
        <Aux>
            <Burger 
            ingredients ={this.state.ingredients}/>
            
                <BuildControls 
                ingredientsAdded ={this.addIngredientHandler}
                ingredientsReduced ={this.removeIngredientHandler}
                disabled={disableInfo}
                price = {this.state.totalPrice}
                purchasable ={this.state.purchasable}/>
            
        </Aux>
    
    );
}
}


export default BurgerBuilder;