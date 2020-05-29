import React, {useEffect, useState} from 'react';
import DescriptionWithLink from '../shared/description_with_link';
import Form from './form';
import { useParams, Link, Redirect } from 'react-router-dom';

async function getPlanet(id) {
	let response = await fetch(`http://localhost:3000/api/${id}.json`)
	let data = await response.json()
	return data
}

const Planet = () => {
	const [satellites, setSatellites] = useState([])
	const [planet, setPlanet] = useState([])
	const [redirect, setRedirect] = useState(false)

	let { id } = useParams()

	useEffect(() => {
		getPlanet(id).then(data => {
			setSatellites(data['satellites'])
			setPlanet(data['data'])
		}, error => {
			setRedirect(true)
		})
	}, [])

	const addSatellite = (new_satellite) => {
		setSatellites([...satellites, new_satellite])
	}

	if(redirect)
		return <Redirect to='/' />

	return (
		<div>
			<h4>{planet.name}</h4>

			<DescriptionWithLink description={planet.description} link_url={planet.link_url} />

			<br />

			<img src={planet.img_url} alt="Imagem do planeta" />

			<br />
			<br />

			Adicione um Satélite em <b>{planet.name}</b>

			<Form addSatellite={addSatellite} />

			<br />

			<ul>
				{satellites.map((satellite, index) =>
					<li key={index}>{satellite.name}</li>
				)}
			</ul>

			<Link to={"/"}>Voltar</Link>
		</div>
	)
}

export default Planet;
