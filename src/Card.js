
const Card = /*(props)*/ ({ id, name, email }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src = {`https://robohash.org/${id /*props.id <- can also be used*/}?200x200`} alt = 'robo'/>
            <div>
                {/* js expression in jsx needs to be wrapped around {} */}
                <h2>{name /*props.name*/}</h2>
                <p>{email /*props.email*/}</p>
            </div>
        </div>
    );
}

export default Card;