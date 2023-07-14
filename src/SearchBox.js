

const SearchBox = ({ searchChange }) => {
    return(
        <div className="pa mb2">
            <input 
                type='search' 
                placeholder="Enter Robo Name" 
                className="pa3 ba b--green bg-lightest-blue"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;