
function Recipes({recipes}) {
    const IntegWriter = ({integ}) => {
        return <li key={integ}>{integ}</li>
    }
    const RecipeWriter = ({recipe}) => {
        return <div>
            <h2> {recipe.name} </h2>
            <ul>
                {recipe.ingredients.map((integ) => <IntegWriter integ={integ} key = {integ}/>)}
            </ul>
        </div>
    }
    return recipes.map((recipe) => <RecipeWriter recipe = {recipe} key = {recipe.id}/>)
    console.log(recipes)
    console.log(Array.isArray(recipes))
    return <div></div>
}

export default Recipes;