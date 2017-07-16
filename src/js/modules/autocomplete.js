import {getSuggestions} from '../api/suggestions';


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

        getSuggestions(event.target.value).then(suggestions => {
            // Only render suggestions for the latest query
            if (query === this.lastQuery) return this.renderSuggestions(query, suggestions);
        });

    }

    renderSuggestions(query, suggestions) {
        const list = this.element.querySelector('.autocomplete__suggestions');

        list.innerHTML = '';

        suggestions
            .forEach(suggestion => {
                const listItem = document.createElement('li');

                listItem.className = 'autocomplete__suggestion';
                listItem.innerHTML = suggestion;
                list.appendChild(listItem);
            })
    }

}
