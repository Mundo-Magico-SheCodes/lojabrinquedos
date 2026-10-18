
const Sobre = () => {
  return (
    <main>
      <div className="bg-purple-100 px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-purple-700 md:text-5xl">
          Sobre Nós
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
          Bem-vindo ao Mundo Mágico! Somos uma loja de brinquedos
          criada para levar diversão, criatividade e alegria para
          crianças de todas as idades.
        </p>

        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-pink-400" />
      </div>

      <div className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
            Quem somos
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-purple-800 md:text-4xl">
            Muito mais que brinquedos!
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            O Mundo Mágico nasceu com a ideia de levar alegria e
            imaginação para o dia a dia das crianças. Mais do que
            oferecer brinquedos, queremos fazer parte de momentos
            que ficam na memória: uma descoberta, uma brincadeira
            em família ou uma nova aventura inventada a cada dia.
          </p>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-gray-600">
            Nosso objetivo é proporcionar uma experiência acolhedora,
            em que cada brinquedo seja um convite para explorar a
            criatividade e transformar momentos simples em
            lembranças especiais.
          </p>

          <div className="mx-auto mt-10 h-1.5 w-24 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 px-6 py-12 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-purple-100 bg-white px-6 py-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-pink-300 hover:shadow-xl">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-3xl">
            📖
          </div>

          <h2 className="text-2xl font-bold text-purple-700">
            Nossa História
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-pink-400" />

          <p className="mt-5 leading-7 text-gray-600">
            O Mundo Mágico nasceu com o propósito de tornar cada
            momento da infância ainda mais especial, oferecendo
            brinquedos que estimulam a imaginação e proporcionam
            momentos inesquecíveis.
          </p>
        </div>

        <div className="rounded-2xl border border-purple-100 bg-white px-6 py-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-pink-300 hover:shadow-xl">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-3xl">
            🎯
          </div>

          <h2 className="text-2xl font-bold text-purple-700">
            Nossa Missão
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-pink-400" />

          <p className="mt-5 leading-7 text-gray-600">
            Proporcionar diversão e contribuir para o desenvolvimento
            infantil por meio de brinquedos criativos, educativos e
            de qualidade.
          </p>
        </div>

        <div className="rounded-2xl border border-purple-100 bg-white px-6 py-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-pink-300 hover:shadow-xl md:col-span-2 xl:col-span-1">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-3xl">
            💛
          </div>

          <h2 className="text-2xl font-bold text-purple-700">
            Nossos Valores
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-pink-400" />

          <p className="mt-5 leading-7 text-gray-600">
            Valorizamos a criatividade, a segurança, a qualidade,
            a inclusão e a felicidade de cada criança.
          </p>
        </div>
      </div>

      <div className="mx-6 my-8 rounded-2xl bg-purple-700 px-6 py-12 text-center md:mx-auto md:max-w-5xl">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          A magia está em cada brincadeira!
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-purple-100">
          No Mundo Mágico, acreditamos que brincar é uma forma
          de aprender, descobrir e criar memórias especiais.
          Venha fazer parte desse universo!
        </p>

        <a
          href="/contato"
          className="mt-6 inline-block rounded-full bg-yellow-400 px-8 py-3 font-bold text-purple-900 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-purple-700"
        >
          Entre em contato
        </a>
      </div>
    </main>
  );
};

export default Sobre;
