package main

import (
	"log"

	"github.com/gin-gonic/gin"
	cors "github.com/rs/cors/wrapper/gin"
)

func main() {
	port := "8080"
	router := gin.Default()
	router.Use(cors.AllowAll())
	router.Use(gin.Logger())
	log.Fatal(router.Run(":" + port))
}
