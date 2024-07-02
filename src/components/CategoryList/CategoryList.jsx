import CategoryCard from "../CategoryCard/CategoryCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const CategoryList = ({filteredData,loading}) => {
    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className="container mx-auto mt-6">
            <h2>Category List {filteredData.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    filteredData.map(item=><CategoryCard key={item.id} item={item}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryList;