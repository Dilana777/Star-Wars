import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = props => {
	return (
		<div>
			<div className="card " style={{ width: "26rem", height: "25rem" }}>
				<img className="card-img-top" src={rigoImage} alt="Card image cap" height="150" />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">Gender: {props.gender}</p>
					<p className="card-text">Hair color: {props.hair}</p>
					<p className="card-text">Eye color: {props.eye}</p>

					<Link to={"/personprofile/" + props.id}>
						<button className="btn btn-primary">Back home</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	gender: PropTypes.string,
	hair: PropTypes.string,
	eye: PropTypes.string
};
