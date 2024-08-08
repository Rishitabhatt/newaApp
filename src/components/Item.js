import { FaHeart } from "react-icons/fa6";

function Item({ items }) {
    return (
        <>
            {items.map((it) =>
                <div className="col-md-4">
                    <div className="new">
                        <span></span>
                        <div className="heart">
                            <FaHeart />
                        </div>
                    </div>
                    <img src={it.img} />
                    <div className="price">
                        <div className="set">
                            <h4>{it.title}</h4>
                            <p style={{ fontSize: 15 }}>
                                {it.description}
                            </p>
                        </div>
                        <div className="cost">
                            <p>${it.price}</p>
                        </div>
                    </div>
                </div>
            )}

        </>

    )
}

export default Item;