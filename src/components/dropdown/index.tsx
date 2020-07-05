import React, { useState } from 'react';
import { IProps, IStateValue } from '../../types';
import { Dropdown } from 'primereact/dropdown';

const DropdownComponent = (props: IProps) => {

    const [state, setState] = useState<IStateValue>({
        countryName: ''
    });

    const changeHandler = (event: any) => {
        setState({
            countryName: event.target.value
        });
        props.onChange(event.target);
    }

    return (
        <Dropdown optionLabel="name" optionValue="value" value={state.countryName}
            options={props.countries_list} filter={true} name="Country"
            onChange={changeHandler} placeholder="Select a location" />
    );
}

export default DropdownComponent;
