import cl from './chart-container.module.scss'

type PropsType = {
  children: React.ReactNode
  title: string
}

export const ChartContainer = (props: PropsType) => {
  const { children, title } = props

  return (
    <div className={cl.chartContainer}>
      <span className={cl.chartContainer__head}>{title}</span>
      {children}
    </div>
  )
}
