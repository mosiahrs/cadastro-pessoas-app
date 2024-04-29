FROM eclipse-temurin:17.0.8.1_1-jdk-jammy
VOLUME /tmp
COPY . .
RUN  chmod +x ./mvnw
COPY . .
ENTRYPOINT ["java","-jar","/cadastro-pessoas-0.0.1-SNAPSHOT.jar"]
