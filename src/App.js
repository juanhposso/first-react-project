import { Fragment, useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';

function App() {
	const [cantidad, guardarCantidad] = useState(0);
	const [plazo, guardarPlazo] = useState('');
	const [total, guardarTotal] = useState(0);

	return (
		<Fragment>
			<Header titulo="Hola mundito" />
			<div className="container">
				<Formulario
					cantidad={cantidad}
					guardarCantidad={guardarCantidad}
					plazo={plazo}
					guardarPlazo={guardarPlazo}
					total={total}
					guardarTotal={guardarTotal}
				/>
				<div className="mensajes">
					{total === 0 ? (
						<Mensaje />
					) : (
						<Resultado total={total} plazo={plazo} cantidad={cantidad} />
					)}
				</div>
			</div>
		</Fragment>
	);
}

export default App;
