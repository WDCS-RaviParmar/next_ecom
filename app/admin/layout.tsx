import Sidebar from "../ui/Sidebar"

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    // <div clas >
      <Sidebar/>
      {children}
    // </div>
  )
}

export default layout
