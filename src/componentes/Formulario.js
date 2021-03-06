import { Fragment, useState } from 'react';
import calcularTotal from '../helpers';

const Formulario = (props) => {
	const {
		cantidad,
		guardarCantidad,
		plazo,
		guardarPlazo,
		guardarTotal,
		guardarSpinner,
	} = props;

	const [error, guardarError] = useState(false);

	// * Se activa cuando damos click en submit
	const calcularPrestamo = (event) => {
		event.preventDefault();

		if (cantidad === 0 || plazo === '') {
			guardarError(true);
			return;
		}

		guardarSpinner(true);
		setTimeout(() => {
			guardarError(false);

			const totalCalculado = calcularTotal(cantidad, plazo);

			guardarTotal(totalCalculado);

			guardarSpinner(false);
		}, 2500);
	};

	return (
		<Fragment>
			<form onSubmit={calcularPrestamo}>
				<div className="row">
					<div>
						<label>Cantidad Prestamo</label>
						<input
							className="u-full-width"
							type="number"
							placeholder="Ejemplo: 3000"
							onChange={(event) => guardarCantidad(Number(event.target.value))}
						/>
					</div>
					<div>
						<label>Plazo para Pagar</label>
						<select
							className="u-full-width"
							onChange={(event) => guardarPlazo(Number(event.target.value))}
						>
							<option value="">Seleccionar</option>
							<option value="3">3 meses</option>
							<option value="6">6 meses</option>
							<option value="12">12 meses</option>
							<option value="24">24 meses</option>
						</select>
					</div>
					<div>
						<input
							type="submit"
							value="Calcular"
							className="button-primary u-full-width"
						/>
					</div>
				</div>
			</form>

			{error ? (
				<p className="error">Todos los campos son obligatoriois</p>
			) : null}
		</Fragment>
	);
};

export default Formulario;
