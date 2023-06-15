

export const Button = ({title, rootStyle = '', titleStyle = ''}: {
  title: string,
  rootStyle?: string,
  titleStyle?: string,
  // onClick?:

}) => {

  return (
    <button className={`bg-blue-500 py-2 px-4 rounded-md shadow-md shadow-blue-500/50`.concat(' ', rootStyle)}>
      <span className={`text-white`.concat(' ', titleStyle)}>{title}</span>
    </button>
  )

}