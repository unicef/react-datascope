var _ = require('lodash'),
    React = require('react/addons'),
    Testing = require('./test.jsx');

var Datascope = require('./../src/Datascope.jsx');
var LocalDatascope = require('./../src/LocalDatascope.jsx');
var SearchBar = require('./../src/SearchBar.jsx');
var FilterPanel = require('./../src/FilterPanel.jsx');
var FilterInputRadio = require('././FilterInputRadio.jsx');
var FilterInputCheckbox = require('././FilterInputCheckbox.jsx');
var DataTable = require('./../src/DataTable.jsx');


//var mockData = require('./mock-data');
var mockData = require('./mock-data2');

//<FilterInputRadio field={'isActive'} />
var App = React.createClass({
    render() {
        var schemaIsActive = _.find(mockData.schema.fields, (field) => field.name === 'isActive');
        var searchableFieldNames = _(mockData.schema.fields).filter(f => f.searchable).pluck('name').value();
        return (
            <div>
                <LocalDatascope
                    data={mockData.data}
                    schema={mockData.schema}
                    >
                    <Datascope>

                        <SearchBar
                            id="search-all"
                            fields={searchableFieldNames}
                            placeholder="all fields"
                        />
                        <SearchBar
                            id="search-first-name"
                            fields={['first_name']}
                            placeholder="first name"
                        />

                        <FilterPanel>
                            <FilterInputRadio field='isActive' />
                            <FilterInputCheckbox field='groups' />
                        </FilterPanel>

                        <DataTable />

                    </Datascope>
                </LocalDatascope>
            </div>
        );
    }
});

window.React = React;

module.exports = App;