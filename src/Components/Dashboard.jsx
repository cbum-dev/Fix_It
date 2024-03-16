// import React from 'react'

function Dashboard({name,qCount,}) {
  return (
    <div className="border border-slate-700 rounded-xl p-4">
        <div>
            <h1 className="text-xl"><span className="text-2xl bold">Name : </span>{name}</h1>
            <h1 className="text-xl"><span className="text-2xl bold">Questions Done : </span>{qCount}</h1>
        </div>
    </div>
  )
}

export default Dashboard