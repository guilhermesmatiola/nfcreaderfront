import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import Home from "../home/Home";
import UserContext from "../context/UserContext";
import url from "../services/urls";
import { useNavigate } from "react-router-dom";

export default function Main() {
	
	const { userInformation } = useContext(UserContext);
	const navigate = useNavigate();

	if(!userInformation.token){
		navigate("/signin")
	  }

	let config = {
		headers: {
			Authorization: `Bearer ${userInformation.token}`,
		},
	};

	useEffect(() => {
    
		const request = axios.get(url.teste, config);
	
		request.then(response => {
		  console.log("foi")
		});
	
		request.catch(error => {
		  console.log(error);
		});
	  }, []);

	return (
		<Home>
			<h1>teste</h1>
		</Home>
	);
}
