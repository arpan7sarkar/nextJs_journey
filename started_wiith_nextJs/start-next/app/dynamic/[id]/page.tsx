
const DynamicRoute = async ({params}) => {
  const {id} = await params
  return (
    <div>
     
    <h1>Example of dynamic route</h1>
    <h2>The id of this page is {id}</h2>
      
    </div>
  )
}

export default DynamicRoute
