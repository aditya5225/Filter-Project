import React from 'react';



const Card = (props) => {

	return(
			<div id= {props.id} className= {`all col-10 col-sm-6 col-lg-4 mb-4 mx-auto ${props.item}`}>
				<div className="card">
					<div className="img-container">
						<img className="card-img-top store-img" src= {props.img} alt="Card image cap" />
						<span className= "store-item-icon">
							<svg width="18px" height="18px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
							</svg>
						</span>
					</div>
				  	<div className="card-body">
				  		<h5 className="card-title">{props.title}</h5>
				  		<h5 className="card-cost"><strong> {props.cost} </strong> </h5>
				  	</div>
				</div>
			</div>
		)
}


export default Card;