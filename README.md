# CineDex

**Cinedex** é um SPA (Single Page Application) feito com **React** e **Vite**, que consome a API do TMDB para exibir informações sobre filmes, pessoas e permitir buscas, com deploy via **Vercel**.

---

## Recursos

- Exibição de **home** com destaques
- Busca por filmes
- Visualização de detalhes de filmes e pessoas (atores, diretores)
- Navegação via **React Router**
- Estilização com **Tailwind CSS**
- **Responsividade** exibindo um carrosel de cards para a versão mobile
- Uso de **hooks** personalizados

---

## Tecnologias

- React
- Vite
- React Router DOM
- Tailwind CSS
- Vercel
- TMDB API

---

## Instalação e uso

1. Clone o repositório:

```bash
    git clone https://github.com/JoelJR27/cinedex.git
```

2. Navegue até a pasta do projeto:

```bash
    cd cinedex
```

3. Instale as dependências:

```bash
    npm install
```

4. Crie o arquivo .env na raiz com seu token de autenticação da API-TMDB:

```ini
    VITE_AUTHORIZATION=SEU_TOKEN_AQUI
```

5. Inicie o servidor de desenvolvimento:

```bash
    npm run dev
```

6. Visite [http://localhost:5173/](http://localhost:5173/)

---

## Estrutura de pastas

```arduino

/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/       # cartões, cabeçalho, etc.
│  ├─ hooks/            # hooks personalizados
│  ├─ pages/            # Home, Search, Movie, People, Person
│  ├─ assets/
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ vite.config.js
├─ package.json
└─ README.md
```

---

## Contribuições

Contribuições **são bem-vindas**! Para colaborar:

1. Fork o repositório

2. Crie uma branch (feature/nova-funcionalidade)

3. Faça suas alterações e commit

4. Abra um Pull Request

---

## Contato

- [Github](https://github.com/JoelJR27)

- [Linkedin](https://www.linkedin.com/in/joelviana27/)
