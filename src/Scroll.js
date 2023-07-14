
const Scroll = (props) => {
    return (
        <div style={{overflowY: "scroll", border: '5px solid black', height: '500px'}}>
            {/* 2 '{}' for Js syntax and object */}
            {props.children}
        </div>
    );
}

export default Scroll;