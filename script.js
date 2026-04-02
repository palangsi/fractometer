const fractions = [
    { label: '1/64', value: 1/64 }, { label: '1/32', value: 1/32 },
    { label: '1/16', value: 1/16 }, { label: '1/8', value: 1/8 },
    { label: '1/4', value: 1/4 }, { label: '1/2', value: 0.5 }
];

let currentTotal = 0;

function init() {
    const addCol = document.getElementById('add-column');
    const subCol = document.getElementById('sub-column');

    fractions.forEach(f => {
        // Create Add buttons
        let addBtn = document.createElement('div');
        addBtn.className = 'fraction-slot';
        addBtn.innerText = f.label;
        addBtn.onclick = () => updateTotal(f.value);
        addCol.appendChild(addBtn);

        // Create Subtract buttons
        let subBtn = document.createElement('div');
        subBtn.className = 'fraction-slot';
        subBtn.innerText = f.label;
        subBtn.onclick = () => updateTotal(-f.value);
        subCol.appendChild(subBtn);
    });
}

function updateTotal(val) {
    currentTotal += val;
    if (currentTotal < 0) currentTotal = 0; // Mechanical limits
    renderTotal();
}

function renderTotal() {
    // Basic decimal to fraction logic (simplified for display)
    document.getElementById('total-display').innerText = `Total: ${currentTotal.toFixed(3)}"`;
}

function reset() {
    currentTotal = 0;
    renderTotal();
}

init();