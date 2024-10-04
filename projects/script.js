function searchProjects() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const table = document.getElementById('projectTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const projectName = rows[i].getElementsByTagName('td')[0].textContent.toLowerCase();
        if (projectName.includes(input)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}
