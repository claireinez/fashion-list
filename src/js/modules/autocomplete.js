import {getSuggestions} from '../api/suggestions';


export default class AutoComplete {

    constructor(element) {
        this.element = element;
        this.element.addEventListener('input', this.onInput.bind(this));
    }

    onInput(event) {

        const input = event.target;
        const query = input.value;

        // TODO: handle an empty query
        // If the query is empty then the requirement is for the list of suggestions to be emptied.

        getSuggestions(event.target.value).then(suggestions => {

            // TODO: drop suggestions that are not for the most recent query
            // `getSuggestions` will take between 50ms and 350ms to resolve, much like if it were
            // talking to a real API. This means that as the user types and `getSuggestions` is called
            // it is possible that a result for an older query resolves before the result for a newer query.
            //
            // This is visualised like so:
            //
            //     query 1 ------------------>
            //         query 2 ------>
            //             query 3 ------>
            //
            // As you can see the results for query 2 come in first, then query 3, and finally query 1.
            // Before calling `renderSuggestions` you need to check that the value of the input has not
            // changed since this request was made.
            this.renderSuggestions(query, suggestions);

        });
    }

    renderSuggestions(query, suggestions) {
        const list = this.element.querySelector('.autocomplete__suggestions');

        // TODO: implement the rest of this method
        // Some things to consider:
        //
        //   1. Each item being added to `list` will need to have the class ".autocomplete__suggestion"
        //      to benefit from the styling applied in css/modules/autocomplete.less
        //
        //   2. `getSuggestions` will return ANY store that contained the query in alphabetical
        //       order, you might want to consider ordering the returned suggestion by the index
        //       of the match so that "Les Nouvelles" is considered a more direct match to the query
        //       "les" than "Charles David", despite "C" being alphabetically before "L"
        //
        //   3. You might want to wrap the bit of the suggestion that matches the query with an <em>
        //      element and then add some CSS to style it. An example would be turning "Les Nouvelles"
        //      into "<em>Les</em> Nouvelles" for the query "les".
    }

}
