import React from 'react';
import Sweets from './img/sweets-1.jpeg';



const Whitebox = () => {
	return(
			<section className= "Whitebox d-flex mx-auto align-items-center">
				<div className= "container">
					<div className= "row">
						<div className= "col-10 col-md-6 wbdis my-5">
							<p className= "titletxt" style= {{color: "black"}}> About <span> Us </span> </p>
							<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis porro at dolorum! Ad! </p>
							<button> EXPLORE </button>
						</div>
						<div className= "col-10 col-md-6 mx-auto align-self-center my-5">
							<div className= "wdphoto">
								<img className= "img-fluid" src= {Sweets} />
							</div>
						</div>
					</div>
				</div>
			</section>
		)
}


export default Whitebox;