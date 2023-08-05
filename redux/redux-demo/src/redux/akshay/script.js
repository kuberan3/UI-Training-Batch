document.getElementById('download-btn').addEventListener('click', function() {
    // Get the table element
    const table = document.getElementById('data-table');

    // Get all rows of the table
    const rows = Array.from(table.querySelectorAll('tr'));

    // Create an empty array to store the data
    const data = [];

    // Loop through each row and extract the data
    rows.forEach(row => {
        const rowData = [];
        Array.from(row.querySelectorAll('td, th')).forEach(cell => {
            rowData.push(cell.textContent);
        });
        data.push(rowData.join(','));
    });

    // Join all rows into a single CSV string
    const csvString = data.join('\n');

    // Create a Blob with the CSV data
    const blob = new Blob([csvString], { type: 'text/csv' });

    // Create a download link and trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'table_data.csv';
    link.click();
});
