async function fetchRentals() {
    try {
        let response = await fetch('./scripts/rentals.json');
        let data = await response.json();

        // Obtener el contenedor para la tabla
        const rentalTableContainer = document.getElementById('rentalTableContainer');

        // Crear la tabla
        const table = document.createElement('table');
        table.innerHTML = `
        
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Max Persons</th>
                    <th>3 Hrs (Reservation)</th>
                    <th>Full Day (Reservation)</th>
                    <th>3 Hrs (Walk-in)</th>
                    <th>Full Day (Walk-in)</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
            
        `;
        rentalTableContainer.appendChild(table);
        const tbody = table.querySelector('tbody');

        // Agregar filas a la tabla para cada alquiler
        data.rentals.forEach(rental => {
            const row = document.createElement('tr');
            row.innerHTML = `
            

                <td>${rental.name}</td>
                <td>${rental.max_persons}</td>
                <td>$${rental.half_day_3_hrs.price}</td>
                <td>$${rental.full_day_price.price_full_day}</td>
                <td>$${rental.half_day_3_hrs['half_day_3_hrs_walk-in']}</td>
                <td>$${rental.full_day_price['price_full_day_walk-in']}</td>
                
            `;
           
            tbody.appendChild(row);
        });

        // Devolver los datos para acceder a ellos en otras partes de la página
        return data.rentals;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Llamar a la función fetchRentals para generar la tabla de alquileres al cargar la página
fetchRentals();

