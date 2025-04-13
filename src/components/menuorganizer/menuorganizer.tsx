import React from 'react'
import { menuData, MenuCategory } from 'data/menuData'
import './menuorganizer.css'

interface MenuOrganizerProps {
  selectedCategories: Record<string, boolean>
  setSelectedCategories: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >
}

const MenuOrganizer: React.FC<MenuOrganizerProps> = ({
  selectedCategories,
  setSelectedCategories
}) => {
  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className="MenuOrganizer__filter-wrapper">
      <h3 className="MenuOrganizer__heading">Categories</h3>
      <div className="MenuOrganizer__filter-list">
        {menuData.map((category: MenuCategory) => (
          <label key={category.id} className="MenuOrganizer__filter-item">
            <input
              type="checkbox"
              checked={!!selectedCategories[category.id]}
              onChange={() => toggleCategory(category.id)}
              className="MenuOrganizer__checkbox"
            />
            <span className="MenuOrganizer__label">{category.category}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default MenuOrganizer
