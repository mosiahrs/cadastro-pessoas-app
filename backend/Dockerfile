FROM eclipse-temurin:17.0.8.1_1-jdk-jammy
VOLUME /tmp
COPY . .
RUN chmod +xw ./mvnw clean install -DskipTests
ENTRYPOINT chmod a+r ["java","-jar","target/cadastro-pessoas-0.0.1-SNAPSHOT.jar"]
