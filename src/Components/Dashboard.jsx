function Dashboard({name, qCount}) {
  return (
    <div className="border border-slate-700 rounded-xl p-4">
        <div className="flex">
          <img className="h-40 w-40" src="Logo.jpeg" alt="" />
          <div className="flex flex-col">

            <h1 className="text-xl"><span className="text-2xl bold">Name : </span>{name}</h1>
            <h1 className="text-xl"><span className="text-2xl bold">Questions Done : </span>{qCount}</h1>
          </div>
        </div>
    </div>
  )
}

export default Dashboard