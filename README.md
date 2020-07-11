
## 🔌 Base url 

Todas chamadas devem usar a url base:
```
https://point-woman.herokuapp.com/
```
A API está usando o pacote Cors, isso permite o acesso de qualquer Interface (frontend), desde que a mesma seja direcionada para a porta adequada.

> utilize a [documentação](https://documenter.getpostman.com/view/5898966/T17M6REY?version=latest) para mais informações de como utilizar a
API corretamente

## Começando...
Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos
O que você precisa para instalar o software:

```
node v12.x
yarn 1.22.4
git
```
> Para uma melhor experiência no ambiente de testes com o servidor API REST, recomenda-se o uso do [insomnia](https://insomnia.rest/)

### Instalando o projeto 🚀
Clonando o projeto:

```
git clone https://github.com/KZTN/Hackathon_Campus_Party_Brasil.git
```

Navegando até a pasta do projeto:

```
cd Hackathon_Campus_Party_Brasil 
```

Renomeie o arquivo `.env.example` para `.env` na raíz do projeto e adicione as seguintes linhas:

```bash
REACT_APP_GOOGLE_KEY=YOUR_GOOGLE_API_HERE
REACT_APP_API_URL=https://point-woman.herokuapp.com/
```
> Para obter sua própria API da google, acesse: https://console.cloud.google.com/

Baixando as dependências do projeto:

```bash
yarn install
```

Rodando o projeto:

```bash
yarn start
```


Visite http://localhost:3000 com o seu navegador para ver o resultado. 🎉

## 📄 Documentação 
<ul>
   <li><a href="https://documenter.getpostman.com/view/5898966/T17M6REY" target="_blank">Versão unificada</a></li>
</ul>

## Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.
