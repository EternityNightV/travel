import { IconType } from "react-icons"

interface CategoryBoxProps {
    icon : IconType,
    label : string ,
    selected ?: boolean
}

const CategoryBox:React.FC<CategoryBoxProps>= ({
    icon,
    label,
    selected
}) => {
  return (
    <div
        className="
        flex
        flex-col
        items-center
        justify-content
        "
    >
      
    </div>
  )
}

export default CategoryBox
