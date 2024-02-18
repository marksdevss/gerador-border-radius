import { useState } from "react";

const App = () => {
  const[topLeftRadius,setTopLeftRadius ]=useState(0)
  const[topRightRadius, setTopRightRadius]=useState(0)
  const[bottomRightRadius, setBottomRightRadius]=useState(0)
  const[bottomLeftRadius, setBottomLeftRadius]=useState(0)

  const StyleRadius={
    borderTopLeftRadius:topLeftRadius,
    borderTopRightRadius:topRightRadius,
    borderBottomRightRadius:bottomRightRadius,
    borderBottomLeftRadius:bottomLeftRadius
  }

  function handleTopLeftRadius(evento){
    const valueRadius = evento.target.value
    setTopLeftRadius(Number(valueRadius))
  }

  function handleTopRightRadius(evento){
    const valueRadius = evento.target.value
    setTopRightRadius(Number(valueRadius))
  }

  function handleBottomRightRadius(evento){
    const valueRadius = evento.target.value
    setBottomRightRadius(Number(valueRadius))
  }
  
  function handleBottomLeftRadius(evento){
    const valueRadius = evento.target.value
    setBottomLeftRadius(Number(valueRadius))
  }



  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white w-full mx-auto p-10 grid md:w-[800px] md:grid-cols-2 md:items-start md:gap-16 ">
        <div>
          <header className="bg-slate-900 mb-5 p-2 rounded">
            <h1 className="text-white text-center">Opcoes de bordas</h1>
          </header>
          <form className="flex flex-col gap-3">

            <div className="flex items-center justify-between">
              <div>
                <label className="block">Raio superior esquerdo</label>
                <input onChange={handleTopLeftRadius} type="range" min={0} max={200} />
              </div>
              <h2>{topLeftRadius}px</h2>
            </div>

            <div className="h-px bg-slate-300"></div>

            <div className="flex items-center justify-between">
              <div>
                <label className="block">Raio superior direito</label>
                <input onChange={handleTopRightRadius} type="range" min={0} max={200} />
              </div>
              <h2>{topRightRadius}px</h2>
            </div>

            <div className="h-px bg-slate-300"></div>

            <div className="flex items-center justify-between">
              <div>
                <label className="block">Raio inferior direito</label>
                <input onChange={handleBottomRightRadius} type="range" min={0} max={200} />
              </div>
              <h2>{bottomRightRadius}px</h2>
            </div>

            <div className="h-px bg-slate-300"></div>

            <div className="flex items-center justify-between">
              <div>
                <label className="block">Raio inferior esquerdo</label>
                <input onChange={handleBottomLeftRadius} type="range" min={0} max={200} />
              </div>
              <h2>{bottomLeftRadius}px</h2>
            </div>

            <div className="h-px bg-slate-300"></div>

          </form>
        </div>
        <div className="flex flex-col gap-10">
          <div style={StyleRadius} className="h-[315px] w-full bg-blue-500"></div>
          <div className="p-3 bg-slate-900 rounded text-slate-100">
            border-radius: {`${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px;`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
