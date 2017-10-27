var layer, map, uluru

function initMap() {
	uluru = {lat: 20.688715, lng: -101.356684};
	map = new google.maps.Map(document.getElementById('map'), {
		center: uluru,
		zoom: 11
	});
}
$('#filtro1').click(function(event) {
	layer = new google.maps.FusionTablesLayer({
		query: {
			select: 'SECCION',
			from: '1if0DAMfJ6S-B2PJrP8zqwiyfOmr03-RHg2_iucTU'
		}, 
		styles: [
		{
			polygonOptions: {
				fillColor: '#89FC00',
				fillOpactity: 0.3
			}
		}, {
			where: 'SECCION = 1126',
			polygonOptions: {
				fillColor: '#5BC0EB'
			}
		}, {
			where: 'SECCION = 1153',
			polygonOptions: {
				fillColor: '#FDE74C'
			}
		}, {
			where: 'SECCION = 1168',
			polygonOptions: {
				fillColor: '#9BC53D'
			}
		}, {
			where: 'SECCION = 1172',
			polygonOptions: {
				fillColor: '#FA7921'
			}
		}]
	});
	initMap()
	addLayer(layer)
})

$('#filtro2').click(function(event) {
	layer = new google.maps.FusionTablesLayer({
		query: {
			select: 'DISTRITO',
			from: '1if0DAMfJ6S-B2PJrP8zqwiyfOmr03-RHg2_iucTU'
		}, 
		styles: [
		{
			polygonOptions: {
				fillColor: '#89FC00',
				fillOpactity: 0.3
			}
		}, {
			where: 'DISTRITO = 4',
			polygonOptions: {
				fillColor: '#5BC0EB'
			}
		}, {
			where: 'DISTRITO = 9',
			polygonOptions: {
				fillColor: '#FDE74C'
			}
		}]
	});
	initMap()
	addLayer(layer)
})

$('#filtro3').click(function(event) {
	layer = new google.maps.FusionTablesLayer({
		query: {
			select: 'SECCION',
			from: '1if0DAMfJ6S-B2PJrP8zqwiyfOmr03-RHg2_iucTU'
		}, 
		styles: [
		{
			polygonOptions: {
				fillColor: '#89FC00',
				fillOpactity: 0.3
			}
		}, {
			where: '\'Etiqcompe = PAN\'',
			polygonOptions: {
				fillColor: '#5BC0EB'
			}
		}, {
			where: 'Etiqcompe = PRI',
			polygonOptions: {
				fillColor: '#FDE74C'
			}
		}]
	});
	initMap()
	addLayer(layer)
})

function addLayer(layer) {
	layer.setMap(map)
}