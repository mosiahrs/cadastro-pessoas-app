<h1 align="center">
  Cadastro de Pessoas APP
</h1>
<p align="center">
	<img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" />
	<img src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" />
	<img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" />
	<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
	<img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
</p>



## Tecnologias
 
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Spring MVC](https://docs.spring.io/spring-framework/reference/web/webmvc.html)
- [Spring Data JDBC](https://spring.io/projects/spring-data-jdbc)
- [Vite](https://vitejs.dev)
- [React](https://pt-br.react.dev)
- [PostgresSQL](https://www.postgresql.org/docs/)

## Como Executar

A executação deve ser feita com o Docker Compose, caso desejado, é possível executar cada projeto manualmente e localmente seguindo as instruções de seus respectivos arquivos README.

- Clonar repositório git:
```
git clone https://github.com/mosiahrs/cadastro-pessoas-app.git
```
- Executar o script de inicialização:
```
chmod +x start.sh
./start.sh
```
- Acessar aplicação em `http://localhost:5173`, para visualização do front.
- O backend está rodando na porta `http://localhost:8080`, pode ser acessado via Postman/Insominia

```
  EXEMPLO POST 

  curl --location 'localhost:8080/v1/api/pessoas' \
--header 'Content-Type: application/json' \
--data-raw '{
	"nome": "Marlyson Holanda Biango",
	"cpf": "00622445235",
	"dataNascimento": "1990-06-02",
	"listaContatos": [
		{
			"nome": "Iola Mcmahon",
			"telefone": "+55(42)95402-4919",
			"email": "quis.lectus.nullam@protonmail.net"
		}
	]
}'
```

## Ambiente de Produção

Os projetos foram publicados no [Render](https://render.com) e o sistema pode ser acessado [nesse link](https://cadastro-pessoas-app.onrender.com/).

**PS: A maquina de prod é FREE Tier (0.1 CPU / 512 RAM), então pode ser que a comunicação com o backend demore um pouco.

## Preview
<h1 align="center">
	
![Cadastro-de-Pessoas](https://github.com/mosiahrs/cadastro-pessoas-app/assets/100864562/85223432-a849-401e-8942-3b45a122dbed)

</h1>


