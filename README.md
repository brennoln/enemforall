# 🎓 ENEM Para Todos • Estudo Rápido no Intervalo (Open Source)

<p align="center">
  <img src="https://img.shields.io/badge/Status-Ativo-emerald?style=for-the-badge" alt="Status Ativo" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="MIT License" />
  <img src="https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Tailwind-indigo?style=for-the-badge" alt="Stack" />
  <img src="https://img.shields.io/badge/Quest%C3%B5es-245%20(Inclui%20ENEM%202025)-orange?style=for-the-badge" alt="245 Questões" />
</p>

> Uma plataforma web **100% gratuita, sem cadastro, sem anúncios e de código aberto**, criada para quem trabalha, pega transporte público ou concilia outra faculdade e só tem alguns minutos no intervalo para estudar. Focada em **aprendizado ativo de tiro curto (micro-learning)** para o **2º Dia do ENEM** (Ciências da Natureza e Matemática).

---

## 🎯 O Problema que Resolvemos

A maioria das plataformas tradicionais de preparação para o ENEM exige mensalidades caras, longas horas ininterruptas e videoaulas extensas. No entanto, milhões de estudantes:
- Trabalham em tempo integral, fazem estágio ou cuidam da família e não podem pagar cursinho;
- Só conseguem abrir o celular por **5 a 10 minutos no intervalo do almoço ou no ônibus** para fazer 1 ou 2 questões;
- Precisam de explicações diretas ao ponto, sem enrolação, que ensinem **como matar a questão rápido** e como não cair nas pegadinhas da **TRI (Teoria de Resposta ao Item)**.

O **ENEM Para Todos** entrega acesso livre e imediato: abriu, resolveu 1 ou 2 questões, salvou automaticamente no aparelho e seguiu o dia.

---

## ✨ Principais Funcionalidades

### 1. 🔀 Banco com 245 Questões & Prova Oficial ENEM 2025 Completa
- **90 questões oficiais do ENEM 2025 (2º Dia • Q91 a Q180)** com todas as **imagens, gráficos, tabelas e alternativas ilustradas** em alta definição, mais **155 questões** de anos anteriores e tópicos campeões;
- **Modo Intervalo com Progresso Salvo:** o aparelho lembra automaticamente quais questões você já resolveu (`LocalStorage`), permitindo clicar em **"Pular Já Resolvidas"** para aproveitar cada minuto livre;
- **Etiqueta Especial Amarela (`⭐ Questão Especial • Top Campeã`)**: filtro exclusivo para praticar as **25 questões de maior recorrência histórica** da prova (10 de Matemática, 5 de Física, 5 de Química e 5 de Biologia);
- Resoluções comentadas focadas em **Bizus Relâmpago (< 45s)**, passo a passo limpo, economia de tempo e alertas de pegadinhas da banca.

### 2. 🔥 Sistema de Foguinho (Daily Streak)
- Mecanismo de gamificação com **meta diária de 10 questões resolvidas**;
- Contador de consistência em tempo real e barra de progresso;
- Se o estudante cumprir a meta do dia, ganha/mantém o foguinho aceso; caso passe 24 horas sem bater a meta, a sequência zera para incentivar a disciplina;
- Dados salvos localmente (`LocalStorage`) com privacidade total e sem necessidade de login.

### 3. 🧠 Guia Completo de Fórmulas & Memória Fotográfica
- Mais de **58 cartões de fórmulas e decorebas essenciais** organizados por disciplina:
  - **Matemática:** Geometria espacial e plana, trigonometria, funções, PA/PG, combinatória e probabilidades.
  - **Física:** Eletrodinâmica, ondulatória, cinemática, termologia, óptica e hidrostática.
  - **Química:** Gases ideais, soluções/pH, termoquímica, pilhas/eletrólise e funções orgânicas.
  - **Biologia:** Ciclos biogeoquímicos, imunologia, fisiologia humana, genética mendeliana e citologia.
- Botão de **Copiar Fórmula** em 1 clique e expansor de **Aprofundamento Teórico**.

### 4. 📚 Central de Estudos (`Trilha de Estudos`, `Aulas` e `Revisão`)
- **Trilha de Estudos (32 etapas guiadas):**
  - 8 etapas progressivas por disciplina (**Matemática, Biologia, Química e Física**), partindo do básico até os tópicos mais cobrados no ENEM;
  - Cada etapa traz explicação em linguagem simples, **diagramas visuais em SVG** para facilitar a compreensão, exemplo real de cobrança no ENEM e **mini-quiz imediato** para fixar na hora, com progresso salvo no aparelho (`LocalStorage`).
- **Aulas (Curadoria Gratuita no YouTube):**
  - 25 recomendações de playlists e aulas gratuitas separadas por matéria e assunto, direcionando o estudante para professores referência da internet (**Prof. Ferretto, Sandro Curió, Paulo Pereira, Samuel Cunha, Guilherme Goulart, Gabriel Cabral, Paulo Valim, Marcelo Boaro, Mestres do ENEM** e outros);
  - Seção dedicada de **Créditos e Gratidão**, reconhecendo integralmente o trabalho dos educadores que democratizam o ensino gratuito online.
- **Revisão Rápida (Mega Revisão, Raio-X & Bizus):**
  - Cartões com os mnemônicos clássicos que salvam na hora da prova (*"Quem Vê, Ri"*, *"Piu/Prii/Puri"*, *"Tem biquinho divide por 3"*, *"CRAO"*, *"Que MaCeTe"* e *"Vacina Previne, Soro Salva"*).
- **Chute & TRI:** Estratégias práticas para gerenciar tempo, identificar questões fáceis/médias e proteger sua nota na Teoria de Resposta ao Item.

### 5. 📱 Design Mobile-First & Acadêmico
- Interface sóbria, elegante e sem distrações visuais (tema claro acadêmico);
- **Barra de navegação inferior nativa** no celular para uso ágil com uma só mão;
- Tipografia serifada acadêmica de alto contraste para leitura confortável.

---

## 🛠️ Stack Tecnológica

- **Frontend:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling:** [Vite](https://vite.dev/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Efeitos e Feedback:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Persistência:** Web Storage API (`localStorage`)

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Gerenciador de pacotes `npm`, `pnpm` ou `yarn`

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/brennoln/enemforall.git
   cd enemforall
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no seu navegador:**
   - Acesse `http://localhost:5173/`

---

## ☁️ Como Fazer o Deploy Online (Gratuito)

Como a aplicação é um **Single Page Application (SPA)** estático, ela pode ser hospedada gratuitamente em qualquer provedor de CDN global:

### 1. Vercel
```bash
npm run build
npx vercel deploy --prod
```
*Ou simplesmente conecte seu repositório no dashboard da [Vercel](https://vercel.com) com build command `npm run build` e diretório de saída `dist`.*

### 2. Netlify
- Execute `npm run build` e arraste a pasta `dist` gerada para o [Netlify Drop](https://app.netlify.com/drop).

### 3. GitHub Pages
- Adicione `base: './'` no seu `vite.config.ts` e publique os arquivos da pasta `dist` na branch `gh-pages`.

---

## 📂 Estrutura de Diretórios

```plaintext
src/
├── components/             # Componentes modulares da interface
│   ├── QuizView.tsx        # Módulo interativo do simulado e streak
│   ├── MemoryCheatSheetView.tsx # Guia de fórmulas e aprofundamento
│   ├── BizusView.tsx       # Central de Estudos (Trilha, Aulas e Revisão)
│   └── TrailVisual.tsx     # Diagramas SVG didáticos para cada etapa da trilha
├── data/                   # Banco de dados estático em TypeScript
│   ├── questions/          # Módulos de questões separadas por disciplina
│   │   ├── math1.ts, math2.ts, math3.ts
│   │   ├── physics.ts
│   │   ├── chemistry.ts
│   │   └── biology.ts
│   ├── cheatSheet/         # Fórmulas e decorebas por disciplina
│   ├── studyTrails.ts      # 32 etapas guiadas (8 por matéria) com mini-quizzes
│   ├── videoLessons.ts     # Curadoria de playlists e aulas gratuitas no YouTube
│   ├── bizus.ts            # Mnemônicos e resumos
│   └── questions.ts        # Consolidação do banco de questões
├── utils/
│   └── streak.ts           # Lógica do Foguinho (rotina e reset de 24h)
├── types.ts                # Definições de tipagem do TypeScript
├── App.tsx                 # Componente raiz e navegação mobile/desktop
└── main.tsx                # Ponto de entrada do React
```

---

## 🤝 Como Contribuir

Contribuições são super bem-vindas! Se você deseja adicionar mais questões reais do ENEM, sugerir novos mnemônicos ou propor melhorias de design:

1. Faça um **Fork** deste repositório;
2. Crie uma branch para sua funcionalidade (`git checkout -b feature/nova-questao`);
3. Faça o commit das suas alterações (`git commit -m 'feat: adiciona questão de termoquímica ENEM 2023'`);
4. Envie para o repositório remoto (`git push origin feature/nova-questao`);
5. Abra um **Pull Request**.

---

## 📄 Licença

Este projeto é distribuído sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

---

<p align="center">
  Desenvolvido com carinho para impulsionar vestibulandos de todo o Brasil rumo à aprovação! 📚🇧🇷
</p>
