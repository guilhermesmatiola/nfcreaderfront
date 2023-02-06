import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import logo from "../../assets/images/logo-tradicional.png"
import UserContext from "../context/UserContext";

export default function TopBar() {
	const navigate = useNavigate();
	const { userInformation, setUserInformation } = useContext(UserContext);

	function goToSignup() {
		navigate("/");
	}

	function goToSignin() {
		navigate("/signin");
	}

	function goToRanking() {
		navigate("/ranking");
	}

	function goToMain() {
		navigate("/main");
	}

	function logout() {
		setUserInformation(null);
		navigate("/");
	}

	return (
		<Top>
		<img src={logo} ></img>
			{userInformation ? (
				<>
				
					<Box>
						<div onClick={goToMain}>Home</div>
						<div onClick={goToRanking}>Ranking</div>
						<div onClick={logout}>Sair</div>
						
					</Box>
				</>
			) : (
				<Box>
					<div onClick={goToSignin}>Entrar</div>
					<div onClick={goToSignup}>Cadastrar-se</div>
				</Box>
			)}
		</Top>
	);
}
const Top = styled.div`
	display: flex;
	justify-content: center;
	img{
		height: 100px;
	}
`

const Box = styled.span`
	display: flex;
	justify-content: right;
	margin: 60px 60px 0 0;

	div {
		margin-left: 20px;
		font-size: 14px;
		color: #4D88D7;
		font-weight: 400;
		font-weight: bold;
	}
`;

const HelloBox = styled.div`
	display: flex;
	justify-content: left;
	margin-left: 60px;
	color: #4D88D7;

	div {
		font-size: 14px;
		color: #4D88D7;
		font-weight: 400;
	}
`;
