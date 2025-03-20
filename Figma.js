const container = document.createElement('div');
container.className = 'container';

const searchInput = document.createElement('input');
searchInput.type = 'search';
searchInput.id = 'search-input';
searchInput.placeholder = 'Search by name or symbol';

const sortMktCapButton = document.createElement('button');
sortMktCapButton.id = 'sort-mkt-cap-button';
sortMktCapButton.textContent = 'Sort by Mkt Cap';

const sortPercentageButton = document.createElement('button');
sortPercentageButton.id = 'sort-percentage-button';
sortPercentageButton.textContent = 'Sort by Percentage';

const cryptoTable = document.createElement('table');
cryptoTable.id = 'crypto-table';

const thead = document.createElement('thead');
const tr = document.createElement('tr');
thead.appendChild(tr);
cryptoTable.appendChild(thead);

const tbody = document.createElement('tbody');
tbody.id = 'table-body';

const img = document.createElement('img');
img.src = 'image.png';
img.alt = 'Market-Cap';
img.width = 800;
img.height = 600;

const table = document.createElement('table');
table.appendChild(img);
tbody.appendChild(table);
cryptoTable.appendChild(tbody);

container.appendChild(searchInput);
container.appendChild(sortMktCapButton);
container.appendChild(sortPercentageButton);
container.appendChild(cryptoTable);

document.body.appendChild(container);
