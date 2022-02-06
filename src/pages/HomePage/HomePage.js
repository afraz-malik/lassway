import React, { useEffect, useState } from 'react'
import { Spinner } from '../../components/spinner/spinner'
import { commerce } from '../../lib/commerce'
import HomeItem from './HomeItem/HomeItem'
import HomeCss from './HomePage.module.scss'
const HomePage = () => {
  const [categories, setcategories] = useState([])
  useEffect(() => {
    ;(async () => {
      const response = await commerce.categories.list()
      console.log(response)
      setcategories(response.data)
    })()
  }, [])

  return (
    <div className={HomeCss.container}>
      {categories.length > 0 ? (
        <>
          {categories.map((cat) => (
            <HomeItem
              category={cat}
              // category={category.name}
            />
          ))}
        </>
      ) : (
        <Spinner />
      )}
      {/* <HomeItem
        // category={category.name}
        title={'Sneakers'}
        imgUrl="https://media.istockphoto.com/photos/woman-holding-sale-shopping-bags-consumerism-shopping-lifestyle-picture-id1254508881?b=1&k=20&m=1254508881&s=170667a&w=0&h=e8irxc-knpSghyK9ZI19uOOHv0QDEWscs2O4BwGRcLA="
      />
      <HomeItem
        // category={category.name}
        title={'Mens'}
        imgUrl="https://media.istockphoto.com/photos/woman-holding-sale-shopping-bags-consumerism-shopping-lifestyle-picture-id1254508881?b=1&k=20&m=1254508881&s=170667a&w=0&h=e8irxc-knpSghyK9ZI19uOOHv0QDEWscs2O4BwGRcLA="
      /> */}
    </div>
  )
}

export default HomePage
