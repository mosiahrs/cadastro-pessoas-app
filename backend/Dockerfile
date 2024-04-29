FROM maven:latest AS build
COPY . .
RUN mvn clean install 

FROM openjdk:17-jdk-slim
COPY --from=build /target/cadastro-pessoas-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java","-jar","-Xmx512M","app.jar"]


