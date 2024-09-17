# Etapa 1: Construir a aplicação
FROM node:18-alpine AS builder

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante do código
COPY . .

# Compilar o código da aplicação
RUN npm run build

# Etapa 2: Executar a aplicação
FROM node:18-alpine

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar as dependências instaladas e o código construído da fase anterior
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Definir a variável de ambiente para o ambiente de produção
ENV NODE_ENV production

# Expor a porta que o NestJS usa (por padrão, 3000)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "dist/main"]
