import React, { useState } from 'react';
import DropdownComponent from '../dropdown';
import { ICountriesList, ICountryState } from "../../types";

const CountriesComponents = () => {

    const countriesList: Array<ICountriesList> = [
        { name: 'Singapore', value: 'Singapore' },
        { name: 'Malaysia', value: 'Malaysia' },
        { name: 'Indonesia', value: 'Indonesia' },
        { name: 'Philippines', value: 'Philippines' },
        { name: 'Thialand', value: 'Thialand' },
        { name: 'Australia', value: 'Australia' },
        { name: 'Belgium', value: 'Belgium' },
        { name: 'Ireland', value: 'Ireland' },
        { name: 'Turkey', value: 'Turkey' },
        { name: 'Maldives', value: 'Maldives' },
        { name: 'Brazil', value: 'Brazil' },
    ];

    const [state, setState] = useState<ICountryState>({
        name: '',
        value: ''
    });

    const selectedCountry = (event: any) => {
        setState({
            name: event.name,
            value: event.value
        });
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-sm-12">
                        {
                            state.value && <span>Country Name: {state.value}</span>
                        }
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-sm-4">
                        <DropdownComponent countries_list={countriesList} onChange={selectedCountry} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CountriesComponents;
