import { getSuggestions } from '../api/suggestions';


export default class AutoComplete {

    constructor(element) {
        this.element = element;
        this.element.addEventListener('input', this.onInput.bind(this));
    }

    onInput(event) {
        const input = event.target;
        const query = input.value;

        this.lastQuery = query;

        if (!query) {
            // Empty the list of suggestions if the query is empty
            return this.renderSuggestions(null, []);
        }

        getSuggestions(event.target.value)
            .then(suggestions => {
                // Only render suggestions for the latest query
                if (query === this.lastQuery) return this.renderSuggestions(query, suggestions);
            })
            .catch(error => {
                throw new Error(`There was a problem retrieving results for the search term ${ event.target.value }.`);
            });

    }

    renderSuggestions(query, suggestions) {
        const list = this.element.querySelector('.autocomplete__suggestions');

        const sortSuggestions
            = (a, b) => a.toLowerCase().indexOf(query) < b.toLowerCase().indexOf(query)
                ? -1
                : 1;

        const wrapWithEmTag = suggestion => suggestion.replace(
            new RegExp(`(${query})`, 'ig'),
            '<em>$1</em>'
        );

        const addSuggestionToList = suggestion => {
            const listItem = document.createElement('li');

            listItem.className = 'autocomplete__suggestion';
            listItem.innerHTML = suggestion;
            list.appendChild(listItem);
        };

        list.innerHTML = '';

        suggestions
            .sort(sortSuggestions)
            .map(wrapWithEmTag)
            .forEach(addSuggestionToList);
    }

}
