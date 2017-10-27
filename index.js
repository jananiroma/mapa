function initMap() {
	var uluru = {lat: 20.688715, lng: -101.356684};
	var map = new google.maps.Map(document.getElementById('map'), {
		center: uluru,
		zoom: 11
	});
	var layer = new google.maps.FusionTablesLayer({
		query: {
			select: 'SECCION',
			from: '1if0DAMfJ6S-B2PJrP8zqwiyfOmr03-RHg2_iucTU'
		}, 
		styles: [{
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
	layer.setMap(map);
}
