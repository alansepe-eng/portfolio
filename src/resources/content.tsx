import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Alan",
  lastName: "Sepe",
  name: `Alan Sepe`,
  role: "Executivo de Operações Industriais & Engenharia",
  avatar: "/images/avatar.jpg",
  email: "alansepe.eng@gmail.com",
  location: "America/Sao_Paulo",
  languages: ["Português", "Inglês", "Espanhol"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Newsletter de {person.firstName}</>,
  description: <>Insights sobre operações industriais, engenharia e transformação de processos.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/alansepe-eng",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/alansepe",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — Portfólio`,
  description: `Portfólio de ${person.name}, ${person.role}`,
  headline: <>Transformando operações industriais em resultados concretos</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Destaque</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Projeto em destaque
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Sou {person.firstName}, engenheiro eletricista e executivo de operações com mais de{" "}
      <Text as="span" size="xl" weight="strong">19 anos de experiência</Text>{" "}
      em manufatura, engenharia e transformação de processos. <br />
      Atuo em projetos de energia renovável, consultoria executiva e estruturação de operações industriais.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `Sobre — ${person.name}`,
  description: `Conheça ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        Engenheiro Eletricista com MBA em Gestão Industrial e mais de 19 anos de experiência em
        manufatura, engenharia e transformação de processos. Atuação em multinacionais e empresas
        em crescimento, liderando operações, projetos de energia renovável e consultoria executiva.
        Perfil reconhecido por organizar ambientes complexos e transformar objetivos em execução
        disciplinada.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiência Profissional",
    experiences: [
      {
        company: "SEPE Engenharia",
        timeframe: "2022 - Presente",
        role: "Sócio-Diretor e Consultor Executivo",
        achievements: [
          <>
            Liderou engenharia e desenvolvimento de projetos de energia renovável na Volteon
            Energia, incluindo modelagem técnico-econômica, estudos elétricos e relacionamento
            regulatório.
          </>,
          <>
            Atuou em nível executivo na VPA Automação, com mapeamento, padronização e otimização
            de fluxos operacionais e apoio à expansão da empresa.
          </>,
        ],
        images: [],
      },
      {
        company: "Crossfire Protection / CrossPower Energia Solar",
        timeframe: "2021 - 2023",
        role: "Gerente de Projetos e Operações",
        achievements: [
          <>
            Gerenciou projetos multidisciplinares em engenharia civil, elétrica, hidrossanitária
            e energia solar para clientes como Fiat Chrysler, Gerdau, Coca-Cola e Renault Brasil.
          </>,
          <>
            Conduziu cronogramas, gestão de riscos e integração de equipes utilizando PMBOK,
            Ishikawa, 5W2H e análise de causa raiz.
          </>,
        ],
        images: [],
      },
      {
        company: "Mondelēz International",
        timeframe: "2015 - 2020",
        role: "Especialista de Processos Sênior / Vertical Start-up",
        achievements: [
          <>
            Participou decisivamente do startup brownfield da fábrica de Gums & Candies em
            Curitiba, envolvendo transferência de operações, comissionamento e parametrização
            de linhas produtivas.
          </>,
          <>
            Liderou treinamentos em Kaizen, DMAIC, IIM e Indústria 4.0, contribuindo para
            eliminação de causas raiz e ganho de eficiência operacional.
          </>,
        ],
        images: [],
      },
      {
        company: "Emplal Embalagens Plásticas",
        timeframe: "2014 - 2015",
        role: "Coordenador de Produção",
        achievements: [
          <>
            Implantou TPM, Lean Six Sigma, 5S, CEP, 8D e PDCA, estruturando KPIs e coordenando
            auditorias com DNV, IQB e SGS para ISO 9001, ISO 22000 e HACCP.
          </>,
        ],
        images: [],
      },
      {
        company: "Dixie Toga S.A. / Bemis Company",
        timeframe: "2006 - 2014",
        role: "Engenheiro de Processos / Supervisor de Produção",
        achievements: [
          <>
            Consolidou experiência em impressão flexográfica e roto gravura, evoluindo para
            liderança de operações com foco em padronização, redução de refugos e
            desenvolvimento de pessoas.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formação Acadêmica",
    institutions: [
      {
        name: "SENAI",
        description: <>MBA em Gestão Industrial — 2014</>,
      },
      {
        name: "Faculdade Pitágoras",
        description: <>Engenharia Elétrica / Telecomunicações — 2008</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Competências Técnicas",
    skills: [
      {
        title: "Operações & Excelência Operacional",
        description: (
          <>
            Lean Six Sigma, TPM, Kaizen, DMAIC, 5S, PDCA, OEE, gestão de perdas,
            melhoria contínua e governança operacional.
          </>
        ),
        tags: [
          { name: "Lean Six Sigma", icon: "check" },
          { name: "TPM", icon: "check" },
          { name: "Kaizen", icon: "check" },
        ],
        images: [],
      },
      {
        title: "Gestão de Projetos",
        description: (
          <>
            PMBOK, cronogramas físico-financeiros, gestão de riscos, stakeholders e
            integração de equipes multidisciplinares em projetos industriais de grande porte.
          </>
        ),
        tags: [
          { name: "PMBOK", icon: "check" },
          { name: "5W2H", icon: "check" },
          { name: "Ishikawa", icon: "check" },
        ],
        images: [],
      },
      {
        title: "Energia Renovável & Engenharia",
        description: (
          <>
            Projetos de geração centralizada, soluções Power-to-X, modelagem técnico-econômica,
            estudos elétricos e relacionamento com órgãos reguladores.
          </>
        ),
        tags: [
          { name: "Energia Solar", icon: "check" },
          { name: "Power-to-X", icon: "check" },
          { name: "Regulatório", icon: "check" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Artigos sobre operações e engenharia",
  description: `Insights e reflexões de ${person.name} sobre indústria, processos e liderança`,
};

const work: Work = {
  path: "/work",
  label: "Trabalhar",
  title: `Projetos — ${person.name}`,
  description: `Projetos e cases de ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Galeria — ${person.name}`,
  description: `Galeria de ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };