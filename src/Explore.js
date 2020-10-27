import React from 'react';



const Explore = () => {
	return(
		<section className= "main container-fluid ">
			<div className= "row">
				<p className= "titletxt" style= {{
					marginTop: "150px", 
					color: "white", 
					textShadow: "2px 2px 2px black"
				}}> Welcome To <span> Grandma's </span> </p>
			</div>
			<div className= "row">
				<button className= "blackbtn" style= {{
					width: "150px",
					height: "60px",
					fontSize: "25px",
					marginLeft: "auto",
					marginRight: "auto",
					borderWidth: "3px"
				}}> EXPLORE </button>
			</div>
		</section>
		)
}


export default Explore;