import Card from "./Card.js";

const CardList = ({ robots }) => {
        // key property is used by the virtual DOM to keep record of what item is which one. If one is deleted,
        // react knows which one is removed and can remove that one from the DOM otherwise it has to update all            
        // in case of a loop, Key prop should be given and is unique such as id and not i.
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;