# springboot-Recipe-App

[![Build Status](https://travis-ci.org/codecentric/springboot-sample-app.svg?branch=master)](https://travis-ci.org/codecentric/springboot-sample-app)
[![License](http://img.shields.io/:license-apache-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

Minimal [Spring Boot](http://projects.spring.io/spring-boot/) Recipe app.

## Requirements

For building and running the application you need:

- [JDK 19](https://www.oracle.com/java/technologies/downloads/#java19)
- [Maven 3.6.3](https://maven.apache.org)

## Running the application locally
In one terminal run:
```shell
mvn clean install package && mvn spring-boot:run
```
In the other terminal navigate to /recipe_app_ui and run:
```shell
npm run build && npm run start
```
