FROM node:22-alpine

RUN apk add xdg-utils && npm install -g pnpm

RUN corepack enable && \
    corepack prepare pnpm@9.15.2 --activate

WORKDIR /

EXPOSE 5173
CMD ["tail", "-f","/dev/null"]


