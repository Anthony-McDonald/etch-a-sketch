

const gridContainer = document.querySelector('gridContainer');

for (let i = 0; i < 16; i++) {
    const gridBox = document.createElement('div');
    gridBox.className = 'gridBox';
    gridBox.id = 'block';

    for (let j = 0; j < 16; j++) {
        const subBox = document.createElement('div');
        subBox.className = 'subBox'
        subBox.id = 'block';
        gridBox.appendChild(subBox);
    }
    document.getElementsByClassName('gridContainer')[0].appendChild(gridBox);
}



    