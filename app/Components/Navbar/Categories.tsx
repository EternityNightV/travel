'use client'
import Container from '../Container'
import {BsSnow} from 'react-icons/bs'
import { IoDiamond } from 'react-icons/io5'
import {TbBeach, TbMountain, TbPool} from 'react-icons/tb'
import {GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill} from 'react-icons/gi'
import {MdOutlineVilla} from 'react-icons/md'
import {FaSkiing} from 'react-icons/fa'
import CategoryBox from '../CategoryBox'
import { usePathname, useSearchParams } from 'next/navigation'
export const categories = [
      {
          label : 'Beach' ,
          icon : TbBeach,
          decription : 'This property is close to the beach'
      },
      {
          label : 'Windmills' ,
          icon : GiWindmill,
          decription : 'This property has windmills '
      },
      {
          label : 'Modern' ,
          icon : MdOutlineVilla,
          decription : 'This property is modern'
      },
        {
          label : 'CountrySide' ,
          icon : TbMountain,
          decription : 'This property is in the countryside'
      },
        {
          label : 'Pools' ,
          icon : TbPool,
          decription : 'This property has a pool'
      },
      {
        label : 'Islands',
        icon : GiIsland,
        decription : 'This property is on an island'
      },
        {
          label : 'Lake',
          icon : GiBoatFishing,
          decription : 'This property is close to a lake'
      },
          {
            label : 'Skiing',
            icon : FaSkiing,
            decription : 'This property has skiing actv'
        },
        {
          label : 'Castles',
          icon : GiCastle,
          decription : 'This property is in a castle'
      },
      {
        label : 'Camping',
        icon : GiForestCamp,
        decription : 'This property is camping actv'
    } , 
      {
        label : 'Arctic',
        icon : BsSnow,
        decription : 'This property is arctic'
    } ,
    {
      label : 'Cave',
      icon : GiCaveEntrance,
      decription : 'This property is camping actv'
    },
    {
      label : 'Desert',
      icon : GiCactus,
      decription : 'This property is camping actv'
    },
    {
      label : 'Barns',
      icon : GiBarn,
      decription : 'This property is barn '
    },
    {
      label : 'Lux',
      icon : IoDiamond,
      decription : 'This property is barn '
    }
    
]


const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category')
  const pathname = usePathname();

  const isMainPage = pathname == '/';

  if(!isMainPage) {
    return null
  }

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
            selected={category == item.label}
            icon={item.icon}
            />
        ))}
      </div>
    </Container>
  )
}

export default Categories
