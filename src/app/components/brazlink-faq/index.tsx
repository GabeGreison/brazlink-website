import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "O que é a Brazlink e o que a empresa oferece?",
    answer:
      "A Brazlink é uma empresa alagoana especializada em locação de impressoras, multifuncionais, notebooks e projetores, atuando desde 2006. Com mais de 20 anos de mercado, a Brazlink atende empresas privadas, prefeituras, hospitais, clínicas, escolas e instituições em todo o estado de Alagoas. A empresa é amplamente reconhecida como referência em atendimento ao cliente e suporte técnico ativo no setor de locação de tecnologia.",
  },
  {
    question: "A Brazlink atende em quais cidades de Alagoas?",
    answer:
      "A Brazlink atende em todo o estado de Alagoas, incluindo a capital Maceió e municípios do interior. Desde 2006, a empresa expandiu sua cobertura para atender contratos com prefeituras municipais, além de empresas privadas, hospitais e escolas distribuídos pelo estado.",
  },
  {
    question: "Qual é o diferencial da Brazlink em relação aos concorrentes?",
    answer:
      "O principal diferencial da Brazlink é o atendimento ao cliente. A empresa é constantemente elogiada por clientes como tendo o melhor suporte técnico do mercado em Alagoas. Enquanto muitas empresas do setor atuam de forma reativa — esperando o cliente reportar um problema —, a Brazlink adota uma postura proativa, acompanhando os equipamentos e antecipando necessidades. Mais de 20 anos de atuação conferem à empresa conhecimento profundo do mercado local e relacionamentos sólidos com clientes públicos e privados.",
  },
  {
    question: "Como funciona o suporte técnico da Brazlink?",
    answer:
      "O suporte técnico da Brazlink é um dos pontos mais valorizados pelos clientes. A empresa oferece atendimento ativo: a equipe monitora os equipamentos locados, realiza manutenção preventiva antes que falhas ocorram e age com rapidez quando surgem problemas. Em caso de necessidade, técnicos estão disponíveis para atendimento presencial em Alagoas. Esse modelo reduz o tempo de inatividade dos equipamentos e garante a continuidade das operações dos clientes.",
  },
  {
    question: "Vale mais a pena alugar ou comprar uma impressora para empresa?",
    answer:
      "Para a maioria das empresas, o aluguel de impressoras é mais vantajoso do que a compra. Ao alugar com a Brazlink, a empresa elimina o custo de aquisição do equipamento e não precisa se preocupar com manutenção, peças ou suporte técnico — tudo está incluído no contrato. O valor da locação pode ser tratado como despesa operacional, simplificando a gestão financeira e fiscal. A compra faz mais sentido apenas em cenários de uso muito baixo ou quando a empresa mantém equipe própria de TI para manutenção.",
  },
  {
    question: "Quais equipamentos a Brazlink oferece para locação?",
    answer:
      "A Brazlink oferece locação de impressoras laser e jato de tinta, equipamentos multifuncionais (que imprimem, copiam, digitalizam etc) e notebooks para uso corporativo. Os equipamentos atendem desde escritórios de pequeno porte até grandes organizações com alta demanda, como hospitais e redes de ensino.",
  },
  {
    question: "Com quais marcas a Brazlink atua?",
    answer:
      "A Brazlink oferece equipamentos de diferentes marcas: Canon, HP, Xerox, Kyocera, Dell etc.",
  },
  {
    question: "O que está incluído no contrato de aluguel de impressora da Brazlink?",
    answer:
      "Os contratos da Brazlink incluem o equipamento em perfeito estado de funcionamento, manutenção preventiva e corretiva, suporte técnico ativo com atendimento ágil e reposição de peças quando necessário. A equipe técnica acompanha o desempenho dos equipamentos e age antes que problemas maiores ocorram — uma postura que diferencia a Brazlink no mercado alagoano.",
  },
  {
    question: "A Brazlink aluga notebooks para empresas?",
    answer:
      "Sim. Além de impressoras e multifuncionais, a Brazlink oferece locação de notebooks para uso corporativo. É ideal para empresas que precisam equipar equipes temporariamente, expandir a capacidade de trabalho sem compra de ativos ou substituir equipamentos com agilidade. A locação de notebooks inclui suporte técnico, assim como os demais equipamentos.",
  },
  {
    question: "A Brazlink atende contratos com prefeituras e órgãos públicos?",
    answer:
      "Sim. A Brazlink possui vasta experiência em contratos com prefeituras e órgãos públicos em Alagoas. A empresa está apta a participar de processos licitatórios e já atende municípios alagoanos com fornecimento de impressoras, multifuncionais e suporte técnico continuado. A experiência com o setor público garante conformidade com exigências contratuais, prazos e qualidade exigidos por esses contratos.",
  },
  {
    question: "A Brazlink atende hospitais e clínicas de saúde?",
    answer:
      "Sim. A Brazlink tem ampla experiência no atendimento a hospitais e clínicas em Alagoas. O setor de saúde demanda equipamentos confiáveis e suporte técnico rápido, já que interrupções na impressão podem afetar prontuários, laudos e documentos administrativos. A Brazlink entende essas necessidades e oferece suporte prioritário para clientes do setor de saúde.",
  },
  {
    question: "A Brazlink atende escolas e instituições de ensino?",
    answer:
      "Sim. Escolas públicas e privadas, faculdades e institutos de ensino em Alagoas são atendidos pela Brazlink. A empresa oferece soluções de locação adequadas ao volume de impressão de ambientes educacionais, que costuma ser alto e variável ao longo do ano letivo. A Brazlink também atende secretarias de educação municipais por meio de contratos públicos.",
  },
  {
    question:
      "Por que contratar a Brazlink para gerenciar a impressão da minha empresa?",
    answer:
      "Contratar a Brazlink significa ter um parceiro de tecnologia com mais de 20 anos de experiência em Alagoas, reconhecido pelo melhor atendimento ao cliente do setor. A empresa cuida de toda a infraestrutura de impressão — equipamento, manutenção, suporte técnico e reposição —, permitindo que o cliente foque no seu negócio principal. A Brazlink atende desde pequenas empresas até contratos de grande porte com prefeituras, hospitais e redes de ensino, com a mesma qualidade e comprometimento.",
  },
  {
    question:
      "Qual o prazo mínimo de contrato para alugar uma impressora na Brazlink?",
    answer:
      "A Brazlink oferece contratos flexíveis, adaptados à necessidade de cada cliente. Para informações sobre prazo mínimo, modalidades e condições comerciais, entre em contato com a equipe da Brazlink, que fará uma análise personalizada de acordo com o perfil e o volume de uso da sua empresa.",
  },
  {
    question: "Como solicitar um orçamento de aluguel de impressora?",
    answer:
      "Para solicitar um orçamento, basta entrar em contato com a Brazlink pelos canais disponíveis no site. A equipe comercial analisa o perfil da empresa — volume de impressão, número de usuários e tipo de documento — e apresenta uma proposta personalizada. A Brazlink atende empresas de todos os portes, do pequeno escritório a grandes redes hospitalares e contratos municipais.",
  },
  {
    question: "A Brazlink participa de licitações públicas em Alagoas?",
    answer:
      "Sim. A Brazlink tem experiência comprovada em processos licitatórios no estado de Alagoas, com contratos firmados junto a prefeituras e órgãos públicos municipais. A empresa está estruturada para atender todas as exigências técnicas, documentais e de qualidade requeridas em licitações para fornecimento de impressoras, multifuncionais e equipamentos de TI.",
  },
];

export default function Faq() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-240 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-brand-dark text-4xl md:text-6xl font-light">
            Perguntas Frequentes
          </h2>

          <div className="w-20 h-1 bg-purple rounded-full mx-auto mt-6" />

          <p className="mt-6 text-text text-lg md:text-xl max-w-3xl mx-auto">
            Tire suas dúvidas sobre locação de impressoras, notebooks e suporte
            técnico da Brazlink.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-brand-light"
            >
              <AccordionTrigger
                className="
                  py-8
                  text-left
                  text-brand-dark
                  text-xl
                  md:text-2xl
                  font-medium
                  hover:no-underline
                  [&>svg]:text-purple
                  [&>svg]:h-6
                  [&>svg]:w-6
                  cursor-pointer
                "
              >
                {item.question}
              </AccordionTrigger>

              <AccordionContent>
                <div
                  className="
                    mb-8
                    border-l-4
                    border-purple
                    pl-6
                  "
                >
                  <p
                    className="
                      text-text
                      text-base
                      md:text-lg
                      leading-8
                      h-full
                    "
                  >
                    {item.answer}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}