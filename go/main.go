package main

import (
	"bytes"
	"fmt"
	"io"
	"io/ioutil"
	"mime/multipart"
	"net/http"
	"os"
)

func main() {
	var file, contentType, _ = createFormData("./../my-skin.png")

	var client = http.DefaultClient
	var req, _ = http.NewRequest("POST", "https://api.mineskin.org/generate/upload", file)

	req.Header.Set("Content-Type", contentType)

	response, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	bodyBytes, _ := ioutil.ReadAll(response.Body)
	fmt.Println(string(bodyBytes))
}

func createFormData(filepath string) (*bytes.Buffer, string, error) {
	var buffer bytes.Buffer
	var writer = multipart.NewWriter(&buffer)
	var file, _ = os.Open(filepath)

	defer writer.Close()
	defer file.Close()

	fileWriter, err := writer.CreateFormFile("file", file.Name())
	if err != nil {
		return nil, "", err
	}

	_, err = io.Copy(fileWriter, file)
	if err != nil {
		return nil, "", err
	}

	return &buffer, writer.FormDataContentType(), nil
}
