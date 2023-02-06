import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalResetStyle from "../assets/css/GlobalResetStyle.css";
import GlobalStyle from "../assets/css/GlobalStyle";
import UserContext from "./context/UserContext";
import SignupScreen from "./signup/SignupScreen";
import LoginScreen from "./login/LoginScreen";
import Main from "./main/Main";

export default function App() {
	const [userInformation, setUserInformation] = useState(null);
	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<BrowserRouter>
				<UserContext.Provider
					value={{
						setUserInformation,
						userInformation,
					}}
				>
					<Routes>
						<Route path="/" element={<SignupScreen />} />
						<Route path="/signin" element={<LoginScreen />} />
						<Route path="/main" element={<Main/>} />
					</Routes>
				</UserContext.Provider>
			</BrowserRouter>
		</>
	);
}
