import SolutionCard from "../solutions-card";
import SolutionTitle from "../solutions-title";



export default function SolutionsContent() {
  return (
    
    <section className="w-full px-10 pb-28 bg-purple">
        <SolutionTitle/>

      <div className="max-w-6xl mx-auto flex flex-col gap-30">

        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">

          <SolutionCard
            title="Impressão"
            items={[
              "Redução de custo operacional",
              "Manutenção, insumo e peças",
              "Agilidade nos processos de impressão",
              "Fluxo seguro",
              "Economia de energia",
              "Tecnologia avançada e atualizada",
            ]}
          />

          <SolutionCard
            title="Notebook"
            items={[
              "Baixo investimento inicial",
              "Assistência técnica incluída",
              "Acesso rápido",
              "Segurança de dados",
              "Mais sustentável e eficaz",
              "Acesso a equipamentos de alta performance",
            ]}
          />

        </div>

        <div className="flex justify-center">
          <button className="cursor-pointer px-8 py-3 rounded-full border border-white text-white text-lg md:text-3xl font-medium">
            Quero saber mais sobre as soluções
          </button>
        </div>

      </div>
    </section>
  );
}