import ReactDOM from "react-dom";

import Corpo from "./components/Corpo";
import Navbar from "./components/Navbar";
import Fundomobile from "./components/Fundo-mobile";

function App() {
	return (
		<div>
			<Navbar />
            <Corpo />
            <Fundomobile />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector(".root"));