# 📅 BookMyRoom

![Landing page](/images/landing-page.png)
![Appointments page](/images/appointments.png)
![Rooms page](/images/rooms.png)

BookMyRoom é um sistema de agendamentos desenvolvido com **Next.js** e **Syncfusion**. O projeto permite o gerenciamento de salas de reunião e eventos de forma dinâmica, utilizando um calendário no formato de **linha do tempo**.

## 🚀 Tecnologias Utilizadas

- **Next.js** 15.2.1
- **React** 19
- **TypeScript** 5
- **TailwindCSS** 4
- **Syncfusion Schedule** (para o calendário)
- **UUID** (para geração de IDs únicos)
- **Lucide-react** (para ícones)

## 📂 Estrutura do Projeto

```sh
/src
 ├── app
 │   ├── booking  # Páginas de agendamentos
 │   │   ├── appointments
 │   │   │   ├── page.tsx
 │   │   ├── dashboard
 │   │   │   ├── page.tsx
 │   │   ├── rooms  # CRUD de salas
 │   │       ├── add
 │   │       │   ├── page.tsx
 │   │       ├── page.tsx
 │   │       ├── layout.tsx
 │   ├── landing  # Landing page
 │       ├── layout.tsx
 │       ├── page.tsx
 │       ├── globals.css
 ├── components
 │   ├── appointments
 │   │   ├── calendar/index.tsx
 │   ├── common  # Componentes reutilizáveis (navbar, footer, etc.)
 │   ├── rooms  # Componentes do CRUD de salas
 ├── contexts  # Context API
 ├── mocks  # Dados fictícios para testes
 ├── types  # Definições de tipos TypeScript
 ├── utils  # Funções utilitárias
```

## � UI/UX

A interface foi estilizada com **TailwindCSS**, proporcionando um design responsivo e moderno.

## 🛠 Como Executar o Projeto

1. Clone o repositório:

   ```sh
   git clone https://github.com/joaomacaoli/bookmyroom-web.git
   cd bookmyroom-web
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Execute o servidor de desenvolvimento:

   ```sh
   npm run dev
   ```

4. Acesse no navegador:

   ```sh
   http://localhost:3000
   ```

## ✅ Testes

Os testes podem ser executados com o comando:

```sh
npm test
```

(Se houver testes automatizados configurados)

## 🏗️ Próximos Passos

- Implementar autenticação de usuários
- Melhorar os filtros e funcionalidades do calendário
- Integração com banco de dados para salvar eventos

## 📜 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para contribuir! 🚀
