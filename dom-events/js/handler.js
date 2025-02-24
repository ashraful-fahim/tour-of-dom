document.getElementById('btn-update-title')
    .addEventListener('click', function () {
        const pageTitle = document.getElementById('page-title');
        pageTitle.innerText = 'Updated Event Handler by JS';
    })


//1. Set Event Listener
document.getElementById('btn-update')
    .addEventListener('click', function () {
        console.log('Update Button Clicked!')
        //2. Get the text from the Input Field
        const nameInput = document.getElementById('name-input');
        //console.log(nameInput);
        const name = nameInput.value;
        //console.log('name is', name);
        //3. Putting the value to the desired place
        const namePara = document.getElementById('name');
        namePara.innerText = name;
    })