import React from "react"
import PropTypes from "prop-types"

const ThreeColGrid = ({ items }) => {
  const gridItems = items.map((item, index) => {
    const { title, image } = item
    const imageUrl = image ? image.childImageSharp.resize.src : ``

    return (
      <div className="three-col--item">
        <img src={imageUrl} alt={title} />
      </div>
    )
  })

  return <div className="three-col--grid">{gridItems}</div>
}

export default ThreeColGrid

ThreeColGrid.propTypes = {
  items: PropTypes.object,
}
