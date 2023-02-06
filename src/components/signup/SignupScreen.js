import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Home from "../home/Home";
import url from "../services/urls";
import FormsSignup from "./FormsSignup";

export default function SignupScreen() {
	const navigate = useNavigate();
	const [singupDataInput, setSingupDataInput] = useState({
		name: "",
		email: "",
		password: "",
		passwordRef: "",
	});

	function handleFormChange(e) {
		let data = { ...singupDataInput };
		data[e.target.name] = e.target.value;
		setSingupDataInput(data);
	}

	async function singup(e) {
		e.preventDefault();

		await axios
			.post(url.signup, singupDataInput)
			.then(() => {
				alert("Cadastro efetuado com sucesso!");
				navigate("/signin");
			})
			.catch((err) => {
				if (err.response.status === 409) {
					alert("Usuário já registrado!");
				} else {
					alert(err.response.data);
				}
			});
	}

	return (
		<Home>
			<FormsSignup
				singupDataInput={singupDataInput}
				handleFormChange={handleFormChange}
				singup={singup}
			/>
		</Home>
	);
}
