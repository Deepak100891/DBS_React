export interface ICountriesList {
    name: string,
    value: string
}

export interface IProps {
    countries_list: ICountriesList[],
    onChange?: any
}

export interface IStateValue {
    countryName: string
}

export interface ICountryState {
    name: string,
    value: string
}