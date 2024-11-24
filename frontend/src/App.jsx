import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <header>
      </header>

        <main className="flex-grow">
          <div className="mx-auto">
            <Outlet />
          </div>
        </main>

        <footer className="text-center p-4 text-white border-t border-sky-700">
          <p>
            Total de filmes: 9367 | Nota média: 6.64 | Média de número de votos: 1833 | Tempo médio de duração: 1h e 45 min
          </p>
        </footer>
  </div>
  )
}

export default App
