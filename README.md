<h1 align="center">
  Cadastro de Pessoas APP
</h1>

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

## Ambiente

Os projetos foram publicados no [Render](https://render.com) e o sistema pode ser acessado [nesse link](https://cadastro-pessoas-app.onrender.com/).

**PS.. O backend ainda não subiu, a plataforma está com problemas de permissão pra acessar o .jar gerado pelo docker.

## Preview
<h1 align="center">
	
![Cadastro-de-Pessoas](https://github.com/mosiahrs/cadastro-pessoas-app/assets/100864562/85223432-a849-401e-8942-3b45a122dbed)

</h1>

<h1 align="center">
	
![Cadastro-de-Pessoas](https://github.com/mosiahrs/cadastro-pessoas-app/assets/100864562/9858466e-23ac-4553-932e-89f8eea14d90)

</h1>

<h1 align="center">
	
![Cadastro-de-Pessoas1](https://github.com/mosiahrs/cadastro-pessoas-app/assets/100864562/69198b03-1e79-4589-9921-eb1868dbf009)

</h1>



