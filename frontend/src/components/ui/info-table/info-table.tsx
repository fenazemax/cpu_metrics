import type { ICpuData } from "@/store/api/cpuApi"
import cl from './info-table.module.scss'
import { getAllData } from "@/utils/getAllData"

type PropsType = {
  data: ICpuData
}

export const InfoTable = (props: PropsType) => {
  const {data} = props

  const {dataValues} = getAllData(data)

  const DATA_TITLES = ['CPU speed', 'total RAM memory', 'used RAM memory'] 
  
  return (
    <div  className={cl.infoContainer}>

      <ul className={cl.infoList}>
        {DATA_TITLES.map((title) => 
          <li
            className={cl.infoItem}
            key={title}
          >
            {title}
          </li>
        )}
      </ul>

      <ul className={cl.infoList}>
        {dataValues.map((value, index) => 
          <li
            className={cl.infoItem} 
            key={index}
          >
            {value}
            <span>
              {typeof value === 'string'
                ? 'MB'
                : 'MHZ'
              }
            </span>
          </li>
        )}
      </ul>
    </div>
  )
}
