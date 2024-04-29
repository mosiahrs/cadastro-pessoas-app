FROM eclipse-temurin:17.0.8.1_1-jdk-jammy
VOLUME /tmp
RUN chmod +x ./mvnw clean install
COPY . .
ENTRYPOINT ["java","-jar","/cadastro-pessoas-0.0.1-SNAPSHOT.jar"]
