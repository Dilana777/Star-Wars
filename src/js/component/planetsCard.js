import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsCard = props => {
	return (
		<div>
			<div className="card " style={{ width: "26rem", height: "25rem" }}>
				<img className="card-img-top" src={props.UrlImage} alt="Card image cap" height="150" />
				<div className="card-body">
					<h5 className="card-title">{props.population}</h5>
					<p className="card-text">{props.terrain}</p>
					<Link to="/planetprofile.js">
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

PlanetsCard.propTypes = {
	population: PropTypes.string,
	terrain: PropTypes.string,
	UrlImage: PropTypes.string
};
