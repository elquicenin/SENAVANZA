function toggleRoleInputs() {
    const role = document.getElementById('role').value;
    const adminInputs = document.getElementById('adminInputs');
    const empresaInputs = document.getElementById('empresaInputs');

    if (role === 'admin') {
        adminInputs.style.display = 'block';
        empresaInputs.style.display = 'none';
    } else if (role === 'empresa') {
        adminInputs.style.display = 'none';
        empresaInputs.style.display = 'block';
    } else {
        adminInputs.style.display = 'none';
        empresaInputs.style.display = 'none';
    }
}


