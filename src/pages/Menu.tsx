import React, { useState, useRef, useMemo } from 'react'
import MenuOrganizer from 'components/menuorganizer/menuorganizer'
import { menuData, MenuCategory } from 'data/menuData'
import MenuItem from 'components/menuitem/menuitem'
import '../styles/Menu.css'

const Menu: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<
    Record<string, boolean>
  >({})
  const [onlyAvailable, setOnlyAvailable] = useState<boolean>(false)
  const [searchText, setSearchText] = useState<string>('')
  const [sortOrder, setSortOrder] = useState<string>('')

  const containersRef = useRef<Map<string, HTMLDivElement>>(new Map())

  const isAnyCategorySelected = Object.values(selectedCategories).includes(true)

  const filteredCategories = useMemo(() => {
    return isAnyCategorySelected
      ? menuData.filter(
          (category: MenuCategory) => selectedCategories[category.id]
        )
      : menuData
  }, [isAnyCategorySelected, selectedCategories])

  const filteredProducts = useMemo(() => {
    return filteredCategories.map((category: MenuCategory) => ({
      ...category,
      products: category.products.filter(
        (product) =>
          (!onlyAvailable || product.available) &&
          (searchText.trim() === '' ||
            product.name.toLowerCase().includes(searchText.toLowerCase()))
      )
    }))
  }, [filteredCategories, onlyAvailable, searchText])

  const sortedProducts = useMemo(() => {
    return filteredProducts.map((category: MenuCategory) => {
      const sortedItems = [...category.products]
      if (sortOrder === 'lowToHigh') {
        sortedItems.sort((a, b) => a.price - b.price)
      } else if (sortOrder === 'highToLow') {
        sortedItems.sort((a, b) => b.price - a.price)
      }
      return { ...category, products: sortedItems }
    })
  }, [filteredProducts, sortOrder])

  return (
    <div className="MenuLayout">
      <div className="LeftSidebar">
        <MenuOrganizer
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <label className="AvailabilityCheckbox">
          <input
            type="checkbox"
            checked={onlyAvailable}
            onChange={(e) => setOnlyAvailable(e.target.checked)}
          />
          Only display available items
        </label>
      </div>

      <div className="MainContent">
        <div className="SearchSortContainer">
          <input
            type="text"
            className="SearchBar"
            placeholder="Search for items..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select
            className="SortDropdown"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by price</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>

        <div className="CategoryColumn">
          {sortedProducts.map((category: MenuCategory) => (
            <div key={category.id} className="CategoryContainer">
              <h2 className="CategoryTitle">{category.category}</h2>
              <div className="ScrollControls">
                <div
                  className="CategoryProducts"
                  ref={(el) => {
                    if (el) {
                      containersRef.current.set(category.id, el)
                    }
                  }}
                >
                  {category.products.length === 0 ? (
                    <p className="EmptyCategory">
                      No available or matching items in this category
                    </p>
                  ) : (
                    category.products.map((product) => (
                      <MenuItem key={product.id} product={product} />
                    ))
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
