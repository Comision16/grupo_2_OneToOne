import React from 'react'
import CategoryCard from '../Products/CategoryCard'
import PropTypes from 'prop-types';

const Category = (props) => {
 
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {
                            props.categorias.map((categorias, index)=> <CategoryCard key={categorias + index} categorias={categorias} />)
                            
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}
Category.propTypes = {
    categorias: PropTypes.array

};
export default Category
