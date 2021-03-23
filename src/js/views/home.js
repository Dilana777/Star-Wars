import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { PlanetsCard } from "../component/planetsCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getPlanets();
	});
	return (
		<div className="container-fluid ">
			<div className="scrollmenu">
				<div className="row text-center">
					<div className="col-sm-3.5" style={{ margin: "3rem 1rem 1rem 1rem" }}>
						<Card />
					</div>

					<div className="col-sm-3.5" style={{ margin: "3rem 1rem 1rem 1rem" }}>
						<Card />
					</div>
					<div className="col-sm-3.5" style={{ margin: "3rem 1rem 1rem 1rem" }}>
						<Card />
					</div>
					<div className="col-sm-3.5" style={{ margin: "3rem 1rem 1rem 1rem" }}>
						<Card />
					</div>
					<div className="col-sm-3.5" style={{ margin: "3rem 1rem 1rem 1rem" }}>
						<Card />
					</div>
				</div>
			</div>
			<div className="scrollmenu" style={{ marginTop: "70px" }}>
				<div className="row text-center">
					<div className="col-sm-3.5" style={{ margin: "3rem 1rem" }}>
						<PlanetsCard />
					</div>

					<div className="col-sm-3.5" style={{ margin: "3rem 1rem" }}>
						<PlanetsCard />
					</div>
					<div className="col-sm-3.5" style={{ margin: "3rem 1rem" }}>
						<PlanetsCard />
					</div>
				</div>
			</div>
		</div>
	);
};
