
const DonationCard = ({ item }) => {
    const { title, image, price, category, categoryBg,cardBg} = item
    return (
        <div className="card card-side bg-base-100 shadow-xl" style={{backgroundColor:cardBg}}>
            <figure className="w-1/2">
                <img
                    src={image}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <div>
                    <button className="btn border-none" style={{backgroundColor:categoryBg}}>{category}</button>
                </div>
                <h2 className="card-title">{title}</h2>
                <p>${price}.00</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;