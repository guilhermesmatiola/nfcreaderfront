import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Home from "../home/Home";
import UserContext from "../context/UserContext";
import url from "../services/urls";

export default function LoginScreen() {
	const [loginDataInput, setLoginDataInput] = useState({
		email: "",
		password: "",
	});
	const { setUserInformation } = useContext(UserContext);
	const navigate = useNavigate();

	function handleFormChange(e) {
		let loginData = { ...loginDataInput };
		loginData[e.target.name] = e.target.value;
		setLoginDataInput(loginData);
	}

	async function login(e) {
		e.preventDefault();

		await axios
			.post(url.signin, loginDataInput)
			.then((response) => {
				setUserInformation(response.data);
				navigate("/main");
			})
			.catch((err) => {
				if (err.response.status === 401) {
					alert("Login/senha inválidos!");
				} else {
					alert(err.response.data);
				}
			});
	}

	return (
		<Home>
			<Forms onSubmit={login}>
				<input
					type="email"
					name="email"
					placeholder="E-mail"
					onChange={(e) => handleFormChange(e)}
					value={loginDataInput.email}
					required
				/>
				<input
					type="password"
					name="password"
					placeholder="Senha"
					onChange={(e) => handleFormChange(e)}
					value={loginDataInput.password}
					required
				/>
				<Button type="submit">Entrar</Button>
			</Forms>
		</Home>
	);
}

const Forms = styled.form`
	display: flex;
	flex-direction: column;
	margin: 30px 0 0 0;
	width: 100%;

	input[type="email"],
	input[type="password"] {
		border: 1px solid rgba(120, 177, 89, 0.25);
		box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
		border-radius: 12px;
		width: 100%;
		height: 55px;
		margin-top: 25px;
		padding: 0 0 0 10px;

		::placeholder {
			font-size: 14px;
			color: #9c9c9c;
		}
	}
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 180px;
	height: 45px;
	margin: 25px auto 0 auto;
	background: #5d9040;
	border-radius: 12px;
	color: white;
	font-size: 20px;
	border: none;
`;
