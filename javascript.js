

const gridContainer = document.querySelector('gridContainer');

function gridCreator(size) {
    if (size >= 100) {
        return 0;
    } else {
        gridEmptier()
    }

    for (let i = 0; i < size; i++) {
        const gridBox = document.createElement('div');
        gridBox.className = 'gridBox';
        gridBox.id = 'block';
    
        for (let j = 0; j < size; j++) {
            const subBox = document.createElement('div');
            subBox.className = 'subBox'
            subBox.id = 'block';
            gridBox.appendChild(subBox);
        }
        document.getElementsByClassName('gridContainer')[0].appendChild(gridBox);

        // Hover over functionality
        document.querySelectorAll('.subBox').forEach(item => {
            item.addEventListener('mouseover', event => {
              item.classList.add('hoveredOver');
            })
            // item.addEventListener('mouseout', event => {
            //     item.classList.remove('hoveredOver');
            // })
          })
    }
}


function gridEmptier() {
    document.querySelectorAll('#block').forEach(item => {
        item.remove();
    })
}
  



  document.querySelector('.newGridButton').addEventListener('click', event => {
    gridCreator(prompt("How big do you want it to be?"));
  })

gridCreator(16);