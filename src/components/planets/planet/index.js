import React from 'react';
import DescriptionWithLink from '../../shared/description_with_link';
import { Link } from 'react-router-dom';

const Planet = (props) => {
	return (
		<div>
			<Link to={`/planet/${props.id}`}><h4>{props.name}</h4></Link>

			<DescriptionWithLink description={props.description} link_url={props.link_url} />
			<br />
			<img src={props.img_url} alt="Imagem do planeta" />
		</div>
	)
}

export default Planet;
