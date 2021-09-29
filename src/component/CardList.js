
import Card from './Card'

const CardList = ( {robot} ) => {
	
	const cardsComponent = robot.map((user, i) => {
		return <Card key ={i} id={robot[i].id} name={robot[i].name} email={robot[i].email} />
	})
	return (
	 	<div>
	    	{cardsComponent}
	  	</div>
	);
}

export default CardList;