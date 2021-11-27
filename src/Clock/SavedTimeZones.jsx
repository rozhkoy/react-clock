const SavedTimeZones = (props) => {

    return (
        <ul className="preview-time">
            {
                props.savedCity.map((item) => (
                    <li key={item.id} className="preview-time__item">
                        <div className="first-level">
                            <button className="first-level__remove-city"
                                    onClick={() => props.deleteSavedCity(item.id)}>&#x2715;</button>
                        </div>
                        <div className="second-level"
                             onClick={() => props.searchBySavedCity(item.city, item.difference, item.dataInString)}>{item.city}</div>
                        <div className="third-level">{item.dateTime}</div>
                    </li>)
                )
            }
        </ul>
    )

}


export default SavedTimeZones;

