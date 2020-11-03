import React, { useState } from 'react';

function Employees( props ) {
	const data = props.data;
	const [ moreInfo, setMoreInfo ] = useState('Click employee name for more information');
	const handleClick = element => {
		setMoreInfo( element.info );
	}

	return(
		<div className="employees-container">
			<div className="names-content">
				{ data.map( element =>
					<div
						className="employee-name"
						onClick={ () => handleClick( element ) }
						key={ `employee_${ element.name }` }
					>
						{ element.name }
					</div> ) }
			</div>
			<div className="more-info-container">
				{ moreInfo }
			</div>
		</div>
	);
}

export default Employees;