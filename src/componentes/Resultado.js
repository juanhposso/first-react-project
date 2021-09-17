const Resultado = ({ total, plazo, cantidad }) => {
	return (
		<div className="u-full-width resultado">
			<h2>Resumen:</h2>
			<p>La cantidad solicitada es: ${cantidad}</p>
			<p>El plazo a pagar es: {plazo} meses</p>
			<p>Su pago mensual seria de: ${(total / plazo).toFixed(2)}</p>
			<p>Total a pagar: {total.toFixed(2)}</p>
		</div>
	);
};

export default Resultado;
