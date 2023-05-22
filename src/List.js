import React from "react";

const List=({people})=>{
    return (
        people.map(item=>{
            return(
                <article key={item.id}>
                    <img src={item.image} alt={item.name}/>
                    <div>
                        <h4>{item.name}</h4>
                        <p>{item.age}</p>
                    </div>
                </article>
            )
        })
    )
}

export default List;
