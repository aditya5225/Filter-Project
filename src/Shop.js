import React from 'react';
import Card from './Card'
import Data from './Data';


	

const Hide = () => {
	let all_element= document.getElementsByClassName('all');

		for(let i=0; i <= all_element.length - 1; i++)
			{
				all_element[i].style.display= "none";
			}
	}



const Filter = (e) => {

	let element= [];
	Hide();

	const Show = () => {
	for(let i=0; i <= element.length - 1; i++)
		{
			element[i].style.display= "block";
		}
}

	element= document.getElementsByClassName(e.target.id);
	Show();
}



const Search = (e) => {

	let number= 0;

	Hide();

	Data.map((val) => {

		let result= val.title.search(new RegExp(e.target.value.replace(/^\s+|\s+$/gm,''), "i"));
		console.log(e.target.value);
		if(result >= 0)
		{
			console.log(val.id + " "+ result + " " + val.item);
			document.getElementById(val.id).style.display= "block";
		}
	})
}



const Shop = () => {

	const NewData= [];


	const Carddata = (value, index) => {


		const random = () => {
			let num= 0;

			let ran= Math.floor(Math.random() * Data.length);

			NewData.map(val => val == ran ? num++ : null)

			return num > 0 ? random() : NewData[index]= ran;
		}

		random();

		return(
			<Card 
			key= {Data[NewData[index]].id}
			id= {Data[NewData[index]].id}
			img= {Data[NewData[index]].img}
			title= {Data[NewData[index]].title}
			cost= {Data[NewData[index]].cost}
			item= {Data[NewData[index]].item}
			/>
			)
	}


	return(
			<div className= "shop container">
				<div className= "row">
					<p className= "titletxt"> Our <span> Store </span> </p>

					<div>
						<button id= "all" onClick= {Filter} className= "blackbtn mr-5 mb-3"> ALL </button>
						<button id= "CAKES" onClick= {Filter} className= "blackbtn mr-5 mb-3"> CAKES </button>
						<button id= "CUPCAKES" onClick= {Filter} className= "blackbtn mr-5 mb-3"> CUPCAKES </button>
						<button id= "SWEETS" onClick= {Filter} className= "blackbtn mr-5 mb-3"> SWEETS </button>
						<button id= "DOUGHNUTS" onClick= {Filter} className= "blackbtn mr-5  mb-5"> DOUGHNUTS </button>
					</div>
				</div>	

				<div className= "row">
					<div className= "col-10 mx-auto col-md-6">
						<form className="search_bar">
							<div className= "input-group mb-3">
								<button>
									<span>
										<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
											<path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
										</svg>
									</span>
								</button>
								<input onChange= {Search} className="form-control mr-sm-2 mb-5" type="search" placeholder="Search" aria-label="Search" />
							</div>
						</form>
					</div>
				</div>				

				<div className= "row">
					{Data.map(Carddata)}
				</div>
			
			</div>
		)
}


export default Shop;