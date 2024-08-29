export function CardsTrabalhos  () {
  return (
    <>
    
      <section className="grid grid-cols-1 gap-6 px-6 py-4 mx-6 my-4 card-normal sm:grid-cols-2 lg:grid-cols-3">
        
        <div className="card glass w-full max-w-xs">
          <figure className="px-10 pt-10">
            <img
              src="src\img\SCP-Patrimonio.png"
              alt="Sistema de Controle Patrimonial"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">SCP - Sistema de Controle Patrimonial</h2>
            <p>Sistema de gestão patrimonial</p>
            <div className="card-actions">
              <button className="btn btn-primary">Saiba mais</button>
            </div>
          </div>
        </div>

        <div className="card glass w-full max-w-xs">
          <figure className="px-10 pt-10">
            <img
              src="src\img\tailandia.png"
              alt="Site Tailandia"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Site Tailandia</h2>
            <p>Exibindo as maravilhas da Tailandia</p>
            <div className="card-actions">
              <button className="btn btn-primary">Saiba mais</button>
            </div>
          </div>
        </div>

        <div className="card glass w-full max-w-xs">
          <figure className="px-10 pt-10">
            <img
              src="src\img\perfis.png"
              alt="Shoes"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Busca perfis</h2>
            <p>Uma busca nos perfis do GitHub</p>
            <div className="card-actions">
              <button className="btn btn-primary">Saiba mais</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
