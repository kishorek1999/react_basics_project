import { useReducer } from 'react';

export default function Checkbox() {
    const [checked, setChecked] = useReducer( (checked) => !checked, false);

    return (
        <>
            <label htmlFor='checked'>
                {checked ? "checked" : "not checked"}
            </label>
            <input id="checked" value={checked} type="checkbox" onChange={setChecked} />
        </>
    );
}