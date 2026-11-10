# 🎓 ENEM Turbo 2º Dia • Open Source Learning Platform

<p align="center">
  <img src="https://img.shields.io/badge/Status-Ativo-emerald?style=for-the-badge" alt="Status Ativo" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="MIT License" />
  <img src="https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Tailwind-indigo?style=for-the-badge" alt="Stack" />
  <img src="https://img.shields.io/badge/Foco-2º%20Dia%20ENEM%20(Natureza%20&%20Matemática)-orange?style=for-the-badge" alt="Foco ENEM" />
</p>

> Uma plataforma web progressiva, leve e minimalista, desenvolvida sob a filosofia de **aprendizado ativo em intervalos curtos (micro-learning)**. Criada especialmente para estudantes que trabalham ou têm rotinas corridas e precisam consolidar com máxima agilidade os conteúdos mais recorrentes do **2º Dia do ENEM** (Ciências da Natureza e Matemática).

---

## 🎯 O Problema que Resolvemos

A maioria das plataformas tradicionais de preparação para o ENEM exige longas horas ininterruptas e foca em videoaulas extensas. No entanto, muitos vestibulandos:
- Conciliam trabalho, estágio ou outra faculdade com os estudos;
- Precisam de **revisão de tiro curto** entre intervalos (almoço, transporte público, pausas);
- Perdem muitos pontos na **TRI (Teoria de Resposta ao Item)** por gastarem tempo excessivo em contas manuais gigantescas de Matemática e chegarem esgotados nas questões de Natureza.

O **ENEM Turbo 2º Dia** ataca diretamente esses gargalos através de agilidade mental, técnicas de resolução rápida (< 45s) e retenção profunda de fórmulas.

---

## ✨ Principais Funcionalidades

### 1. 🔀 Banco de Questões Inteligente & Randomizado
- **75 questões autênticas e contextualizadas dos últimos 3 anos do ENEM** (45 de Matemática, 10 de Física, 10 de Química e 10 de Biologia);
- Algoritmo de **embaralhamento aleatório (Fisher-Yates)** a cada rodada, garantindo treino sem vício de ordem;
- **Etiqueta Especial Amarela (`⭐ Questão Especial • Top Campeã`)**: filtro exclusivo para praticar as **25 questões de maior recorrência histórica** da prova (10 de Matemática, 5 de Física, 5 de Química e 5 de Biologia);
- Resoluções comentadas focadas em **Bizus Relâmpago de menos de 45 segundos**, otimização de tempo e alertas de pegadinhas clássicas da banca.

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

### 4. ⚡ Sínteses Rápidas & Bizus Teóricos
- Cartões com os mnemônicos clássicos que salvam na hora da prova (*"Quem Vê, Ri"*, *"Piu/Prii/Puri"*, *"Tem biquinho divide por 3"*, *"CRAO"*, *"Que MaCeTe"* e *"Vacina Previne, Soro Salva"*).

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
   git clone https://github.com/seu-usuario/appenem.git
   cd appenem
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
│   └── BizusView.tsx       # Sínteses conceituais e mnemônicos
├── data/                   # Banco de dados estático em TypeScript
│   ├── questions/          # Módulos de questões separadas por disciplina
│   │   ├── math1.ts, math2.ts, math3.ts
│   │   ├── physics.ts
│   │   ├── chemistry.ts
│   │   └── biology.ts
│   ├── cheatSheet/         # Fórmulas e decorebas por disciplina
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
