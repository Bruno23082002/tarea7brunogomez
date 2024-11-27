// Función para calcular salario con formato decimal
function calcularSalario() {
    let salario = parseFloat(prompt("Ingrese el salario:")); // Convertir a número flotante
    let descuento = parseFloat(prompt("Ingrese el descuento:")); // Convertir a número flotante
    if (!isNaN(salario) && !isNaN(descuento)) { // Verificar que ambos valores sean válidos
        let total = salario - descuento; // Realizar el cálculo
        alert(`El salario total es: ${total.toFixed(2)}`); // Mostrar con dos decimales
    } else {
        alert("Por favor, ingrese valores válidos.");
    }
}

// Función para calcular el total de puntos con formato decimal
function calcularPuntos() {
    let puntos = [];
    for (let i = 1; i <= 3; i++) {
        let punto = parseFloat(prompt(`Ingrese el puntaje ${i}:`)) || 0; // Convertir a número flotante o usar 0
        puntos.push(punto);
    }
    let total = puntos.reduce((a, b) => a + b, 0); // Sumar todos los puntos
    alert(`El total de puntos es: ${total.toFixed(2)}`); // Mostrar con dos decimales
}

// Función para calcular el 15% de un puntaje con formato decimal
function calcularPorcentaje() {
    let puntaje = parseFloat(prompt("Ingrese un puntaje:")) || 0; // Convertir a número flotante o usar 0
    let porcentaje = puntaje * 0.15; // Calcular el 15%
    alert(`El 15% del puntaje es: ${porcentaje.toFixed(2)}`); // Mostrar con dos decimales
}

// Función para una operación adicional con formato decimal
function otraOperacion() {
    let valor = parseFloat(prompt("Ingrese un valor:")); // Convertir a número flotante
    if (!isNaN(valor)) {
        let resultado = valor * 2; // Ejemplo de operación (duplicar)
        alert(`El resultado de la operación es: ${resultado.toFixed(2)}`); // Mostrar con dos decimales
    } else {
        alert("Por favor, ingrese un valor válido.");
    }
}


