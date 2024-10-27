import React from 'react'
import category1 from '../../assets/category-1.jpeg'
import category2 from '../../assets/category-2.jpg'
import category3 from '../../assets/category-3.jpeg'
import category4 from '../../assets/category-4.jpeg'
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories = [
        { name: 'Lumber', path: 'lumber', image: category1 },
        { name: 'Wood Processing', path: 'wood-processing', image: category2 },
        { name: 'Custom Cuts', path: 'custom-cuts', image: category3 },
        { name: 'Furniture Production', path: 'furniture-production', image: category4 },
    ]

    return (
        <div className='product__grid'>
            {categories.map((category, index) => (
                <Link 
                    key={`${category.name}-${index}`} 
                    to={`/categories/${category.path}`} 
                    className='categories__card'
                >
                    <img src={category.image} alt={category.name} />
                    <h4>{category.name}</h4>
                </Link>
            ))}
        </div>
    )
}

export default Categories
