import { useEffect, useState } from 'react';
import PlacesAutocomplete, {
} from 'react-places-autocomplete';
import { Form } from 'react-bootstrap'

export default function AddressAutocomplete(props) {

    const [address, setAddress] = useState('');

    useEffect(() => {
        if (props.value) {
            setAddress(props.value)
        }
    }, [props.value])

    const handleSelect = async value => {
        setAddress(value)
    }

    return (
        <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}>

            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="label">Адрес</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="address"
                        {...getInputProps({
                            placeholder: "Напишете адрес..."
                        })} />

                    <div className="text-left">
                        {loading ? <div>...зареждане</div> : null}
                        {suggestions.map((suggestion) => {

                            const key = suggestion.placeId;

                            const style = {
                                maxWidth: '650px',
                                backgroundColor: suggestion.active ? "#D3D3D4" : "white"
                            }

                            const className = 'list-group-item'

                            return (
                                <div {...getSuggestionItemProps(suggestion, { key, style, className })}>
                                    {suggestion.description}
                                </div>
                            )
                        })}
                    </div>
                    <Form.Control.Feedback type="invalid">
                        Моля въведете адрес.
                    </Form.Control.Feedback>
                </Form.Group>

            )}
        </PlacesAutocomplete>
    )
}