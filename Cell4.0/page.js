function loadPage(page) {
    document.getElementById('loading').style.display = 'block';
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error loading page: ' + page);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('page-content').innerHTML = data;
            document.getElementById('main-content').style.display = 'none';
        })
        .catch(error => {
            document.getElementById('loading').innerHTML = "Failed to load page!";
            console.error(error);
        });
}
