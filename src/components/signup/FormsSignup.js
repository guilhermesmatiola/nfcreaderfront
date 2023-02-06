import styled from "styled-components";

export default function FormsSignup({
	singupDataInput,
	handleFormChange,
	singup,
}) {
	return (
		<>
			<Forms onSubmit={singup}>
				<input
					type="text"
					name="name"
					placeholder="Nome"
					onChange={(e) => handleFormChange(e)}
					value={singupDataInput.name}
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="E-mail"
					onChange={(e) => handleFormChange(e)}
					value={singupDataInput.email}
					required
				/>
				<input
					type="password"
					name="password"
					placeholder="Senha"
					onChange={(e) => handleFormChange(e)}
					value={singupDataInput.password}
					required
				/>

				<input
					type="password"
					name="passwordRef"
					placeholder="Confirme a senha"
					onChange={(e) => handleFormChange(e)}
					value={singupDataInput.passwordRef}
					required
				/>
				<Button type="submit">Criar conta</Button>
			</Forms>
		</>
	);
}

const Forms = styled.form`
	display: flex;
	flex-direction: column;
	margin: 30px 0 0 0;
	width: 100%;

	input[type="email"],
	input[type="password"],
	input[type="text"],
	input[type="password"] {
		border: 1px solid #4D88D7;
		box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
		border-radius: 12px;
		width: 100%;
		height: 55px;
		margin-top: 25px;
		padding: 0 0 0 10px;

		::placeholder {
			font-size: 14px;
			color: #4D88D7;
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
	background: #4D88D7;
	border-radius: 12px;
	color: white;
	font-size: 20px;
	border: none;
`;
