import { Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SiteNav from "./components/Common/SiteNav";
import SiteFooter from "./components/Common/SiteFooter";
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";

function App() {
	return (
		<div className="">
			<SiteNav />
			<Routes>
				<Route path="*" element={<HomePage />} />
				<Route path="/" element={<HomePage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="register" element={<RegisterPage />} />
			</Routes>
			<SiteFooter />
		</div>
	);
}

export default App;
