'use client'
import Container from '../Container'
import TbBeach from 'react-icons/tb'
import GiWindmills from 'react-icons/gi'
import GMdOutlineVilla from 'react-icons/md'
import CategoryBox from '../CategoryBox'
export const categories = [
    {
        label : 'Beach' ,
        icon : TbBeach,
        decription : 'This property '
    },
    {
        label : 'Windmills' ,
        icon : GiWindmills,
        decription : 'This property '
    },
    {
        label : 'Modern' ,
        icon : GMdOutlineVilla,
        decription : 'This property '
    }
    
]


const Categories = () => {
  return (
    <Container>
      <div className='
      pt-4
      flex
      flex-row
      items-center
      justify-between
      overflow-x-auto
      '>
        {categories.map((item) => (
            <CategoryBox
            key={item.label}
            label={item.label}
            decription={item.decription}
            icon={item.icon}
            />
        ))}
      </div>
    </Container>
  )
}

export default Categories
