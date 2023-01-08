import { Link } from "react-router-dom";

const tahoe_peaks = [
    { name: "Freel", elevation: 10891 },
    { name: "Monument", elevation: 10067},
    { name: "Pyramid", elevation: 9983},
    { name: "Tallac", elevation: 9735}
];

function List({ data, renderItem, renderEmpty }) {
    return !data.length ? 
        renderEmpty : 
        (
            <ul>
                {data.map((item) => (
                    <li key={item.name}>
                        {renderItem(item)}
                    </li>
                ))}
            </ul>
        );
}

function Peaks() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/hooks">Hooks</Link>
            <Link to="/fetch">Fetch</Link>
            <Link to="/peaks">Peaks</Link>
            <div className="App">
                <List 
                    data={tahoe_peaks}
                    renderEmpty={<p>This list is empty</p>}
                    renderItem={(item) => (
                    <>
                        {item.name} - {item.elevation} ft.
                    </>
                    )}
                />
            </div>
        </>
    );
}

export default Peaks;