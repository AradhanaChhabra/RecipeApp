import style from './recipe.module.css'

export default function Recipe(props) {
    return (
        <div  className={style.recipe}>
            <h1>{props.title}</h1>
            <ol>{props.ingredients.map(ingredient => (

                <li key={Math.random()*100}>{ingredient.text}</li>
            )
            )}</ol>
            <p>{props.calories}</p>
            <img className={style.image} src={props.image} alt=""/>
        </div>
    );
}