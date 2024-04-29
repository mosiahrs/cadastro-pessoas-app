VOLUME /tmp
COPY . .
RUN mvn clean install -DskipTests

FROM eclipse-temurin:21.0.1_12-jdk
EXPOSE 8080
ENTRYPOINT ["java","-jar","-Xmx512M", "cadastro-pessoas-0.0.1-SNAPSHOT.jar"]
