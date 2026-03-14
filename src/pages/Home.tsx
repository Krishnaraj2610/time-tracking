
import TimeForm from '@/components/TimeForm'
import TimeChart from '@/components/TimeChart'
import { useState } from 'react'
const Home = () => {

    const [data, setData] = useState <{activity:string; hours:number}[]>([])
    
    const handleAdd=(activity:string, hours:number)=>{
       
        setData((prev)=>[...prev, {activity,hours}]);

        
    }
  return (
    <div className='max-w-3xl mx-auto p-6 margin-top-15 bg-white rounded shadow-md'>
      <h1 className='text-2xl font-bold p-1.5'>Time Tracker</h1>
      <TimeForm onAdd={handleAdd}/>
      <TimeChart data={data}/>

    </div>
  )
}

export default Home
