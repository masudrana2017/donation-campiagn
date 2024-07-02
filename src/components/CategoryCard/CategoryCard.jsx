
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const CategoryCard = ({ item }) => {
    const {id, image, cardBg, categoryBg, textColor, category } = item || {};
    return (
        <Link to={`/donation-details/${id}`}>
            <Card className="mt-6 overflow-hidden shadow-none cursor-pointer" style={{ backgroundColor: cardBg }}>
                <CardHeader color="blue-gray" className="m-0 rounded-t-lg">
                    <img
                        src={image}
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody className="p-4">
                    <button className="btn border-none" style={{ backgroundColor: categoryBg, color: textColor }}>{category}</button>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        UI/UX Review Check

                    </Typography>

                </CardBody>



            </Card>
        </Link>
    );
};

export default CategoryCard;